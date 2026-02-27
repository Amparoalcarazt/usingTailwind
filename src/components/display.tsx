type DisplayProps = {
  titulo: string
  imagenUrl: string
}

export default function Display({ titulo, imagenUrl }: DisplayProps) {
  return (
    <div className="rounded-lg p-4 w-64 shadow bg-[#a2d170] hover:bg-green-700 hover:text-white">
      <img
        src={imagenUrl}
        alt={titulo}
        className="w-48 h-48 object-cover rounded mx-auto"
      />

      <h2 className="text-center text-black font-semibold mt-2 ">{titulo}</h2>
    </div>
  )
}