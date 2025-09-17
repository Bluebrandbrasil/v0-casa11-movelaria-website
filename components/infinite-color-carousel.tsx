"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const colors = [
  { name: "Amantea", image: "/color-amantea.jpg" },
  { name: "Canela", image: "/color-canela.jpg" },
  { name: "Beige", image: "/color-beige.jpg" },
  { name: "Absoluto", image: "/color-absoluto.png" },
  { name: "Branco TX", image: "/color-branco-tx.jpg" },
  { name: "Cinza Sagrado", image: "/color-cinza-sagrado.png" },
  { name: "Beton Matt", image: "/color-beton-matt.jpg" },
  { name: "Branco Cristallo", image: "/color-branco-cristallo.jpg" },
  { name: "Capuccino", image: "/color-capuccino.jpg" },
  { name: "Branco Supremo", image: "/color-branco-supremo.jpg" },
  { name: "Gianduia", image: "/color-gianduia.jpg" },
  { name: "Carvalho", image: "/color-carvalho.jpg" },
  { name: "Curupixá", image: "/color-curupixa.jpg" },
  { name: "Cinza Sagrado Cristallo", image: "/color-cinza-sagrado-cristallo-2.jpg" },
  { name: "Cinamomo", image: "/color-cinamomo.jpg" },
  { name: "Lord", image: "/color-lord.jpg" },
  { name: "Louro Preto", image: "/color-louro-preto.jpg" },
  { name: "Grafito", image: "/color-grafito.jpg" },
  { name: "Fontana", image: "/color-fontana.jpg" },
  { name: "Louro Freijó", image: "/color-louro-freijo.jpg" },
  { name: "Gianduia Premium", image: "/color-gianduia-2.jpg" },
  { name: "Lord Premium", image: "/color-lord-2.jpg" },
  { name: "Fontana Premium", image: "/color-fontana-2.jpg" },
  { name: "Grafito Premium", image: "/color-grafito-2.jpg" },
  { name: "Macadâmia", image: "/color-macadamia.jpg" },
  { name: "Louro Preto Premium", image: "/color-louro-preto-2.jpg" },
  { name: "Mint", image: "/color-mint.jpg" },
  { name: "Marmo", image: "/color-marmo.jpg" },
  { name: "Louro Freijó Premium", image: "/color-louro-freijo-2.jpg" },
  { name: "Mint Premium", image: "/color-mint-2.jpg" },
  { name: "Nogueira Pecan", image: "/color-nogueira-pecan.jpg" },
  { name: "Millennial", image: "/color-millennial.jpg" },
]

export function InfiniteColorCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.3

    const animate = () => {
      scrollPosition += scrollSpeed

      // Reset position when we've scrolled past the first set of items
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    // Pause on hover/touch
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId)
    }

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate)
    }

    const handleTouchStart = () => {
      cancelAnimationFrame(animationId)
    }

    const handleTouchEnd = () => {
      animationId = requestAnimationFrame(animate)
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)
    scrollContainer.addEventListener("touchstart", handleTouchStart)
    scrollContainer.addEventListener("touchend", handleTouchEnd)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
      scrollContainer.removeEventListener("touchstart", handleTouchStart)
      scrollContainer.removeEventListener("touchend", handleTouchEnd)
    }
  }, [])

  // Duplicate colors for seamless infinite scroll
  const duplicatedColors = [...colors, ...colors]

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-r from-[#F2EAE4] to-[#E8DDD4] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#020202] mb-2 font-work-sans">
            Nossas Cores Disponíveis
          </h2>
          <p className="text-sm sm:text-base text-[#73716E] font-open-sans px-4">
            Escolha entre nossa ampla variedade de acabamentos premium
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 lg:gap-6 overflow-hidden scrollbar-hide"
          style={{ scrollBehavior: "auto" }}
        >
          {duplicatedColors.map((color, index) => (
            <div key={`${color.name}-${index}`} className="flex-shrink-0 group cursor-pointer">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Image
                  src={color.image || "/placeholder.svg"}
                  alt={color.name}
                  fill={true}
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, (max-width: 1024px) 128px, 160px"
                  quality={75}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end">
                  <div className="w-full p-1 sm:p-2 bg-black/60 text-white text-xs sm:text-sm font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {color.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
