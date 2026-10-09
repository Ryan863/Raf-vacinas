import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rafavacinas.com.br"),
  title: "Clínica Rafá Vacinas | Vacinação Humanizada para Toda a Família",
  description:
    "Clínica de imunização particular e vacinação ao domicílio em Herval d'Oeste e Joaçaba - SC. Atendimento humanizado, acolhedor e sem traumas no Edifício Evolution. Nota 5.0 no Google.",
  keywords: [
    "Clínica Rafá Vacinas",
    "vacinas Herval d'Oeste",
    "vacinação domiciliar Joaçaba",
    "clínica de vacinação particular SC",
    "vacina bebê sem dor",
    "imunização humanizada",
    "Edifício Evolution Herval d'Oeste",
    "vacina BCG",
    "vacina rotavírus",
    "vacina hexavalente",
  ],
  authors: [{ name: "Clínica Rafá Vacinas" }],
  openGraph: {
    title: "Clínica Rafá Vacinas | Vacinação Humanizada para Toda a Família",
    description:
      "Atendimento acolhedor na clínica e no aconchego do seu lar. Avaliação 5.0 estrelas no Google. Herval d'Oeste - SC.",
    url: "https://rafavacinas.com.br",
    siteName: "Clínica Rafá Vacinas",
    images: [
      {
        url: "/logo.jpg",
        width: 1024,
        height: 1024,
        alt: "Logótipo Clínica Rafá Vacinas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Clínica Rafá Vacinas",
  image: "https://rafavacinas.com.br/logo.jpg",
  description:
    "Clínica particular de vacinação humana e atendimento vacinal ao domicílio no centro de Herval d'Oeste - SC.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Santos Dumont, 449 — Edifício Evolution, Segundo Andar, Sala 2",
    addressLocality: "Herval d'Oeste",
    addressRegion: "SC",
    postalCode: "89610-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -27.1724,
    longitude: -51.4984,
  },
  telephone: "+5549988467825",
  url: "https://rafavacinas.com.br",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "13:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "48",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorantGaramond.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF8F5] text-[#372A1D] antialiased selection:bg-[#E7C979]/30 selection:text-[#372A1D]">
        {children}
      </body>
    </html>
  );
}
