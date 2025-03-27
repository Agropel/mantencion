import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from 'next/link';
import PartesSearchForm from '@/components/partes/PartesSearchForm';
import PartesTable from "@/components/partes/PartesTable";

// Función para contar el total de partes
async function partesCount() {
  return await prisma.partes.count();
}

// Función para obtener todas las partes
async function getPartes() {
  const partes = await prisma.partes.findMany({
    include: {
      maquina: true,
    },
  });
  return partes;
}

export type PartesWithMaquina = Awaited<ReturnType<typeof getPartes>>;

export default async function PartesPage() {
  // Obtener todas las partes sin paginación
  const partes = await getPartes();
  const totalPartes = await partesCount(); // Obtener el total de partes

  return (
    <>
      <Heading>Administrar Productos</Heading>

      <div className='flex flex-col lg:flex-row lg:justify-between gap-5'>
        <Link
          href={'/admin/partes/new'}
          className='bg-green-600 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer'
        >
          Crea Un Nuevo Trabajo
        </Link>

        <PartesSearchForm />
      </div>

      {/* Mostrar la tabla de partes */}
      <PartesTable partes={partes} />

      {/* Aquí puedes utilizar `totalPartes` si lo necesitas */}
      {/* Ejemplo de uso: */}
      <div className="mt-4">
        <p>Total de partes: {totalPartes}</p>
      </div>
    </>
  );
}
