import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["100", "200","300","400","500","600","700","800"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://daniellenegrao.adv.br"),
  title: "Direito de Família e Sucessões - Advocacia e Consultoria Jurídica - Danielle Barbosa Negrão",
  description: "Advogada de família com especialização em divórcio, pensão, guarda e inventários. Atendimento humanizado e personalizado. Agende uma consulta!",
  keywords: ['Advogado de família', 'Advogado de divórcio', 'Advogado de inventário', 'Pensão alimentícia', 'Guarda compartilhada', 'Ação de alimentos', 'Advogado em Sorocaba'],
  openGraph: {
    description: "Advogada de família com especialização em divórcio, pensão, guarda e inventários. Atendimento humanizado e personalizado. Agende uma consulta!"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}
