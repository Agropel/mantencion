import { OrderWithPartes } from "@/src/types";
import Link from "next/link";
import Image from "next/image";

type Props = {
  orders: OrderWithPartes[];
};

const OrdersList: React.FC<Props> = ({ orders }) => {
  return (
    <section aria-labelledby="summary-heading" className="mt-16 space-y-6">
      <h2 className="text-xl font-medium text-gray-900 mb-4 text-center">
        Órdenes de Trabajo
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-lg bg-gray-50 p-6 shadow-md border space-y-4"
          >
            <div className="flex items-center justify-between">
              <dt className="text-lg font-medium text-gray-900">OT</dt>
              <dd className="text-lg font-medium text-gray-900">Nº {order.id}</dd>
              <dd className="text-lg font-medium text-gray-900">
                {new Date(order.date).toLocaleDateString()}
              </dd>
            </div>

            <dl className="mt-4 space-y-2">
              {order.orderPartes.map((partes) => (
                <div
                  key={partes.partesId}
                  className="flex flex-col items-center gap-2 border-t border-gray-200 pt-2"
                >
                  <dd className="text-sm font-medium text-gray-900 text-center">
                    {partes.partes.maquina?.name ?? "No disponible"}
                  </dd>

                  <dd className="text-sm font-medium text-gray-900 text-center">
                    {partes.partes.name}
                  </dd>

                  {partes.partes.image && (
                    <Image
                      width={400}
                      height={500}
                      src={partes.partes.image} // Asegúrate de que esto sea una URL válida
                      alt={`Imagen de ${partes.partes.name}`}
                      className="rounded-lg shadow"
                    />
                  )}
                </div>
              ))}
            </dl>

            <div className="bg-green-600 hover:bg-green-800 text-white w-full mt-4 p-2 uppercase font-bold cursor-pointer text-center rounded-lg">
              <Link href={`/mantencion/${order.id}/edit`}>Ver OT</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrdersList;
