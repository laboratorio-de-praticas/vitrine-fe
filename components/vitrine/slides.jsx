"use client";

import React, { useState, useEffect } from "react";
import Imgs from "./images";
import { useRouter } from "next/navigation";
import { Icon } from "./icon";
import { IconCurso } from "./iconCurso";

export default function Slides() {
  const VITRINE_BE_HOST = process.env.NEXT_PUBLIC_VITRINE_BE;
  const [eventos, setEventos] = useState([]);
  const [representantes, setRepresentantes] = useState([]);
  const [curso, setCurso] = useState("");
  const [semestre, setSemestre] = useState(0);
  const [nome, setNome] = useState(null);
  const [error, setError] = useState(null);
  const [currentEventoIndex, setCurrentEventoIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const router = useRouter();

  const parseCursoSemestre = (value) => {
    const match = value?.match(/^([A-Za-z]+)(\d+)$/);
    return match ? { curso: match[1], semestre: parseInt(match[2], 10) } : { curso: "", semestre: 0 };
  };

  useEffect(() => {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    );
    const token = localStorage.getItem("token");

    if (!token) {
      return router.push("/login");
    }

    fetch(`${VITRINE_BE_HOST}/v1/vitrine/tv`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro na requisição");
        return res.json();
      })
      .then((data) => {
        if (!data.length) return;

        setEventos(data);

        const first = data[0];
        setRepresentantes(first.representantes || []);
        setNome(first.nome_evento);

        const { curso, semestre } = parseCursoSemestre(first.curso_semestre);
        setCurso(curso);
        setSemestre(semestre);
      })
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!eventos.length) return;

    const interval = setInterval(() => {
      setCurrentEventoIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % eventos.length;
        const nextEvento = eventos[nextIndex];

        setRepresentantes(nextEvento.representantes || []);
        setNome(nextEvento.nome_evento);

        const { curso, semestre } = parseCursoSemestre(nextEvento.curso_semestre);
        setCurso(curso);
        setSemestre(semestre);
        setProgress(0);

        return nextIndex;
      });
    }, 1000000);

    return () => clearInterval(interval);
  }, [eventos]);

  return (
    <div className="w-full py-4 px-4 bg-white mx-auto flex flex-col justify-center items-center">
      <div className="w-full flex space-x-4 justify-between mb-8">
        <h1
          className={`flex items-center w-full mt-0 text-left xl:text-3xl font-(family-name:--font-roboto-slab) ${curso}-TITLE`}
          style={{ fontWeight: "500" }}
        >
          {nome}
        </h1>

        <div className="w-full flex items-center justify-end gap-[38px] row">
          <IconCurso text={curso} />
          <Icon curso={curso} text={`${semestre}º SEM`} />
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

      <div className="w-full mt-8 h-4 bg-gray-200 overflow-hidden min-h-4" style={{ margin: "0 auto" }}>
        <div
          className={`h-full ${curso}-PROGRESS transition-all duration-200 ease-in-out`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
