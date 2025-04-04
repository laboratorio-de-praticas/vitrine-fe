"use client";
import React, { JSX } from "react";
import Image from "next/image";


export default function SpHeader(): JSX.Element {

  return (
    <header className="w-full">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center bg-black w-96 rounded-r-[100px] h-22">
        <Image 
            src="/sp.svg" 
            alt="São Paulo" 
            width={248} 
            height={80} 
            className="mt-[1.5px] ml-12" 
          />
        </div>
      </div>
    </header>
  );
}
