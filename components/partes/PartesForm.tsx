import { prisma } from "@/src/lib/prisma"
import ImageUpload from "./ImageUpload"
import { Partes } from "@prisma/client"

async function getMaquina() {
    return await prisma.maquina.findMany()
}

type PartesFormProps = {
    partes?: Partes
}

export default async function PartesForm({partes}: PartesFormProps) {
    const maquinas = await getMaquina()

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
                    defaultValue={partes?.name}
                />
            </div>

            

            <div className="space-y-2">
                <label
                    className="text-slate-800"
                    htmlFor="maquinaId"
                >Categoría:</label>
                <select
                    className="block w-full p-3 bg-slate-100"
                    id="maquinaId"
                    name="maquinaId"
                    defaultValue={partes?.maquinaId}
                >
                    <option value=""> -- Seleccione -- </option>
                    {maquinas.map(maquina => (
                        <option
                            key={maquina.id}
                            value={maquina.id}
                        >{maquina.name}</option>
                    ))}
                </select>
            </div>

            <ImageUpload 
                image={partes?.image ?? undefined}
            />
        </>
    )
}