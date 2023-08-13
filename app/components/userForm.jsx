"use client";

import { useState } from "react";

export default function Usuario() {
  const [input, setInput] = useState({
    nombre: "",
    edad: "",
    plan: "",
    cita: "",
    hora: "",
    tema: "",
    notas: "",
    tarea: "",
  });
  const [error, setError] = useState([]);

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
              <div class="md:w-1/2 px-3 mb-6 md:mb-0">
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

              <div class="md:w-1/2 px-3">
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
              <div class="md:w-1/2 px-3">
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

              <div class="md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Fecha
                </label>
                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  onChange={(e) => handlechange(e)}
                  type="date"
                  value={input.cita}
                  name="cita"
                />
              </div>

              <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-city"
                >
                  Hora
                </label>
                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  onChange={(e) => handlechange(e)}
                  type="time"
                  value={input.hora}
                  name="hora"
                />
              </div>
            </div>

            <div class="-mx-3 md:flex mb-2">
              <div class="md:w-1/2 px-3">
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

              <div class="md:w-1/2 px-3 mb-6 md:mb-0">
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

            <div>
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="grid-last-name"
              >
                notas
              </label>
              <textarea
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 h-52 resize-none"
                onChange={(e) => handlechange(e)}
                value={input.notas}
                name="notas"
              ></textarea>
            </div>
            <button className="bg-red-400 p-3 text-white mt-5">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  );
}
