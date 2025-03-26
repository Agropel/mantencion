"use client";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";
import OrderCard from "@/components/mantencion/OrderCard";
import Heading from "@/components/ui/Heading";
import { OrderWithPartes } from "@/src/types";

export default function OrdersPage() {
  const searchParams = useSearchParams();
  const tipo = searchParams.get("tipo"); // Obtiene el parámetro 'tipo' de la URL

  const url = tipo ? `/mantencion/motivo/api?tipo=${tipo}` : "/mantencion/motivo/api"; // Construye la URL con el filtro

  const fetcher = () => fetch(url).then((res) => res.json());
  const { data, isLoading } = useSWR<OrderWithPartes[]>(url, fetcher, {
    refreshInterval: 1000,
    revalidateOnFocus: false,
  });

  if (isLoading) return <p>Cargando...</p>;

  return (
    <>
      <Heading>Administrar Órdenes {tipo ? `- ${tipo}` : ""}</Heading>

      {data && data.length ? (
        <div className="mt-5">
          {data.map(order => (
                      <OrderCard 
                        key={order.id}
                        order={order}
                      />
            ))}
        </div>
      ) : (
        <p className="text-center">No hay órdenes {tipo ? `de tipo ${tipo}` : "pendientes"}</p>
      )}
    </>
  );
}
