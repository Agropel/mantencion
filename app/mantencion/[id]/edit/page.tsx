import EditOrderForm from "@/components/mantencion/EditOrderForm"
import OrderForm from "@/components/mantencion/OrderForm"
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
            <EditOrderForm>
                {/* <Heading>OT Nº {order.id}</Heading> */}
                
                <OrderForm 
                    order={order}
                />
            </EditOrderForm>
        </>
    )
}
