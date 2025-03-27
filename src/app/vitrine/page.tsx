import React from "react";
import SpHeader from "../components/header";
import Navbar from "../components/menu";
import Main from "../components/main";
import Footer from "../components/footer";


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