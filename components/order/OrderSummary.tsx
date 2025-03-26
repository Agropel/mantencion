"use client"
import { toast } from 'react-toastify'
import { useStore } from "@/src/store"
import PartesDatails from "./PartesDatails"
import { createOrder } from "@/actions/create-order-action"
import { OrderSchema } from "@/src/schema"





export default function OrderSummary() {

  
  const order = useStore(state => state.order)
  const clearOrder = useStore((state) => state.clearOrder)
  

  const handleCreateOrder = async (formData: FormData) => {
    const data = {
      name: formData.get('name'),
      planificacion: new Date(formData.get('planificacion') as string), // Convertir a Date
        tipo: formData.get('tipo') as string,
        image: formData.get('image') as string || null,
        trabajo: formData.get('trabajo') as string || null,
        hrequeridas: formData.get('hrequeridas') as string || null,
        taller: formData.get('taller') as string || null,
        repuestos: formData.get('repuestos') as string || null,
        personal: formData.get('personal') as string || null,
        inicio: formData.get('inicio') ? new Date(formData.get('inicio') as string) : null,
        fin: formData.get('fin') ? new Date(formData.get('fin') as string) : null,
      order
    }

    const result = OrderSchema.safeParse(data)
    if(!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message)
      })
      return
    }

    const response = await createOrder(data)
    if(response?.errors) {
      response.errors.forEach((issue) => {
        toast.error(issue.message)
      })
    }

    toast.success('Orden Realizada Correctamente')
    clearOrder()
}

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-xl text-center font-black">Orden De Trabajo</h1>

      {order.length === 0 ? <p className="text-center my-10">Sin Orden</p>  :(
        <div className="mt-5">
          
          {order.map(item => (
            <PartesDatails
              key={item.id}
              item={item}
            />
          ))}
          <form 
            className="w-full mt-10 space-y-5"
            action={handleCreateOrder}
          >
            <input
              type="text"
              placeholder="DESCRIPPCION PROBLEMA/CAUSA"
              className="bg-white border border-gray-100 p-2 w-full h-14 text-center"
              name="name"
            />
            <div className="text-center font-semibold">Fecha Planificaciòn</div>
            <input
              type="date"
              className="bg-white border border-gray-100 p-2 w-full text-center"
              name="planificacion"
              required
            />

            <select
              className="bg-white border border-gray-100 p-2 w-full text-center"
              name="tipo"
              required
            >
              <option value="Preventivo">Preventivo</option>
              <option value="Correctivo">Correctivo</option>
            </select>
            

            <input
              type="submit"
              className="py-2 rounded uppercase text-white bg-black w-full text-center cursor-pointer font-bold"
              value='Confirmar Orden'
            />
          </form>
        </div>

      )}

    </aside>
    
  )
}
