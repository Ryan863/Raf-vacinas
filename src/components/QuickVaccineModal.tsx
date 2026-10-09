"use client";

import { useState } from "react";
import { X, MessageCircle, Sparkles, Check, Home, Building2, User } from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";

interface QuickVaccineModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: string;
}

export function QuickVaccineModal({ isOpen, onClose, initialContext }: QuickVaccineModalProps) {
  const [profile, setProfile] = useState("Bebê / Primeiros Meses");
  const [modality, setModality] = useState("Na Clínica (Edifício Evolution)");
  const [name, setName] = useState("");
  const [messageNotes, setMessageNotes] = useState("");

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    
    let text = `Olá! Gostaria de agendar um atendimento na Clínica Rafá Vacinas.`;
    if (name.trim()) {
      text += `\n- Nome: ${name.trim()}`;
    }
    text += `\n- Perfil: ${profile}`;
    text += `\n- Modalidade preferida: ${modality}`;
    if (messageNotes.trim()) {
      text += `\n- Dúvidas / Observações: ${messageNotes.trim()}`;
    }
    if (initialContext) {
      text += `\n(Origem: ${initialContext})`;
    }

    const url = CLINIC_INFO.whatsappUrl(text);
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  const profiles = [
    "Bebê / Primeiros Meses",
    "Criança / Adolescente",
    "Gestante",
    "Adulto / 60+",
    "Empresa / Ocupacional",
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/45 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-[#FAF8F5] border border-[#D8C8B0] shadow-2xl overflow-hidden p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#7E6C5A] hover:text-[#372A1D] hover:bg-[#E9E1D6]/50 transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E1D6]/70 text-[10px] uppercase font-semibold tracking-wider text-[#5A4631] mb-2">
            <Sparkles className="w-3 h-3 text-[#C9A24A]" />
            <span>Triagem Humanizada</span>
          </div>
          <h2 id="modal-title" className="font-editorial text-2xl sm:text-3xl text-[#372A1D] font-normal">
            Agendamento & Consulta de Vacinas
          </h2>
          <p className="text-xs text-[#7E6C5A] mt-1 font-light">
            Selecione as informações abaixo para falar com a enfermeira responsável via WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSend} className="space-y-4">
          
          {/* Profile Selector */}
          <div>
            <label className="block text-xs font-semibold text-[#5A4631] uppercase tracking-wider mb-2">
              Quem irá receber a vacina?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {profiles.map((p) => (
                <button
                  type="button"
                  key={p}
                  onClick={() => setProfile(p)}
                  className={`py-2 px-3 rounded-xl text-xs text-left transition-all cursor-pointer ${
                    profile === p
                      ? "bg-[#5A4631] text-[#FAF8F5] font-medium shadow-2xs"
                      : "bg-white text-[#5A4631] border border-[#D8C8B0]/60 hover:bg-[#E9E1D6]/30"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Modality Selector */}
          <div>
            <label className="block text-xs font-semibold text-[#5A4631] uppercase tracking-wider mb-2">
              Onde prefere o atendimento?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setModality("Na Clínica (Edifício Evolution)")}
                className={`flex items-center gap-2 p-3 rounded-xl text-xs transition-all cursor-pointer ${
                  modality.includes("Clínica")
                    ? "bg-[#C9A24A] text-white font-medium shadow-2xs"
                    : "bg-white text-[#5A4631] border border-[#D8C8B0]/60 hover:bg-[#E9E1D6]/30"
                }`}
              >
                <Building2 className="w-4 h-4 shrink-0" />
                <span>Na Clínica (Edifício Evolution)</span>
              </button>

              <button
                type="button"
                onClick={() => setModality("No Domicílio (Em Casa)")}
                className={`flex items-center gap-2 p-3 rounded-xl text-xs transition-all cursor-pointer ${
                  modality.includes("Domicílio")
                    ? "bg-[#C9A24A] text-white font-medium shadow-2xs"
                    : "bg-white text-[#5A4631] border border-[#D8C8B0]/60 hover:bg-[#E9E1D6]/30"
                }`}
              >
                <Home className="w-4 h-4 shrink-0" />
                <span>No Domicílio (Em Casa)</span>
              </button>
            </div>
          </div>

          {/* Name Input */}
          <div>
            <label className="block text-xs font-semibold text-[#5A4631] uppercase tracking-wider mb-1.5">
              Seu Nome ou do Responsável (Opcional)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Maria Carolina"
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D8C8B0] text-xs text-[#372A1D] placeholder:text-[#7E6C5A]/50 focus:outline-hidden focus:border-[#C9A24A] focus:ring-1 focus:ring-[#C9A24A]"
            />
          </div>

          {/* Notes Input */}
          <div>
            <label className="block text-xs font-semibold text-[#5A4631] uppercase tracking-wider mb-1.5">
              Dúvidas ou vacina específica (Opcional)
            </label>
            <textarea
              rows={2}
              value={messageNotes}
              onChange={(e) => setMessageNotes(e.target.value)}
              placeholder="Ex: Gostaria de saber os valores da vacina de 2 meses e se atendem no sábado."
              className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#D8C8B0] text-xs text-[#372A1D] placeholder:text-[#7E6C5A]/50 focus:outline-hidden focus:border-[#C9A24A] focus:ring-1 focus:ring-[#C9A24A]"
            />
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C9A24A] text-white hover:bg-[#B58F3B] shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-98"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Continuar no WhatsApp com Dados Preenchidos</span>
            </button>
            <p className="text-[10px] text-center text-[#7E6C5A] mt-2">
              Horário de resposta rápido em horário comercial • WhatsApp: {CLINIC_INFO.phone}
            </p>
          </div>

        </form>

      </div>
    </div>
  );
}
