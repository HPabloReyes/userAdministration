import Link from "next/link";
import Calendario from "./calendario";

async function getData() {
  const res = await fetch("http://localhost:3000/api/expediente", {
    cache: "no-store", // Agregar esta opción para deshabilitar la caché
  });
  return res.json();
}

export default async function DashBoard() {
  const leftMenu = [
    {
      label: "Dashboard",
      svg: " M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z",
      svg2: " M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z",
    },
    {
      label: "Users",
      svg: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
    },
  ];

  const pacientes = await getData();
  //console.log(pacientes);

  return (
    <div>
      <div>
        <div class="flex overflow-hidden bg-white pt-16">
          <aside
            id="sidebar"
            class=" h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-4/12 transition-width duration-75"
            aria-label="Sidebar"
          >
            <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
              <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div class="flex-1 px-3 bg-white divide-y space-y-1">
                  <ul class="space-y-2 pb-2">
                    {leftMenu.map(({ label, svg, svg2 }) => (
                      <li>
                        <Link
                          href={"#"}
                          className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                        >
                          <svg
                            className={
                              "w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
                            }
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d={svg}></path>
                            <path d={svg2}></path>
                          </svg>
                          <span className="ml-3">{label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Calendario />
                </div>
              </div>
            </div>
          </aside>
          <div
            id="main-content"
            class="h-full w-full bg-gray-50 relative overflow-y-auto "
          >
            <main>
              <div class="pt-6 px-4">
                <div class="grid grid-cols-1  xl:gap-4 my-4">
                  <div class="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                    <div class="flex items-center justify-between mb-4">
                      <h3 class="text-xl font-bold leading-none text-gray-900">
                        Lista de pacientes{" "}
                      </h3>
                    </div>
                    <div class="flow-root">
                      <ul role="list" class="divide-y divide-gray-200">
                        {pacientes.map(({ nombre, plan, cita, hora, _id }) => {
                          const formattedCita = new Date(
                            cita
                          ).toLocaleDateString("es-ES", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          });

                          return (
                            <li className="py-3 sm:py-4">
                              <Link href={`/paciente/${_id}`}>
                                <div className="flex items-center space-x-4">
                                  <div className="flex-shrink-0">
                                    <img
                                      className="h-8 w-8 rounded-full"
                                      src="https://demo.themesberg.com/windster/images/users/neil-sims.png"
                                      alt="Neil image"
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                      {nombre}
                                    </p>

                                    <p className="text-sm text-gray-500 truncate">
                                      {plan}
                                    </p>

                                    <p className="text-sm text-gray-500 truncate">
                                      {formattedCita}
                                    </p>
                                  </div>
                                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    {hora} - Hrs
                                  </div>
                                </div>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
