"use client"
import { updateMaquinas } from "@/actions/update-maquinas-action"
import { MaquinasSchema } from "@/src/schema"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { useParams } from "next/navigation"

export default function EditMaquinasForm({children}: {children : React.ReactNode}) {
    const router = useRouter()
    const params = useParams()
    const id = +params.id!

    const handleSubmit = async (formData: FormData) => {
        const data = {
            name: formData.get('name'),
            marca: formData.get('marca'),
            modelo: formData.get('modelo'), 
        }
        
        const result = MaquinasSchema.safeParse(data)
        if(!result.success) {
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            })
            return 
        }

        const response = await updateMaquinas(result.data, id)
        if(response?.errors) {
            response.errors.forEach(issue => {
                toast.error(issue.message)
            })
            return 
        }

        toast.success('Equipo Actualizado correctamente')
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
                    value='Guardar Cambios'
                />
            </form>
        </div>
    )
}
