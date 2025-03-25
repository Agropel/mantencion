"use server"

import { prisma } from "@/src/lib/prisma"
import { TiposSchema } from "@/src/schema"

export async function createTipo(data: unknown) {
    const result = TiposSchema.safeParse(data)
    
    if(!result.success) {
        return {
            errors: result.error.issues
        }
    }

    await prisma.tipo.create({
        data: result.data
    })
}