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
     
    <div className="relative h-[300px] md:h-[400px] lg:h-[600px] w-full mx-auto">
      <Image src={src} alt="Foto do Aluno" fill className="object-cover" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />

        <div className="absolute bottom-4 w-full text-center">
          <h4
            className="font-(family-name:--font-roboto-slab) mt-[-70px] mr-20 text-center"
            style={{
              color: "#fff",
              fontSize: "24px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            {nome}
          </h4>
        </div>
        <div className="absolute bottom-4 right-4 p-1 bg-white">
        <QRCodeCanvas value={qr} size={98} includeMargin={false} className="border-2 border-white"/>
      </div>
      </div>

  );
}

export default Imgs;
