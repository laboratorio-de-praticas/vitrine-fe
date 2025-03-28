import React from "react";
import Image from "next/image";

export default function Cabeca() {
  return (
    <footer className="bg-black border-gray-200 dark:bg-gray-900  h-15 py-4 flex justify-center md:fixed md:bottom-0 md:left-0 md:right-0">
      <Image 
        src="/logo_sp.png" 
        alt="são paulo" 
        width={120} 
        height={60} 
        className="w-30 h-15 mt-[-15px]" 
      />
    </footer>
  );
}
