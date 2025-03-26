"use client"
import useSWR from 'swr'
import OrderEmergencia from '@/components/mantencion/OrderEmergencia';
import { OrderWithPartes } from '@/src/types';

export default function OrdersPage() {
  const url = '/imagenemergencia/api'
  const fetcher = () => fetch(url).then(res => res.json())
  const { data, isLoading } = useSWR<OrderWithPartes[]>(url, fetcher, {
    refreshInterval: 1000,
    revalidateOnFocus: false,
  })

  if (isLoading) return <p>Cargando...</p>

  return (
    <>


      {data && data.length ? (
        <div className="mt-5">
          <OrderEmergencia orders={data} />
        </div>
      ) : (
        <p className="text-center">No hay órdenes pendientes</p>
      )}
    </>
  )
}
