"use client"

import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import { usePathname } from "next/navigation"
import { Suspense, useEffect } from "react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SmoothScroll } from "@/components/smooth-scroll"

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
    <>
      <ScrollToTopOnRouteChangeWrapper />
      <Suspense fallback={null}>{children}</Suspense>
      <ScrollToTop />
      <SmoothScroll />
      <Analytics />
    </>
  )
}
