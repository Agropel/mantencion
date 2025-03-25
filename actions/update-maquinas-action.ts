"use server"

import { prisma } from "@/src/lib/prisma"
import { MaquinasSchema } from "@/src/schema"
import { revalidatePath } from "next/cache"

export async function updateMaquinas(data: unknown, id: number) {
    const result = MaquinasSchema.safeParse(data)
    
    if(!result.success) {
        return {
            errors: result.error.issues
        }
    }

    await prisma.maquina.update({
        where: {
            id
        },
        data: result.data
    })
    revalidatePath('/admin/maquinas')
}