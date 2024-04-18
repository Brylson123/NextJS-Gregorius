import Nav from "@/app/components/Nav/Nav";
import Header from "@/app/components/Header/Header";
import Stats from "@/app/components/Stats/Stats";
import {Pricing} from "@/app/components/Pricing/Pricing";
import Contact from "@/app/components/Contact/Contact";
import {Toaster} from "react-hot-toast";

export default function Home() {
    return (
        <div>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
                toastOptions={{
                    style: {
                        fontWeight: 500,
                        borderRadius: "10px",
                        background: "var(--primary-b)",
                        color: "var(--primary-t)",
                    },
                }}
            />
            <Nav/>
            <Header/>
            <Pricing/>
            <Stats/>
            <Contact/>
        </div>
    )
}
