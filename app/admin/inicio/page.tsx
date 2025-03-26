"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type DashboardData = {
    ordenesPendientes: number;
    ordenesListas: number;
    maquinas: number;
    tareas: number;
    conteoPorTipo: {
        Preventivo: number;
        Emergencia: number;
        Correctivo: number;
    };
};

export default function Dashboard() {
    const [data, setData] = useState<DashboardData | null>(null);

    useEffect(() => {
        fetch("/admin/inicio/api")
            .then((res) => res.json())
            .then((data: DashboardData) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    if (!data) return <p>Cargando...</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 text-center">
            <Card title="Órdenes Pendientes" count={data.ordenesPendientes} color="bg-red-500" link="/admin/orders"/>
            <Card title="Órdenes Listas &nbsp;" count={data.ordenesListas} color="bg-green-500" link="/admin/listas"/>
            <Card title="Órdenes Preventivas" count={data.conteoPorTipo.Preventivo} color="bg-purple-500" link="/admin/motivo?tipo=Preventivo" />
            <Card title="Órdenes Correctivas" count={data.conteoPorTipo.Correctivo} color="bg-gray-500" link="/admin/motivo?tipo=Correctivo" />
            <Card title="Órdenes de Emergencia" count={data.conteoPorTipo.Emergencia} color="bg-orange-500" link="/admin/motivo?tipo=Emergencia" />
            <Card title="Listado Máquinas" count={data.maquinas} color="bg-blue-500" link="/admin/maquinas"/>
            <Card title="Listados Tareas" count={data.tareas} color="bg-yellow-500" link="/admin/partes"/>
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
        <div className="text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:bg-opacity-80 hidden sm:block" >
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
