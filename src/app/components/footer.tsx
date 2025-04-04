import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-gray-200 dark:bg-black flex justify-center 
                       xl:fixed xl:bottom-0 xl:left-0 xl:right-0">
      <Image 
        src="/logo_sp.png" 
        alt="são paulo" 
        width={240} 
        height={80} 
        className="md:h-25" 
      />
    </footer>
  );
}
