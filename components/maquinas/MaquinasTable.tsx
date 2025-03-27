import { MaquinasWithMaquina } from "@/app/admin/maquinas/page"
import Link from "next/link"

type MaquinasTableProps = {
    maquinas: MaquinasWithMaquina
}

export default function MaquinasTable({ maquinas }: MaquinasTableProps) {
    return (
        <div className="px-4 sm:px-6 lg:px-8 mt-20">
            <div className="mt-8 flow-root ">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-white p-5 ">
                        <table className="min-w-full divide-y divide-gray-300 ">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        Nombre
                                    </th>
                                    
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Marca
                                    </th>

                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Modelo
                                    </th>

                                    <th scope="col" className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                        Acciones
                                    </th>

                                    
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {maquinas.map(maquinas => (
                                    <tr key={maquinas.id}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                            {maquinas.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {maquinas.marca}
                                        </td>

                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {maquinas.modelo}
                                        </td>
                                        
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <Link
                                                href={`/admin/maquinas/${maquinas.id}/edit`}
                                                className="text-indigo-600 hover:text-indigo-800"
                                            >Editar <span className="sr-only">, {maquinas.name}</span> </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}