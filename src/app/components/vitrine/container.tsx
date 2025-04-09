import React from "react";
import Image from "next/image";
import { QRCodeCanvas } from "qrcode.react";

interface ImgsProps {
  src: string;
  nome: string;
  qr: string;
}

function Imgs({ src, nome, qr }: ImgsProps) {
  return (
     
    <div className="imagem-container relative w-full mx-auto">
      <Image src={src} alt="Foto do Aluno" fill className="object-cover" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />

        <div className="absolute bottom-4 w-full text-center">
          <h4
            className="font-(family-name:--font-roboto-slab) mt-[-70px] text-center pr-22 break-words whitespace-normal text-name"
            style={{
              color: "#fff",
              fontSize: "26px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            {nome}
          </h4>
        </div>
        <div className="absolute p-1 bottom-4 right-4 bg-white qrcode-4k">
        <QRCodeCanvas value={qr} size={98} includeMargin={false} className="border-2 border-white qrcode"/>
      </div>
      </div>

  );
}

export default Imgs;
