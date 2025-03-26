import AddTiposForm from "@/components/tipos/AddTiposForm";
import TiposForm from "@/components/tipos/TiposForm";
import Heading from "@/components/ui/Heading";

export default function CreateProductPage() {
  return (
    <>
      <Heading>Nuevo Equipo</Heading>

      <AddTiposForm>
        <TiposForm/>
      </AddTiposForm>
    
    </>
  )
}