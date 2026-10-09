"use client";

import Image from "next/image";
import { Home, ShieldCheck, Thermometer, Clock, MessageCircle, Sparkles } from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";

interface HomeCareProps {
  onOpenScheduleModal: (context?: string) => void;
}

export function HomeCare({ onOpenScheduleModal }: HomeCareProps) {
  const benefits = [
    {
      icon: <Home className="w-5 h-5 text-[#C9A24A]" />,
      title: "Conforto no Lar",
      desc: "Ideal para recém-nascidos e puérperas, evitando saídas nos primeiros dias e exposição a ambientes movimentados.",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#C9A24A]" />,
      title: "Dignidade & Atenção aos Idosos",
      desc: "Tranquilidade total para pacientes com mobilidade reduzida ou em recuperação, sem filas ou deslocamentos.",
    },
    {
      icon: <Thermometer className="w-5 h-5 text-[#C9A24A]" />,
      title: "Cadeia de Frio Certificada",
      desc: "Transporte em caixas térmicas com termômetro digital em tempo real, mantendo rigorosamente a faixa de 2°C a 8°C.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#C9A24A]" />,
      title: "Profissionais Especializados",
      desc: "Equipe capacitada em técnicas de alívio da dor, acolhimento materno e registro oficial imediato na caderneta.",
    },
  ];

  return (
    <section id="domicilio" className="py-24 md:py-32 bg-[#F4EFE8]/70 relative overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div
        className="absolute top-1/2 -left-48 w-96 h-96 rounded-full pointer-events-none opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(201, 162, 74, 0.25) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Image Composition */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-[480px]">
              {/* Arched image container with delicate border and shadow */}
              <div className="relative aspect-[4/3] sm:aspect-[1.15/1] rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-[#D8C8B0]/80 shadow-[0_20px_45px_-12px_rgba(90,70,49,0.12)] bg-[#FAF8F5]">
                <Image
                  src="/home-care.jpg"
                  alt="Vacinação ao domicílio com carinho e conforto familiar"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105 mask-fade-bottom"
                />

                {/* Subtle gradient overlay to merge gently */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#5A4631]/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Highlight Badge */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md border border-[#C9A24A]/40 rounded-2xl p-4 shadow-xl max-w-[260px] animate-float-gentle">
                <div className="flex items-center gap-2 mb-1.5">
                  <Sparkles className="w-4 h-4 text-[#C9A24A]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5A4631]">
                    Herval & Joaçaba
                  </span>
                </div>
                <p className="text-xs text-[#7E6C5A] leading-relaxed">
                  Agende o dia e o horário mais conveniente para a rotina da sua família.
                </p>
              </div>

              {/* Decorative Frame Line */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C9A24A]/30 rounded-tl-3xl pointer-events-none hidden sm:block" />
            </div>
          </div>

          {/* Right Column: Editorial Copy & Pillars */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E1D6]/80 border border-[#D8C8B0]/60 text-[11px] font-medium tracking-[0.2em] uppercase text-[#5A4631] mb-5">
              <span>Diferencial Exclusivo</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#372A1D] font-normal tracking-tight mb-5 leading-tight">
              A comodidade de receber o cuidado vacinal no aconchego da sua casa.
            </h2>

            <p className="text-base sm:text-lg text-[#7E6C5A] font-light leading-relaxed mb-8">
              Levamos até o seu lar toda a segurança técnica da clínica particular, com pontualidade, carinho e respeito ao ritmo do seu filho ou familiar.
            </p>

            {/* 4 Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-[#FAF8F5]/80 border border-[#D8C8B0]/50 hover:border-[#C9A24A]/40 transition-colors shadow-2xs"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#F6EEDC] flex items-center justify-center mb-3">
                    {b.icon}
                  </div>
                  <h3 className="font-semibold text-xs tracking-wide text-[#372A1D] mb-1">
                    {b.title}
                  </h3>
                  <p className="text-[12px] text-[#7E6C5A] leading-relaxed font-light">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={CLINIC_INFO.whatsappUrl(
                  "Olá! Gostaria de saber como funciona o atendimento de vacinação em domicílio na Clínica Rafá."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C9A24A] text-white hover:bg-[#B58F3B] shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar no Domicílio</span>
              </a>

              <button
                onClick={() => onOpenScheduleModal("Destaque Domiciliar")}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-medium tracking-wide text-[#5A4631] border border-[#D8C8B0] hover:bg-[#E9E1D6]/50 transition-colors cursor-pointer"
              >
                Tirar Dúvidas sobre o Serviço
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
