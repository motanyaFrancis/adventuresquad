import { FaCampground, FaShieldAlt, FaWallet } from 'react-icons/fa'; // Importing icons

const CTASection = () => {
    return (
        <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url(/images/package-2.jpg)" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
            <div className="container mx-auto px-6 relative z-10 flex items-center h-full">
                <div className="flex w-full md:w-1/2 flex-col text-white ml-auto">
                    <h2 className="text-5xl font-bold leading-tight mb-20">
                        Let's <span className="text-orange-500 ">Explore</span> the world With Adventure Squad
                    </h2>
                    <div className="flex  mb-10">
                        {/* Safari Section */}
                        <div className="flex flex-col items-center text-center flex-1 border-r border-opacity-30 last:border-0 p-6">
                            <FaCampground className="text-6xl mb-4" />
                            <p className="text-2xl">100+ Safaris</p>
                        </div>

                        {/* Trust & Safety Section */}
                        <div className="flex flex-col items-center text-center flex-1 border-r border-opacity-30 last:border-0 p-6">
                            <FaShieldAlt className="text-6xl mb-4" />
                            <p className="text-2xl">Trust & Safety</p>
                        </div>

                        {/* Best Price Guarantee Section */}
                        <div className="flex flex-col items-center text-center flex-1 last:border-0 p-6">
                            <FaWallet className="text-6xl mb-4" />
                            <p className="text-2xl ">Best Price Guarantee</p>
                        </div>
                    </div>


                    <p>
                        Magna eu voluptate aliqua cupidatat reprehenderit ullamco exercitation commodo ex elit esse tempor ad. Dolore enim labore eiusmod nisi labore veniam deserunt ullamco cupidatat culpa ipsum reprehenderit. Nulla id ad aute consequat laboris anim sint fugiat. Aute consectetur deserunt officia cillum ad.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
