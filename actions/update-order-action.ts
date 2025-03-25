"use server"

import { prisma } from "@/src/lib/prisma"
import { OrderSchema } from "@/src/schema"
import { revalidatePath } from "next/cache"

export async function updateOrder(data: unknown, id: number) {
    const result = OrderSchema.safeParse(data)
    
    if(!result.success) {
        return {
            errors: result.error.issues
        }
    }

    await prisma.order.update({
        where: {
            id
        },
        data: result.data
    })
    revalidatePath('/admin/orders')
}