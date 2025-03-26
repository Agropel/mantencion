import { prisma } from "@/src/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const tipo = searchParams.get("tipo");

    const orders = await prisma.order.findMany({
        where: {
            status: true,
            ...(tipo ? { tipo } : {}),
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

    return Response.json(orders);
}
