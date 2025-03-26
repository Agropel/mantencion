import EditPartesForm from "@/components/partes/EditPartesForm"
import PartesForm from "@/components/partes/PartesForm"
import GoBackButton from "@/components/ui/GoBackButton"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import { notFound} from "next/navigation"

async function getPartestById(id: number) {
    const partes = await prisma.partes.findUnique({
        where: {
            id
        }
    })
    if(!partes) {
        notFound()
    }

    return partes
}

export default async function EditPartesPage({ params }: { params: { id: string } }) {

    const partes = await getPartestById(+params.id)

    return (
        <>
            <Heading>Editar Tarea {partes.name}</Heading>

            <GoBackButton />

            <EditPartesForm>
                <PartesForm 
                    partes={partes}
                />
            </EditPartesForm>
        </>
    )
}
