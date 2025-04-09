"use client";
import React, { JSX } from "react";
import Image from "next/image";

export default function SpHeader(): JSX.Element {
  return (
    <header className="w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center bg-black rounded-r-[100px]">
          <div className="header-container-4k relative w-[248px]">
            <Image
              src="/logo_sp.png"
              alt="São Paulo"
              fill
              className="object-contain header-logo"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
