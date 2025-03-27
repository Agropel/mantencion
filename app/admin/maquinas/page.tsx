import MaquinasTable from '@/components/maquinas/MaquinasTable';
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from 'next/link';

async function getMaquinas() {
  // Ya no necesitamos paginación, obtenemos todas las máquinas
  const maquinas = await prisma.maquina.findMany();
  return maquinas;
}

export type MaquinasWithMaquina = Awaited<ReturnType<typeof getMaquinas>>;

export default async function MaquinasPage() {
  // No necesitamos la lógica de paginación
  const maquinas = await getMaquinas();

  return (
    <>
      <Heading>Administrar Equipos</Heading>

      <div className='flex flex-col lg:flex-row lg:justify-between gap-5'>
        <Link
          href={'/admin/maquinas/new'}
          className='bg-green-600 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer'
        >
          Crea Un Nuevo Equipo
        </Link>
      </div>

      <MaquinasTable maquinas={maquinas} />
    </>
  );
}

