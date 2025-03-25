import { prisma } from "@/src/lib/prisma"

export const dynamic = 'force-dynamic'

export async function GET() {
    const orders = await prisma.order.findMany({
        where: {
            status: false
        },
        include: {
          orderPartes: {
            include: {
              partes: {
                include: {
                  maquina: true,  // Incluye la relación con 'maquina'
                },
              },
        }}}
    })
    return Response.json(orders)
}






// import { Prisma } from "@prisma/client";


// // Definimos el tipo con las relaciones necesarias
// type OrderPartesWithMaquina = Prisma.OrderGetPayload<{
//   include: {
//     orderPartes: {
//       include: {
//         partes: {
//           include: {
//             maquina: true; // Incluir la relación de la máquina
//           };
//         };
//       };
//     };
//   };
// }>;

// // Esta función obtiene las órdenes con status: false y las relaciones necesarias
// export const dynamic = "force-dynamic";

// export async function GET(req: Request) {
//   try {
//     // Realiza la consulta en la base de datos
//     const orders: OrderPartesWithMaquina[] = await prisma.order.findMany({
//       where: {
//         status: false, // Filtra las órdenes con 'status: false'
//       },
//       include: {
//         orderPartes: {
//           include: {
//             partes: {
//               include: {
//                 maquina: true, // Incluye la máquina relacionada
//               },
//             },
//           },
//         },
//       },
//     });

//     // Verifica si no se encontraron órdenes
//     if (orders.length === 0) {
//       return new Response(
//         JSON.stringify({ message: "No orders found" }),
//         { status: 404 }
//       );
//     }

//     // Retorna la respuesta con los datos de las órdenes
//     return new Response(JSON.stringify(orders), { status: 200 });
//   } catch (error) {
//     // Manejo de errores
//     console.error("Error fetching orders:", error);
//     return new Response(
//       JSON.stringify({ message: "Internal server error" }),
//       { status: 500 }
//     );
//   }
// }




