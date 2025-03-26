"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type DashboardData = {
    conteoPorTipo: {
        Preventivo: number;
        Emergencia: number;
        Correctivo: number;
    };
};

export default function Dashboard() {
    const [data, setData] = useState<DashboardData | null>(null);

    useEffect(() => {
        fetch("iniciomantencion/api")
            .then((res) => res.json())
            .then((data: DashboardData) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    if (!data) return <p>Cargando...</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 text-center">
            <Card title="Preventivas" count={data.conteoPorTipo.Preventivo} color="bg-green-500" link="/mantencion/motivo?tipo=Preventivo" />
            <Card title="Correctivas" count={data.conteoPorTipo.Correctivo} color="bg-yellow-500" link="/mantencion/motivo?tipo=Correctivo" />
            <Card title="Emergencia" count={data.conteoPorTipo.Emergencia} color="bg-red-500" link="/mantencion/motivo?tipo=Emergencia" />
        </div>
    );
}

type CardProps = {
    title: string;
    count: number;
    color: string;
    link: string;
};

function Card({ title, count, color, link }: CardProps) {
    return (
        <Link href={link}>
        <div className="text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:bg-opacity-80" >
            <div className={`p-6 rounded-lg shadow-md text-white ${color} `}>
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-2">
                <h2 className="text-lg font-bold text-white mx-auto mb-4 transition-all duration-300 transform hover:scale-110">{title}</h2>
                <p className="text-2xl">{count}</p>
                </div>
            </div>
        </div>
        </Link>
    );
}