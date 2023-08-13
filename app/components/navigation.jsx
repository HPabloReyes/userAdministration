import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <div class="bg-white z-10">
        <div class="border py-3 px-6">
          <div class="flex justify-between">
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
              <Link href={"/"}>
                <span class="ml-2 font-semibold text-[#252C32]">
                  En vida Amorosa
                </span>
              </Link>
            </div>

            <div class="ml-6 flex flex-1 gap-x-3">
              <input
                type="text"
                class="w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm"
                placeholder="Realice su búsqueda"
              />
            </div>

            <div class="ml-2 flex">
              <div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                  <path
                    fill-rule="evenodd"
                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <Link href={"/dashboard"}>
                  <span class="text-sm font-medium">Panel de Control</span>
                </Link>
              </div>

              <div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <Link href={"/expedientes"}>
                  <span class="text-sm font-medium">Crear Expediente</span>
                </Link>
              </div>

              <div class="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
                <span class="text-sm font-medium">Sign in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
