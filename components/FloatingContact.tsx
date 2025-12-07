"use client";

import { useState } from "react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BOTÓN FLOTANTE */}
      <button
        type="button"
        aria-label="Abrir formulario de contacto"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 h-14 w-14 rounded-full 
                   bg-gradient-to-br from-emerald-400 to-cyan-400 text-slate-950 
                   shadow-[0_18px_45px_rgba(16,185,129,0.55)]
                   hover:shadow-[0_24px_60px_rgba(16,185,129,0.75)]
                   hover:-translate-y-0.5
                   transition-transform transition-shadow duration-200
                   flex items-center justify-center"
      >
        {/* Icono tipo avioncito */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3.5 4.5L20 11.5L13.2 13.4L11.3 20L3.5 4.5Z" />
          <path d="M3.5 4.5L12 12" />
        </svg>
      </button>

      {/* PANEL CON MICROSOFT FORMS */}
      {open && (
        <div
          className="fixed bottom-24 right-4 md:bottom-28 md:right-10 z-40 
                     w-[360px] md:w-[420px] max-w-[95vw] h-[480px] md:h-[520px]
                     rounded-3xl border border-slate-600/70 
                     bg-slate-900/80 backdrop-blur-2xl
                     shadow-[0_20px_70px_rgba(0,0,0,0.85)]
                     hover:shadow-[0_26px_80px_rgba(0,0,0,0.95)]
                     transition-shadow flex flex-col p-3"
          style={{ animation: "floatingPanelIn 0.26s ease-out" }}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold text-slate-100 text-[13px]">
              Enviame tu consulta
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-slate-500 hover:text-slate-300 text-[11px]"
            >
              ✕
            </button>
          </div>

          {/* IFRAME DEL FORMULARIO */}
          <iframe
            width="100%"
            height="100%"
            src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=EWklOPFwlUm2nki12VHnohepWdlRCYFDlhHvhPJPuYNUMDNETlFUUFFIMk0wRFJUMEpLMk9XNjM3TS4u&embed=true"
            frameBorder="0"
            marginWidth={0}
            marginHeight={0}
            style={{
              border: "none",
              flex: 1,
              borderRadius: "10px",
            }}
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  );
}
