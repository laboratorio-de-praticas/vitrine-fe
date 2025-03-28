import React, { JSX } from "react";
import Image from "next/image";

export default function Menu(): JSX.Element {
  return (
    <nav className="bg-red-700 border-gray-200 dark:bg-gray-900 mt-3">
      <div className="container mx-auto flex items-center justify-between px-4 h-24">
      <Image 
          src="/logo_menu.png" 
          alt="logo" 
          width={316} 
          height={64} 
          className="h-16" 
        />
        <div className="flex items-center">
          <div className="bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
          <Image 
              src="/user.png" 
              alt="user photo" 
              width={48} 
              height={48}
              className="h-12 w-12 rounded-full" 
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
