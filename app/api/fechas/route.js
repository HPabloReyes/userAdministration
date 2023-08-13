import dbConnect from "@/app/lib/mongodb";
import Expediente from "@/app/models/expedientes";
import { NextResponse } from "next/server";

dbConnect();

export async function GET() {
  try {
    const data = await Expediente.find();

    const fechas = data.map((item) => {
      const fechaOriginal = new Date(item.cita);
      const año = fechaOriginal.getFullYear();
      const mes = String(fechaOriginal.getMonth() + 1).padStart(2, "0");
      const dia = String(fechaOriginal.getDate()).padStart(2, "0");

      const evento = { title: item.nombre, date: `${año}-${mes}-${dia}` };
      return evento;
    });

    return NextResponse.json(fechas); // Agregado 'return' aquí
  } catch (error) {
    console.error(error);
    return NextResponse.error(error); // Agregado manejo de error
  }
}
