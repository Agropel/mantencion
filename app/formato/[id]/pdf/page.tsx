import OrderPdf from "@/components/order/OrderPdf";
import { prisma } from "@/src/lib/prisma";
import { notFound } from "next/navigation";

// Función asíncrona para obtener la orden por su ID
async function getOrdertById(id: number) {
  const order = await prisma.order.findUnique({
    where: {
      id,
    },
    include: {
      orderPartes: {
        include: {
          partes: {
            include: {
              maquina: true,
            },
          },
        },
      },
    },
  });

  if (!order) {
    notFound();
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
      <OrderPdf order={order} />
    </>
  );
}
