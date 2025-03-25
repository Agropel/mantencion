import ToastNotification from "@/components/ui/ToastNotification"
// import MantencionSidebar from "@/components/mantencion/MantencionSidebar";
import Logo from "@/components/ui/Logo";

export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="md:flex">
                <aside className="md:w-72 md:h-screen bg-white">
                    <Logo />
                </aside>

                <main className="md:flex-1 md:h-screen md:overflow-y-scroll bg-gray-100 p-2">
                    {children}
                </main>
            </div>

            <ToastNotification />
        </>
    )
}