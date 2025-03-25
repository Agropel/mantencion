import AddMaquinasForm from "@/components/maquinas/AddMaquinasForm";
import MaquinasForm from "@/components/maquinas/MaquinasForm";
import Heading from "@/components/ui/Heading";

export default function CreateProductPage() {
  return (
    <>
      <Heading>Nuevo Equipo</Heading>

      <AddMaquinasForm>
        <MaquinasForm/>
      </AddMaquinasForm>
    
    </>
  )
}