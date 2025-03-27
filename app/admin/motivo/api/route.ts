import { prisma } from "@/src/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const tipo = searchParams.get("tipo");

    console.log("Tipo recibido en la API:", tipo);  // Log para verificar el parámetro 'tipo'

    const orders = await prisma.order.findMany({
        where: {
            status: false,
            ...(tipo ? { tipo } : {}), // Filtro solo si 'tipo' está presente
        },
        include: {
            orderPartes: {
                include: {
                    partes: {
                        include: {
                            maquina: true,
                        },
                    },
                },
            },
        },
    });

    console.log("Órdenes encontradas:", orders);  // Log para verificar los datos que devuelve la API

    return Response.json(orders);
}
