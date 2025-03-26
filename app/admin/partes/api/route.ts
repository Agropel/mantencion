import { prisma } from "@/src/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const maquinaId = searchParams.get("maquinaId");

    if (!maquinaId) {
      return NextResponse.json({ error: "maquinaId requerido" }, { status: 400 });
    }

    const firstPart = await prisma.partes.findFirst({
      where: { maquinaId: Number(maquinaId) },
    });

    return NextResponse.json(firstPart, { status: 200 });
  } catch (error) {
    console.error("Error en la API:", error);
    return NextResponse.json({ error: "Error al obtener datos" }, { status: 500 });
  }
}
