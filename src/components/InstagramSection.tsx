"use client";

import { ArrowUpRight, Sparkles, BookOpen, Shield } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { CLINIC_INFO } from "@/lib/constants";

export function InstagramSection() {
  const topics = [
    {
      title: "Orientações Pediátricas",
      desc: "Como amenizar cólicas e reações leves após a imunização.",
    },
    {
      title: "Calendários Atualizados",
      desc: "Tabelas explicativas para cada mês e ano de desenvolvimento.",
    },
    {
      title: "Dicas de Imunidade Familiar",
      desc: "Prevenção contra vírus respiratórios e cuidados sazonais.",
    },
  ];

  return (
    <section className="py-20 bg-[#F4EFE8]/60 relative border-t border-[#E9E1D6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl p-8 sm:p-12 bg-white/90 border border-[#D8C8B0]/70 shadow-sm relative overflow-hidden">
          {/* Subtle Ambient Decorative Circles */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none opacity-40 blur-2xl"
            style={{
              background: "radial-gradient(circle, rgba(201, 162, 74, 0.3) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9E1D6]/70 border border-[#D8C8B0]/50 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#5A4631] mb-4">
                <InstagramIcon className="w-3.5 h-3.5 text-[#C9A24A]" />
                <span>Comunidade & Informação</span>
              </div>

              <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#372A1D] font-normal tracking-tight mb-3">
                Acompanhe o nosso dia a dia no Instagram
              </h2>

              <p className="text-xs sm:text-sm text-[#7E6C5A] font-light leading-relaxed mb-6">
                Compartilhamos dicas de saúde preventiva, atualizações sobre calendários de vacinação e os bastidores do atendimento acolhedor na Clínica Rafá.
              </p>

              {/* Topics Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-2">
                {topics.map((t, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#E9E1D6] text-xs">
                    <span className="font-semibold text-[#5A4631] block mb-0.5">{t.title}</span>
                    <span className="text-[11px] text-[#7E6C5A] leading-tight block">{t.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile CTA Box */}
            <div className="w-full md:w-auto shrink-0 flex flex-col items-center sm:items-end justify-center">
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#D8C8B0]/70 shadow-2xs text-center w-full sm:w-64">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#C9A24A] via-[#E7C979] to-[#5A4631] p-0.5 mx-auto mb-3">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <InstagramIcon className="w-6 h-6 text-[#C9A24A]" />
                  </div>
                </div>

                <div className="font-editorial text-lg font-bold text-[#372A1D]">
                  {CLINIC_INFO.instagram.handle}
                </div>
                <div className="text-[11px] text-[#7E6C5A] mb-4">
                  Conteúdos semanais de saúde
                </div>

                <a
                  href={CLINIC_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#5A4631] text-[#FAF8F5] hover:bg-[#372A1D] transition-colors group cursor-pointer"
                >
                  <span>Seguir Perfil</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A24A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
