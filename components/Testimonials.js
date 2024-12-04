import Image from 'next/image';

const testimonialsData = [
  {
    quote: "“Working with them has transformed our business. Their solutions streamlined our processes and increased our efficiency tenfold.”",
    company: "InnovateTech",
    location: "United States",
    image: "/images/user1.jpg",
  },
  {
    quote: "“Their expertise and attention to detail are unmatched. We’ve seen amazing results after implementing their solutions.”",
    company: "CloudScape",
    location: "United Kingdom",
    image: "/images/user2.jpg",
  },
  {
    quote: "“An outstanding partner to work with. Their solutions have significantly increased our team's productivity.”",
    company: "EcoLabs",
    location: "Australia",
    image: "/images/user3.jpg",
  }
];

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-pattern bg-cover z-0"></div>
      
      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-xl  text-orange-500  tracking-wide leading-tight animate-fadeInUp">
          Testimonies
        </h2>
        <p className="text-3xl font-bold text-gray-600 opacity-90 mb-12 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          What our Clients say about us
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="group relative bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-100 to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-4 border-transparent"></div>
              <div className="relative z-10">
                <div className="text-orange-400 text-5xl leading-none mb-4 font-serif">“</div>
                <p className="text-gray-900 text-lg leading-relaxed mb-4">
                  {testimonial.quote}
                </p>
                <div className="flex items-center mt-6">
                  <Image src={testimonial.image} alt={testimonial.company} className="w-16 h-16 rounded-full border-4 border-orange-300 shadow-md mr-4" />
                  <div>
                    <h3 className="text-lg font-bold text-orange-500">{testimonial.company}</h3>
                    <p className="text-sm text-gray-900">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <a href="#" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-900 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            See All Testimonies
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
