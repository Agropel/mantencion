import PartesSearchForm from "@/components/partes/PartesSearchForm";
import PartesTable from "@/components/partes/PartesTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function searchPartes(searchTerm: string) {
    const partes = await prisma.partes.findMany({
        where: {
            name: {
                contains: searchTerm,
                // mode: 'insensitive'
            }
        },
        include: {
            maquina: true
        }
    })
    return partes
}

export default async function SearchPage({ searchParams }: { searchParams: { search: string } }) {

    const partes = await searchPartes(searchParams.search)

    return (
        <>
            <Heading>Resultados de búsqueda: {searchParams.search}</Heading>

            <div className='flex flex-col lg:flex-row lg:justify-end gap-5'>
                <PartesSearchForm />
            </div>

            {partes.length ? (
                <PartesTable
                    partes={partes}
                />
            ) : <p className="text-center text-lg">No hay resultados</p>}

        </>
    )
}



