import PartesSearchForm from "@/components/partes/PartesSearchForm";
import PartesTable from "@/components/partes/PartesTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

// Función asíncrona para buscar partes por nombre
async function searchPartes(searchTerm: string) {
  const partes = await prisma.partes.findMany({
    where: {
      name: {
        contains: searchTerm,
      },
    },
    include: {
      maquina: true,
    },
  });

  return partes;
}

type Params = Promise<{ search: string }>;

export default async function SearchPage({ searchParams }: { searchParams: Params }) {
  const { search } = await searchParams; // Esperar la resolución de la promesa 'searchParams'
  const partes = await searchPartes(search || ""); // Asegurar que no sea undefined

  return (
    <>
      <Heading>Resultados de búsqueda: {search}</Heading>

      <div className="flex flex-col lg:flex-row lg:justify-end gap-5">
        <PartesSearchForm />
      </div>

      {partes.length ? (
        <PartesTable partes={partes} />
      ) : (
        <p className="text-center text-lg">No hay resultados</p>
      )}
    </>
  );
}
