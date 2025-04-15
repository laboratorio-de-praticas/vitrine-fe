"use client";
import React from "react";
import Image from "next/image";
import Navbar from "./navbar";

export default function SpHeader() {
  return (
    <header className="w-full">
      <div className=" flex flex-col">
        <div className="max-w-[1000px] min-h-[80px] flex items-center bg-black rounded-r-[100px]">
          <div className="ml-8 header-container-4k h-full relative w-[248px] flex items-center flex">
            <Image
              src="/logo_sp.svg"
              alt="São Paulo"
              fill
              className="object-fill  h-auto max-h-[140px] banner min-h-[50px]"
            />
          </div>
        </div>
        <Navbar></Navbar>
      </div>
    </header>
  );
}
