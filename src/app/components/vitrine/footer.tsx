import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-gray-200 dark:bg-black w-full">
      <div className="container mx-auto">
        <Image 
          src="/logo_sp.png" 
          alt="são paulo" 
          width={240} 
          height={80} 
          className="md:h-25 mx-auto" 
        />
      </div>
    </footer>
  );
}
