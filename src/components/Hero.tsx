"use client";

import Image from "next/image";
import { MessageCircle, Star, ArrowDown, ShieldCheck, HeartHandshake } from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";

interface HeroProps {
  onOpenScheduleModal: (context?: string) => void;
}

export function Hero({ onOpenScheduleModal }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-8 md:pt-32 md:pb-10 overflow-hidden bg-[#FAF8F5]">
      {/* Background Subtle Gradient Blobs & Luxury Warmth */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[550px] rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(231, 201, 121, 0.22) 0%, rgba(244, 239, 232, 0) 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-10 right-0 w-[450px] h-[450px] rounded-full pointer-events-none opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(201, 162, 74, 0.18) 0%, rgba(250, 248, 245, 0) 75%)",
        }}
        aria-hidden="true"
      />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & High-Converting Value Prop */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 max-w-2xl">
            {/* Tag / Micro-kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E1D6]/70 border border-[#D8C8B0]/60 text-[11px] font-medium tracking-[0.18em] uppercase text-[#5A4631] mb-6 shadow-2xs backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A] animate-pulse" />
              <span>Vacinação Humanizada • Edifício Evolution</span>
            </div>

            {/* Refined Serif Title */}
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.3rem] leading-[1.08] text-[#372A1D] tracking-tight font-normal mb-6">
              Proteção, carinho <br className="hidden sm:inline" />
              e cuidado para <br className="hidden sm:inline" />
              <span className="italic font-light text-[#5A4631] underline decoration-[#C9A24A]/40 decoration-1 underline-offset-8">
                toda a família.
              </span>
            </h1>

            {/* Subtle, reassuring subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#7E6C5A] font-light leading-relaxed max-w-xl mb-9">
              Vacinação humanizada sem traumas no centro de Herval d&apos;Oeste e no conforto acolhedor do seu domicílio.
            </p>

            {/* Exclusive CTA Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={CLINIC_INFO.whatsappUrl(
                  "Olá! Gostaria de consultar as vacinas disponíveis e tirar dúvidas com a equipe da Clínica Rafá."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase bg-[#C9A24A] text-white hover:bg-[#B58F3B] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-white transition-transform group-hover:rotate-6" />
                <span>Consultar Vacinas via WhatsApp</span>
              </a>

              <button
                onClick={() => onOpenScheduleModal("Hero Secundário")}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#D8C8B0] text-[#5A4631] hover:bg-[#E9E1D6]/40 transition-colors cursor-pointer"
              >
                <span>Ver Especialidades</span>
              </button>
            </div>

            {/* Trust & Proof Line */}
            <div className="mt-10 pt-6 border-t border-[#E9E1D6]/80 flex flex-wrap items-center gap-6 text-xs text-[#7E6C5A]">
              <div className="flex items-center gap-1.5">
                <div className="flex text-[#C9A24A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C9A24A]" />
                  ))}
                </div>
                <span className="font-semibold text-[#372A1D]">5,0 no Google</span>
                <span className="text-[#B9A48A]">•</span>
                <span>Avaliações reais</span>
              </div>

              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C9A24A]" />
                <span>Cadeia de frio rigorosa</span>
              </div>

              <div className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-[#C9A24A]" />
                <span>Métodos de alívio da dor</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Arch Composition with Organic Mask Blending */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* The Main Arch Portrait Container */}
            <div className="relative w-full max-w-[380px] sm:max-w-[430px] lg:max-w-[460px] aspect-[4/5] rounded-t-[190px] md:rounded-t-[230px] rounded-b-[42px] p-2 bg-gradient-to-b from-[#E9E1D6]/80 via-[#FAF8F5]/90 to-[#D8C8B0]/60 shadow-[0_20px_50px_-15px_rgba(90,70,49,0.14)] border border-[#D8C8B0]/60">
              
              {/* Inner Frame */}
              <div className="relative w-full h-full rounded-t-[182px] md:rounded-t-[222px] rounded-b-[36px] overflow-hidden bg-[#F4EFE8]">
                <Image
                  src="/hero-care.jpg"
                  alt="Vacinação humanizada e cuidado familiar na Clínica Rafá Vacinas"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 460px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105 mask-radial-oval"
                />
                
                {/* Organic Subtle Vignette Fade */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(250,248,245,0) 60%, rgba(250,248,245,0.4) 100%)",
                  }}
                />

                {/* Bottom Soft Glow Mask */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FAF8F5]/90 via-[#FAF8F5]/40 to-transparent pointer-events-none" />
              </div>

              {/* Floating Editorial Badge (Stamp inspired by Image 3 Lumière) */}
              <div className="absolute -top-4 -right-4 sm:-right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FAF8F5]/95 backdrop-blur-md border border-[#C9A24A]/40 shadow-lg flex items-center justify-center p-2 text-center select-none animate-float-gentle">
                <div className="w-full h-full rounded-full border border-dashed border-[#C9A24A]/50 flex flex-col items-center justify-center p-1.5">
                  <div className="relative w-7 h-7 mb-0.5 rounded-full overflow-hidden">
                    <Image
                      src="/logo.jpg"
                      alt="Selo Rafá"
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[8px] font-bold tracking-[0.14em] uppercase text-[#5A4631] leading-none">
                    CUIDADO
                  </span>
                  <span className="text-[7px] tracking-[0.12em] uppercase text-[#C9A24A] font-medium leading-tight">
                    HUMANIZADO
                  </span>
                </div>
              </div>

              {/* Floating Social Proof Pill */}
              <div className="absolute -bottom-5 left-4 sm:left-6 right-4 sm:right-auto px-5 py-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D8C8B0]/70 shadow-lg flex items-center gap-3.5 max-w-[320px]">
                <div className="w-10 h-10 rounded-full bg-[#F6EEDC] flex items-center justify-center shrink-0 text-[#C9A24A] border border-[#C9A24A]/30">
                  <Star className="w-5 h-5 fill-[#C9A24A]" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-editorial text-base font-bold text-[#372A1D]">5.0 de 5.0</span>
                    <span className="text-[10px] text-[#7E6C5A] font-medium">• Google</span>
                  </div>
                  <p className="text-[11px] text-[#7E6C5A] line-clamp-1 italic">
                    &ldquo;Atendimento impecável! Indico de olhos fechados.&rdquo;
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Base: Discrete Scroll Indicator ("Role para conhecer ↓") */}
      <div className="w-full flex flex-col items-center justify-center pt-8 pb-2 text-center z-10">
        <a
          href="#imunizacao"
          className="group inline-flex flex-col items-center gap-1 text-[11px] uppercase tracking-[0.25em] text-[#7E6C5A] hover:text-[#C9A24A] transition-colors"
          aria-label="Rolar para a seção de imunização"
        >
          <span className="font-medium">Role para conhecer</span>
          <ArrowDown className="w-4 h-4 text-[#C9A24A] group-hover:translate-y-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
}
