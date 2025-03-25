import OrderSaibarEmergencia from "@/components/order/OrderSaibarEmergencia";
import OrderSummaryEmergencia from "@/components/order/OrderSummaryEmergencia"
import ToastNotification from "@/components/ui/ToastNotification";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

    return (
       <>
        <div className="md:flex">
            <OrderSaibarEmergencia/> 
            <main className="md:flex-1  md:h-screen md:overflow-scroll p-5">
                {children}
            </main>
            
            <OrderSummaryEmergencia/>
        </div>

        <ToastNotification/>
       </> 
    )

}