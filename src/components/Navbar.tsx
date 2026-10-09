"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu, X, PhoneCall } from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";

interface NavbarProps {
  onOpenScheduleModal: (context?: string) => void;
}

export function Navbar({ onOpenScheduleModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Imunização", href: "#imunizacao" },
    { label: "Atendimento ao Domicílio", href: "#domicilio" },
    { label: "A Clínica", href: "#clinica" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#D8C8B0]/40 py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link
            href="#"
            className="flex items-center gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9A24A]"
          >
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border border-[#C9A24A]/40 shadow-xs group-hover:scale-105 transition-transform duration-300 bg-white">
              <Image
                src="/logo.jpg"
                alt="Clínica Rafá Vacinas"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-lg md:text-xl font-semibold tracking-wide text-[#372A1D] group-hover:text-[#5A4631] transition-colors leading-tight">
                Clínica Rafá Vacinas
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#7E6C5A] font-medium hidden sm:inline-block">
                Herval d&apos;Oeste • SC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-8 text-[13px] tracking-wide text-[#5A4631]"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 font-medium text-[#5A4631]/80 hover:text-[#372A1D] transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C9A24A] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & Pill Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="text-xs text-[#7E6C5A] hover:text-[#372A1D] flex items-center gap-1.5 transition-colors"
              title="Ligue para nós"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C9A24A]" />
              <span>{CLINIC_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenScheduleModal("Navbar Principal")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C9A24A] text-white hover:bg-[#B58F3B] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Agendar Vacina</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenScheduleModal("Navbar Mobile")}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-[#C9A24A] text-white hover:bg-[#B58F3B] transition-colors cursor-pointer"
            >
              Agendar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#5A4631] hover:text-[#372A1D] focus:outline-hidden cursor-pointer"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5]/98 border-b border-[#D8C8B0]/50 px-6 py-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-4 text-sm font-medium text-[#5A4631]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#E9E1D6]/60 hover:text-[#C9A24A] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={CLINIC_INFO.whatsappUrl("Olá! Gostaria de agendar pelo menu móvel.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C9A24A] text-white shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Oficial</span>
              </a>
              <div className="text-center text-xs text-[#7E6C5A] pt-1">
                Edifício Evolution, Sala 2 • Centro
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
