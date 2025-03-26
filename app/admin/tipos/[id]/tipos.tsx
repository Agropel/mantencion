import EditTiposForm from "@/components/tipos/EditTiposForm"
import TiposForm from "@/components/tipos/TiposForm"
import GoBackButton from "@/components/ui/GoBackButton"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import { notFound} from "next/navigation"

async function getTipostById(id: number) {
    const tipos = await prisma.tipo.findUnique({
        where: {
            id
        }
    })
    if(!tipos) {
        notFound()
    }

    return tipos
}

export default async function EditTiposPage({ params }: { params: { id: string } }) {

    const tipos = await getTipostById(+params.id)

    return (
        <>
            <Heading>Editar Tipo De Trabajo: {tipos.name}</Heading>

            <GoBackButton />

            <EditTiposForm>
                <TiposForm 
                    tipos={tipos}
                />
            </EditTiposForm>
        </>
    )
}