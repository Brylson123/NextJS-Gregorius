const callouts = [
    {
        name: 'Profesjonalistami',
        description: 'Dokładamy wszelkich starań aby spełnić oczekiwania naszych klientów',
        imageSrc: 'https://images.pexels.com/photos/3951881/pexels-photo-3951881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    },
    {
        name: 'Profejsonalną firmą z najlepszymi maszynami i narzędziami',
        description: 'Posiadmay profesjonalne narzędzia, którymi tworzymy najwyższej jakości produkty',
        imageSrc: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    },
    {
        name: 'Idącą z trendem',
        description: 'Dokładamy wszelkich starań, aby iść z czasem',
        imageSrc: 'https://images.pexels.com/photos/3769139/pexels-photo-3769139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    },
]
export default function Header() {
    return (
        <header className="w-full h-full">
            <div className="bg-blue-100 h-full">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <h2 className="text-2xl font-bold text-gray-900">Kim jesteśmy?</h2>

                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                            {callouts.map((callout) => (
                                <div key={callout.name} className="group relative">
                                    <div
                                        className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64">
                                        <img
                                            src={callout.imageSrc}
                                            alt={callout.imageAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <h3 className="mt-6 text-sm text-gray-500">

                                        <span className="absolute inset-0"/>
                                        {callout.name}

                                    </h3>
                                    <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
