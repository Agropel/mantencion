import { Order } from "@prisma/client"




type OrderFormProps = {
    order?: Order
}

export default async function OrderForm({order}: OrderFormProps) {
    

    return (
        <>
            <div className="text-sm text-center border">
                <p className=" font-semibold">OT Nº {order?.id}</p>
                <p className=" font-semibold">Descripciòn Problema Causa</p>
                {order?.name}
            </div>

            <div className="space-y-2 text-center">
                <label
                    className="text-slate-800 font-semibold"
                    htmlFor="name"
                >Descripciòn Del Trabajo</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    className="block w-full lg:h-14 sm:h-20 p-3 bg-slate-100"
                    placeholder="Agrege La Descripciòn"
                    defaultValue={order?.name ?? ""}
                />
            </div>

            <div className="space-y-2 text-center hidden">
                <label
                    className="text-slate-800 font-semibold"
                    htmlFor="tipo"
                >Descripciòn Del Trabajo</label>
                <input
                    id="tipo"
                    type="text"
                    name="tipo"
                    className="block w-full lg:h-14 sm:h-20 p-3 bg-slate-100"
                    placeholder="Agrege La Descripciòn"
                    defaultValue={order?.tipo ?? ""}
                />
            </div>

            <div className="space-y-2 text-center hidden">
                <label
                    className="text-slate-800 font-semibold"
                    htmlFor="planificacion"
                >Descripciòn Del Trabajo</label>
                <input
                    id="planificacion"
                    type="date"
                    name="planificacion"
                    className="block w-full lg:h-14 sm:h-20 p-3 bg-slate-100"
                    placeholder="Agrege La Descripciòn"
                    defaultValue={order?.planificacion ? new Date(order.planificacion).toISOString().split("T")[0] : ""}
                />
            </div>

            <div className="space-y-2 text-center hidden">
                <label
                    className="text-slate-800 font-semibold"
                    htmlFor="trabajo"
                >Descripciòn Del Trabajo</label>
                <input
                    id="trabajo"
                    type="text"
                    name="trabajo"
                    className="block w-full lg:h-14 sm:h-20 p-3 bg-slate-100"
                    placeholder="Agrege La Descripciòn"
                    defaultValue={order?.trabajo ?? ""}
                />
            </div>


            <div className="grid-cols-1 hidden">
                <div className="text-center font-semibold">Herramientas Requeridas</div>
                <div className=" border grid grid-cols-1 text-xs">
                    <div className="text-center border lg:h-14 sm:h-20">
                        <input
                            id="hrequeridas"
                            type="text"
                            name="hrequeridas"
                            className="block w-full p-2 bg-slate-100 text-sm"
                            placeholder="Herramientas Utilizadas"
                            defaultValue={order?.hrequeridas ?? ""}
                        />
                    </div>        
                </div>
            </div>

            <table className="text-sm text-center min-w-full divide-gray-300 hidden">
                <tbody>
                    <tr>
                        <td className="w-3/4">
                            ¿Herramientas Devueltas Taller?
                        </td>
                        <td className="w-1/4">
                        <select
                            className=""
                            id="taller"
                            name="taller"
                            defaultValue={order?.taller ?? ""}
                        >
                            <option value="Si">SI</option>
                            <option value="No">NO</option>
                        </select>
                        </td>
                    </tr>
                </tbody>
            </table>     


            <div className="space-y-2 text-center hidden">
                <label
                    className="text-slate-800 font-semibold"
                    htmlFor="repuestos"
                >Repuestos Requeridos</label>
                <input
                    id="repuestos"
                    type="text"
                    name="repuestos"
                    className="block w-full p-2 bg-slate-100 text-sm"
                    placeholder="Ingrese"
                    defaultValue={order?.repuestos ?? ""}
                />
            </div> 

            <div className="space-y-2 text-center hidden">
                <label
                    className="text-slate-800 font-semibold"
                    htmlFor="personal"
                >Personal Necesario</label>
                <input
                    id="personal"
                    type="text"
                    name="personal"
                    className="block w-full p-2 bg-slate-100 text-sm"
                    placeholder="Nombres"
                    defaultValue={order?.personal ?? ""}
                />

                <input
                    id="inicio"
                    type="time"
                    name="inicio"
                    className="block w-full p-2 bg-slate-100 text-sm"
                    placeholder="Hora Inicio"
                    defaultValue={order?.inicio ?? ""}
                />

                <input
                    id="fin"
                    type="time"
                    name="fin"
                    className="block w-full p-2 bg-slate-100 text-sm"
                    placeholder="Hora Fin"
                    defaultValue={order?.fin ?? ""}
                />
            </div> 
            
        </>
    )
}