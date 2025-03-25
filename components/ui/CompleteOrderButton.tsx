"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { completeOrder } from "@/actions/complete-order-action";
import { toast } from "react-toastify"

type Props = {
    orderId: number;
};

export default function CompleteOrderButton({ orderId }: Props) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const handleSubmit = async () => {
        const confirmClose = confirm("¿Estás seguro de que deseas cerrar esta orden?");
        if (!confirmClose) return;

        setIsSubmitting(true);

        const formData = new FormData();
        formData.append("order_id", orderId.toString());

        try {
            await completeOrder(formData);
            toast.success("Orden cerrada exitosamente");
            setTimeout(() => {
                router.push("/mantencion/ordeneslistas");
            }, 500); // Espera 2 segundos antes de redirigir
        } catch (error) {
            toast.error("Hubo un error al cerrar la orden");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-green-600 hover:bg-green-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer disabled:opacity-50"
            >
                {isSubmitting ? "Guardando..." : "Marcar Orden Completada"}
            </button>
        </>
    );
}
