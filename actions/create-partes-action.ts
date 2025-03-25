"use server"

import { prisma } from "@/src/lib/prisma"
import { PartesSchema } from "@/src/schema"

export async function createPartes(data: unknown) {
    const result = PartesSchema.safeParse(data)
    
    if(!result.success) {
        return {
            errors: result.error.issues
        }
    }

    await prisma.partes.create({
        data: result.data
    })
}