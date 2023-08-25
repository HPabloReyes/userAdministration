"use client";

import { useState, useEffect } from "react";
import Tarjeta from "./tarjetaExpediente";

export default function Usuario({ usuario, plan, cita, tema, notas, tarea }) {
  const [input, setInput] = useState({
    nombre: "",
    edad: "",
    plan: "",
    cita: [],
    tema: "",
    notas: "",
    tarea: "",
  });
  const [error, setError] = useState([]);
  const [fechas, setFechas] = useState([]);
  const [horaC, setHoraC] = useState([]);

  const handleSubmit = async (e) => {
    console.log("Este es el estado que sale ", input);

    const res = await fetch("api/expediente", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(input),
    });

    const { msg } = await res.json();
    setError(msg);
  };

  const handlechange = (e) => {
    setInput((input) => {
      const newInput = {
        ...input,
        [e.target.name]: e.target.value,
      };
      return newInput;
    });
    console.log(input);
  };

  const handleCitas = (e) => {
    e.preventDefault();
    setFechas(e.target.value);
    console.log(fechas);
  };

  const handleHoras = (e) => {
    e.preventDefault();
    setHoraC(e.target.value);
    console.log(horaC);
  };

  const submitCita = (e) => {
    e.preventDefault();
    setInput((prevInput) => ({
      ...prevInput,
      cita: [...prevInput.cita, { fecha: fechas, hora: horaC }],
    }));
    console.log(input);
  };

  return (
    <div className="p-3 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center">
        Form creación de expediente
      </h1>

      <form
        className="py4 mt-4 border-t flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <div>
          <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div class="-mx-3 md:flex mb-6">
              <div
                className={
                  usuario === true ? "md:w-1/2 px-3 mb-6 md:mb-0" : "hidden"
                }
              >
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Nombre
                </label>
                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  value={input.mensaje}
                  name="nombre"
                  onChange={(e) => handlechange(e)}
                  placeholder="Nombre..."
                />
              </div>

              <div className={usuario === true ? "md:w-1/2 px-3" : "hidden"}>
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Edad
                </label>
                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  type="number"
                  value={input.edad}
                  name="edad"
                  onChange={(e) => handlechange(e)}
                  placeholder="Edad..."
                />
              </div>
            </div>

            <div class="-mx-3 md:flex mb-2">
              <div className={plan === true ? "md:w-1/2 px-3" : "hidden"}>
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-state"
                >
                  Plan Comprado
                </label>
                <div class="relative">
                  <select
                    className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded
                "
                    onChange={(e) => handlechange(e)}
                    value={input.plan}
                    name="plan"
                  >
                    <option value="" disabled hidden>
                      Seleccione opción
                    </option>
                    <option value={"individual"}>Individual</option>
                    <option value={"Pareja"}>Pareja</option>
                  </select>
                </div>
              </div>

              <div className={cita === true ? "md:w-1/2 px-3" : "hidden"}>
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Fecha
                </label>
                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  onChange={(e) => handleCitas(e)}
                  type="date"
                  value={fechas}
                  name="cita"
                />
              </div>

              <div className={cita === true ? "md:w-1/2 px-3" : "hidden"}>
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-city"
                >
                  Hora
                </label>
                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  onChange={(e) => handleHoras(e)}
                  type="time"
                  value={input.hora}
                  name="hora"
                />
              </div>
            </div>
            <button
              onClick={(e) => submitCita(e)}
              className="bg-red-400 p-3 text-white mt-5 mb-5"
            >
              Añadir cita
            </button>

            <div class="-mx-3 md:flex mb-2">
              <div className={tema === true ? "md:w-1/2 px-3" : "hidden"}>
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-state"
                >
                  Tema
                </label>
                <div class="relative">
                  <input
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    onChange={(e) => handlechange(e)}
                    value={input.tema}
                    name="tema"
                  />
                </div>
              </div>

              <div
                className={
                  tarea === true ? "md:w-1/2 px-3 mb-6 md:mb-0" : "hidden"
                }
              >
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-city"
                >
                  Tarea
                </label>
                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  onChange={(e) => handlechange(e)}
                  value={input.tarea}
                  name="tarea"
                />
              </div>
            </div>

            <button className="bg-red-400 p-3 text-white mt-5">Enviar</button>
          </div>
        </div>
      </form>

      <div className="text-center">
        <h4>Fechas del paciente</h4>
        {input.cita.map((e, index) => (
          <div className="" key={index}>
            <p>Fecha: {e.fecha}</p>
            <p>Hora: {e.hora}</p>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
}
