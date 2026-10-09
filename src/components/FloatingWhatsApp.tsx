"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after initial scroll or short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 4500);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-5 sm:right-8 z-50 flex items-end flex-col gap-2.5">
      {/* Speech Bubble / Reassurance Pill */}
      {showTooltip && (
        <div className="relative bg-white/95 backdrop-blur-md border border-[#D8C8B0] text-[#372A1D] px-4 py-2.5 rounded-2xl shadow-xl max-w-[240px] text-xs animate-fadeIn flex items-start gap-2">
          <div>
            <span className="font-semibold text-[#5A4631] block mb-0.5">
              Precisa de ajuda com vacinas?
            </span>
            <p className="text-[11px] text-[#7E6C5A] leading-tight">
              Fale agora com nossa equipe de enfermagem especializada.
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#7E6C5A] hover:text-[#372A1D] p-0.5 shrink-0"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Little arrow pointing down */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-[#D8C8B0] transform rotate-45" />
        </div>
      )}

      {/* Pulsing Floating Action Button */}
      <a
        href={CLINIC_INFO.whatsappUrl(
          "Olá! Gostaria de consultar informações sobre vacinas e agendar um horário na Clínica Rafá."
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Iniciar conversa no WhatsApp com a Clínica Rafá Vacinas"
      >
        {/* Subtle pulsing warm ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-transparent transition-transform duration-300 group-hover:rotate-12" />

        {/* Status indicator dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-white" />
      </a>
    </aside>
  );
}
