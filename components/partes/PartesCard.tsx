// import { formatCurrency, getImagePath } from "@/src/utils"
import { Partes } from "@prisma/client"
// import Image from "next/image"
import AddPartesButton from "./AddPartesButton"


type PartesCard = {
    partes: Partes
}
export default function PartesCard({partes}:PartesCard) {

    // const imagePath = getImagePath(partes.image)

  return (
    <div className="border bg-white">
        <div className="p-5">
            <h3 className="text-lg text-center font-bold">{partes.name}</h3>
            <AddPartesButton 
              partes={partes}
            />
        </div>
    </div>
  )
}
