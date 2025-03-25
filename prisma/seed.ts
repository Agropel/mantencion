import { maquina } from "./data/maquina";
import { partes } from "./data/partes";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    try {
        await prisma.maquina.createMany({
            data: maquina
        })
        await prisma.partes.createMany({
            data: partes
        })
    } catch (error) {
        console.log(error)
    }
}

main()
    .then( async () => {
        await prisma.$disconnect()
    })
    .catch( async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })