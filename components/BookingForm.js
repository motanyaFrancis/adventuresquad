'use client';
import { useState, useEffect } from 'react';
import { FaHotel, FaTaxi, FaSitemap } from 'react-icons/fa';
import { format, parse } from 'date-fns';

const SearchBar = () => {
    const [location, setLocation] = useState('');
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [guests, setGuests] = useState(1);
    const [selectedTab, setSelectedTab] = useState('hotel'); // Default tab is 'hotel'
    const [isRoundTrip, setIsRoundTrip] = useState(false); // Round trip checkbox state

    const [formattedCheckin, setFormattedCheckin] = useState('');
    const [formattedCheckout, setFormattedCheckout] = useState('');

    // Client-side effect to format dates after the component mounts
    useEffect(() => {
        if (checkin) {
            setFormattedCheckin(format(parse(checkin, 'yyyy-MM-dd', new Date()), 'dd MMM yyyy'));
        }
        if (checkout) {
            setFormattedCheckout(format(parse(checkout, 'yyyy-MM-dd', new Date()), 'dd MMM yyyy'));
        }
    }, [checkin, checkout]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            location, checkin, checkout, guests, selectedTab, isRoundTrip
        });
    };

    const handleReset = () => {
        setLocation('');
        setCheckin('');
        setCheckout('');
        setGuests(1);
        setIsRoundTrip(false);
    };

    const tabConfig = {
        hotel: [
            { name: 'Location', type: 'text', value: location, setter: setLocation, placeholder: 'Where are you going?' },
            { name: 'Check in', type: 'date', value: checkin, setter: setCheckin },
            { name: 'Check out', type: 'date', value: checkout, setter: setCheckout },
        ],
        taxi: [
            { name: 'Location', type: 'text', value: location, setter: setLocation, placeholder: 'Where are you going?' },
            { name: 'Round Trip', type: 'checkbox', value: isRoundTrip, setter: setIsRoundTrip }
        ],
        tour: [
            { name: 'Location', type: 'text', value: location, setter: setLocation, placeholder: 'Where are you going?' },
            { name: 'Check in', type: 'date', value: checkin, setter: setCheckin },
            { name: 'Check out', type: 'date', value: checkout, setter: setCheckout },
        ]
    };

    const handleDateChange = (setter, e) => {
        const inputDate = e.target.value; // This is in YYYY-MM-DD format
        const parsedDate = parse(inputDate, 'yyyy-MM-dd', new Date()); // Parse it into a Date object
        const formattedDate = format(parsedDate, 'dd MMM yyyy'); // Format the date into 'dd MMM yyyy'
        setter(formattedDate); // Update the state with the formatted date
    };

    return (
        <div className="relative z-10">
            <div className="absolute top-[calc(50%-4rem)] left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg max-w-7xl w-full z-20">

                {/* Tabs */}
                <div className="border-b border-gray-200 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                        {['hotel', 'taxi', 'tour'].map((tab) => (
                            <li key={tab} className="me-2">
                                <a
                                    href="#"
                                    onClick={(e) => { e.preventDefault(); setSelectedTab(tab); }}
                                    className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg hover:text-orange-600 hover:border-orange-300 dark:hover:text-orange-300 group ${selectedTab === tab
                                        ? 'text-orange-600 border-orange-600 dark:text-orange-500 dark:border-orange-500 active'
                                        : 'text-gray-500 border-transparent'
                                        }`}
                                >
                                    {tab === 'hotel' && <FaHotel className="w-4 h-4 me-2" />}
                                    {tab === 'taxi' && <FaTaxi className="w-4 h-4 me-2" />}
                                    {tab === 'tour' && <FaSitemap className="w-4 h-4 me-2" />}
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-wrap items-center justify-between space-x-1 gap-4">
                    {tabConfig[selectedTab].map((field, index) => (
                        <div key={index} className="mt-3 flex-1 rounded-xl border bg-gray-100 p-4">
                            <label htmlFor={field.name} className=" ml-3 block text-sm font-bold text-gray-700">{field.name}</label>
                            {field.type === 'text' || field.type === 'number' ? (
                                <input
                                    type={field.type}
                                    id={field.name}
                                    name={field.name}
                                    value={field.value}
                                    onChange={(e) => field.setter(e.target.value)}
                                    placeholder={field.placeholder}
                                    className="w-full appearance-none rounded-lg bg-gray-100 px-3 py-2 leading-tight text-orange-700 focus:bg-white focus:outline-none"
                                />
                            ) : field.type === 'date' ? (
                                <input
                                    type="date"
                                    id={field.name}
                                    name={field.name}
                                    value={field.value}
                                    onChange={(e) => handleDateChange(field.setter, e)}
                                    className="w-full appearance-none rounded-lg bg-gray-100 px-3 py-2 leading-tight text-orange-700 focus:bg-white focus:outline-none"
                                />
                            ) : (
                                <input
                                    type={field.type}
                                    id={field.name}
                                    name={field.name}
                                    checked={field.value}
                                    onChange={(e) => field.setter(e.target.checked)}
                                    className=""
                                />
                            )}
                        </div>
                    ))}

                    {/* Button with gradient */}
                    <button className="rounded-xl m-2 bg-gradient-to-r from-orange-500 to-orange-700 px-16 py-4 font-bold text-white hover:from-orange-600 hover:to-orange-800 transition">
                        SEARCH
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;
