import { FaBolt, FaChartBar, FaCloud, FaPenNib, FaShieldAlt } from 'react-icons/fa';
import { FaTruckFast } from 'react-icons/fa6';

const features = [
    {
        icon: FaChartBar,
        title: 'Holidays Tours & travel',
        description: 'Track and analyze your data with powerful analytics tools. Gain valuable insights for better decision-making.',
        bgColor: 'bg-purple-200',
    },
    {
        icon: FaTruckFast,
        title: 'Hotel Bookings',
        description: 'Seamlessly integrate with your existing tools and systems for a smooth workflow experience.',
        bgColor: 'bg-teal-200',
    },
    {
        icon: FaShieldAlt,
        title: 'Themed Vacations',
        description: 'Ensure the safety of your data with top-notch security features. Your privacy is our priority.',
        bgColor: 'bg-yellow-200',
    },
    {
        icon: FaCloud,
        title: 'Camping & Bonfires',
        description: 'Access your data from anywhere with seamless cloud integration. Work without boundaries.',
        bgColor: 'bg-red-200',
    },
    {
        icon: FaPenNib,
        title: 'Valentines ',
        description: 'Organize your workflow with efficient task management features. Stay on top of your projects effortlessly.',
        bgColor: 'bg-green-200',
    },
    {
        icon: FaBolt,
        title: 'Honeymoon Bookings',
        description: 'Monitor and measure your performance with comprehensive metrics. Optimize your processes for maximum efficiency.',
        bgColor: 'bg-orange-200',
    },
];

const NewFeatures = () => {
    return (
        <section id="new-features" className="py-8 bg-gray-100 sm:py-10 lg:py-16 ">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center mt-36">
                    <p className="inline-block px-3 py-px text-xs font-semibold tracking-wider uppercase rounded-full text-orange-500 mb-3">
                        About
                    </p>
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
                        Why the Squad?
                    </h2>
                    <p className=" md:mt-0 text-base leading-7 text-gray-600 sm:mt-8">
                        Experience the joy and aventure
                    </p>
                </div>
                <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
                    {/* Map through features and render dynamically */}
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`md:p-8 lg:p-14 flex flex-col justify-center items-center ${index % 3 === 0 ? '' : 'md:border-l md:border-gray-200'} ${index >= 3 ? 'md:border-t md:border-gray-200' : ''}`}
                        >
                            <div className={`w-14 h-14 rounded-full ${feature.bgColor} flex justify-center items-center`}>
                                {/* Render the icon directly as a React component */}
                                <feature.icon className="text-3xl text-gray-900" />
                            </div>
                            <h3 className="mt-12 text-xl font-bold text-gray-900">{feature.title}</h3>
                            <p className="mt-5 text-base text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default NewFeatures;
