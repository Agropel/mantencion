import { prisma } from "@/src/lib/prisma"

export const dynamic = 'force-dynamic'

export async function GET() {
    const orders = await prisma.order.findMany({
        where: {
            status: false
        },
        include: {
          orderPartes: {
            include: {
              partes: {
                include: {
                  maquina: true,  // Incluye la relación con 'maquina'
                },
              },
        }}}
    })
    return Response.json(orders)
}