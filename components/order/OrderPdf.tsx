import { OrderWithPartes } from "@/src/types"
import PrintButton from "@/components/ui/PrintButton";
import Image from "next/image";



type OrderFormProps = {
    order: OrderWithPartes
}




export default function OrderCard({ order }: OrderFormProps) {


    // Función para calcular la diferencia entre dos horas en formato "HH:mm"
    const calculateTimeDifference = (start: string | null, end: string | null): string => {
        // Si start o end son null, asignamos un valor predeterminado
        const startTime = start?.split(":") ?? ["00", "00"];
        const endTime = end?.split(":") ?? ["00", "00"];
    
        const startHours = parseInt(startTime[0], 10);
        const startMinutes = parseInt(startTime[1], 10);
    
        const endHours = parseInt(endTime[0], 10);
        const endMinutes = parseInt(endTime[1], 10);
    
        // Convertimos las horas y minutos a minutos totales
        const startTotalMinutes = startHours * 60 + startMinutes;
        const endTotalMinutes = endHours * 60 + endMinutes;
    
        // Calculamos la diferencia en minutos
        const differenceInMinutes = endTotalMinutes - startTotalMinutes;
    
        if (differenceInMinutes < 0) {
        return "Error en el cálculo (hora de fin antes de hora de inicio)";
        }
    
        // Convertimos los minutos a horas y minutos
        const hours = Math.floor(differenceInMinutes / 60);
        const minutes = differenceInMinutes % 60;
    
        return `${hours} hr y ${minutes} mnts`;
    };
    
    // Llamada a la función con los valores de inicio y fin, usando valores por defecto si son null
    const timeDifference = calculateTimeDifference(order.inicio ?? "00:00", order.fin ?? "00:00");
  
 
    return (
        <section
        id="print-section"
        aria-labelledby="summary-heading"
        className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:mt-0 lg:p-8"
    >
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    
                </thead>
                <tbody>

                    <tr>
                        <td className="py-2 px-4 border border-gray-300 w-1/4" colSpan={2}>
                            <div className="flex justify-center">  
                                <div className="relative w-14 h-16">
                                    <Image
                                        fill
                                        alt="Logo Agropel"
                                        src='/agropel-logo.png'
                                    />
                                </div>
                            </div>
                        </td>


                        <td className="py-2 px-4 border border-gray-300 text-center w-1/2" colSpan={3}>ORDEN DE TRABAJO MANTENCIÒN</td>
                        <td className="py-2 px-4 border border-gray-300 w-1/4 text-xs text-center" colSpan={3}>
                            Còdigo: R POE 09-02 <br/>
                            Versiòn: 4 <br/>
                            Fecha: 03-10-22
                        </td>
                    </tr>


                    

                    {order.orderPartes.map((partes) => (
                        <tr key={partes.partesId} className="border border-white">
                            <td className="py-2 px-4 font-semibold text-center" colSpan={5} ></td>
                            <td className="px-4 font-semibold  border border-gray-300 text-center" colSpan={3} >Nº OT {order.id}</td>
                        </tr>
                    ))}

                    

                    
                </tbody>
            </table>
            <div className="border bg-white p-1">
                <div className="grid grid-cols-1 py-2 bg-white">
                    <div className="grid grid-cols-6">
                        <div className="border border-white text-right">Mantenciòn:&nbsp;</div>
                        <div className="border font-semibold lg:w-1/2 sm:w-full">{order.tipo}</div>
                        <div className="border border-white text-right">Prioridad:&nbsp;</div>
                        <div className="border font-semibold lg:w-1/2 sm:w-full">Normal</div>
                        <div className="border border-white text-right">Trabajo:&nbsp;</div>
                        <div className="border font-semibold lg:w-1/2 sm:w-full">Mecanico</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 py-2 bg-white">
                    <div className="grid grid-cols-6">
                        <div className="border border-white text-right">Solicitud:&nbsp;</div>
                        <div className="border font-semibold lg:w-1/2 sm:w-full">{new Date(order.date).toLocaleDateString()}</div>
                        <div className="border border-white text-right">Equipo Critico:&nbsp;</div>
                        <div className="border font-semibold lg:w-1/4 sm:w-1/4">No</div>
                        <div className="border border-white text-right"></div>
                        <div className=""></div>
                    </div>
                </div>
                    
                {order.orderPartes.map((partes) => (
                    <div key={partes.partesId} className="grid grid-cols-2 gap-2 py-2 bg-white">
                        <div className="grid grid-cols-1">
                            <div className="text-center font-semibold">Descripciòn Problema Causa</div>
                            <div className="border text-center lg:h-14 sm:h-20">{order.name}</div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className="text-left font-semibold border">&nbsp;{partes.partes.maquina?.name ?? "No disponible"}</div>
                            <div className="text-left font-semibold border">&nbsp; Marca:&nbsp;{partes.partes.maquina?.marca ?? "No disponible"}</div>
                            <div className="text-left font-semibold border">&nbsp;{partes.partes.name ?? "No disponible"}</div>
                        </div>
                        
                    </div>
                ))}
            </div>
            
            <div className="border bg-white p-1">
                <div className="grid grid-cols-1 py-2 bg-white">
                    <div className="grid grid-cols-4">
                        <div className="font-semibold border border-white text-right">Fecha Planificacion:&nbsp;</div>
                        <div className="border lg:w-1/2 sm:w-full"> {new Date(order.planificacion).toISOString().split("T")[0].split("-").reverse().join("-")}</div>
                        <div className="font-semibold border border-white text-right">Recepciòn OT:&nbsp;</div>
                        <div className="border lg:w-1/2 sm:w-full">Juan Millañanco</div>
                    </div>
                </div>

                
                <div className="grid grid-cols-1">
                    <div className="text-center font-semibold">Descripciòn Trabajo</div>
                    <div className="border text-center lg:h-14 sm:h-20">{order.trabajo}</div>
                </div>

                

                
                <div className="grid grid-cols-1 py-2">
                    <div className="text-center font-semibold">Herramientas Requeridas</div>
                    <div className=" border grid grid-cols-2">
                        <div className="text-center border lg:h-14 sm:h-20">{order.hrequeridas}</div>
                        <div className="text-center font-semibold">
                            Herramientas Devueltas a Taller?
                            <div className="grid grid-cols-1">
                                <div className="">{order.taller}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 text-center py-2">
                    <div className="text-center font-semibold">Repuestos y Lubricantes Requeridos</div>
                    <div className=" grid grid-cols-2">
                       <div className="border lg:h-14 sm:h-14 text-center">
                            {order.repuestos}
                       </div>
                       <div className="grid grid-cols-1">
                            <div className="grid grid-cols-2">
                                    <div className="border text-center font-semibold">Cant. Planificada</div>
                                    <div className="border text-center font-semibold">Cant. Utilizada</div>
                                    <div className="border">-</div>
                                    <div className="border">-</div>
                            </div>
                       </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 text-center py-2">
                    <div className="text-center font-semibold">Personal Necesario Para La Ejecuciòn</div>
                    <div className="grid grid-cols-5 font-semibold">
                        <div className="border"> Nombre</div>
                        <div className="border">Fecha y Hora Inicio</div>
                        <div className="border">Fecha y Hora Fin</div>
                        <div className="border">Total Horas</div>
                        <div className="border">Firma</div>
                    </div>
                    <div className="grid grid-cols-5">
                        <div className="border">{order.personal}</div>
                        <div className="border">{order.inicio}</div>
                        <div className="border">{order.fin}</div>
                        <div className="border">{timeDifference}</div>
                        <div className="border"> </div>
                    </div>
                </div>


                <div className="grid grid-cols-1 py-2 border">
                    <div className="text-center font-semibold">RECEPCION TRABAJO TERMINADO (EQUIPO Y LUGAR DE TRABAJO)</div>
                    <div className="grid grid-cols-4 font-semibold">
                        <div className="text-right text-xs"> Impecciòn</div>
                        <div className="border  text-xs text-white">&nbsp;</div>
                        <div className="text-right text-xs"> Fecha y Hora</div>
                        <div className="border  text-xs text-white">&nbsp;</div>
                    </div>
                    <div className="grid grid-cols-3 font-semibold py-2">
                        <div className="text-center text-xs">Equipo Limpio</div>
                        <div className="text-center text-xs">Lugar Libre De Herramientas Sueltas</div>
                        <div className="text-center text-xs">Equipo Operativo</div>
                    </div>
                    <div className="grid grid-cols-3 font-semibold text-center">
                        <div className="border text-xs text-white">&nbsp;</div>
                        <div className="border text-xs text-white">&nbsp;</div>
                        <div className="border text-xs text-white">&nbsp;</div>
                    </div>

                    <div className="grid grid-cols-3 font-semibold py-2">
                        <div className="text-center text-xs">Lugar Libre De Piezas Sueltas</div>
                        <div className="text-center text-xs">Libre De Lubricantes</div>
                        <div className="text-center text-xs">Liberado Producciòn</div>
                    </div>
                    <div className="grid grid-cols-3 font-semibold text-center">
                        <div className="border text-xs text-white">&nbsp;</div>
                        <div className="border text-xs text-white">&nbsp;</div>
                        <div className="border text-xs text-white">&nbsp;</div>
                    </div>
                </div>

                <div className="grid grid-cols-2 text-sm">
                    <div className="border">
                        Responsable: Jefe de planta y/o remplazo <br></br>
                        Frecuencia Semanal
                    </div>
                    <div className="text-center border">
                        Firma y Fecha 
                    </div>
                </div>
                
            </div>


        </div>




        

        <PrintButton targetId="print-section" />
    </section>
    )
}