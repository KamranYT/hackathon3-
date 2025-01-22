"use client"; // Add this at the top to make it a Client Component

import Link from "next/link";
import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { useRouter } from "next/navigation"; // Correct import for useRouter in App Router
import { FiPhoneCall } from "react-icons/fi";

const Header: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPage = e.target.value;
    if (selectedPage) {
      router.push(selectedPage); // Navigate programmatically
    }
  };

  return (
    <div>
      {/* Top Banner */}
      <div className="bg-[#7E33E0] text-white text-xs sm:text-sm md:text-lg flex flex-col md:flex-row md:justify-between items-center gap-2 sm:gap-4 py-2 px-3 sm:px-5">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <a href="mailto:mk7275374@gmail.com" className="hover:text-gray-300 flex gap-1">
            <CiMail className="mt-1" /> <span>mk7275374@gmail.com</span>
          </a>
          <a href="tel:+1234567890" className="hover:text-gray-300 flex gap-1">
            <FiPhoneCall className="mt-1" /> <span>+92 3313007384</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          {/* Language Dropdown */}
          <select
            className="bg-transparent text-white cursor-pointer focus:outline-none"
            defaultValue="English"
          >
            <option value="English" className="bg-pink-500 text-black">English</option>
            <option value="Urdu" className="bg-pink-500 text-black">Urdu</option>
            <option value="Fransic" className="bg-pink-500 text-black">Fransic</option>
            <option value="Arabic" className="bg-pink-500 text-black">Arabic</option>
            <option value="Hindi" className="bg-pink-500 text-black">Hindi</option>
            <option value="Spanish" className="bg-pink-500 text-black">Spanish</option>
          </select>

          {/* Currency Dropdown */}
          <select
            className="bg-transparent text-white cursor-pointer focus:outline-none"
            defaultValue="Rupees"
          >
            <option value="INR" className=" text-black">Rupees (PKR)</option>
            <option value="PKR" className="bg-pink-500 text-black">RUPEES (INR)</option>
            <option value="USD" className="bg-pink-500 text-black">US Dollar (USD)</option>
            <option value="SAR" className="bg-pink-500 text-black">Saudi Riyal (SAR)</option>
            <option value="EUR" className="bg-pink-500 text-black">Euro (EUR)</option>
            <option value="USD" className="bg-pink-500 text-black">US Dollar (USD)</option>
          </select>

          {/* Login Link */}
          <Link href="/" className="flex gap-1 font-serif">
            Login <IoMdLogIn className="mt-1" />
          </Link>

          {/* Icons */}
          <div className="flex gap-2 sm:gap-4">
            <button className="hover:text-red-600 flex">
              Wishlist <CiHeart className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <Link href="/shop" className="text-lg">
              <RiShoppingCart2Line className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md px-3 sm:px-5 py-3 flex flex-wrap justify-between items-center gap-2 sm:gap-4 md:gap-10">
        {/* Logo */}
        <div className="text-lg sm:text-2xl md:text-4xl font-bold text-gray-800">Hekto</div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            <li>
              <select
                className="text-pink-600 cursor-pointer"
                defaultValue=""
                onChange={handleNavigation}
              >
                <option value="/">Home</option>
                <option value="/contact">Contact</option>
                <option value="/about">About</option>
                <option value="/faq">Faq</option>
              </select>
            </li>
            <li>
              <Link href="/pages" className="hover:text-gray-700">Pages</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-gray-700">Products</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-700">Blog</Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-gray-700">Shop</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-700">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-full sm:mx-5 sm:max-w-md">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full border border-gray-300 px-2 py-1 sm:px-4 sm:py-2 outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
