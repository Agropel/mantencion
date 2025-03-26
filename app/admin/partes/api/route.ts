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



import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from "@/src/lib/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Verificar que el método sea GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { maquinaId } = req.query;

    // Verificar si se ha proporcionado maquinaId
    if (!maquinaId) {
      return res.status(400).json({ error: 'maquinaId requerido' });
    }

    // Convertir maquinaId a número y verificar que sea válido
    const maquinaIdNumber = Number(maquinaId);
    if (isNaN(maquinaIdNumber)) {
      return res.status(400).json({ error: 'maquinaId debe ser un número válido' });
    }

    // Consultar la base de datos usando Prisma
    const firstPart = await prisma.partes.findFirst({
      where: { maquinaId: maquinaIdNumber },
    });

    // Si no se encuentra el registro, devolver un 404
    if (!firstPart) {
      return res.status(404).json({ error: 'Parte no encontrada' });
    }

    // Devolver la respuesta con el registro encontrado
    res.status(200).json(firstPart);
  } catch (error) {
    // Manejar cualquier otro error y devolver un 500
    console.error(error); // Para depuración
    res.status(500).json({ error: 'Error al obtener datos' });
  }
}
