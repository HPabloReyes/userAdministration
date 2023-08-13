import dbConnect from "@/app/lib/mongodb";
import Expediente from "@/app/models/expedientes";
import { NextResponse } from "next/server";

dbConnect();

export async function GET(req) {
  try {
    const url = req.nextUrl.pathname;
    const id = url.split("/").pop();

    const paciente = await Expediente.findById(id);

    //console.log("paciente", paciente);
    return NextResponse.json(paciente);
  } catch (error) {
    console.error(error);
    return NextResponse.json("El paciente no esta registrado"); // Cambio aquí
  }
}
