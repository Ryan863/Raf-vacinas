import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin, Phone, Shield } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { CLINIC_INFO } from "@/lib/constants";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#5A4631] text-[#FAF8F5] pt-16 pb-12 border-t border-[#372A1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#C9A24A]/60 bg-white">
                <Image
                  src="/logo.jpg"
                  alt="Clínica Rafá Vacinas"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-editorial text-xl font-bold tracking-wide text-white block">
                  Clínica Rafá Vacinas
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#D8C8B0] font-light">
                  {CLINIC_INFO.slogan}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#D8C8B0]/80 leading-relaxed font-light max-w-sm mb-6">
              Centro médico de imunização particular e atendimento vacinal ao domicílio no centro de Herval d&apos;Oeste – SC. Segurança técnica e afeto em cada atendimento.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={CLINIC_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C9A24A] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram da Clínica Rafá Vacinas"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={CLINIC_INFO.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C9A24A] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp da Clínica Rafá Vacinas"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A24A] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D8C8B0]/90">
              <li>
                <a href="#imunizacao" className="hover:text-white transition-colors">
                  Núcleos de Imunização
                </a>
              </li>
              <li>
                <a href="#domicilio" className="hover:text-white transition-colors">
                  Vacinação ao Domicílio
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">
                  Avaliações 5,0★ no Google
                </a>
              </li>
              <li>
                <a href="#clinica" className="hover:text-white transition-colors">
                  Localização e Horários
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto e Agendamento
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location Details */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A24A] mb-4">
              Atendimento & Localização
            </h4>
            <div className="space-y-3 text-xs text-[#D8C8B0]/90 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
                <span>
                  {CLINIC_INFO.address.street} — {CLINIC_INFO.address.complement} <br />
                  Centro, {CLINIC_INFO.address.city} – {CLINIC_INFO.address.state}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A24A] shrink-0" />
                <span>WhatsApp: {CLINIC_INFO.phone}</span>
              </div>

              <div className="pt-2 text-[11px] text-[#D8C8B0]/70">
                <span className="font-semibold text-white/90 block mb-0.5">Horários:</span>
                Seg a Sex: 08h–12h e 13h–17h | Sáb: 08h–12h
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#D8C8B0]/60">
          <div>
            © {currentYear} {CLINIC_INFO.name}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2">
            <span>Herval d&apos;Oeste • Joaçaba • Santa Catarina</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
