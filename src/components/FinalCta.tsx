"use client";

import { MessageCircle, ShieldCheck, Heart, Sparkles, Phone } from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";

interface FinalCtaProps {
  onOpenScheduleModal: (context?: string) => void;
}

export function FinalCta({ onOpenScheduleModal }: FinalCtaProps) {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-[#FAF8F5] relative overflow-hidden">
      {/* Decorative Warm Ambient Rays */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(ellipse, rgba(201, 162, 74, 0.22) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-[2.5rem] p-10 sm:p-14 md:p-16 bg-gradient-to-br from-[#FAF8F5] via-[#F4EFE8] to-[#E9E1D6]/70 border border-[#C9A24A]/40 shadow-xl text-center">
          
          {/* Micro Kicker */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#D8C8B0]/70 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#5A4631] mb-6 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span>Triagem e Agendamento Humanizado</span>
          </div>

          {/* Heading */}
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] text-[#372A1D] font-normal tracking-tight mb-6 max-w-3xl mx-auto">
            Proteja quem você mais ama com o respeito e o carinho que sua família merece.
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#7E6C5A] font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Fale diretamente com a nossa equipe de enfermagem especializada. Envie uma foto da caderneta de vacinas pelo WhatsApp para uma análise personalizada sem compromisso.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={CLINIC_INFO.whatsappUrl(
                "Olá! Gostaria de falar com a equipe de enfermagem da Clínica Rafá para avaliar minha carteirinha e agendar um horário."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-sm font-semibold tracking-wide uppercase bg-[#C9A24A] text-white hover:bg-[#B58F3B] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>Chamar no WhatsApp: {CLINIC_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenScheduleModal("Final CTA Triagem")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#5A4631]/40 text-[#5A4631] hover:bg-white/80 transition-colors cursor-pointer"
            >
              <span>Preencher Pré-Agendamento</span>
            </button>
          </div>

          {/* Assurance bullets */}
          <div className="pt-8 border-t border-[#D8C8B0]/60 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#5A4631]">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C9A24A]" />
              <span>Vacinas de alta tecnologia e controle térmico</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 text-[#C9A24A]" />
              <span>Atendimento na clínica ou em domicílio</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-[#C9A24A]" />
              <span>Resposta ágil e humanizada</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
