"use client";

import React, { JSX, useState, useEffect } from "react";
import Imgs from "./container";

const dsmCandidatos = [
  {
    src: "/candi1.jpg",
    alt: "Candidato DSM 1",
    nome: "Nome DSM",
    qr: "/QRCode.png",
  },
  {
    src: "/candi2.jpg",
    alt: "Candidato DSM 2",
    nome: "Nome DSM",
    qr: "/QRCode.png",
  },
  {
    src: "/candi3.jpg",
    alt: "Candidato DSM 3",
    nome: "Nome DSM",
    qr: "/QRCode.png",
  },
  
];

const geCandidatos = [
  {
    src: "/candi1.jpg",
    alt: "Candidato GE 1",
    nome: "Nome GE",
    qr: "/QRCode.png",
  },
  {
    src: "/candi2.jpg",
    alt: "Candidato GE 2",
    nome: "Nome GE",
    qr: "/QRCode.png",
  },
  {
    src: "/candi3.jpg",
    alt: "Candidato GE 3",
    nome: "Nome GE",
    qr: "/QRCode.png",
  },
  {
    src: "/candi4.jpg",
    alt: "Candidato GE 4",
    nome: "Nome GE",
    qr: "/QRCode.png",
  },
];

export default function Conteudo(): JSX.Element {
  const [candidatos, setCandidatos] = useState(dsmCandidatos);
  const [titulo, setTitulo] = useState("Representantes - 5° DSM");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCandidatos((prev) =>
        prev === dsmCandidatos ? geCandidatos : dsmCandidatos
      );
      setTitulo((prev) =>
        prev.includes("DSM")
          ? "Representantes - 5° Gestão Empresarial"
          : "Representantes - 5° DSM"
      );
      setProgress(0);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(progress);
  }, [candidatos]);

  return (
    <div className="bg-white p-10">
      <h1
        className="text-left ml-28 mb-2 font-(family-name:--font-roboto-slab)"
        style={{ color: "#1A6C7C", fontSize: "32px", fontWeight: "500" }}
      >
        {titulo}
      </h1>

      <div className="flex flex-wrap justify-center w-full">
        {candidatos.map((cand, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center w-[400px] "
          >
            <Imgs src={cand.src} alt={cand.alt} nome={cand.nome} qr={cand.qr} />
          </div>
        ))}
        
      </div>
      <div className="w-[100rem] ml-[7.05rem] h-4 bg-gray-200 overflow-hidden">
          <div 
            className="h-full bg-[#1A6C7C] transition duration-700 ease-in-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
    </div>
  );
}
