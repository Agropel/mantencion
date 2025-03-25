"use server"

import { prisma } from "@/src/lib/prisma"
import { PartesSchema } from "@/src/schema"
import { revalidatePath } from "next/cache"

export async function updatePartes(data: unknown, id: number) {
    const result = PartesSchema.safeParse(data)
    
    if(!result.success) {
        return {
            errors: result.error.issues
        }
    }

    await prisma.partes.update({
        where: {
            id
        },
        data: result.data
    })
    revalidatePath('/admin/partes')
}