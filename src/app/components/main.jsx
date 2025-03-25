import React from "react";

export default function Conteudo() {
  return(
    <div className="w-[50rem] h-[30rem] bg-white ml-67 mt-8">
      <h1 className="font-(family-name:--font-roboto-slab) text-left mb-2" style={{ color: "#1A6C7C", fontSize: "36px", fontWeight: "500" }}>Vitrine - Representantes | 5°DSM</h1>
      <div className="w-[80rem] h-[1px]" style={{ backgroundColor: "#666666"}} ></div>
      <div className="mt-8 ml-40 w-[1000px] relative flex">
        <div className="w-[500px] h-30">
        <img src="/candi1.png" alt="candi" />
        <h4 className="font-(family-name:--font-roboto-slab) mt-[-70px] text-center" style={{ color: "#fff", fontSize: "34px"}}>Nome do Aluno</h4>
        </div>
        <div className="w-[500px]">
        <img src="/candi2.png" alt="candi" />
        <h4 className="font-(family-name:--font-roboto-slab) mt-[-70px] text-center" style={{ color: "#fff", fontSize: "34px"}}>Nome do Aluno</h4>
        </div>
      </div>
    </div>
  );
};