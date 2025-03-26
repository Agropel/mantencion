import { prisma } from '@/src/lib/prisma'
import MaquinaIconEmergencia from '../ui/MaquinaIconEmergencia'
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

                <div className="max-h-[200px] overflow-y-auto">

                    <MaquinaIconEmergencia maquinas={maquinas} />
                </div>
            </nav>
        </aside>
    );
}
