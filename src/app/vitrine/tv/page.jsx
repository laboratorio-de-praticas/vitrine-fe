import React from "react";
import SpHeader from "../../../../components/vitrine/header";
import Footer from "../../../../components/vitrine/footer";
import Slides from "../../../../components/vitrine/slides";


export default function Home(){
  return (
    <div className="min-h-screen flex flex-col">
      <SpHeader />
      <Navbar />
      <main className="flex-1">
        <Slides />
      </main>
      <Footer />
    </div>
  );
}