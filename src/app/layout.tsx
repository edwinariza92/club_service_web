import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EMAIL_CONTACTO } from "@/lib/links";

const SITE_URL = "https://clubservice.com.co";
const TELEFONO = "+57 304 452 5315";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Club Service",
      url: SITE_URL,
      logo: `${SITE_URL}/logo-club-service-transparente.png`,
      email: EMAIL_CONTACTO,
      telephone: TELEFONO,
      description:
        "Operación integral de club houses y conjuntos residenciales en Colombia: recepción, zonas comunes, mantenimiento, actividades y tecnología propia.",
      areaServed: { "@type": "Country", name: "Colombia" },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: TELEFONO,
        contactType: "sales",
        areaServed: "CO",
        availableLanguage: ["es"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Club Service",
      inLanguage: "es-CO",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#servicio`,
      name: "Operación integral de Club Houses",
      serviceType:
        "Administración y operación de club houses y conjuntos residenciales",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Colombia" },
      description:
        "Recepción, piscina, gimnasio, aseo, todería, actividades recreativas, mantenimiento menor y plataforma de reservas.",
    },
  ],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Club Service | Operación integral de Club Houses",
    template: "%s | Club Service",
  },
  description:
    "Operamos y administramos Club Houses y conjuntos residenciales con equipo en sitio, procesos claros y tecnología propia de reservas.",
  metadataBase: new URL("https://clubservice.com.co"),
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/favicon-512.png", sizes: "512x512", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: "Club Service",
    title: "Club Service | Operación integral de Club Houses",
    description:
      "Operamos y administramos Club Houses y conjuntos residenciales con equipo en sitio y plataforma propia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-CO"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-card focus:bg-white focus:px-4 focus:py-2 focus:text-navy focus:shadow-suave"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
