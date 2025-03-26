import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Usando la fuente Inter como ejemplo
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agropel-Mantencion",
  description: "Agropel-Mantencion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        />
      </head>
      <body className={`${inter.variable} bg-gray-100`}>
        {children}
      </body>
    </html>
  );
}
