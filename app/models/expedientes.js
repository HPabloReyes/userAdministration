import mongoose, { Schema } from "mongoose";

const expedienteSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "name is required"],
  },
  edad: {
    type: Number,
    required: [true, "age is required"],
  },
  plan: {
    type: String,
    required: [true, "plan is required"],
  },
  cita: {
    type: Date,
    required: [true, "Date is required"],
  },
  hora: { type: String, required: false },
  tema: {
    type: String,
    required: false,
  },
  notas: [
    {
      nota: {
        type: String,
        required: false,
      },
      fecha: {
        type: Date,
        required: false,
      },
    },
  ],
  tareas: {
    type: String,
    required: false,
  },
});

const Expediente =
  mongoose.models.Expediente || mongoose.model("Expediente", expedienteSchema);

export default Expediente;
