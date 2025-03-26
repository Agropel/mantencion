import { FC } from "react";
import EditMaquinasForm from "@/components/maquinas/EditMaquinasForm";
import MaquinasForm from "@/components/maquinas/MaquinasForm";
import GoBackButton from "@/components/ui/GoBackButton";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import { notFound } from "next/navigation";

// Función para obtener la máquina por ID de forma asíncrona
async function getMaquinaById(id: number) {
    if (isNaN(id)) {
        notFound(); // Manejo de error si el ID no es válido
    }

    const maquina = await prisma.maquina.findUnique({
        where: { id },
    });

    if (!maquina) {
        notFound();
    }

    return maquina;
}

// Define el tipo de props para la página
interface EditMaquinasPageProps {
    params: {
        id: string; // El id es un string y lo convertimos a número
    };
}

// Página para editar la máquina
const EditMaquinasPage: FC<EditMaquinasPageProps> = async ({ params }) => {
    const idNumber = Number(params.id); // Convertir el id a número
    const maquina = await getMaquinaById(idNumber);

    return (
        <>
            <Heading>Editar Equipo: {maquina.name}</Heading>
            <GoBackButton />
            <EditMaquinasForm>
                <MaquinasForm
                    maquinas={{
                        ...maquina, // Incluye todos los datos de la máquina
                        marca: maquina.marca || "", // Si marca es null, asigna un valor vacío
                        modelo: maquina.modelo || "", // Lo mismo para el modelo
                    }}
                />
            </EditMaquinasForm>
        </>
    );
};

export default EditMaquinasPage;



