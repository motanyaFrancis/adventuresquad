import Image from 'next/image';

const newsData = [
  {
    id: 1,
    title: 'Travel Information - How to Reach Bandhavgarh National Park',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. ',
    date: 'December 4, 2024',
    category: 'Technology',
    imageUrl: '/images/package-1.jpg',
    imageRatio: '16:10'
  },
  {
    id: 2,
    title: 'Royal Kids being spotted  night safari ',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit.',
    date: 'December 4, 2024',
    category: 'Business',
    imageUrl: '/images/package-2.jpg',
    imageRatio: '16:9'
  },
  {
    id: 3,
    title: 'Bird Watching in Tourist Area & in Buffer Zone',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit.',
    date: 'December 4, 2024',
    category: 'Health',
    imageUrl: '/images/package-3.jpg',
    imageRatio: '16:9'
  },
  {
    id: 4,
    title: 'Bird Watching Paradise in Pench National park',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit.',
    date: 'December 4, 2024',
    category: 'Sports',
    imageUrl: '/images/package-4.jpg',
    imageRatio: '16:9'
  }
];

const LatestNews = () => {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto" id="latest">
      {/* Section Title and Description */}
      <div className="text-center mb-12">
        <h2 className="text-xl  text-orange-500  tracking-wide leading-tight animate-fadeInUp mb-4">Latest</h2>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">News & Blog</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
          Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.
        </p>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Featured News */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg">
            <Image
              src={newsData[0].imageUrl}
              alt={newsData[0].title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="mt-4">
            <p className="mt-1 text-sm text-gray-500 uppercase ">
              {newsData[0].date} | {newsData[0].category}
            </p>
            <h3 className="text-xl text-gray-900 font-semibold">{newsData[0].title}</h3>
            <p className="mt-2 text-gray-600">{newsData[0].description}</p>
          </div>
        </div>

        {/* Other Articles */}
        <div className="col-span-1 md:col-span-2 space-y-8">
          {newsData.slice(1).map((news) => (
            <div key={news.id} className="flex flex-col md:flex-row md:flex-1">
              {/* Image Container with larger size */}
              <div className="relative w-full md:w-64 h-48 mb-4 md:mb-0 md:mr-6">
                <Image
                  src={news.imageUrl}
                  alt={news.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* Content Area */}
              <div className="flex-1">
                <p className="mt-1 text-sm text-gray-500 uppercase">
                  {news.date} | {news.category}
                </p>
                <h3 className="text-lg text-gray-900 font-semibold">{news.title}</h3>
                <p className="mt-2 text-gray-600">{news.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestNews;
