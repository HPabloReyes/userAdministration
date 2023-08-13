export default function Tarjeta({ children, data }) {
  return (
    <>
      <div className="flex items-center justify-center w-full h-32 bg-white rounded-md shadow-md">
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
