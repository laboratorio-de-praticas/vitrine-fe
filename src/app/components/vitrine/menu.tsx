import React, { JSX } from "react";
import Image from "next/image";

export default function Menu(): JSX.Element {
  return (
    <nav className="bg-red-700 border-gray-200 dark:bg-red-700 mt-3">
      <div className="container flex items-center px-1 h-24">
      <Image 
          src="/logo_menu.png" 
          alt="logo" 
          width={516} 
          height={64} 
           className="mt-1"
        />
          </div>
    </nav>
  );
}
