import ToastNotification from "@/components/ui/ToastNotification"
import MantencionSidebar from "@/components/mantencion/MantencionSidebar";

export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="md:flex">
                <aside className="md:w-72 md:h-screen bg-white">
                    <MantencionSidebar />
                </aside>

                <main className="md:flex-1 md:h-screen md:overflow-y-scroll bg-gray-100 p-2">
                    {children}
                </main>
            </div>

            <ToastNotification />
        </>
    )
}