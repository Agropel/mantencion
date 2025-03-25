import AddPartesForm from "@/components/partes/AddPartesForm";
import PartesForm from "@/components/partes/PartesForm";
import Heading from "@/components/ui/Heading";

export default function CreateProductPage() {
  return (
    <>
      <Heading>Nuevo Producto</Heading>

      <AddPartesForm>
        <PartesForm/>
      </AddPartesForm>
    
    </>
  )
}