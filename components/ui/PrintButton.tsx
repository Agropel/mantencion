"use client";


type PrintButtonProps = {
    targetId: string; // ID del elemento que se imprimirá
};

export default function PrintButton({ targetId }: PrintButtonProps) {
    const handlePrint = () => {
        const printContent = document.getElementById(targetId);
        if (!printContent) return;

        const originalContent = document.body.innerHTML;
        document.body.innerHTML = printContent.innerHTML;
        window.print();
        document.body.innerHTML = originalContent;
        window.location.reload(); // Recargar la página para restaurar el contenido original
    };

    return (
        <button
            onClick={handlePrint}
            className="sm:hidden lg:block bg-green-600 hover:bg-green-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer text-center"
        >
            Imprimir
        </button>
    );
}
