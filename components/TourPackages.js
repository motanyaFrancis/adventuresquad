import Image from 'next/image';

const TourPackages = () => {
    return (
        <section id="packages" className="py-16 bg-white">
            <div className="container mx-auto text-center">
                <h3 className="text-3xl font-bold mb-6">Tour Packages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-200 rounded-lg overflow-hidden">
                        <Image
                            src="/images/package-1.jpg"  // Image from the 'public/img' folder
                            alt="Standard Package"
                            width={500}  // Adjust width as needed
                            height={300}  // Adjust height as needed
                            className="w-full h-48 object-cover"
                        />
                        <h4 className="text-xl font-bold py-4">Standard</h4>
                    </div>
                    <div className="bg-gray-200 rounded-lg overflow-hidden">
                        <Image
                            src="/images/package-2.jpg"  // Image from the 'public/img' folder
                            alt="Deluxe Package"
                            width={500}
                            height={300}
                            className="w-full h-48 object-cover"
                        />
                        <h4 className="text-xl font-bold py-4">Deluxe</h4>
                    </div>
                    <div className="bg-gray-200 rounded-lg overflow-hidden">
                        <Image
                            src="/images/package-3.jpg"  // Image from the 'public/img' folder
                            alt="Premium Package"
                            width={500}
                            height={300}
                            className="w-full h-48 object-cover"
                        />
                        <h4 className="text-xl font-bold py-4">Premium</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TourPackages;
