"use client"

import type React from "react"
import { InfiniteColorCarousel } from "@/components/infinite-color-carousel"
import { BlogPreviewSection } from "@/components/blog-preview-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { OptimizedImage } from "@/components/optimized-image"
import Image from "next/image"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.173-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
)

export default function ClientHomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    nome: "",
    ambientes: "",
    investimento: "",
    telefone: "",
    email: "",
    mensagem: "",
  })

  const [activeEnvironment, setActiveEnvironment] = useState("Cozinha")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `*Solicitação de Orçamento - Casa11 Movelaria*

*Nome:* ${formData.nome}
*Ambientes de interesse:* ${formData.ambientes}
*Estimativa de investimento:* ${formData.investimento}
*Telefone:* ${formData.telefone}
*E-mail:* ${formData.email}
*Mensagem:* ${formData.mensagem}

Enviado através do site Casa11 Movelaria`

    const whatsappUrl = `https://wa.me/5511947901838?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const environments = {
    Cozinha: {
      background: "/kitchen-1.jpg",
      images: [
        "/kitchen-1.jpg",
        "/kitchen-2.jpg",
        "/kitchen-3.jpg",
        "/kitchen-4.jpg",
        "/kitchen-5.jpg",
        "/kitchen-6.jpg",
      ],
    },
    Dormitório: {
      background: "/bedroom-1.jpg",
      images: ["/bedroom-1.jpg", "/bedroom-2.jpg", "/bedroom-3.jpg", "/bedroom-4.jpg", "/bedroom-5.jpg"],
    },
    Sala: {
      background: "/living-room-1.jpg",
      images: [
        "/living-room-1.jpg",
        "/living-room-2.jpg",
        "/living-room-3.jpg",
        "/living-room-4.jpg",
        "/living-room-5.jpg",
      ],
    },
    Living: {
      background: "/living-area-1.jpg",
      images: ["/living-area-1.jpg", "/living-area-2.jpg", "/living-area-3.jpg", "/living-area-4.jpg"],
    },
    Escritório: {
      background: "/office-1.jpg",
      images: [
        "/office-1.jpg",
        "/office-2.jpg",
        "/office-3.jpg",
        "/office-4.jpg",
        "/office-5.jpg",
        "/office-6.jpg",
        "/office-7.jpg",
      ],
    },
    Banheiro: {
      background: "/bathroom-1.jpg",
      images: [
        "/bathroom-1.jpg",
        "/bathroom-2.jpg",
        "/bathroom-3.jpg",
        "/bathroom-4.jpg",
        "/bathroom-5.jpg",
        "/bathroom-6.jpg",
      ],
    },
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="hero relative">
        <div className="hero__bg">
          <picture>
            <source media="(max-width: 768px)" srcSet="/hero-mobile-casal.png 768w" sizes="100vw" type="image/png" />
            <source
              media="(min-width: 769px)"
              srcSet="/banner-hero-1.webp 1920w, /banner-hero-1.png 1920w"
              sizes="100vw"
              type="image/webp"
            />
            <OptimizedImage
              src="/banner-hero-1.png"
              alt="Casa11 Movelaria - Móveis planejados em Santo André: cozinhas, dormitórios, closets e home office sob medida"
              width={1920}
              height={1080}
              priority={true}
              className="hero__img hero w-full h-auto object-contain md:object-cover"
              sizes="100vw"
              quality={90}
            />
          </picture>
        </div>
      </section>

      {/* Auto-scrolling Text Divider */}
      <section className="bg-[#73716E] py-3 sm:py-4 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          <div className="flex items-center space-x-4 sm:space-x-8 text-white font-semibold text-sm sm:text-lg">
            <span>10 ANOS DE GARANTIA</span>
            <span className="text-white/60">|</span>
            <span className="hidden sm:inline">PARCELAMENTO NO BOLETO</span>
            <span className="sm:hidden">PARCELAMENTO</span>
            <span className="text-white/60">|</span>
            <span>PROJETO 3D</span>
            <span className="text-white/60">|</span>
            <span className="hidden sm:inline">DIVERSAS CORES</span>
            <span className="sm:hidden">CORES</span>
            <span className="text-white/60">|</span>
            <span className="hidden sm:inline">MEDIÇÃO E CRIAÇÃO DO PROJETO</span>
            <span className="sm:hidden">PROJETO GRÁTIS</span>
            <span className="text-white/60">|</span>
            {/* Duplicate for seamless loop */}
            <span>10 ANOS DE GARANTIA</span>
            <span className="text-white/60">|</span>
            <span className="hidden sm:inline">PARCELAMENTO NO BOLETO</span>
            <span className="sm:hidden">PARCELAMENTO</span>
            <span className="text-white/60">|</span>
            <span>PROJETO 3D</span>
            <span className="text-white/60">|</span>
            <span className="hidden sm:inline">DIVERSAS CORES</span>
            <span className="sm:hidden">CORES</span>
            <span className="text-white/60">|</span>
            <span className="hidden sm:inline">MEDIÇÃO E CRIAÇÃO DO PROJETO</span>
            <span className="sm:hidden">PROJETO GRÁTIS</span>
            <span className="text-white/60">|</span>
          </div>
        </div>
      </section>

      {/* Project Form Section */}
      <section className="py-8 sm:py-12 lg:py-16" style={{ backgroundColor: "#F2EAE4" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content - Image - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:flex justify-center order-2 lg:order-1">
              <OptimizedImage
                src="/solicite-orcamento-banner.png"
                alt="Solicite orçamento gratuito para móveis planejados - Casa11 Movelaria Santo André"
                width={500}
                height={600}
                className="w-full max-w-lg h-auto"
                sizes="(max-width: 1024px) 0px, 500px"
                quality={85}
              />
            </div>

            {/* Right Form - Full width on mobile */}
            <div className="order-1 lg:order-2">
              <div className="text-center lg:hidden mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2 font-work-sans">
                  Móveis Planejados em Santo André
                </h1>
                <p className="text-muted-foreground font-open-sans">
                  Solicite um orçamento gratuito e personalize seus ambientes
                </p>
              </div>

              <Card className="p-4 sm:p-6 shadow-xl border-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm">
                <CardContent className="p-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 font-work-sans">Faça seu projeto!</h3>
                  <p className="text-muted-foreground mb-4 sm:mb-6 font-open-sans">Solicite um orçamento abaixo:</p>

                  <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        placeholder="Nome"
                        required
                        className="w-full px-4 py-3 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Ambientes de seu interesse:
                      </label>
                      <select
                        name="ambientes"
                        value={formData.ambientes}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white dark:bg-slate-700 text-base"
                      >
                        <option value="">Selecione os ambientes</option>
                        <option value="Cozinha">Cozinha</option>
                        <option value="Dormitório">Dormitório</option>
                        <option value="Living">Living</option>
                        <option value="Suíte">Suíte</option>
                        <option value="Closet">Closet</option>
                        <option value="Banheiro">Banheiro</option>
                        <option value="Studio">Studio</option>
                        <option value="Home Office">Home Office</option>
                        <option value="Corporativo">Corporativo</option>
                        <option value="Adega">Adega</option>
                        <option value="Biblioteca">Biblioteca</option>
                        <option value="Outros Ambientes">Outros Ambientes</option>
                      </select>
                    </div>

                    <div>
                      <select
                        name="investimento"
                        value={formData.investimento}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white dark:bg-slate-700 text-base"
                      >
                        <option value="">Estimativa de investimento</option>
                        <option value="Até R$ 10.000">Até R$ 10.000</option>
                        <option value="R$ 10.000 - R$ 25.000">R$ 10.000 - R$ 25.000</option>
                        <option value="R$ 25.000 - R$ 50.000">R$ 25.000 - R$ 50.000</option>
                        <option value="R$ 50.000 - R$ 100.000">R$ 50.000 - R$ 100.000</option>
                        <option value="Acima de R$ 100.000">Acima de R$ 100.000</option>
                      </select>
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        placeholder="Telefone/WhatsApp"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-base"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="E-mail"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-base"
                      />
                    </div>

                    <div>
                      <textarea
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        placeholder="Deixe uma mensagem"
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-base"
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="w-full py-3 sm:py-3 text-base sm:text-lg font-semibold mt-4"
                      size="lg"
                    >
                      Solicitar Orçamento Gratuito
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Ambientes Section */}
      <section id="nossos-ambientes" className="relative min-h-[80vh] sm:min-h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${environments[activeEnvironment as keyof typeof environments].background})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row min-h-[80vh] sm:min-h-screen">
          {/* Vertical Menu - becomes horizontal on mobile */}
          <div className="w-full lg:w-80 bg-black/70 dark:bg-black/80 backdrop-blur-lg shadow-2xl border-b lg:border-b-0 lg:border-r border-white/20">
            <div className="p-3 sm:p-4 lg:p-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-8 font-work-sans text-center lg:text-left high-contrast-text">
                Nossos Ambientes
              </h2>
              <nav className="overflow-x-auto lg:overflow-x-visible">
                <div className="flex lg:grid lg:grid-cols-1 gap-2 lg:gap-0 lg:space-y-2 min-w-max lg:min-w-0 pb-2 lg:pb-0">
                  {Object.keys(environments).map((env) => (
                    <button
                      key={env}
                      onClick={() => setActiveEnvironment(env)}
                      className={`flex-shrink-0 lg:flex-shrink lg:w-full text-left px-4 lg:px-6 py-3 lg:py-4 rounded-lg transition-all duration-300 font-open-sans text-sm lg:text-base min-w-[100px] lg:min-w-0 ${
                        activeEnvironment === env
                          ? "nav-button-active shadow-lg transform scale-105 backdrop-blur-sm border border-white/40 drop-shadow-2xl"
                          : "nav-button-inactive hover:transform hover:scale-102 hover:backdrop-blur-sm hover:drop-shadow-xl"
                      }`}
                    >
                      {env}
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 flex items-center justify-center p-3 sm:p-4 lg:p-8">
            <div className="max-w-4xl w-full">
              {/* Environment Title */}
              <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 lg:mb-4 font-work-sans high-contrast-text">
                  {activeEnvironment}
                </h3>
                <p className="text-sm sm:text-base lg:text-xl font-open-sans px-2 sm:px-4 high-contrast-text">
                  Projetos exclusivos e personalizados para seu {activeEnvironment.toLowerCase()}
                </p>
              </div>

              {/* Carousel */}
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-1 sm:-ml-2 lg:-ml-4">
                  {environments[activeEnvironment as keyof typeof environments].images.map((image, index) => (
                    <CarouselItem key={index} className="pl-1 sm:pl-2 lg:pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3">
                      <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 h-48 sm:h-60 md:h-72 lg:h-80 bg-white/10 backdrop-blur-md border border-white/20">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${activeEnvironment} planejado Casa11 Movelaria - projeto ${index + 1}`}
                          fill={true}
                          className="object-cover object-center"
                          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
                          quality={80}
                        />
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Color Carousel */}
      <InfiniteColorCarousel />

      {/* Blog Preview Section */}
      <BlogPreviewSection />

      {/* Reviews Section */}
      <section id="avaliacoes" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 font-work-sans">
              O que nossos clientes dizem
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-open-sans">
              Depoimentos reais de quem confiou na Casa11 Movelaria para transformar seus ambientes
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 lg:p-8 border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground mb-4 font-open-sans italic">
                    "Ficamos impressionados com a qualidade dos móveis e o atendimento excepcional. Nossa cozinha ficou
                    exatamente como sonhávamos!"
                  </blockquote>
                  <div className="flex items-center">
                    <OptimizedImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/x.jpg-yww78i1hBuZcLJIgAJtFt2qXd3WtwT.jpeg"
                      alt="Maria Silva - Cliente satisfeita Casa11 Movelaria"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      sizes="48px"
                      quality={85}
                    />
                    <div>
                      <p className="font-bold text-primary font-work-sans">Maria Silva</p>
                      <p className="text-sm text-muted-foreground font-open-sans">Cozinha Planejada</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>

              <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 lg:p-8 border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground mb-4 font-open-sans italic">
                    "O closet ficou perfeito! Aproveitaram cada centímetro do espaço e o acabamento é impecável. Super
                    recomendo!"
                  </blockquote>
                  <div className="flex items-center">
                    <OptimizedImage
                      src="/cliente-victor.png"
                      alt="João Santos - Cliente satisfeito Casa11 Movelaria"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      sizes="48px"
                      quality={85}
                    />
                    <div>
                      <p className="font-bold text-primary font-work-sans">João Santos</p>
                      <p className="text-sm text-muted-foreground font-open-sans">Closet Planejado</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>

              <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 lg:p-8 border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground mb-4 font-open-sans italic">
                    "Excelente trabalho no home office! Ficou funcional e bonito. A equipe é muito profissional e
                    pontual."
                  </blockquote>
                  <div className="flex items-center">
                    <OptimizedImage
                      src="/cliente-carla.png"
                      alt="Ana Costa - Cliente satisfeita Casa11 Movelaria"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      sizes="48px"
                      quality={85}
                    />
                    <div>
                      <p className="font-bold text-primary font-work-sans">Ana Costa</p>
                      <p className="text-sm text-muted-foreground font-open-sans">Home Office</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>

              <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 lg:p-8 border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground mb-4 font-open-sans italic">
                    "O quarto do casal ficou um sonho! Guarda-roupa espaçoso e cama com gavetas. Qualidade excepcional!"
                  </blockquote>
                  <div className="flex items-center">
                    <OptimizedImage
                      src="/cliente-rafael.png"
                      alt="Roberto Lima - Cliente satisfeito Casa11 Movelaria"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      sizes="48px"
                      quality={85}
                    />
                    <div>
                      <p className="font-bold text-primary font-work-sans">Roberto Lima</p>
                      <p className="text-sm text-muted-foreground font-open-sans">Dormitório Casal</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>

              <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 lg:p-8 border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground mb-4 font-open-sans italic">
                    "Transformaram completamente nossa sala de estar! O móvel da TV ficou lindo e funcional. Atendimento
                    nota 10!"
                  </blockquote>
                  <div className="flex items-center">
                    <OptimizedImage
                      src="/cliente-beatriz.png"
                      alt="Beatriz Ferreira - Cliente satisfeita Casa11 Movelaria"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      sizes="48px"
                      quality={85}
                    />
                    <div>
                      <p className="font-bold text-primary font-work-sans">Beatriz Ferreira</p>
                      <p className="text-sm text-muted-foreground font-open-sans">Sala de Estar</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 font-work-sans">
            Pronto para transformar sua casa?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 font-open-sans">
            Solicite seu orçamento e descubra como podemos criar o ambiente dos seus sonhos
          </p>
          <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
            <a href="https://wa.me/5511947901838" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="mr-2 w-5 h-5" />
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
