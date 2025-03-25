import React from "react";
import {
  FaFlickr,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

export default function SpHeader() {
  return (
  <div className="flex flex-row justify-between">                   
    <div className="flex items-center justify-left bg-black p-4 w-120 rounded-r-[100px] h-20">
        <img src="/sp.svg" alt="são paulo" className="w-57" />
    </div>
    <div className="flex items-center justify-end space-x-4 pr-10">
        <a href="https://www.flickr.com/governosp" target="_blank" rel="noopener noreferrer">
    <div className="w-9 h-9 flex items-center justify-center rounded-sm" style={{ backgroundColor: "#808080" }}>
            <FaFlickr className="w-7 h-7 text-white" />
    </div>
        </a>
        <a href="https://www.linkedin.com/company/governosp" target="_blank" rel="noopener noreferrer">
    <div className="w-9 h-9 flex items-center justify-center rounded-sm" style={{ backgroundColor: "#808080" }}>
            <FaLinkedinIn className="w-6 h-6 text-white" />
    </div>
        </a>
        <a href="https://www.tiktok.com/@governosp" target="_blank" rel="noopener noreferrer">
    <div className="w-9 h-9 flex items-center justify-center rounded-sm" style={{ backgroundColor: "#808080" }}>
            <SiTiktok className="w-6 h-6 text-white" />
    </div>
        </a>
        <a href="https://www.youtube.com/governosp" target="_blank" rel="noopener noreferrer">
    <div className="w-9 h-9 flex items-center justify-center rounded-sm" style={{ backgroundColor: "#808080" }}>
            <FaYoutube className="w-6 h-6 text-white" />
    </div>
        </a>
        <a href="https://twitter.com/governosp" target="_blank" rel="noopener noreferrer">
    <div className="w-9 h-9 flex items-center justify-center rounded-sm" style={{ backgroundColor: "#808080" }}>
            <FaTwitter className="w-6 h-6 text-white" />
    </div>
        </a>
        <a href="https://www.instagram.com/governosp" target="_blank" rel="noopener noreferrer">
    <div className="w-9 h-9 flex items-center justify-center rounded-sm" style={{ backgroundColor: "#808080" }}>
            <FaInstagram className="w-6 h-6 text-white" />
    </div>
        </a>
        <a href="https://www.facebook.com/governosp" target="_blank" rel="noopener noreferrer">
    <div className="w-9 h-9 flex items-center justify-center rounded-sm" style={{ backgroundColor: "#808080" }}>
            <FaFacebookF className="w-6 h-6 text-white" />
    </div>
        </a>
        <span className="ml-2 text-gray-600">/governosp</span>
    </div> 
  </div>      
  );
}
