"use client";

import { Star, Quote, CheckCircle, ExternalLink } from "lucide-react";
import { REVIEWS, CLINIC_INFO } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="avaliacoes" className="py-24 md:py-32 bg-[#FAF8F5] relative border-t border-[#E9E1D6]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E1D6]/60 border border-[#D8C8B0]/50 text-[11px] font-medium tracking-[0.2em] uppercase text-[#5A4631] mb-4">
            <Star className="w-3.5 h-3.5 fill-[#C9A24A] text-[#C9A24A]" />
            <span>Nota 5,0 no Google Avaliações</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#372A1D] font-normal tracking-tight mb-5">
            O que as famílias dizem sobre o nosso acolhimento
          </h2>

          <p className="text-base sm:text-lg text-[#7E6C5A] font-light leading-relaxed">
            A verdadeira medida do nosso trabalho está na serenidade dos bebês e na confiança dos pais e responsáveis.
          </p>

          {/* Google Rating Badge Summary */}
          <div className="mt-8 inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/90 border border-[#D8C8B0]/60 shadow-xs">
            <div className="flex text-[#C9A24A]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C9A24A]" />
              ))}
            </div>
            <div className="text-xs font-semibold text-[#372A1D]">
              5.0 de 5.0 Estrelas
            </div>
            <span className="text-[#D8C8B0]">•</span>
            <span className="text-xs text-[#7E6C5A]">
              100% Avaliações Positivas
            </span>
          </div>
        </div>

        {/* Testimonials Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((review, index) => {
            // Emphasize the second long review (Francieli Dalros) with col-span on desktop if desired
            const isFeatured = index === 1;

            return (
              <div
                key={index}
                className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  isFeatured
                    ? "lg:col-span-2 bg-gradient-to-br from-[#FAF8F5] via-[#F4EFE8] to-[#E9E1D6]/50 border border-[#C9A24A]/40 shadow-xs"
                    : "bg-white/80 border border-[#D8C8B0]/60 shadow-2xs"
                }`}
              >
                <div>
                  {/* Top Bar: Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex text-[#C9A24A] gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#C9A24A]" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#D8C8B0] opacity-60" />
                  </div>

                  {/* Quote Content */}
                  <p
                    className={`font-editorial text-[#372A1D] leading-relaxed mb-8 italic ${
                      isFeatured ? "text-xl sm:text-2xl font-normal" : "text-lg font-normal"
                    }`}
                  >
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-[#E9E1D6] flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-sm text-[#372A1D]">
                      {review.author}
                    </h3>
                    <p className="text-[11px] text-[#7E6C5A] flex items-center gap-1 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-[#C9A24A]" />
                      <span>{review.role}</span>
                    </p>
                  </div>

                  <span className="text-[10px] tracking-widest uppercase font-semibold text-[#C9A24A] bg-[#F6EEDC] px-2.5 py-1 rounded-full border border-[#C9A24A]/20">
                    Verificado
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to view on Google */}
        <div className="mt-12 text-center">
          <a
            href={CLINIC_INFO.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7E6C5A] hover:text-[#C9A24A] transition-colors"
          >
            <span>Ver todas as avaliações no Google Perfil da Empresa</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
