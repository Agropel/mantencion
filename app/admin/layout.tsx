import ToastNotification from "@/components/ui/ToastNotification"
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminSidebarCel from "@/components/admin/AdminSidebarCel";

export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="md:flex">
                <aside className="md:w-72 md:h-screen bg-white">
                    <div className="hidden sm:block"><AdminSidebar/></div>
                    <div className="block sm:hidden"><AdminSidebarCel/></div>
                </aside>

                <main className="md:flex-1 md:h-screen md:overflow-y-scroll bg-gray-100 p-5">
                    {children}
                </main>
            </div>

            <ToastNotification />
        </>
    )
}