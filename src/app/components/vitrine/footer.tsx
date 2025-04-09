import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-gray-200 dark:bg-black w-full">
      <div className="container mx-auto">
        <div className="footer-logo relative h-[80px] w-[240px] mx-auto">
          <Image
            src="/logo_sp.png"
            alt="são paulo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
