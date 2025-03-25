import { redirect } from 'next/navigation'
import TiposPagination from '@/components/tipos/TiposPagination';
import TiposTable from '@/components/tipos/TiposTable';
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from 'next/link';
// import MaquinasSearchForm from '@/components/maquinas/MaquinasSearchForm';


async function tiposCount() {
  return await prisma.tipo.count()
}

async function getTipos(page: number, pageSize: number) {
  const skip = (page - 1) * pageSize
  const tipos = await prisma.tipo.findMany({
    take: pageSize,
    skip,
  })
  return tipos
}

export type TiposWithTipos = Awaited<ReturnType<typeof getTipos>>

export default async function TiposPage({searchParams} : { searchParams: {page: string}}) {

  const page = isNaN(+searchParams.page) ? 1 : +searchParams.page;
  const pageSize = 10
  if(page < 0) redirect('/admin/tipos')
  const TiposData = getTipos(page, pageSize)
  const totalTiposData = tiposCount()
  const [ tipos, totalTipos] = await Promise.all([TiposData, totalTiposData])
  const totalPages = Math.ceil(totalTipos / pageSize)
  if(page > totalPages) redirect('/admin/tipos')
  


  return (
      <>
          <Heading>Administrar Tipos De Trabajos</Heading>

          <div className='flex flex-col lg:flex-row lg:justify-between gap-5'>
              <Link
                  href={'/admin/tipos/new'}
                  className='bg-green-600 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer'
              >Crea Un Nuevo Tipo De Trabajo</Link>

              {/* <MaquinasSearchForm /> */}
          </div>

          <TiposTable
            tipos={tipos}
          />

          <TiposPagination 
            page={page}
            totalPages={totalPages}
          />
      </>
  )
}
