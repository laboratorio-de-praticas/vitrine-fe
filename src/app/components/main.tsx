import React, { JSX } from "react";
import Imgs from "./container";

export default function Conteudo(): JSX.Element {

  const candidatos = [
    { src: "/candi1.jpg", alt: "Candidato 1", nome: "Nome Aluno 1" },
    { src: "/candi2.jpg", alt: "Candidato 2", nome: "Nome Aluno 2" },
   { src: "/candi3.jpg", alt: "Candidato 3", nome: "Nome Aluno 3" },
   { src: "/candi4.jpg", alt: "Candidato 4", nome: "Nome Aluno 4" },
  ];

  let widthClass = "w-full";
  if (candidatos.length === 2) {
    widthClass = "w-full md:w-1/2";
  } else if (candidatos.length === 3) {
    widthClass = "w-full md:w-1/3";
  } else if (candidatos.length === 4) {
    widthClass = "w-full md:w-1/2";
  }



  return (
    <div className="bg-white mx-auto mt-8 max-w-5xl p-4">
     <h1
        className="text-left mb-2 font-(family-name:--font-roboto-slab)" style={{ color: "#1A6C7C", fontSize: "32px", fontWeight: "500" }}
      >
        Vitrine - Representantes | 5°DSM
      </h1>

      <div className="w-full h-px bg-gray-500 mb-4"></div>
      <div className="flex flex-wrap  mb-20">
      {candidatos.map((cand, index) => (
         <div key={index} className={`${widthClass} `}>
         
           <Imgs src={cand.src} alt={cand.alt} nome={cand.nome} />

       </div>
        ))}
      </div>
      </div>
  );
}
