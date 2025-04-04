import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-gray-200 dark:bg-black flex justify-center 
                       xl:absolute xl:bottom-0 xl:left-0 xl:right-0">
      <Image 
        src="/logo_sp.png" 
        alt="são paulo" 
        width={280} 
        height={70} 
      />
    </footer>
  );
}
