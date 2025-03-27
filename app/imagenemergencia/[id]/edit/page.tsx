import EditOrderFormEmergencia from "@/components/mantencion/EditOrderFormEmergencia";
import OrderFormEmergencia from "@/components/mantencion/OrderFormEmergencia";
import GoBackButton from "@/components/ui/GoBackButton";
import { prisma } from "@/src/lib/prisma";
import { notFound } from "next/navigation";

// Función asíncrona para obtener la orden por su ID
async function getOrdertById(id: number) {
  const order = await prisma.order.findUnique({
    where: {
      id,
    },
  });

  if (!order) {
    notFound(); // Redirigir a 404 si la orden no existe
  }

  return order;
}

type Params = Promise<{ id: string }>;

export default async function EditOrderPage({ params }: { params: Params }) {
  const { id } = await params; // Esperar la resolución de la promesa 'params'
  const idNumber = Number(id); // Convertir el ID a número

  // Obtener la orden con los datos relacionados
  const order = await getOrdertById(idNumber);

  return (
    <>
      <GoBackButton />
      <EditOrderFormEmergencia>
        <OrderFormEmergencia order={order} />
      </EditOrderFormEmergencia>
    </>
  );
}
