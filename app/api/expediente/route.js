import dbConnect from "@/app/lib/mongodb";
import Expediente from "@/app/models/expedientes";
import { NextResponse } from "next/server";

dbConnect();

export async function GET() {
  try {
    const pacientes = await Expediente.find();
    return NextResponse.json(pacientes); // Agregado 'return' aquí
  } catch (error) {
    console.error(error);
    return NextResponse.error(error); // Agregado manejo de error
  }
}

export async function POST(req) {
  const { nombre, edad, plan, cita, tema, tarea, hora } = await req.json();

  const expediente = {
    nombre,
    edad,
    plan,
    cita,
    hora,
    tema,
    tarea,
  };

  try {
    const newExpediente = new Expediente(expediente);
    const savedExpediente = await newExpediente.save();
    console.log("Expendiente Guardado", savedExpediente);
    return NextResponse.json({
      msg: `El Expediente ${savedExpediente} fue guardado con éxito`,
    });
  } catch (error) {
    console.log("ERROR EN ", error);
  }
}
