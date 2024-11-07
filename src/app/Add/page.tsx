'use client'
import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pass: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Save form data to localStorage
    localStorage.setItem('userData', JSON.stringify(formData));

    // Show submission success message
    setIsSubmitted(true);

    // Clear form fields after submission
    setFormData({ name: '', email: '', pass: '' });

    // Hide the popup message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="w-full h-[75vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 relative">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">ADD Questions</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            className="py-3 px-4 mt-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="py-3 px-4 mt-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="py-3 px-4 mt-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
          
            name="pass"
            id="pass"
            placeholder="Enter your Massage"
            value={formData.pass}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Submit
          </button>
        </form>

        {isSubmitted && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-300">
            Your Question is Add in Feature
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
