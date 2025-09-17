import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

const jsonLdScript = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Casa11 Movelaria",
  image: "https://www.casa11movelaria.com.br/banner-hero-1.webp",
  description:
    "Especialistas em móveis planejados em Santo André. Cozinhas, dormitórios, home office e projetos sob medida.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. São Paulo, 422",
    addressLocality: "Santo André",
    addressRegion: "SP",
    postalCode: "09111-410",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.6789012,
    longitude: -46.5234567,
  },
  url: "https://www.casa11movelaria.com.br",
  telephone: "+5511947901838",
  email: "movelariacasa11@gmail.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  priceRange: "$$",
  servesCuisine: "Móveis Planejados",
  areaServed: {
    "@type": "City",
    name: "Santo André",
  },
}

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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdScript),
          }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
