import { Order ,OrderPartes, Partes, Maquina } from "@prisma/client";

export type OrderItem = Pick<Partes, 'id' | 'name'> & {
    quantity: number
} 

// export type OrderItem = Pick<Order, 'id' | 'name' | 'image'> & {
//   quantity: number;
// };



export type OrderWithPartes = Order & {
    orderPartes: (OrderPartes & {
      partes: Partes & {
        maquina: Maquina;  // Aquí se incluye la relación con 'maquina'
      };
    })[];
  };