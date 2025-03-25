import EditOrderFormEmergencianueva from "@/components/mantencion/EditOrderFormEmergencianueva"
import OrderFormOrder from "@/components/mantencion/OrderFormOrder"
import GoBackButton from "@/components/ui/GoBackButton"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import Link from "next/link"
import { notFound, redirect } from "next/navigation"

async function getOrdertById(id: number) {
    const order = await prisma.order.findUnique({
        where: {
            id
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
            

            
            <GoBackButton />
            <EditOrderFormEmergencianueva>
                {/* <Heading>OT Nº {order.id}</Heading> */}
                
                <OrderFormOrder
                    order={order}
                />
            </EditOrderFormEmergencianueva>
        </>
    )
}
