"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/optimized-image"

interface GalleryImage {
  src: string
  alt: string
  title: string
}

const galleryImages: GalleryImage[] = [
  {
    src: "/modern-planned-kitchen-furniture-elegant-design.jpg",
    alt: "Cozinha planejada moderna com acabamento premium",
    title: "Cozinha Planejada Premium",
  },
  {
    src: "/modern-planned-kitchen-cabinets.jpg",
    alt: "Armários de cozinha planejados com design contemporâneo",
    title: "Armários Sob Medida",
  },
  {
    src: "/modern-bedroom-wardrobe-furniture.jpg",
    alt: "Guarda-roupa planejado para dormitório moderno",
    title: "Dormitório Completo",
  },
  {
    src: "/modern-home-office-desk-furniture.jpg",
    alt: "Mesa e móveis para home office planejado",
    title: "Home Office Funcional",
  },
]

export function FullscreenGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === "ArrowLeft") prevImage()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "Escape") setIsOpen(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  return (
    <>
      {/* Gallery Trigger */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-work-sans">Galeria de Projetos</h2>
            <p className="text-xl text-muted-foreground font-open-sans">
              Conheça nossos móveis planejados de alto padrão
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video cursor-pointer group overflow-hidden rounded-lg"
                onClick={() => {
                  setCurrentIndex(index)
                  setIsOpen(true)
                }}
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  fill={true}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  quality={80}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">Ver em tela cheia</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Gallery Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <OptimizedImage
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill={true}
              className="object-contain"
              sizes="100vw"
              quality={90}
              priority={true}
            />

            {/* Image Title */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{galleryImages[currentIndex].title}</h3>
              <p className="text-lg opacity-80">{galleryImages[currentIndex].alt}</p>
            </div>
          </div>

          {/* Navigation Arrows with Nudge Animation */}
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 w-16 h-16 nudge-left"
              onClick={prevImage}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
          </div>

          <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 w-16 h-16 nudge-right"
              onClick={nextImage}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>
          </div>

          {/* Custom Pagination Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                }`}
                onClick={() => goToImage(index)}
              />
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .nudge-left {
          animation: nudgeLeft 2s ease-in-out infinite;
        }
        
        .nudge-right {
          animation: nudgeRight 2s ease-in-out infinite;
        }
        
        @keyframes nudgeLeft {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-10px); }
        }
        
        @keyframes nudgeRight {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
      `}</style>
    </>
  )
}
