import { Partes } from "@prisma/client"
import AddPartesButtonEmergencia from "./AddPartesButtonEmergencia"


type PartesCard = {
    partes: Partes
}
export default function PartesCard({partes}:PartesCard) {

  return (
    <div className="border bg-white">
        <div className="p-5">
            <h3 className="text-lg text-center font-bold">{partes.name}</h3>
            <AddPartesButtonEmergencia 
              partes={partes}
            />
        </div>
    </div>
  )
}
