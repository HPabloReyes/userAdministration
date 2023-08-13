"use client";

import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es"; // Importa el archivo de idioma español

export default function Calendario() {
  const [fechas, setFechas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/fechas", {
      cache: "no-store",
    })
      .then((response) => response.json())
      .then((data) => {
        setFechas(data); // Actualizar el estado con los datos obtenidos
      });
  }, []);

  console.log("son tus fechas", fechas);

  const pureba = [
    { title: "event 1", date: "2023-08-12" },
    { title: "event 2", date: "2023-08-12" },
  ];

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale={esLocale}
        events={fechas}
      />
    </>
  );
}
