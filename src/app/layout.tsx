import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RocketLab | Soluciones Tecnológicas Empresariales",
  description: "Creamos soluciones tecnológicas que impulsan negocios hacia el futuro. Diseño, desarrollo y protección de plataformas digitales escalables.",
  keywords: "tecnología, soluciones empresariales, cloud, desarrollo software, ciberseguridad",
  openGraph: {
    title: "RocketLab | Soluciones Tecnológicas",
    description: "Soluciones tecnológicas premium para empresas",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
