'use client';
import React, { useState, ChangeEvent } from 'react';
import { ModeToggle } from './ModeToggle';
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { array as database } from "./Database"; // Adjust the import based on how you export from your database.ts
import Link from 'next/link';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<{ id: number; Title: string }[]>([]);
  const router = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() !== "") {
      const filteredSuggestions = database
        .filter((item) => item.Title.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5); // Limit to 5 suggestions
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (id: number) => {
    router.push(`/questions/${id}`);
    setSearchTerm(""); // Clear the search input
    setSuggestions([]); // Hide suggestions
  };

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const handleClickFunc = () => setToggle(!toggle);

  return (
    <div className="bg-slate-50 z-50 shadow-lg h-20 text-gray-800 sticky top-0 w-full">
      <div className="flex items-center justify-between px-3 md:px-6 py-4">
        {/* Logo */}
        <div className="md:text-2xl text-xl font-serif font-bold text-pink-700">
          <b className="font-bold">&lt;/&gt;</b> CodeWithZohaib
        </div>

        {/* Centered Search Bar */}
        <div className="hidden md:flex items-center justify-center w-full max-w-xl">
          <div className="relative w-full">
            <input
              className="w-full py-2 pl-12 pr-4 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-300"
              type="search"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 left-4 flex items-center text-gray-400">
              <CiSearch className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Right-side Menu */}
        <div className="flex items-center space-x-4">
          {/* Mobile Search Icon */}
          <CiSearch onClick={handleClickFunc} className="md:hidden text-3xl text-gray-600 cursor-pointer" />

          {/* Mode Toggle */}
          <ModeToggle />

          {/* Desktop Login/Signup Buttons */}
          <div className="hidden md:flex space-x-2">
            <button  className="bg-pink-700 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300">
            <Link href='/Connect'> Connect</Link>
            </button>
            <button  className="bg-pink-700 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300">
              <Link href='/Add'>Add</Link>
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <button onClick={toggleMenu} className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-pink-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {toggle && (
        <div className="flex md:hidden justify-center px-6 py-2">
          <div className="relative w-full max-w-md">
            <input
              className="w-full py-2 pl-12 pr-4 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-300"
              type="search"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 left-4 flex items-center text-gray-400">
              <CiSearch className="text-2xl" />
            </div>
          </div>
        </div>
      )}

      {/* Responsive Navbar (Mobile) */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center p-4 space-y-2 bg-slate-100">
          <button className="bg-pink-700 text-white py-2 px-6 rounded-full w-full text-center hover:bg-pink-600 transition duration-300">
          <Link href='/Connect'>Connect</Link>
          </button>
          <button className="bg-pink-700 text-white py-2 px-6 rounded-full w-full text-center hover:bg-pink-600 transition duration-300">
          <Link href='/Add'>Add Questions</Link>
          </button>
        </div>
      )}

      {/* Search Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <div className='flex justify-center w-full'>
          <ul className="w-full max-w-xl bg-white border border-gray-300 mt-2 rounded-lg shadow-lg overflow-hidden z-10">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.id}
                onClick={() => handleSuggestionClick(suggestion.id)}
                className="p-3 cursor-pointer hover:bg-indigo-100 transition duration-200 text-gray-700"
              >
                {suggestion.Title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
