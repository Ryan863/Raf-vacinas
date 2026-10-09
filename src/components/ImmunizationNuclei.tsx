"use client";

import { useState } from "react";
import { Baby, Sparkles, Heart, Briefcase, CheckCircle2, MessageCircle, ArrowUpRight } from "lucide-react";
import { CLINIC_INFO, VACCINATION_NUCLEI } from "@/lib/constants";

interface ImmunizationNucleiProps {
  onSelectNucleus: (title: string) => void;
}

export function ImmunizationNuclei({ onSelectNucleus }: ImmunizationNucleiProps) {
  const [activeTab, setActiveTab] = useState<string>("bebes");

  const iconsMap: Record<string, React.ReactNode> = {
    bebes: <Baby className="w-5 h-5 text-[#C9A24A]" />,
    infantil: <Sparkles className="w-5 h-5 text-[#C9A24A]" />,
    adulto: <Heart className="w-5 h-5 text-[#C9A24A]" />,
    ocupacional: <Briefcase className="w-5 h-5 text-[#C9A24A]" />,
  };

  return (
    <section id="imunizacao" className="py-24 md:py-32 bg-[#FAF8F5] relative border-t border-[#E9E1D6]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Editorial Serif */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E1D6]/60 border border-[#D8C8B0]/50 text-[11px] font-medium tracking-[0.2em] uppercase text-[#5A4631] mb-4">
            <span>Cuidados Personalizados</span>
          </div>
          
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#372A1D] font-normal tracking-tight mb-5">
            Núcleos de Imunização & Cuidados
          </h2>
          
          <p className="text-base sm:text-lg text-[#7E6C5A] font-light leading-relaxed">
            Cada fase da vida possui necessidades biológicas e emocionais singulares. Conheça nossa abordagem humanizada para bebês, crianças, adultos e empresas.
          </p>

          {/* Quick Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {VACCINATION_NUCLEI.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                  activeTab === item.id
                    ? "bg-[#5A4631] text-[#FAF8F5] shadow-xs"
                    : "bg-[#FAF8F5] text-[#5A4631] border border-[#D8C8B0] hover:bg-[#E9E1D6]/50"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout (21st-dev inspired, editorial palette) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {VACCINATION_NUCLEI.map((nucleus, index) => {
            const isFeatured = nucleus.id === "bebes";
            const colSpan = isFeatured ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : index === 2 ? "lg:col-span-5" : "lg:col-span-7";

            return (
              <div
                key={nucleus.id}
                className={`${colSpan} group relative rounded-3xl p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between ${
                  activeTab === nucleus.id
                    ? "ring-2 ring-[#C9A24A]/60 shadow-xl"
                    : "shadow-xs hover:shadow-md"
                } ${
                  isFeatured
                    ? "bg-gradient-to-br from-[#FAF8F5] via-[#F4EFE8] to-[#E9E1D6]/50 border border-[#C9A24A]/40"
                    : "bg-white/90 border border-[#D8C8B0]/60 hover:border-[#C9A24A]/40"
                }`}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#C9A24A]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F6EEDC] border border-[#C9A24A]/30 flex items-center justify-center shrink-0">
                      {iconsMap[nucleus.id]}
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.16em] font-semibold px-3 py-1 rounded-full bg-[#E9E1D6]/80 text-[#5A4631] border border-[#D8C8B0]/60">
                      {nucleus.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#372A1D] font-medium mb-2 group-hover:text-[#5A4631] transition-colors">
                    {nucleus.title}
                  </h3>
                  <h4 className="text-xs uppercase tracking-wider text-[#C9A24A] font-semibold mb-4">
                    {nucleus.subtitle}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-[#7E6C5A] leading-relaxed mb-6 font-light">
                    {nucleus.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 mb-8">
                    {nucleus.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#5A4631]">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#E9E1D6] flex items-center justify-between">
                  <a
                    href={CLINIC_INFO.whatsappUrl(
                      `Olá! Gostaria de consultar informações sobre ${nucleus.title} na Clínica Rafá.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5A4631] hover:text-[#C9A24A] transition-colors group/link cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C9A24A]" />
                    <span>Consultar este núcleo</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>

                  <button
                    onClick={() => onSelectNucleus(nucleus.title)}
                    className="text-[11px] text-[#7E6C5A] hover:text-[#372A1D] underline underline-offset-4 cursor-pointer"
                  >
                    Mais detalhes
                  </button>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
