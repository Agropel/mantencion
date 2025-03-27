import PartesCardEmergencia from "@/components/partes/PartesCardEmergencia";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

// Función asíncrona para obtener las partes por ID de máquina
async function getPartes(maquinaId: number) {
  const partess = await prisma.partes.findMany({
    where: {
      maquinaId: maquinaId,
      name: "Emergencia",
    },
    include: {
      maquina: true,
    },
  });

  return partess;
}

type Params = Promise<{ maquina: string }>;

export default async function OrderPage({ params }: { params: Params }) {
  const { maquina } = await params; // Esperar la resolución de la promesa 'params'
  const maquinaId = Number(maquina); // Convertir el ID a número

  if (isNaN(maquinaId)) {
    throw new Error("ID de máquina inválido");
  }

  // Obtener los datos de las partes relacionadas
  const partess = await getPartes(maquinaId);

  return (
    <>
      <Heading>OT Emergencia</Heading>

      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4 items-start">
        {partess.map((partes) => (
          <PartesCardEmergencia key={partes.id} partes={partes} />
        ))}
      </div>
    </>
  );
}
