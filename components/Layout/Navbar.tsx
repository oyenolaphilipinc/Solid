"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="fixed w-full md:max-w-7xl bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image 
                src={'/images/logo/logo-light.svg'}
                alt={"Hello"}
                width={90}
                height={90}
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex space-x-3">
              <Link href="/dashboard" className="text-gray-800 hover:text-gray-600 px-3 rounded-md mt-5 text-sm font-medium">
                Home
              </Link>
              <Link href="/free-templates" className="text-gray-800 hover:text-gray-600 px-3 mt-5 rounded-md text-sm font-medium">
                Free Templates
              </Link>
              <Link href="/templates" className="text-gray-800 hover:text-gray-600 px-3 mt-5 rounded-md text-sm font-medium">
                Pro Templates
              </Link>
              <Link href="/settings" className="text-gray-800 hover:text-gray-600 px-3 mt-5 rounded-md text-sm font-medium">
                Settings
              </Link>
              <Link href="/referral" className="text-gray-800 hover:text-gray-600 px-3 mt-5 rounded-md text-sm font-medium">
                Referral
              </Link>
              <Link href="/profile" className="text-gray-800 hover:text-gray-600 px-3 mt-5 rounded-md text-sm font-medium">
                Profile
              </Link>
              <Image 
                src={'/images/user/fashion.jpg'}
                width={40}
                height={40}
                alt={"Hello"}
                className="rounded-full mt-2 cursor-pointer"
              />
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleNav} className="text-gray-800 focus:outline-none">
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {navOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/dashboard" className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/free-templates" className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Free Templates
            </Link>
            <Link href="/templates" className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Pro Templates
            </Link>
            <Link href="/settings" className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Settings
            </Link>
            <Link href="/profile" className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Referral
            </Link>
            <Link href="/profile" className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
