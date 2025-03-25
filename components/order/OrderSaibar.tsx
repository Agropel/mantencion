import { prisma } from '@/src/lib/prisma'
import MaquinaIcon from '../ui/MaquinaIcon'
import Logo from '../ui/Logo'

async function getMaquinas() {
    return await prisma.maquina.findMany();
}

export default async function OrderSaibar() {
    const maquinas = await getMaquinas(); // Obtener TODAS las máquinas

    return (
        <aside className="md:w-80 md:h-screen bg-white md:overflow-scroll"> 
            <Logo />
            <nav className="mt-10">
                {/* Pasamos TODAS las máquinas a MaquinaIcon */}
                <MaquinaIcon maquinas={maquinas} />
            </nav>
        </aside>
    );
}
