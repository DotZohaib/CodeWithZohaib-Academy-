'use client';
import React, { useState, ChangeEvent } from 'react';
import { ModeToggle } from './ModeToggle';
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { array as database } from "./Database";
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
        .slice(0, 5);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (id: number) => {
    router.push(`/questions/${id}`);
    setSearchTerm("");
    setSuggestions([]);
    setToggle(false); // Close mobile search when suggestion is clicked
  };

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const handleClickFunc = () => setToggle(!toggle);

  return (
    <div className="bg-slate-50 z-50 shadow-lg text-gray-800 sticky top-0 w-full">
      {/* Main Navbar Container */}
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 py-4 min-h-[4rem]">
        
        {/* Logo - Responsive sizing */}
        <div className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-pink-700 flex-shrink-0">
          <span className="font-bold">&lt;/&gt;</span>
          <span className="hidden xs:inline ml-1">CodeWithZohaib</span>
          <span className="xs:hidden ml-1">Code</span>
        </div>

        {/* Desktop Search Bar - Hidden on mobile/tablet */}
        <div className="hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-4">
          <div className="relative w-full">
            <input
              className="w-full py-2.5 pl-12 pr-4 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-300 text-sm"
              type="search"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search questions..."
            />
            <div className="absolute inset-y-0 left-4 flex items-center text-gray-400">
              <CiSearch className="text-xl" />
            </div>
          </div>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
          
          {/* Mobile/Tablet Search Icon */}
          <button 
            onClick={handleClickFunc} 
            className="lg:hidden p-2 text-gray-600 hover:text-pink-700 transition-colors duration-200"
            aria-label="Toggle search"
          >
            <CiSearch className="text-2xl sm:text-3xl" />
          </button>

          {/* Mode Toggle */}
          <div className="flex-shrink-0">
            <ModeToggle />
          </div>

          {/* Desktop Buttons - Hidden on mobile/tablet */}
          <div className="hidden md:flex space-x-2">
            <Link href='/Connect'>
              <button className="bg-pink-700 text-white py-2 px-4 lg:px-6 rounded-full hover:bg-pink-600 transition duration-300 text-sm lg:text-base font-medium">
                Connect
              </button>
            </Link>
            <Link href='/Add'>
              <button className="bg-pink-700 text-white py-2 px-4 lg:px-6 rounded-full hover:bg-pink-600 transition duration-300 text-sm lg:text-base font-medium">
                Add
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-pink-700"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Search Bar */}
      {toggle && (
        <div className="lg:hidden px-3 sm:px-4 md:px-6 py-3 bg-slate-50 border-t border-gray-200">
          <div className="relative w-full max-w-lg mx-auto">
            <input
              className="w-full py-2.5 pl-12 pr-4 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-300 text-sm"
              type="search"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search questions..."
            />
            <div className="absolute inset-y-0 left-4 flex items-center text-gray-400">
              <CiSearch className="text-xl" />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-100 border-t border-gray-200 py-4 px-3 sm:px-4">
          <div className="flex flex-col space-y-3 max-w-sm mx-auto">
            <Link href='/Connect'>
              <button 
                className="w-full bg-pink-700 text-white py-3 px-6 rounded-full hover:bg-pink-600 transition duration-300 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Connect
              </button>
            </Link>
            <Link href='/Add'>
              <button 
                className="w-full bg-pink-700 text-white py-3 px-6 rounded-full hover:bg-pink-600 transition duration-300 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Add Questions
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Search Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <div className="absolute left-0 right-0 z-50 px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <ul className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
              {suggestions.map((suggestion, index) => (
                <li
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion.id)}
                  className={`p-3 sm:p-4 cursor-pointer hover:bg-indigo-50 transition duration-200 text-gray-700 text-sm sm:text-base ${
                    index !== suggestions.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div className="truncate">
                    {suggestion.Title}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
