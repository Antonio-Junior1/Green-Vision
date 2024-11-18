import type { Metadata } from "next";

import "./globals.css";
import { HeaderHome } from "./_components/header-home";
import Footer from "./_components/Footer";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        

        <HeaderHome/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
