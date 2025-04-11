"use client";

import React, { JSX, useState, useEffect } from "react";
import Imgs from "./container";
import { useRouter } from "next/navigation";
import { Evento } from "@/app/models/Evento";
import { Representante } from "@/app/models/Representante";
import { Icon } from "./icon";
import { IconCurso } from "./iconCurso";

export default function Conteudo(): JSX.Element {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [progress, setProgress] = useState(0);
  const [representantes, setRepresentantes] = useState<Representante[]>([]);
  const [curso, setCurso] = useState<String>();
  const [semestre, setSemestre]  =useState<number>();
  const [nome, setNome] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentEventoIndex, setCurrentEventoIndex] = useState<number>(0);

  const router = useRouter();
  useEffect(() => {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    );
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }
    fetch("http://localhost:5001/v1/vitrine/tv", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na requisição");
        }
        return response.json();
      })
      .then((data: Evento[]) => {
        setEventos(data);

        if (data.length > 0) {
          if (data[0].representantes && data[0].representantes.length > 0) {
            setRepresentantes(data[0].representantes);
            
          } else {
            setRepresentantes([]);
          }
          const curso_semestre = data[0].curso_semestre.match(/^([A-Za-z]+)(\d+)$/);

          if(curso_semestre){
            setCurso(curso_semestre[1]);
            setSemestre(Number(curso_semestre[2])) 
          }else{
            setCurso("");
            setSemestre(0);
          }

          setNome(data[0].nome_evento);
        }
        console.log(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 100);
    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (eventos.length === 0) return;

    const interval = setInterval(() => {
      setCurrentEventoIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % eventos.length;

        if (eventos[nextIndex].representantes) {
          setRepresentantes(eventos[nextIndex].representantes);
        } else {
          setRepresentantes([]);
        }
        const curso_semestre = eventos[nextIndex].curso_semestre.match(/^([A-Za-z]+)(\d+)$/);
        if(curso_semestre){
          setCurso(curso_semestre[1]);
          setSemestre(Number(curso_semestre[2])) 
        }else{
          setCurso("");
          setSemestre(0);
        }

        setNome(eventos[nextIndex].nome_evento);
        setProgress(0);
        return nextIndex;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [eventos]);

  return (
    <>
      <div className={"container-principal bg-white mx-auto flex flex-col justify-center items-center "}>
        <div className={"w-full flex space-x-4 justify-between mb-8" }>
          <h1 className={`flex items-center w-full mt-0 text-left xl:text-3xl  font-(family-name:--font-roboto-slab) ${curso}-TITLE`} style={{ fontWeight: "500" }}>{nome}</h1>
            <div className="w-full flex items-center justify-end gap-[38px] row">
              <IconCurso text={`${curso}`}></IconCurso>
              <Icon curso={`${curso}`} text={`${semestre}º SEM`}></Icon>
          </div>
        </div>
        <div
          className="w-full grid-container flex flex-nowrap justify-center"
          style={{
            width: `${Math.min(100, (representantes.length / 4) * 100)}%`, 
            margin: "0 auto",
          }}
        >
          {representantes.map((cand, i) => (
            <div
              key={i}
              className="slide-item flex-shrink-0 relative"
              style={{ width: `${100 / representantes.length}%` }}
            >
              <Imgs
                src={cand.aluno?.foto_url ?? "/default_image.png"}
                nome={cand.aluno?.usuario?.nome ?? "Nome Indisponível"}
                qr={cand.qrcode ?? "/default_qr.png"}
    
              />
            </div>
          ))}
        </div>

        {representantes.length === 0 && (
          <div className="mt-8 text-center text-gray-500 italic text-name">
            Sem representantes disponíveis para esse evento no momento.
          </div>
        )}

        
        <div
          className="w-full mt-8 h-4 bg-gray-200 overflow-hidden min-h-4"
          style={{
            margin: "0 auto",
          }}
        >
          <div
            className={` h-full ${curso}-PROGRESS transition-all duration-200 ease-in-out`}
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>
    </>
  );
}
