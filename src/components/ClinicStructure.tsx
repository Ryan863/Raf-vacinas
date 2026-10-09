"use client";

import Image from "next/image";
import { useState } from "react";
import { MapPin, Clock, Navigation, Check, Phone, ShieldCheck } from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";

export function ClinicStructure() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="clinica" className="py-24 md:py-32 bg-[#FAF8F5] relative border-t border-[#E9E1D6]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E1D6]/60 border border-[#D8C8B0]/50 text-[11px] font-medium tracking-[0.2em] uppercase text-[#5A4631] mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span>Edifício Evolution • Centro</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#372A1D] font-normal tracking-tight mb-5">
            Ambiente acolhedor, projetado para o seu bem-estar
          </h2>

          <p className="text-base sm:text-lg text-[#7E6C5A] font-light leading-relaxed">
            Localizada no coração de Herval d&apos;Oeste, com fácil acesso para toda a região metropolitana e Joaçaba, oferecemos um espaço sereno, seguro e privativo.
          </p>
        </div>

        {/* 2 Column Layout: Interior Visual + Hours & Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Photo Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-[#D8C8B0]/70 shadow-lg bg-[#FAF8F5]">
              <Image
                src="/clinic-interior.jpg"
                alt="Consultório humanizado e acolhedor da Clínica Rafá Vacinas no Edifício Evolution"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-cover object-center transition-transform duration-700 hover:scale-105 mask-radial-gentle"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#372A1D]/25 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Corner Badge */}
            <div className="absolute -bottom-4 left-6 px-5 py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D8C8B0]/70 shadow-md flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#C9A24A]" />
              <div className="text-xs">
                <span className="font-semibold text-[#372A1D] block">Espaço Kids & Climatizado</span>
                <span className="text-[#7E6C5A]">Sem filas e com hora marcada</span>
              </div>
            </div>
          </div>

          {/* Details Column: Hours & Address */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Hours Card */}
            <div className="p-8 rounded-3xl bg-white/90 border border-[#D8C8B0]/60 shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#F6EEDC] flex items-center justify-center text-[#C9A24A]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-editorial text-xl font-semibold text-[#372A1D]">
                    Horário de Atendimento
                  </h3>
                  <p className="text-xs text-[#7E6C5A]">
                    Atendimento na clínica e agendamentos domiciliares
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 divide-y divide-[#E9E1D6]/60">
                {CLINIC_INFO.hours.map((h, i) => (
                  <div key={i} className="pt-3.5 first:pt-0 flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-medium text-[#5A4631]">{h.days}</span>
                    <span
                      className={`font-semibold ${
                        h.open ? "text-[#372A1D]" : "text-[#9B762A] italic"
                      }`}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Address & Navigation Card */}
            <div className="p-8 rounded-3xl bg-white/90 border border-[#D8C8B0]/60 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F6EEDC] flex items-center justify-center text-[#C9A24A]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-editorial text-xl font-semibold text-[#372A1D]">
                    Localização Privilegiada
                  </h3>
                  <p className="text-xs text-[#7E6C5A]">
                    Edifício Evolution • Centro de Herval d&apos;Oeste
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#5A4631] leading-relaxed mb-6 font-light">
                {CLINIC_INFO.address.street} — {CLINIC_INFO.address.complement} <br />
                {CLINIC_INFO.address.neighborhood}, {CLINIC_INFO.address.city} – {CLINIC_INFO.address.state} (CEP: {CLINIC_INFO.address.cep})
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={CLINIC_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#5A4631] text-[#FAF8F5] hover:bg-[#372A1D] transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C9A24A]" />
                  <span>Traçar Rota no GPS</span>
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium text-[#5A4631] border border-[#D8C8B0] hover:bg-[#E9E1D6]/50 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <span>Copiar Endereço</span>
                  )}
                </button>

                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-medium text-[#7E6C5A] hover:text-[#372A1D] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C9A24A]" />
                  <span>{CLINIC_INFO.phone}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
