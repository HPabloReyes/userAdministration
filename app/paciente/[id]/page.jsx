import Tarjeta from "../../components/tarjetaExpediente";
import Image from "next/image";
import Notas from "../../components/notas";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/paciente/${id}`, {
    cache: "no-store", // Agregar esta opción para deshabilitar la caché
  });
  return res.json();
}

export default async function ({ params }) {
  const { id } = params;
  const expediente = await getData(id);

  const formattedCita = new Date(expediente.cita).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const seguro = "p-3 max-w-6xl mx-auto";

  return (
    <div className="flex">
      <div className="flex flex-col flex-1 max-h-full pl-2 pr-2 rounded-md xl:pr-4">
        <div className="p-4 text-white bg-blue-500 rounded-md shadow-md mt-4">
          <div className="flex items-center justify-center">
            <span className="text-3xl font-semibold tracking-wider uppercase">
              {expediente.nombre}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            className=" w-80 p-4 "
            height={512}
            width={920}
            src={"/user.png"}
          ></Image>
        </div>
        {/* <!-- Main Content --> */}
        <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
          <Tarjeta boton={true}>Añadir notas</Tarjeta>
          <Tarjeta>Reagendar cita</Tarjeta>
        </div>

        <main className="flex-1 pt-2">
          <Notas id={expediente._id}></Notas>
          {/* <!-- Placeholder Cards --> */}

          <div className="flex items-center justify-center p-4 mt-4 bg-white rounded-md shadow-md">
            <span className="text-xl tracking-wider text-gray-500 uppercase">
              {expediente.plan}
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-5">
            <Tarjeta data={expediente.edad + " años"}>Edad</Tarjeta>
            <Tarjeta data={expediente.tema}>Tema</Tarjeta>
            <Tarjeta data={formattedCita}>Proxima cita</Tarjeta>
            <Tarjeta data={expediente.hora}>Hora de cita</Tarjeta>
            <Tarjeta data={expediente.tarea}>Tarea</Tarjeta>
          </div>
          <div className="p-4 text-white bg-blue-400 rounded-md shadow-md mt-2">
            <h2 className="text-1xl font-semibold tracking-wider uppercase flex items-center justify-center">
              Observaciones:
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 my-4 mt-4">
            <div>
              {expediente.notas.map((e) => {
                const fecha = new Date(e.fecha);
                const dia = fecha.getDate();
                const mes = fecha.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
                const anio = fecha.getFullYear();

                const fechaFormateada = `Fecha: ${dia}/${mes}/${anio} `;

                return (
                  <div key={e.id} className="mb-4">
                    <Tarjeta data={e.nota}>{fechaFormateada}</Tarjeta>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
