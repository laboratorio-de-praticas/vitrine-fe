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
  {
    src: "/candi4.jpg",
    alt: "Candidato DSM 4",
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
    return () => clearInterval(progressInterval);
  }, [candidatos]);

  return (
    
    <div className="bg-white mx-auto max-w-[90vw] xl:max-w-[1600px] flex flex-col xl:justify-center">
      <h1
        className="text-left pb-8 xl:mt-9 font-(family-name:--font-roboto-slab) "
        style={{ color: "#1A6C7C", fontSize: "32px", fontWeight: "500" }}
      >
        {titulo}
      </h1>

      <div 
        className="flex flex-nowrap justify-start xl:justify-center"
        style={{ 
          width: `${Math.min(100, (candidatos.length / 4) * 100)}%`,
          maxWidth: '1600px'
        }}
      >
        {candidatos.map((cand, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative"
            style={{ width: `${100 / candidatos.length}%` }}
          >
            <Imgs {...cand} />
          </div>
        ))}
      </div>

 
      <div 
        className="m-8 h-4 bg-gray-300 overflow-hidden"
        style={{ 
          width: `${Math.min(100, (candidatos.length / 4) * 100)}%`,
          margin: '0 auto'
        }}
      >
        <div 
          className="h-full bg-[#1A6C7C] transition-all duration-200 ease-in-out" 
          style={{ width: `${progress}%` }}
        />
      </div>

      {candidatos.length === 0 && (
        <div className="mt-8 text-center text-gray-500 italic text-lg">
          Sem representantes disponíveis no momento, adicione um novo participante
        </div>
      )}
    </div>
  );
}
