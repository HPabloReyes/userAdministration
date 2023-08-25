import dbConnect from "@/app/lib/mongodb";
import Expediente from "@/app/models/expedientes";
import { NextResponse } from "next/server";

dbConnect();

// export async function GET() {
//   return NextResponse.json("Estas en la ruta "); // Agregado 'return' aquí
// }

export async function PUT(req) {
  try {
    const { nota, fecha } = await req.json();
    const newNote = { nota, fecha };

    const url = req.nextUrl.pathname;
    const id = url.split("/").pop();

    const paciente = await Expediente.findById(id);
    const notas = paciente.notas;
    notas.push(newNote);
    paciente.notas = notas;
    await paciente.save();

    console.log(notas);
    //console.log("notas", notas);
    return NextResponse.json("Paciente Actualizado");
  } catch (error) {
    console.error(error);
    return NextResponse.json("El paciente no esta registrado"); // Cambio aquí
  }
}
