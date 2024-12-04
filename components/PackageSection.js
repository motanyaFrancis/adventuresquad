import Image from 'next/image';

export default function TourismPackages() {
  const tourismPackages = [
    {
      title: 'Mountain Adventures',
      image: '/images/package-1.jpg',
      description: 'Explore the highest peaks and breathtaking views.',
      link: '/mountain-adventures',
    },
    {
      title: 'Beach Escapes',
      image: '/images/package-2.jpg',
      description: 'Relax on pristine beaches and enjoy the ocean breeze.',
      link: '/beach-escapes',
    },
    {
      title: 'Wildlife Safaris',
      image: '/images/package-3.jpg',
      description: 'Encounter incredible wildlife in their natural habitats.',
      link: '/wildlife-safaris',
    },
    {
      title: 'Cultural Experiences',
      image: '/images/package-4.jpg',
      description: 'Immerse yourself in diverse cultures and traditions.',
      link: '/cultural-experiences',
    },
  ];

  return (
    <section className="bg-gray-100 text-gray-700 py-16">
      <div className="container mx-auto px-4">
        <h5 className="text-orange-500">Let's Explore</h5>
        <h2 className="text-3xl font-bold  mb-8"> Tour Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {tourismPackages.map((pkg, index) => (
            <div
              key={pkg.title}
              className={`relative bg-cover bg-center bg-no-repeat h-96 sm:h-128 md:h-160 rounded-lg shadow-md`}
              style={{ backgroundImage: `url(${pkg.image})` }}
            >
              <div className="absolute bottom-0 right-0 bg-black bg-opacity-75 text-white p-4 rounded-lg">
                <h3 className="text-xl font-bold">{pkg.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-right">
          <a href="#" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-900 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            See All Packages
            <span className="inline-block ml-2 text-xl">&#8594;</span> {/* Unicode right arrow */}
          </a>
        </div>
      </div>
    </section>
  );
}
