import EditMaquinasForm from "@/components/maquinas/EditMaquinasForm"
import MaquinasForm from "@/components/maquinas/MaquinasForm"
import GoBackButton from "@/components/ui/GoBackButton"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import Link from "next/link"
import { notFound, redirect } from "next/navigation"

async function getMaquinastById(id: number) {
    const maquinas = await prisma.maquina.findUnique({
        where: {
            id
        }
    })
    if(!maquinas) {
        notFound()
    }

    return maquinas
}

export default async function EditMaquinasPage({ params }: { params: { id: string } }) {

    const maquinas = await getMaquinastById(+params.id)

    return (
        <>
            <Heading>Editar Equipo: {maquinas.name}</Heading>

            <GoBackButton />

            <EditMaquinasForm>
                <MaquinasForm 
                    maquinas={maquinas}
                />
            </EditMaquinasForm>
        </>
    )
}