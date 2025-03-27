import React from "react";
import Image from "next/image";

interface ImgsProps {
  src: string;
  alt: string;
  nome: string;
}

function Imgs({ src, alt, nome }: ImgsProps) {
  return (
    <div className="relative md:w-full h-[500px] mb-4 sm:w-full h-[470px] overflow-hidden p-4 ">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-lg mt-4 mb-4"
      />
      <div className="absolute bottom-4 w-full text-center">
        <h4 
          className="font-(family-name:--font-roboto-slab) mt-[-70px] text-center" style={{ color: "#fff", fontSize: "30px"}}
        >
          {nome}
        </h4>
      </div>
    </div>
  );
}

export default Imgs;
