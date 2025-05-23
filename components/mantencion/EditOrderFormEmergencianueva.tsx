"use client"
import { updateOrder} from "@/actions/update-order-action"
import { OrderSchema } from "@/src/schema"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { useParams } from "next/navigation"

export default function EditOrderForm({children}: {children : React.ReactNode}) {
    const router = useRouter()
    const params = useParams()
    const id = +params.id!

    const handleSubmit = async (formData: FormData) => {
        const data = {
            name: formData.get("name")?.toString(), // Asegurarse de que `name` siempre sea un string
            image: formData.get("image")?.toString() || undefined, // Si no hay imagen, dejarlo como `undefined`
            planificacion: formData.get('planificacion') ? new Date(formData.get('planificacion') as string) : null, // Asegurarse de que sea un `Date` o `null`
            tipo: formData.get('tipo') as string, // `tipo` debería ser siempre un string
            trabajo: formData.get('trabajo') ? formData.get('trabajo')?.toString() : null, // Si no hay trabajo, `null`
            hrequeridas: formData.get('hrequeridas') ? formData.get('hrequeridas')?.toString() : null, // Si no hay `hrequeridas`, `null`
            taller: formData.get('taller') ? formData.get('taller')?.toString() : null, // Si no hay `taller`, `null`
            repuestos: formData.get('repuestos') ? formData.get('repuestos')?.toString() : null, // Si no hay `repuestos`, `null`
            personal: formData.get('personal') ? formData.get('personal')?.toString() : null, // Si no hay `personal`, `null`
            inicio: formData.get('inicio') ? formData.get('inicio')?.toString() : null, // Si no hay trabajo, `null`
            fin: formData.get('fin') ? formData.get('fin')?.toString() : null, // Si no hay trabajo, `null`
        };

        

        
        
        const result = OrderSchema.safeParse(data)
        if(!result.success) {
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            })
            return 
        }

        const response = await updateOrder(result.data, id)
        if(response?.errors) {
            response.errors.forEach(issue => {
                toast.error(issue.message)
            })
            return 
        }

        toast.success('OT Agregada')
        toast.success('Redirecionando')

        setTimeout(() => {
            router.push("/admin/orders");
        }, 1500);
    }

    return (
        <div className="bg-white mt-2 px-3 py-2 rounded-md shadow-md max-w-3xl mx-auto">
            <form
                className="space-y-5"
                action={handleSubmit}
            >
                {children}
                <input
                    type="submit"
                    className="bg-green-600 hover:bg-green-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    value='Guardar Cambios'
                />
            </form>
            
        </div>
    )
}
