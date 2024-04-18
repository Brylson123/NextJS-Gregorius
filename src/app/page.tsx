import Nav from "@/app/components/layouts/Nav";
import Header from "@/app/components/layouts/Header";
import Stats from "@/app/components/layouts/Stats";
import {Pricing} from "@/app/components/layouts/Pricing";
import Contact from "@/app/components/layouts/Contact";
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
