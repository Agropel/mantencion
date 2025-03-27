import { redirect } from 'next/navigation'
import PartesPagination from "@/components/partes/PartesPagination";
import PartesTable from "@/components/partes/PartesTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from 'next/link';
import PartesSearchForm from '@/components/partes/PartesSearchForm';

async function partesCount() {
  return await prisma.partes.count()
}

async function getPartes(page: number, pageSize: number) {
  const skip = (page - 1) * pageSize
  const partes = await prisma.partes.findMany({
    take: pageSize,
    skip,
    include: {
      maquina: true
    }
  })
  return partes
}

export type PartesWithMaquina = Awaited<ReturnType<typeof getPartes>>

export default async function PartesPage({searchParams} : { searchParams: {page: string}}) {

  const page = isNaN(+searchParams.page) ? 1 : +searchParams.page;
  const pageSize = 10
  if(page < 0) redirect('/admin/partes')
  const partesData = getPartes(page, pageSize)
  const totalPartesData = partesCount()
  const [ partes, totalPartes] = await Promise.all([partesData, totalPartesData])
  const totalPages = Math.ceil(totalPartes / pageSize)
  if(page > totalPages) redirect('/admin/partes')
  


  return (
      <>
          <Heading>Administrar Productos</Heading>

          <div className='flex flex-col lg:flex-row lg:justify-between gap-5'>
              <Link
                  href={'/admin/partes/new'}
                  className='bg-green-600 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer'
              >Crea Un Nuevo Trabajo</Link>

              <PartesSearchForm />
          </div>

          <PartesTable
            partes={partes}
          />

          <PartesPagination 
            page={page}
            totalPages={totalPages}
          />
      </>
  )
}
