"use server"

import { prisma } from "@/src/lib/prisma"
import { MaquinasSchema } from "@/src/schema"

export async function createMaquina(data: unknown) {
    const result = MaquinasSchema.safeParse(data)
    
    if(!result.success) {
        return {
            errors: result.error.issues
        }
    }

    await prisma.maquina.create({
        data: result.data
    })
}