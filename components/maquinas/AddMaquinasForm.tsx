"use client"

import { createMaquina } from "@/actions/create-maquinas-action"
import { MaquinasSchema } from "@/src/schema"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

export default function AddMaquinasForm({children}: {children : React.ReactNode}) {
    const router = useRouter()

    const handleSubmit = async (formData: FormData) => {
        const data = {
            name: formData.get('name') ?? "",  // Convertir null a ""
            marca: formData.get('marca') ?? "",// Convertir null a ""
            modelo: formData.get('modelo') ?? "",// Convertir null a ""
        }



        
        const result = MaquinasSchema.safeParse(data)
        if(!result.success) {
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            })
            return 
        }

        const response = await createMaquina(result.data)
        if(response?.errors) {
            response.errors.forEach(issue => {
                toast.error(issue.message)
            })
            return 
        }

        toast.success('Equipo Creado correctamente')
        router.push('/admin/maquinas')
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
                    value='Registrar Equipo'
                />
            </form>
        </div>
    )
}