import { prisma } from "@/src/lib/prisma"
import ImageUpload from "./ImageUpload";
import { Order } from "@prisma/client"
import OrderCard from '@/components/mantencion/OrderCard';



type OrderFormProps = {
    order?: Order
}

export default async function OrderForm({order}: OrderFormProps) {
    

    return (
        <>
            <div className="space-y-2">
                <label
                    className="text-slate-800"
                    htmlFor="name"
                >Nombre:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    className="block w-full p-3 bg-slate-100"
                    placeholder="Nombre Producto"
                    defaultValue={order?.name}
                />
            </div>

            

            

            <ImageUpload 
                image={order?.image ?? undefined}
            />

            
        </>
    )
}