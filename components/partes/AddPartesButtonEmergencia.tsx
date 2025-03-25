"use client"

import { Partes } from "@prisma/client"
import { useStore } from "@/src/store"

type AddPartesButtonProps = {
    partes: Partes
}

export default function AddPartesButton({partes}: AddPartesButtonProps) {
    const addToOrder = useStore((state) => state.addToOrder)  

    return (
        <button
            type="button"
            className="bg-green-600 hover:bg-green-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
            onClick={() => addToOrder(partes)}
        >Agregar</button>
    )
}