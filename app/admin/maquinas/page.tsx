import { redirect } from 'next/navigation'
import MaquinasPagination from '@/components/maquinas/MaquinasPagination';
import MaquinasTable from '@/components/maquinas/MaquinasTable';
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from 'next/link';
// import MaquinasSearchForm from '@/components/maquinas/MaquinasSearchForm';


async function maquinasCount() {
  return await prisma.maquina.count()
}

async function getMaquinas(page: number, pageSize: number) {
  const skip = (page - 1) * pageSize
  const maquina = await prisma.maquina.findMany({
    take: pageSize,
    skip,
  })
  return maquina
}

export type MaquinasWithMaquina = Awaited<ReturnType<typeof getMaquinas>>

export default async function MaquinasPage({searchParams} : { searchParams: {page: string}}) {

  const page = isNaN(+searchParams.page) ? 1 : +searchParams.page;
  const pageSize = 10
  if(page < 0) redirect('/admin/maquinas')
  const maquinasData = getMaquinas(page, pageSize)
  const totalMaquinasData = maquinasCount()
  const [ maquinas, totalMaquinas] = await Promise.all([maquinasData, totalMaquinasData])
  const totalPages = Math.ceil(totalMaquinas / pageSize)
  if(page > totalPages) redirect('/admin/maquinas')
  


  return (
      <>
          <Heading>Administrar Equipos</Heading>

          <div className='flex flex-col lg:flex-row lg:justify-between gap-5'>
              <Link
                  href={'/admin/maquinas/new'}
                  className='bg-green-600 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer'
              >Crea Un Nuevo Equipo</Link>

              {/* <MaquinasSearchForm /> */}
          </div>

          <MaquinasTable
            maquinas={maquinas}
          />

          <MaquinasPagination 
            page={page}
            totalPages={totalPages}
          />
      </>
  )
}
