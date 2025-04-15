import React from "react";
import Image from "next/image";
import { QRCodeCanvas } from "qrcode.react";

function Imgs({ src, nome, qr }) {
  return (
    <div className="imagem-container relative w-full mx-auto">
      <Image src={src} alt="Foto do Aluno" fill className="object-cover" />
      <div className="flex justify-between column py-4 px-2 align-center absolute bottom-0 left-0 right-0 items-center bg-gradient-to-t from-black to-transparent"> 
        <p 
          className="w-full justify-center flex font-(family-name:--font-roboto-slab) text-center break-words whitespace-normal text-name"
          style={{
            color: "#fff",
            fontSize: "26px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          {nome}
        </p>
        <div className="bg-white p-1">
        <QRCodeCanvas
          value={qr}
          className="border-2 border-white qrcode-4k"
        />
        </div>
      </div>
  </div>
  );
}

export default Imgs;
