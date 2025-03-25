"use client"
import useSWR from 'swr'
import OrderCardListas from '@/components/order/OrderCardListas';
import Heading from "@/components/ui/Heading";
import { OrderWithPartes } from '@/src/types';

export default function OrdersPage() {
  const url = '/admin/listas/api'
  const fetcher = () => fetch(url).then(res => res.json())
  const { data, error, isLoading } = useSWR<OrderWithPartes[]>(url, fetcher, {
    refreshInterval: 1000,
    revalidateOnFocus: false,
  })

  if (isLoading) return <p>Cargando...</p>

  return (
    <>
      <Heading>Administrar Órdenes</Heading>

      {data && data.length ? (
        <div className="mt-5">
          <OrderCardListas orders={data} />
        </div>
      ) : (
        <p className="text-center">No hay órdenes pendientes</p>
      )}
    </>
  )
}
