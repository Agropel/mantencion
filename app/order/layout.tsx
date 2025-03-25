import OrderSaibar from "@/components/order/OrderSaibar";
import OrderSummary from "@/components/order/OrderSummary";
import ToastNotification from "@/components/ui/ToastNotification";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

    return (
       <>
        <div className="md:flex">
            <OrderSaibar/> 
            <main className="md:flex-1  md:h-screen md:overflow-scroll p-5">
                {children}
            </main>
            
            <OrderSummary/>
        </div>

        <ToastNotification/>
       </> 
    )

}