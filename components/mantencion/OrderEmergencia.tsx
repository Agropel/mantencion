import { OrderWithPartes } from "@/src/types"
import Link from "next/link"




type Props = {
    orders: OrderWithPartes[];
  };
  
  const OrdersTable: React.FC<Props> = ({ orders }) => {
    return (
        <section
            aria-labelledby="summary-heading"
            className="bg-white px-2 py-2 rounded-md shadow-md max-w-3xl mx-auto text-center"
        >
            <h2 className="text-lg font-medium text-gray-900 mb-4">Revisa OT</h2>
            <div className="overflow-x-auto">
            {orders.map((order) => (
                order.orderPartes.map((partes) => (
                    <div key={`${order.id}-${partes.partesId}`}>
                        <div className="grid grid-cols-1 w-full text-center">
                            <div className="p-2">
                                {order.name}
                            </div>
                            <div className="p-2">
                                {order.tipo}
                            </div>
                            <div className="bg-green-600 hover:bg-green-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointe">
                            <Link
                                href={`/imagenemergencia/${order.id}/edit`}>
                                Agregar imagen
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            ))}
            </div>
        </section>
    );
  };
  
  export default OrdersTable;