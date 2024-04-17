import Nav from "@/app/components/Nav/Nav";
import Header from "@/app/components/Header/Header";
import Stats from "@/app/components/Stats/Stats";
import {Pricing} from "@/app/components/Pricing/Pricing";

export default function Home() {
    return (
        <div>
            <Nav/>
            <Header/>
            <Pricing/>
            <Stats/>
        </div>
    )
}
