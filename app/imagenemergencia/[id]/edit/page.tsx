import EditOrderFormEmergencia from "@/components/mantencion/EditOrderFormEmergencia"
import OrderFormEmergencia from "@/components/mantencion/OrderFormEmergencia"
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
            <EditOrderFormEmergencia>
                {/* <Heading>OT Nº {order.id}</Heading> */}
                
                <OrderFormEmergencia 
                    order={order}
                />
            </EditOrderFormEmergencia>
        </>
    )
}
