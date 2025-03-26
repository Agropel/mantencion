import { prisma } from '@/src/lib/prisma'
import MaquinaIcon from '../ui/MaquinaIcon'
import Logo from '../ui/Logo'

async function getMaquinas() {
    return await prisma.maquina.findMany();
}

export default async function OrderSaibar() {
    const maquinas = await getMaquinas();

    return (
        <aside className="md:w-80 md:h-screen bg-white md:overflow-scroll"> 
            <Logo />
            <nav className="mt-10">
                <MaquinaIcon maquinas={maquinas} />
            </nav>
        </aside>
    );
}
