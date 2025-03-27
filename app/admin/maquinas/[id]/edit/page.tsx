import { NextPage } from "next";
import EditMaquinasForm from "@/components/maquinas/EditMaquinasForm";
import MaquinasForm from "@/components/maquinas/MaquinasForm";
import GoBackButton from "@/components/ui/GoBackButton";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import { notFound } from "next/navigation";

async function getMaquinaById(id: number) {
  if (isNaN(id)) {
    notFound();
  }

  const maquina = await prisma.maquina.findUnique({
    where: { id },
  });

  if (!maquina) {
    notFound();
  }

  return maquina;
}

type Params = Promise<{ id: string }>;

const EditMaquinasPage: NextPage<{ params: Params }> = async ({ params }) => {
  const { id } = await params; // Resolvemos la promesa de 'params'
  const idNumber = Number(id); // Convertimos el 'id' a número

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
