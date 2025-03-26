// import { NextApiRequest, NextApiResponse } from 'next';
// import { prisma } from "@/src/lib/prisma"

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'GET') {
//     return res.status(405).json({ error: 'Método no permitido' });
//   }

//   try {
//     const { maquinaId } = req.query;
//     if (!maquinaId) {
//       return res.status(400).json({ error: 'maquinaId requerido' });
//     }

//     const firstPart = await prisma.partes.findFirst({
//       where: { maquinaId: Number(maquinaId) },
//     });

//     res.status(200).json(firstPart);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al obtener datos' });
//   }
// }
