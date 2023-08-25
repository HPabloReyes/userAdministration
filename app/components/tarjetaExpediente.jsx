"use client";

import { isShow } from "../redux/features/global/globalSlice";
import { useDispatch } from "react-redux";

export default function Tarjeta({ children, data, boton }) {
  const dispatch = useDispatch();

  const estilos = {
    normal:
      "flex items-center justify-center w-full h-32 bg-white rounded-md shadow-md",
    boton:
      "cursor-pointer flex items-center justify-center w-full h-32 bg-white rounded-md shadow-md",
  };

  const handleShow = () => {
    dispatch(isShow());
  };

  return (
    <>
      <div
        onClick={boton === true ? () => handleShow() : null}
        className={boton === true ? estilos.boton : estilos.normal}
      >
        <span className="text-xl tracking-wider text-gray-500 uppercase">
          <div className="flex flex-col items-center justify-center">
            <div>{children}</div>
            <div className="mt-1">{data}</div>
          </div>
        </span>
      </div>
    </>
  );
}
