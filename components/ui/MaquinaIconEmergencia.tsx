"use client";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Maquina } from "@prisma/client";

type MaquinaIconProps = {
    maquinas: Maquina[];
};

export default function MaquinaIcon({ maquinas }: MaquinaIconProps) {
    const [search, setSearch] = useState("");
    const [filteredMaquinas, setFilteredMaquinas] = useState(maquinas);
    const params = useParams<{ maquina: string }>();

    // Convertir el parámetro a número para comparar correctamente
    const maquinaIdSeleccionada = Number(params.maquina);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.toLowerCase();
        setSearch(value);
        setFilteredMaquinas(
            maquinas.filter(maquina => maquina.name.toLowerCase().includes(value))
        );
    };

    return (
        <div className="p-4">
            {/* Buscador */}
            <input
                type="text"
                placeholder="Buscar máquina..."
                value={search}
                onChange={handleSearch}
                className="w-full p-2 mb-4 border rounded text-center"
            />

            {/* Lista de máquinas filtradas */}
            {filteredMaquinas.length > 0 ? (
                filteredMaquinas.map(maquina => (
                    <div 
                        key={maquina.id}
                        className={`flex justify-center items-center gap-4 w-full border-t border-green-300 p-3 last-of-type:border-b 
                            ${maquina.id === maquinaIdSeleccionada ? "bg-green-600 text-white" : ""}`} // Resaltado dinámico
                    >
                        <Link className="text-xs font-bold" href={`/emergencia/${maquina.id}`}>
                            {maquina.name}
                        </Link>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">No se encontraron resultados</p>
            )}
        </div>
    );
}