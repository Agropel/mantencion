import OrderPdf from "@/components/order/OrderPdf"
import GoBackButton from "@/components/ui/GoBackButton"
import PrintPdf from "@/components/ui/PrintButton"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import Link from "next/link"
import { notFound, redirect } from "next/navigation"

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
            {/* <Heading>Editar Tarea {order.name}</Heading> */}

            {/* <GoBackButton /> */}
                <OrderPdf
                order={order}
            />
            
        </>
    )
}
