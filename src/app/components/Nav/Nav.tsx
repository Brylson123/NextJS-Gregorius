import Link from "next/link";

export default function Nav() {
    return (
        <nav className="bg-white w-full h-1/4 flex items-center justify-center">
            <h1 className="p-10 text-2xl">Gregorius</h1>
            <div className="flex gap-4 text-xl">
                <Link href="/">
                    Strona Główna
                </Link>

                <Link href="/about">
                    O nas
                </Link>

                <Link href="/contact">
                    Kontakt
                </Link>
            </div>
        </nav>
    )
}
