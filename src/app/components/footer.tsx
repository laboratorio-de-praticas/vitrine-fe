import React from "react";
import Image from "next/image";

export default function Cabeca() {
  return (
    <footer className="bg-black border-gray-200 dark:bg-gray-900 flex justify-center">
      <Image 
        src="/logo_sp.png" 
        alt="são paulo" 
        width={240} 
        height={80} 
        className="md: h-25" 
      />
    </footer>
  );
}
