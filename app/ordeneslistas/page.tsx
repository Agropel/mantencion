"use client"
import useSWR from 'swr'
import OrdenListas from '@/components/mantencion/OrdenListas';
import { OrderWithPartes } from '@/src/types';
import GoBackButton from '@/components/ui/GoBackButton';

export default function OrdersPage() {
  const url = 'ordeneslistas/api'
  const fetcher = () => fetch(url).then(res => res.json()).then(data => data)
  const { data, isLoading } = useSWR<OrderWithPartes[]>(url, fetcher, {
    refreshInterval: 1000,
    revalidateOnFocus: false,

  })

  if(isLoading) return <p>Cargando...</p>
  
  if(data) return (
    <>

      <div>
        <GoBackButton/>
      </div>
      {data.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-1 2xl:grid-cols-3 gap-3 mt-5">
          {data.map(order => (
            <OrdenListas 
              key={order.id}
              order={order}
            />
          ))}
        </div>
      ) : <p className="text-center">No hay ordenes Pendientes</p>}
    </>
  )
}