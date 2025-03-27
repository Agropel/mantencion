import EditOrderFormEmergencianueva from "@/components/mantencion/EditOrderFormEmergencianueva";
import OrderFormOrder from "@/components/mantencion/OrderFormOrder";
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
    notFound(); // Si no se encuentra la orden, redirige al 404
  }

  return order;
}

type Params = Promise<{ id: string }>;

export default async function EditOrderPage({ params }: { params: Params }) {
  const { id } = await params; // Esperar la resolución de la promesa 'params'
  const idNumber = Number(id); // Convertir el 'id' a número

  // Obtener la orden usando el ID convertido
  const order = await getOrdertById(idNumber);

  return (
    <>
      <GoBackButton />
      <EditOrderFormEmergencianueva>
        <OrderFormOrder order={order} />
      </EditOrderFormEmergencianueva>
    </>
  );
}
