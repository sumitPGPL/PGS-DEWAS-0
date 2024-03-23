'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
  const [importantLinksDropdownOpen, setImportantLinksDropdownOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  const toggleAcademicsDropdown = () => {
    setAcademicsDropdownOpen(!academicsDropdownOpen);
  };

  const toggleImportantLinksDropdown = () => {
    setImportantLinksDropdownOpen(!importantLinksDropdownOpen);
  };

  const toggleFeaturesDropdown = () => {
    setFeaturesDropdownOpen(!featuresDropdownOpen);
  };

  const closeAllDropdowns = () => {
    setAboutDropdownOpen(false);
    setAcademicsDropdownOpen(false);
    setImportantLinksDropdownOpen(false);
    setFeaturesDropdownOpen(false);
  };

  
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };


  return (
    <nav className="flex justify-between mt-[-24px] items-center bg-gray-800 text-white p-4">
      <div>
        <Link href="/admin/banner">
          <div className="text-md font-bold cursor-pointer">Home</div>
        </Link>
      </div>
      <div className="relative">
      <div onClick={() => toggleDropdown('about')} className="text-md font-bold cursor-pointer focus:outline-none">
          About
        </div>
        {openDropdown === 'about' && (
          <div className="absolute top-full bg-gray-800 text-white rounded shadow-lg py-2">
            <Link href="/about">
              <div className="block text-sm px-6 py-2 hover:bg-gray-700 cursor-pointer">About Us</div>
            </Link>
          
            <Link href="/about/principals-messages">
              <div className="block px-6 py-2 text-sm hover:bg-gray-700 cursor-pointer">Principal's Messages</div>
            </Link>
            <Link href="/about/school-staff">
              <div className="block px-6 py-2 text-sm hover:bg-gray-700 cursor-pointer">School Staff</div>
            </Link>
          </div>
        )}
      </div>
      <div className="relative">
      <div onClick={() => toggleDropdown('academics')} className="text-md font-bold cursor-pointer focus:outline-none">
          Academics
        </div>
        {openDropdown === 'academics' && (
          <div className="absolute top-full bg-gray-800 text-white rounded shadow-lg py-2">
            <Link href="/academics/academic-features">
              <div className="block px-6 py-2 text-sm hover:bg-gray-700 cursor-pointer">Academic Features</div>
            </Link>
            <Link href="/academics/umang-phase">
              <div className="block px-6 py-2 text-sm hover:bg-gray-700 cursor-pointer">Umang Phase</div>
            </Link>
            <Link href="/academics/tarang-phase">
              <div className="block px-6 py-2 text-sm hover:bg-gray-700 cursor-pointer">Tarang Phase</div>
            </Link>
            <Link href="/academics/pratibha-phase">
              <div className="block px-6 py-2 text-sm hover:bg-gray-700 cursor-pointer">Pratibha Phase</div>
            </Link>
            <Link href="/academics/tejas-phase">
              <div className="block px-6 py-2 text-sm hover:bg-gray-700 cursor-pointer">Tejas Phase</div>
            </Link>
          </div>
        )}
      </div>
      <div className="relative">
        <div onClick={() => toggleDropdown('important links')} className="text-md font-bold cursor-pointer focus:outline-none">
        Important Links
        </div>
        {openDropdown === 'important links' && (
          <div className="absolute top-full bg-gray-800 text-white rounded shadow-lg py-2">
            <Link href="/important-links/admission-process">
              <div className="block px-6 py-2 text-sm hover:bg-gray-700 cursor-pointer">Admission Process</div>
            </Link>
          </div>
        )}
      </div>
      <div className="relative">
      <div onClick={() => toggleDropdown('features')} className="text-md font-bold cursor-pointer focus:outline-none">
          Features
        </div>
        {openDropdown === 'features'&& (
          <div className="absolute top-full bg-gray-800 text-white rounded shadow-lg p-4">
            <Link href="/features/life-at-school">
              <div className="block px-6 py-2 text-sm hover:bg-gray-700 cursor-pointer">Life at School</div>
            </Link>
            <Link href="/features/creative-learning">
              <div className="block px-6 py-2 text-sm hover:bg-gray-700 cursor-pointer">Creative Learning</div>
            </Link>
          </div>
        )}
      </div>

      <div className="relative">
      <div onClick={() => toggleDropdown('news')} className="text-md font-bold cursor-pointer focus:outline-none">
          News
        </div>
        {openDropdown === 'news' && (
          <div className="absolute top-full bg-gray-800 text-white rounded shadow-lg py-2">
            <Link href="/features/life-at-school">
              <div className="block px-6 py-2 text-sm hover:bg-gray-700 cursor-pointer">Life at School</div>
            </Link>
            <Link href="/features/creative-learning">
              <div className="block px-14 py-2 text-sm hover:bg-gray-700 cursor-pointer">Creative Learning</div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
