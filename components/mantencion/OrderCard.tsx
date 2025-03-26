import { OrderWithPartes } from "@/src/types"
import Link from "next/link"


type OrderCardProps = {
    order: OrderWithPartes
}

export default function OrderCard({ order }: OrderCardProps) {

 
    return (
        <section
            aria-labelledby="summary-heading"
            className="rounded-lg bg-gray-50 px-4 py-2 sm:p-6  lg:mt-0 lg:p-8 space-y-4 text-center border"
        >
            <div className="flex items-center justify-between">
                <dt className="text-lg font-medium text-gray-900">OT</dt>
                <dd className="text-lg font-medium text-gray-900">Nº {order.id}</dd>
                <dd className='text-lg font-medium text-gray-900'>{new Date(order.date).toLocaleDateString()}</dd>

            </div>
            
            <dl className="mt-6 space-y-2">
                {order.orderPartes.map(partes =>(
                    <div 
                        key={partes.partesId} 
                        className="flex items-center gap-2 border-t border-gray-200 pt-4 justify-center"
                    >
                        <dd className="text-sm font-medium text-gray-900 text-center justify-center">{partes.partes.maquina?.name ?? "No disponible"}</dd>
                        
                    </div>


                ))}

                {order.orderPartes.map(partes =>(
                    <div 
                        key={partes.partesId} 
                        className="flex items-center gap-2 border-t border-gray-200 pt-4 justify-center"
                    >
                        
                        <dd className="text-sm font-medium text-gray-900 text-center justify-center">{partes.partes.name}</dd>
                    </div>


                ))}


                <div 
                    className="flex items-center gap-2 border-t border-gray-200 pt-4 justify-center"
                > 
                    <dd className="text-sm font-medium text-gray-900 text-center justify-center">{order.tipo}</dd>
                </div>

            </dl>

            <div className="bg-green-600 hover:bg-green-800 text-white w-full mt-2 p-2 uppercase font-bold cursor-pointer text-center">
            
                <Link
                    href={`/mantencion/${order.id}/edit`}
                                    
                    >Ver OT <span className="sr-only">, {order.name}</span> 
                </Link>
            
            </div>

            

            
        </section>
    )
}