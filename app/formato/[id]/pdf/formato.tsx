import OrderPdf from "@/components/order/OrderPdf"
import { prisma } from "@/src/lib/prisma"
import { notFound} from "next/navigation"

async function getOrdertById(id: number) {
    const order = await prisma.order.findUnique({
        where: {
            id
        },
        include: {
            orderPartes: {
                include: {
                    partes: {
                        include: {
                            maquina: true
                        }
                    }
                }
            }
        }
    })
    if(!order) {
        notFound()
    }

    return order
}



export default async function EditOrderPage({ params }: { params: { id: string } }) {

    const order = await getOrdertById(+params.id)

    return (
        <>
                <OrderPdf
                order={order}
            />
            
        </>
    )
}
