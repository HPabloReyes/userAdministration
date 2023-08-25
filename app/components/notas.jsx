"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Notas({ id }) {
  const visible = useSelector((state) => state.counter.show);

  const [show, setShow] = useState("hidden");

  useEffect(() => {
    if (visible === true) {
      setShow("p-3 max-w-6xl mx-auto");
    } else {
      setShow("hidden");
    }
  }, [visible]);

  const handleSubmit = async (e) => {
    const fecha = new Date().toDateString();
    const notas = { nota: e.target.notas.value, fecha };
    console.log(notas);

    const res = await fetch(`/api/expediente/notas/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(notas),
    });

    const { msg } = await res.json();
    console.log("ERROR", msg);
  };

  return (
    <div className={show}>
      <h1 className="text-3xl font-bold text-center">
        Form creación de expediente
      </h1>

      <form
        onSubmit={handleSubmit}
        className="py4 mt-4 border-t flex flex-col gap-5"
      >
        <div>
          <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div>
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="grid-last-name"
              >
                notas
              </label>
              <textarea
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 h-52 resize-none"
                name="notas"
              ></textarea>
            </div>
            <button type="submit" className="bg-red-400 p-3 text-white mt-5">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
