import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Benjamín Quiroz | People Operations · HR Tech · Automatización y Analytics",
  description:
    "Benjamín Quiroz, Digital Officer especializado en People Operations, automatización de procesos de Recursos Humanos, HR Tech, People Analytics e IA aplicada. Consultoría y proyectos de transformación digital para equipos de People & Culture.",
  keywords: [
    "Benjamín Quiroz",
    "bybenqhr",
    "People Operations",
    "HR Tech",
    "HR Automation",
    "Automatización de Recursos Humanos",
    "Power Automate",
    "Power Apps",
    "Power BI",
    "Microsoft Power Platform",
    "People Analytics",
    "Transformación digital en RRHH",
    "Digital HR",
    "IA generativa",
    "Recursos Humanos Argentina",
    "Consultoría RRHH",
    "Consultoría People & Culture",
    "Procesos de Recursos Humanos",
    "Low-code HR",
  ],
  openGraph: {
    title: "Benjamín Quiroz | HR Tech & People Operations",
    description:
      "Digital Officer y consultor en HR Tech, automatización, People Analytics y transformación digital en People & Culture. Proyectos con Power Automate, Power Apps, Power BI e IA generativa aplicados a HR.",
    url: "https://www.bybenqhr.com",
    type: "website",
    locale: "es_AR",
    siteName: "Benjamín Quiroz · bybenqhr",
    images: [
      {
        url: "/og-bybenqhr.png",
        width: 1200,
        height: 630,
        alt: "Benjamín Quiroz · People Operations & HR Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benjamín Quiroz | People Operations & HR Tech",
    description:
      "Especialista en automatización de Recursos Humanos, People Operations, Power Platform y People Analytics.",
    images: ["/og-bybenqhr.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Benjamín Quiroz",
    alternateName: "bybenqhr",
    jobTitle: "Digital Officer · People Operations & HR Tech",
    url: "https://www.bybenqhr.com",
    email: "mailto:benjamin@bybenqhr.com",
    sameAs: ["https://www.linkedin.com/in/benjamin-quiroz/"],
    worksFor: {
      "@type": "Organization",
      name: "bybenqhr",
      url: "https://www.bybenqhr.com",
    },
    knowsAbout: [
      "People Operations",
      "People & Culture",
      "HR Tech",
      "Automatización de Recursos Humanos",
      "Microsoft Power Platform",
      "Power Automate",
      "Power Apps",
      "Power BI",
      "Microsoft 365",
      "People Analytics",
      "Transformación digital en RRHH",
      "IA generativa aplicada a RRHH",
      "Metodologías ágiles",
      "Lean Six Sigma",
    ],
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          // @ts-ignore
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
