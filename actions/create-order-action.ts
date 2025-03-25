"use server"

import { prisma } from "@/src/lib/prisma"
import { OrderSchema } from "@/src/schema"

export async function createOrder(data: unknown) {
    const result = OrderSchema.safeParse(data)

    if(!result.success) {
        return {
            errors: result.error.issues
        }
    }

    try {
        await prisma.order.create({
            data: {
                name: result.data.name,
                planificacion: result.data.planificacion,
                tipo: result.data.tipo,
                image: result.data.image,
                trabajo: result.data.trabajo,
                hrequeridas: result.data.hrequeridas,
                taller: result.data.taller,
                repuestos: result.data.repuestos,
                personal: result.data.personal,
                inicio: result.data.inicio,
                fin: result.data.fin,
                orderPartes: {
                    create: result.data.order?.map(partes => ({
                        partesId: partes.id,
                        quantity: partes.quantity
                    }))
                }
            }
        })
    } catch (error) {
        console.log(error)
    }
}