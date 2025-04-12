import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="menu-container bg-red-700 border-gray-200 dark:bg-red-700 h-24">
      <div className="container flex items-center px-1">
        <div className="menu-logo-4k relative w-[516px] h-[86px] ml-[3rem]">
          <Image 
            src="/logo_menu.svg" 
            alt="logo" 
            fill
            className="object-contain"
          />
        </div>
      </div>
    </nav>
  );
}
