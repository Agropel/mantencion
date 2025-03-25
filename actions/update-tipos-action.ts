"use server"

import { prisma } from "@/src/lib/prisma"
import { TiposSchema } from "@/src/schema"
import { revalidatePath } from "next/cache"

export async function updateTipos(data: unknown, id: number) {
    const result = TiposSchema.safeParse(data)
    
    if(!result.success) {
        return {
            errors: result.error.issues
        }
    }

    await prisma.tipo.update({
        where: {
            id
        },
        data: result.data
    })
    revalidatePath('/admin/tipos')
}