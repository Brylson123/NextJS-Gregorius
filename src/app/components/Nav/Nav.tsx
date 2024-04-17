"use client";

import React, {useState} from "react";
import {Menu, X} from "lucide-react";
import {clsx} from "clsx"
import Link from "next/link";

const navigation = [
    {name: 'O nas', href: '#about'},
    {name: 'Kontakt', href: '#contact'},
]

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className={clsx(
                "border-secondary-b fixed z-20 flex w-full items-center border-b-2 bg-transparent py-5 backdrop-blur-lg backdrop-filter",
            )}
        >
            <div
                className="mx-auto flex w-full max-w-7xl items-center justify-between"

            >
                <Link href="/">
                    <p className="text-blue-gradient cursor-pointer text-lg font-bold md:text-xl">
                        Gregorius
                    </p>
                </Link>

                {/* desktop navigation */}
                <div className="hidden gap-9 md:flex">
                    <ul className="flex list-none gap-9">
                        {navigation.map((link) => (
                            <li
                                key={link.name}
                            >
                                <a href={`${link.href}`}>{(link.name)}</a>
                            </li>
                        ))}
                    </ul>

                </div>

                {/* mobile navigation */}
                <div className="flex flex-1 items-center justify-end md:hidden">
                    {isOpen ? (
                        <button onClick={() => setIsOpen(false)}>
                            <X
                                size={25}
                                className="text-blue-gradient hover:text-blue-accent transition-colors"
                            />
                        </button>
                    ) : (
                        <button onClick={() => setIsOpen(true)}>
                            <Menu
                                size={25}
                                className="text-blue-gradient hover:text-blue-accent transition-colors"
                            />
                        </button>
                    )}
                    <div
                        className={clsx(
                            !isOpen ? "hidden" : "flex",
                            "bg-blue-200 absolute top-20 z-10 mx-4 my-1 min-w-[140px] flex-col gap-3 rounded-xl p-6 shadow-lg",
                        )}
                    >
                        <ul className="flex list-none flex-col items-end justify-center gap-4">
                            {navigation.map((link) => (
                                <li
                                    key={link.name}
                                    onClick={() => {
                                        setIsOpen(false);

                                    }}
                                >
                                    <a href={`${link.href}`}>{(link.name)}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
