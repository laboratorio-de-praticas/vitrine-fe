"use client";
import React from "react";
import Conteudo from "./main";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow  xl:flex xl:items-center xl:justify-center">
        <Conteudo />
      </main>
    </div>
  );
}
