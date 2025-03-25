import Logo from "../ui/Logo"
import AdminRoute from "./AdminRoute"

const adminNavigation = [
    // {url: '/admin/orders', text: 'OT Pendientes', blank: false},
    // {url: '/admin/listas', text: 'OT Listas', blank: false},
    {url: '/admin/inicio', text: 'Inicio', blank: false},
    {url: '/admin/maquinas', text: 'Listado De Equipos', blank: false},
    {url: '/admin/partes', text: 'Listado De Trabajos', blank: false},
    {url: '/admin/tipos', text: 'Tipo De Trabajos', blank: false},
    {url: '/mantencion', text: 'Mantencion', blank: false},
    {url: '/emergencia/13', text: 'Cear Orden Emergencia', blank: true},
    {url: '/order/13', text: 'Cear Orden', blank: true},
]

export default function AdminSidebar() {

    return (
        <>
            <Logo />
            <div className="space-y-3">
                
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