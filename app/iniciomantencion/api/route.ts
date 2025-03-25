import { prisma } from "@/src/lib/prisma";

export async function GET() {
    const ordenesPorTipo = await prisma.order.groupBy({
        by: ["tipo"],
        _count: {
            tipo: true,
        },
        where: {
            status: false, // Filtrar solo órdenes con status: false
        },
    });

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

    return Response.json({ conteoPorTipo });
}
