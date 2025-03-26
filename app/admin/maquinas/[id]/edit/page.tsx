import { NextPage } from "next";
import EditMaquinasForm from "@/components/maquinas/EditMaquinasForm"
import MaquinasForm from "@/components/maquinas/MaquinasForm"
import GoBackButton from "@/components/ui/GoBackButton"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import { notFound } from "next/navigation"

async function getMaquinaById(id: number) {
    if (isNaN(id)) {
        notFound(); // Manejo de error si el ID no es válido
    }

    const maquina = await prisma.maquina.findUnique({
        where: { id }
    });

    if (!maquina) {
        notFound();
    }

    return maquina;
}

// Definimos el tipo de página con NextPage
const EditMaquinasPage: NextPage<{ params: { id: string } }> = async ({ params }) => {
    const idNumber = Number(params.id);

    const maquina = await getMaquinaById(idNumber);

    return (
        <>
            <Heading>Editar Equipo: {maquina.name}</Heading>

            <GoBackButton />

            <EditMaquinasForm>
                <MaquinasForm maquinas={maquina} />
            </EditMaquinasForm>
        </>
    );
};

export default EditMaquinasPage;
