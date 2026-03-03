import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"
import ClientLayout from "./ClientLayout"

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  preload: true,
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.casa11movelaria.com.br"),
  title: {
    default: "Casa11 Movelaria - Móveis Planejados em Santo André",
    template: "%s | Casa11 Movelaria",
  },
  description:
    "Casa11 Movelaria - Especialistas em móveis planejados em Santo André. Cozinhas, dormitórios, home office e projetos sob medida com 10 anos de garantia.",
  generator: "Casa11 Movelaria",
  keywords:
    "móveis planejados, Santo André, cozinhas planejadas, dormitórios planejados, home office, closets, Casa11, móveis sob medida, ABC Paulista",
  authors: [{ name: "Casa11 Movelaria", url: "https://www.casa11movelaria.com.br" }],
  creator: "Casa11 Movelaria",
  publisher: "Casa11 Movelaria",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Casa11 Movelaria - Móveis Planejados em Santo André",
    description:
      "Especialistas em móveis planejados em Santo André. Cozinhas, dormitórios, home office e projetos sob medida com 10 anos de garantia.",
    url: "https://www.casa11movelaria.com.br",
    siteName: "Casa11 Movelaria",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/banner-hero-1.webp",
        width: 1920,
        height: 1080,
        alt: "Casa11 Movelaria - Móveis Planejados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa11 Movelaria - Móveis Planejados em Santo André",
    description:
      "Especialistas em móveis planejados em Santo André. Cozinhas, dormitórios, home office e projetos sob medida.",
    images: ["/banner-hero-1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
  other: {
    "preload-image": "/banner-hero-1.webp",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${workSans.variable} ${openSans.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
