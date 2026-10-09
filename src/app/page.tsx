"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ImmunizationNuclei } from "@/components/ImmunizationNuclei";
import { HomeCare } from "@/components/HomeCare";
import { Testimonials } from "@/components/Testimonials";
import { ClinicStructure } from "@/components/ClinicStructure";
import { InstagramSection } from "@/components/InstagramSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { QuickVaccineModal } from "@/components/QuickVaccineModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState<string | undefined>();

  const handleOpenModal = (context?: string) => {
    setModalContext(context);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalContext(undefined);
  };

  const handleSelectNucleus = (title: string) => {
    setModalContext(`Núcleo de ${title}`);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#372A1D] relative selection:bg-[#E7C979]/30 selection:text-[#372A1D]">
      {/* Navigation */}
      <Navbar onOpenScheduleModal={handleOpenModal} />

      {/* Hero Section (Clean 100vh Editorial & Uncluttered) */}
      <Hero onOpenScheduleModal={handleOpenModal} />

      {/* Núcleos de Imunização & Cuidados */}
      <ImmunizationNuclei onSelectNucleus={handleSelectNucleus} />

      {/* Destaque: Vacinação ao Domicílio */}
      <HomeCare onOpenScheduleModal={handleOpenModal} />

      {/* Depoimentos Reais (Google Avaliações 5,0★) */}
      <Testimonials />

      {/* Estrutura, Localização & Horários */}
      <ClinicStructure />

      {/* Bloco Integrado de Instagram */}
      <InstagramSection />

      {/* Fecho & Agendamento */}
      <FinalCta onOpenScheduleModal={handleOpenModal} />

      {/* Rodapé Editorial */}
      <Footer />

      {/* Floating Action WhatsApp */}
      <FloatingWhatsApp />

      {/* Interactive Quick Scheduling / Triage Modal */}
      <QuickVaccineModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialContext={modalContext}
      />
    </main>
  );
}
