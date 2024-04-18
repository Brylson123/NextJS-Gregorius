const Pricing = () => {
    return (
        <div className="relative isolate overflow-hidden bg-blue-100 px-6 py-24 sm:py-32 lg:px-8">
            <div
                className="absolute opacity-20"/>
            <div
                className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"/>
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <div className="mt-10">
                    <div className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <h1>
                            Ceny tulei już od:
                        </h1>
                        <p>
                            200zł<span className="text-red-500">*</span>
                        </p>
                        <p className="text-gray-400 my-20"><span className="text-red-500">*</span>Ceny są zależne od
                            materiału oraz wykonania tulei</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;