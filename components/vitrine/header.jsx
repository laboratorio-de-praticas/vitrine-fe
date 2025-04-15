"use client";
import React from "react";
import Image from "next/image";
import Navbar from "./navbar";

export default function SpHeader() {
  return (
    <header className="w-full">
      <div className=" flex flex-col">
        <div className="w-[776px] h-[80px] flex items-center bg-black rounded-r-[100px]">
          <div className="header-container-4k h-full relative w-[248px] flex align-center ml-8">
            <Image
              src="/logo_sp.svg"
              alt="São Paulo"
              width={100}
              height={100} 
              className="object-contain w-full h-auto"
            />


          </div>
        </div>
        <Navbar></Navbar>
      </div>
    </header>
  );
}
