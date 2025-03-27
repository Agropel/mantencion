import EditTiposForm from "@/components/tipos/EditTiposForm";
import TiposForm from "@/components/tipos/TiposForm";
import GoBackButton from "@/components/ui/GoBackButton";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import { notFound } from "next/navigation";

// Función asíncrona para obtener el tipo de trabajo por ID
async function getTipostById(id: number) {
  const tipos = await prisma.tipo.findUnique({
    where: { id },
  });

  if (!tipos) {
    notFound(); // Redirige al 404 si no se encuentra el tipo
  }

  return tipos;
}

type Params = Promise<{ id: string }>;

export default async function EditTiposPage({ params }: { params: Params }) {
  const { id } = await params; // Esperar la resolución de la promesa 'params'
  const idNumber = Number(id); // Convertir el 'id' a número

  // Obtener los datos del tipo de trabajo
  const tipos = await getTipostById(idNumber);

  return (
    <>
      <Heading>Editar Tipo De Trabajo: {tipos.name}</Heading>

      <GoBackButton />

      <EditTiposForm>
        <TiposForm tipos={tipos} />
      </EditTiposForm>
    </>
  );
}
