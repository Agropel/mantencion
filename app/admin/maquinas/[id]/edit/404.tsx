import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
        <Heading>No Encontrado</Heading>
        <Link
            href='/admin/maquinas'
            className="bg-green-600 text-black px-10 py-3 text-xl text-center font-bold cursor-pointer w-full lg:w-auto"
        >Volver</Link>
    </div>
  )
}