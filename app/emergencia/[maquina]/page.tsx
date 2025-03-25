import PartesCardEmergencia from "@/components/partes/PartesCardEmergencia";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function getPartes(maquinaId: number) {
  const partess = await prisma.partes.findMany({
    where: {
      maquinaId: maquinaId, // Filtrar por el ID numérico de la máquina
      name: "Emergencia",
    },
    include: {
      maquina: true, // Asegurar que Prisma traiga la relación con Maquina
    },
  });
  
  return partess;
}

export default async function OrderPage({ params }: { params: { maquina: string } }) {
  const maquinaId = Number(params.maquina); // Convertir string a número

  if (isNaN(maquinaId)) {
    throw new Error("ID de máquina inválido");
  }

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