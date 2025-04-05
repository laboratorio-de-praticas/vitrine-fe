import React from "react";
import SpHeader from "../../components/vitrine/header";
import Navbar from "../../components/vitrine/menu";
import Main from "../../components/vitrine/main";
import Footer from "../../components/vitrine/footer";


export default function Home(){
  return (
    <>
      <SpHeader />
      <Navbar />
      <Main/>
      <Footer />
    </>
  );
}