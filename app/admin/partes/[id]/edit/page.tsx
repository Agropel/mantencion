import EditPartesForm from "@/components/partes/EditPartesForm";
import PartesForm from "@/components/partes/PartesForm";
import GoBackButton from "@/components/ui/GoBackButton";
import { prisma } from "@/src/lib/prisma";
import { notFound } from "next/navigation";

// Función asíncrona para obtener las partes por su ID
async function getPartesById(id: number) {
  const partes = await prisma.partes.findUnique({
    where: {
      id,
    },
  });
  if (!partes) {
    notFound(); // Si no se encuentra la parte, redirige al 404
  }

  return partes;
}

type Params = Promise<{ id: string }>;

// Componente para la edición de la parte
export default async function EditPartesPage({ params }: { params: Params }) {
  const { id } = await params; // Esperar la resolución de la promesa 'params'
  const idNumber = Number(id); // Convertir el 'id' a número

  // Obtener la parte usando el ID convertido
  const partes = await getPartesById(idNumber);

  return (
    <>
      <GoBackButton />
      <EditPartesForm>
        <PartesForm partes={partes} />
      </EditPartesForm>
    </>
  );
}
