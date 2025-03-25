"use client"

import { createPartes } from "@/actions/create-partes-action"
import { PartesSchema } from "@/src/schema"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

export default function AddProductForm({children}: {children : React.ReactNode}) {
    const router = useRouter()

    const handleSubmit = async (formData: FormData) => {
        const data = {
            name: formData.get('name'),
            maquinaId: formData.get('maquinaId'),
            image: formData.get('image')
        }
        const result = PartesSchema.safeParse(data)
        if(!result.success) {
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            })
            return 
        }

        const response = await createPartes(result.data)
        if(response?.errors) {
            response.errors.forEach(issue => {
                toast.error(issue.message)
            })
            return 
        }

        toast.success('Producto Creado correctamente')
        router.push('/admin/partes')
    }

    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
            <form
                className="space-y-5"
                action={handleSubmit}
            >
                {children}
                <input
                    type="submit"
                    className="bg-green-600 hover:bg-green-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    value='Registrar Producto'
                />
            </form>
        </div>
    )
}