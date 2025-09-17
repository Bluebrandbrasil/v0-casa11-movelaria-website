import type { Metadata } from "next"
import ClientHomePage from "./ClientHomePage"

export const metadata: Metadata = {
  title: "Casa11 Movelaria - Móveis Planejados em Santo André | Cozinhas, Dormitórios e Home Office",
  description:
    "Casa11 Movelaria: especialistas em móveis planejados em Santo André. Cozinhas, dormitórios, closets, home office e banheiros sob medida. Orçamento gratuito e 10 anos de garantia.",
  keywords:
    "móveis planejados Santo André, cozinha planejada, dormitório planejado, closet sob medida, home office planejado, móveis sob medida ABC, Casa11 Movelaria",
  openGraph: {
    title: "Casa11 Movelaria - Móveis Planejados em Santo André",
    description:
      "Transforme sua casa em lar com móveis planejados de alta qualidade. Cozinhas, dormitórios, closets e home office sob medida.",
    url: "https://www.casa11movelaria.com.br",
    siteName: "Casa11 Movelaria",
    images: [
      {
        url: "/banner-hero-1.webp",
        width: 1920,
        height: 1080,
        alt: "Casa11 Movelaria - Móveis Planejados",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.casa11movelaria.com.br",
  },
}

export default function HomePage() {
  return <ClientHomePage />
}
