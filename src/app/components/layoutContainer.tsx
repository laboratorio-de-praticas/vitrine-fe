"use client";
import React from "react";
import Conteudo from "./main";
import Footer from "./footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pb-20 xl:flex xl:justify-center">
        <Conteudo />
      </main>
      <Footer />
    </div>
  );
}
