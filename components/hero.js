export default function Hero() {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            {/* Darkened background with image */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/hero-bg.jpg)', 
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    filter: 'brightness(50%)',  
                }}
            />
            
            {/* Content wrapper */}
            <div className="mx-auto max-w-7xl flex items-center py-32 sm:py-48 lg:py-56">
                {/* Left half for the text */}
                <div className="w-full lg:w-1/2 text-left text-white">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm/6 text-white ring-1 ring-white hover:ring-orange-600">
                            Announcing our next round of funding.{' '}
                            <a href="#" className="font-semibold text-orange-600">
                                <span aria-hidden="true" className="absolute inset-0" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
                        Explore with Adventure Squad
                    </h1>
                    <p className="mt-8 text-lg font-medium sm:text-xl/8">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat.
                    </p>
                    <div className="mt-10 flex items-center justify-start gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                        >
                            Get started
                        </a>
                        <a href="#" className="text-sm/6 font-semibold text-orange-600">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>

                {/* Optionally, you can add another section or image on the right if needed */}
                {/* <div className="w-full lg:w-1/2">
                    Additional content can go here
                </div> */}
            </div>

        </div>
    );
}
