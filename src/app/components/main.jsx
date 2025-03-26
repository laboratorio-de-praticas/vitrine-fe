import React from "react";

export default function Conteudo() {
  return (
    <div className="bg-white mx-auto mt-8 max-w-5xl p-4">
      <h1
        className="text-left mb-2 font-(family-name:--font-roboto-slab)" style={{ color: "#1A6C7C", fontSize: "32px", fontWeight: "500" }}
      >
        Vitrine - Representantes | 5°DSM
      </h1>
      <div className="w-full h-px bg-gray-500"></div>
      <div className="mt-8 grid grid-cols-1 md:flex-row justify-center items-center">
        <div className="flex flex-col items-center">
          <img src="/candi1.png" alt="candi" className="w-full h-[400px] max-w-sm md:max-w-2xl rounded-md object-cover" />
          <h4 className="font-(family-name:--font-roboto-slab) mt-[-70px] text-center" style={{ color: "#fff", fontSize: "30px"}}>
            Nome do Aluno
          </h4>
        </div>
        {/* <div className="flex flex-col items-center">
          <img src="/candi2.png" alt="candi" className="w-full h-[400px] max-w-sm md:max-w-2xl rounded-md object-cover" />
          <h4 className="font-(family-name:--font-roboto-slab) mt-[-70px] text-center" style={{ color: "#fff", fontSize: "30px"}}>
            Nome do Aluno
          </h4>
        </div> */}
        {/* <div className="flex flex-col items-center">
          <img src="/candi3.png" alt="candi" className="w-full h-[400px] max-w-sm md:max-w-2xl rounded-md object-cover" />
          <h4 className="font-(family-name:--font-roboto-slab) mt-[-70px] text-center" style={{ color: "#fff", fontSize: "30px"}}>
            Nome do Aluno
          </h4>
        </div> */}
        {/* <div className="flex flex-col items-center">
          <img src="/candi4.png" alt="candi" className="w-full max-w-sm md:max-w-2xl rounded-md object-cover" />
          <h4 className="font-(family-name:--font-roboto-slab) mt-[-70px] text-center" style={{ color: "#fff", fontSize: "30px"}}>
            Nome do Aluno
          </h4>
        </div> */}
      </div>
    </div>
  );
}
