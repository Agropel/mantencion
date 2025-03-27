"use client";

import { Suspense } from "react";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";
import OrderCardListas from "@/components/order/OrderCardListas";
import Heading from "@/components/ui/Heading";
import { OrderWithPartes } from "@/src/types";

function OrdersContent() {
  const searchParams = useSearchParams();
  const tipo = searchParams.get("tipo");
  console.log("Tipo de búsqueda:", tipo);  // Log para verificar si el parámetro 'tipo' se obtiene correctamente

  const url = tipo ? `/mantencion/motivo/api?tipo=${tipo}` : "/mantencion/motivo/api";

  const fetcher = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("Data fetched:", data);  // Log aquí para verificar los datos que se reciben de la API
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  // Usamos useSWR con destructuring para obtener los datos, isLoading y error
  const { data, isLoading, error } = useSWR<OrderWithPartes[]>(url, fetcher, {
    refreshInterval: 1000,
    revalidateOnFocus: false,
  });

  // Si los datos están cargando, mostramos un mensaje
  if (isLoading) return <p>Cargando...</p>;

  // Si hay un error en la carga de los datos, mostramos el mensaje de error
  if (error) return <p>Error al cargar los datos...</p>;

  return (
    <>
      <Heading>Administrar Órdenes {tipo ? `- ${tipo}` : ""}</Heading>

      {data && data.length ? (
        <div className="mt-5">
          <OrderCardListas orders={data} />
        </div>
      ) : (
        <p className="text-center">No hay órdenes {tipo ? `de tipo ${tipo}` : "pendientes"}</p>
      )}
    </>
  );
}

export default function OrdersPage() {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <OrdersContent />
    </Suspense>
  );
}
