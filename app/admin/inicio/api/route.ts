import { prisma } from "@/src/lib/prisma";

export async function GET() {
    const [ordenesPendientes, ordenesListas, maquinas, tareas, ordenesPorTipo] = await Promise.all([
        prisma.order.count({ where: { status: false } }),
        prisma.order.count({ where: { status: true } }),
        prisma.maquina.count(),
        prisma.partes.count(),
        prisma.order.groupBy({
            by: ["tipo"],
            _count: {
                tipo: true,
            },
        }),
    ]);

    const conteoPorTipo: Record<"Preventivo" | "Emergencia" | "Correctivo", number> = {
        Preventivo: 0,
        Emergencia: 0,
        Correctivo: 0,
    };

    // Asignamos los valores obtenidos de la base de datos
    ordenesPorTipo.forEach((item) => {
        const tipo = item.tipo as "Preventivo" | "Emergencia" | "Correctivo"; // Forzar tipo
        conteoPorTipo[tipo] = item._count.tipo;
    });

    return Response.json({ ordenesPendientes, ordenesListas, maquinas, tareas, conteoPorTipo });
}
