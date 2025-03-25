import { Maquina } from "@prisma/client"



type MaquinasFormProp = {
    maquinas?: Maquina
}

export default async function MaquinasForm({maquinas}: MaquinasFormProp) {
    

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
                    placeholder="Nombre Del Equipo"
                    defaultValue={maquinas?.name}
                />
            </div>

            <div className="space-y-2">
                <label
                    className="text-slate-800"
                    htmlFor="marca"
                >Marca:</label>
                <input
                    id="marca"
                    type="text"
                    name="marca"
                    className="block w-full p-3 bg-slate-100"
                    placeholder="Marca Del Equipo"
                    defaultValue={maquinas?.marca ?? ""}
                />
            </div>

            <div className="space-y-2">
                <label
                    className="text-slate-800"
                    htmlFor="modelo"
                >Modelo</label>
                <input
                    id="modelo"
                    type="text"
                    name="modelo"
                    className="block w-full p-3 bg-slate-100"
                    placeholder="Modelo Del Equipo"
                    defaultValue={maquinas?.modelo ?? ""}
                />
            </div>

        </>
    )
}