import React from "react";
import Imgs from "./container";

export default function Conteudo() {
  return (
    <div className="bg-white mx-auto mt-8 max-w-5xl p-4">
     <h1
        className="text-left mb-2 font-(family-name:--font-roboto-slab)" style={{ color: "#1A6C7C", fontSize: "32px", fontWeight: "500" }}
      >
        Vitrine - Representantes | 5°DSM
      </h1>

      <div className="w-full h-px bg-gray-500"></div>
      <Imgs src="/candi1.jpg" alt="Candidato 1" nome="Nome Aluno 1" />
      </div>
  );
}
