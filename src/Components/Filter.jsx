import React, { useState } from 'react';

const Filter = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedExpertise, setSelectedExpertise] = useState([]);
    const [selectedIndustry, setSelectedIndustry] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [rating, setRating] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleExpertiseChange = (event) => {
        const { value, checked } = event.target;
        setSelectedExpertise(prev =>
            checked ? [...prev, value] : prev.filter(item => item !== value)
        );
    };

    const handleIndustryChange = (event) => {
        const { value, checked } = event.target;
        setSelectedIndustry(prev =>
            checked ? [...prev, value] : prev.filter(item => item !== value)
        );
    };

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    return (
        <div className="bg-white p-4 shadow rounded-lg">
            <div className="mb-4">
                 
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Expertise
                </label>
                {['B2C Sales', 'Growth Marketing', 'Product Marketing'].map(expertise => (
                    <div key={expertise}>
                        <input
                            type="checkbox"
                            value={expertise.toLowerCase().replace(/\s+/g, '')}
                            checked={selectedExpertise.includes(expertise.toLowerCase().replace(/\s+/g, ''))}
                            onChange={handleExpertiseChange}
                        /> {expertise}
                    </div>
                ))}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Industries
                </label>
                {['Administrative Service', 'Education', 'Manufacturing'].map(industry => (
                    <div key={industry}>
                        <input
                            type="checkbox"
                            value={industry.toLowerCase().replace(/\s+/g, '')}
                            checked={selectedIndustry.includes(industry.toLowerCase().replace(/\s+/g, ''))}
                            onChange={handleIndustryChange}
                        /> {industry}
                    </div>
                ))}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Location
                </label>
                <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    value={selectedLocation}
                    onChange={handleLocationChange}
                >
                    <option value="">Select</option>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="chennai">Chennai</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Rating
                </label>
                <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    value={rating}
                    onChange={handleRatingChange}
                >
                    <option value="">Select</option>
                    <option value="2">2 and above</option>
                    <option value="3">3 and above</option>
                    <option value="4">4 and above</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
