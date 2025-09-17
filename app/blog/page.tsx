import type { Metadata } from "next"
import ClientBlogPage from "./ClientBlogPage"

export const metadata: Metadata = {
  title: "Blog Casa11 Movelaria - Dicas e Inspirações para Móveis Planejados",
  description:
    "Descubra dicas exclusivas, tendências e inspirações sobre móveis planejados, design de interiores e decoração no blog da Casa11 Movelaria em Santo André.",
  keywords:
    "blog móveis planejados, dicas decoração, design interiores, tendências móveis, inspiração casa, Casa11 blog",
  openGraph: {
    title: "Blog Casa11 Movelaria - Dicas e Inspirações",
    description: "Inspirações, tendências e dicas exclusivas sobre móveis planejados e design de interiores",
    url: "https://www.casa11movelaria.com.br/blog",
    siteName: "Casa11 Movelaria",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.casa11movelaria.com.br/blog",
  },
}

export default function BlogPage() {
  return <ClientBlogPage />
}
