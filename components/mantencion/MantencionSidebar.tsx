import Logo from "../ui/Logo"
import AdminRoute from "./MantencionRoute"

const adminNavigation = [
    {url: '/iniciomantencion', text: 'Inicio', blank: false},
    {url: '/mantencion', text: 'Ordenes De Tarabajo', blank: false},
    {url: '/ordeneslistas', text: 'Ordenes De Tarabajo Listas', blank: false}

]

export default function AdminSidebar() {

    return (
        <>
            <Logo />
            <div className="space-y-3 ">
                <p className="mt-10 uppercase font-bold text-sm text-gray-600 text-center">Navegación</p>
                <nav className="flex flex-col">
                    {adminNavigation.map(link => (
                        <AdminRoute
                            key={link.url}
                            link={link}
                        />
                    ))}
                </nav>
            </div>
        </>

    )
}