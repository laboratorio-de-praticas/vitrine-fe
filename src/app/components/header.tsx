"use client";
import React, { JSX, useState } from "react";
import Image from "next/image";
import { FaFlickr, FaLinkedinIn, FaYoutube, FaInstagram, FaFacebookF, FaTwitter, FaBars, FaTimes } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function SpHeader(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="w-full">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center bg-black w-76 rounded-r-[100px] h-22">
        <Image 
            src="/sp.svg" 
            alt="São Paulo" 
            width={228} 
            height={80} 
            className="w-57" 
          />
        </div>

        <nav className="hidden md:flex items-center space-x-4 pr-10">
          <a href="https://www.flickr.com/governosp" target="_blank" rel="noopener noreferrer" className="bg-gray-500 w-9 h-9 flex items-center justify-center rounded-sm">
            <FaFlickr className="w-7 h-7 text-white" />
          </a>
          <a href="https://www.linkedin.com/company/governosp" target="_blank" rel="noopener noreferrer" className="bg-gray-500 w-9 h-9 flex items-center justify-center rounded-sm">
            <FaLinkedinIn className="w-6 h-6 text-white" />
          </a>
          <a href="https://www.tiktok.com/@governosp" target="_blank" rel="noopener noreferrer" className="bg-gray-500 w-9 h-9 flex items-center justify-center rounded-sm">
            <SiTiktok className="w-6 h-6 text-white" />
          </a>
          <a href="https://www.youtube.com/governosp" target="_blank" rel="noopener noreferrer" className="bg-gray-500 w-9 h-9 flex items-center justify-center rounded-sm">
            <FaYoutube className="w-6 h-6 text-white" />
          </a>
          <a href="https://twitter.com/governosp" target="_blank" rel="noopener noreferrer" className="bg-gray-500 w-9 h-9 flex items-center justify-center rounded-sm">
            <FaTwitter className="w-6 h-6 text-white" />
          </a>
          <a href="https://www.instagram.com/governosp" target="_blank" rel="noopener noreferrer" className="bg-gray-500 w-9 h-9 flex items-center justify-center rounded-sm">
            <FaInstagram className="w-6 h-6 text-white" />
          </a>
          <a href="https://www.facebook.com/governosp" target="_blank" rel="noopener noreferrer" className="bg-gray-500 w-9 h-9 flex items-center justify-center rounded-sm">
            <FaFacebookF className="w-6 h-6 text-white" />
          </a>
          <span className="ml-2 text-gray-600">/governosp</span>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            {menuOpen ? <FaTimes className="w-6 h-6 mr-4 mt-2" /> : <FaBars className="w-6 h-6 mr-4 mt-2" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-gray-400 p-4 mt-3">
          <ul className="flex flex-col space-y-4">
            <li>
              <a href="https://www.flickr.com/governosp" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <FaFlickr className="w-7 h-7 text-white" />
                <span className="text-white font-(family-name:--font-roboto-slab)">Flickr</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/governosp" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <FaLinkedinIn className="w-6 h-6 text-white" />
                <span className="text-white font-(family-name:--font-roboto-slab)">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@governosp" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <SiTiktok className="w-6 h-6 text-white" />
                <span className="text-white font-(family-name:--font-roboto-slab)">TikTok</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/governosp" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <FaYoutube className="w-6 h-6 text-white" />
                <span className="text-white font-(family-name:--font-roboto-slab)">YouTube</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/governosp" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <FaTwitter className="w-6 h-6 text-white" />
                <span className="text-white font-(family-name:--font-roboto-slab)">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/governosp" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <FaInstagram className="w-6 h-6 text-white" />
                <span className="text-white font-(family-name:--font-roboto-slab)">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/governosp" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <FaFacebookF className="w-6 h-6 text-white" />
                <span className="text-white font-(family-name:--font-roboto-slab)">Facebook</span>
              </a>
            </li>
            <li>
              <span className="text-gray-600 font-(family-name:--font-roboto-slab)">/governosp</span>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
