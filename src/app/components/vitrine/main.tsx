"use client";

import React, { JSX, useState, useEffect } from "react";
import Imgs from "./container";
import { useRouter } from "next/navigation";
import { Evento } from "@/app/models/Evento";
import { Candidato } from "@/app/models/Candidato";

export default function Conteudo(): JSX.Element {

const [eventos, setEventos] = useState<Evento[]>([]);
const [progress, setProgress] = useState(0);
const [candidatos, setCandidatos] = useState<Candidato[]>([]);
const [nome, setNome] = useState<string | null>(null);
const [error, setError] = useState<string | null>(null);
const [currentEventoIndex, setCurrentEventoIndex] = useState<number>(0);

const router = useRouter();
useEffect(() => {
  localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
  const token = localStorage.getItem("token"); 

  if (!token) {
    router.push("/login");
    return;
  }
  fetch("http://localhost:5000/v1/vitrine/tv", {
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
        setCandidatos(data[0].candidatos);
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
  
      setCandidatos(eventos[nextIndex].candidatos);
      setNome(eventos[nextIndex].nome_evento);
      setProgress(0);
      return nextIndex;
    });
  }, 10000);

  return () => clearInterval(interval);
}, [eventos]);


  return (
    <>
        <div
          className="bg-white p-4 mx-auto max-w-[90vw] xl:max-w-[1600px] flex flex-col xl:justify-center xl:items-center"
        >
          <h1
            className="text-left mt-8 xl:mt-12 mb-8 font-(family-name:--font-roboto-slab)"
            style={{ color: "#1A6C7C", fontSize: "32px", fontWeight: "500" }}
          >
            {nome}
          </h1>
          <div
            className="flex flex-nowrap justify-start xl:justify-center"
            style={{
              width: `${Math.min(100, (candidatos.length / 4) * 100)}%`,
              margin: "0 auto",
              maxWidth: "1600px",
            }}
          >
            {candidatos.map((cand, i) => (
              <div
                key={i}
                className="flex-shrink-0 relative"
                style={{ width: `${100 / candidatos.length}%` }}
              >
                <Imgs
                  src={cand.aluno?.foto_url ?? "/default_image.png"}
                  nome={cand.aluno?.usuario?.nome ?? "Nome Indisponível"}
                  qr={cand.qrcode ?? "/default_qr.png"}
                />
              </div>
            ))}
          </div>
          <div
            className="mt-8 h-4 bg-gray-200 overflow-hidden"
            style={{
              width: `${Math.min(100, (candidatos.length / 4) * 100)}%`,
              margin: "0 auto",
            }}
          >
            <div
              className="h-full bg-[#1A6C7C] transition-all duration-200 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          {candidatos.length === 0 && (
            <div className="mt-8 text-center text-gray-500 italic text-lg">
              Sem representantes disponíveis no momento, adicione um novo participante
            </div>
          )}
        </div>
    </>
  )};  
