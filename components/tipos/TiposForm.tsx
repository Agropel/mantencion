import { Tipo } from "@prisma/client"


type TiposFormProp = {
    tipos?: Tipo
}

export default async function TiposForm({tipos}: TiposFormProp) {
    

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
                    placeholder="Nombre Del Tipo"
                    defaultValue={tipos?.name}
                />
            </div>
            
        </>
    )
}