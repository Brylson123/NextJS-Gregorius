"use client";

import {useSpring, animated} from "react-spring";
import {useState} from "react";
import {useInView} from "react-intersection-observer";

const stats = [
    {id: 1, name: 'Firmy które nam zaufały', value: 100},
    {id: 2, name: 'Ilość wykonanych tulei', value: 10000},
    {id: 3, name: 'Zadowolonych klientów', value: 1000},
]

function Count({n}: { n: number }) {
    const [displayAnimation, setDisplayAnimation] = useState(false);
    const {ref, inView} = useInView({});

    const {number} = useSpring({
        from: {number: 0},
        to: {number: displayAnimation || inView ? n : 0},
        delay: 200,
        config: {mass: 1, tension: 20, friction: 10},
    });

    if (inView && !displayAnimation) {
        setDisplayAnimation(true);
    }

    return (
        <animated.span ref={ref}>
            {number.to((n) => n.toFixed(0))}
        </animated.span>
    );
}

export default function Stats() {
    return (
        <div className="bg-blue-100 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                <Count n={stat.value}/>+
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}
