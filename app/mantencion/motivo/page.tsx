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
  const url = tipo ? `/admin/motivo/api?tipo=${tipo}` : "/admin/motivo/api";

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