"use client"

import type React from "react"
import { Work_Sans, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { usePathname } from "next/navigation"
import { Suspense, useEffect } from "react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SmoothScroll } from "@/components/smooth-scroll"

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

function ScrollToTopOnRouteChangeWrapper() {
  return (
    <Suspense fallback={null}>
      <ScrollToTopOnRouteChange />
    </Suspense>
  )
}

function ScrollToTopOnRouteChange() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preload" href="/logo-casa11.png" as="image" type="image/png" />
        <link rel="preload" href="/modern-planned-kitchen-furniture-elegant-design.jpg" as="image" type="image/jpeg" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Google Tag Manager - Replace GTM-XXXXXXX with actual ID */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');`,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.casa11movelaria.com.br" />
      </head>
      <body className={`font-sans ${workSans.variable} ${openSans.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ScrollToTopOnRouteChangeWrapper />
        <Suspense fallback={null}>{children}</Suspense>
        <ScrollToTop />
        <SmoothScroll />
        <Analytics />
      </body>
    </html>
  )
}
