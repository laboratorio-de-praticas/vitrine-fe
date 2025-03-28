import React from "react";
import Image from "next/image";

interface ImgsProps {
  src: string;
  alt: string;
  nome: string;
}

function Imgs({ src, alt, nome }: ImgsProps) {
  return (
     
      <div className="relative h-[500px] max-h-[300px] md:max-h-[400px] ">
        <Image src={src} alt={alt} fill className="object-cover" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="absolute bottom-4 w-full text-center">
          <h4
            className="font-(family-name:--font-roboto-slab) mt-[-70px] text-center"
            style={{
              color: "#fff",
              fontSize: "30px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            {nome}
          </h4>
        </div>
      </div>

  );
}

export default Imgs;
