import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center mt-5">  
        <div className="relative w-48 h-32">
            <Image
                fill
                alt="Logo Agropel"
                src='/agropel-logo.png'
            />
        </div>
    </div>
  )
}
