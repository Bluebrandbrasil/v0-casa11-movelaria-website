"use client"

import type React from "react"
import { InfiniteColorCarousel } from "@/components/infinite-color-carousel"
import { BlogPreviewSection } from "@/components/blog-preview-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { ArrowRight, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { OptimizedImage } from "@/components/optimized-image"
import Image from "next/image"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function ClientPage() {
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
      background: "/bathroom-1.jpg", // Updated background image for bathroom section
      images: [
        "/bathroom-1.jpg", // Replaced with new bathroom images
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
      <section id="inicio" className="hero">
        <div className="hero__bg">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/banner-hero-mobile.webp 768w, /banner-hero-mobile.png 768w"
              sizes="100vw"
              type="image/webp"
            />
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
              className="hero__img"
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

      {/* Services Section */}
      <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 font-work-sans">
              Nossos Serviços
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-open-sans">
              Oferecemos soluções completas em móveis planejados para transformar seus ambientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="p-6 lg:p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 002-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4 font-work-sans">Cozinhas Planejadas</h3>
              <p className="text-muted-foreground font-open-sans">
                Projetos personalizados que otimizam o espaço e combinam funcionalidade com design moderno
              </p>
            </Card>

            <Card className="p-6 lg:p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21l4-4 4 4" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4 font-work-sans">Dormitórios</h3>
              <p className="text-muted-foreground font-open-sans">
                Quartos completos com guarda-roupas, camas e móveis sob medida para máximo conforto
              </p>
            </Card>

            <Card className="p-6 lg:p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21l4-4 4 4" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4 font-work-sans">Home Office</h3>
              <p className="text-muted-foreground font-open-sans">
                Escritórios funcionais e ergonômicos para aumentar sua produtividade em casa
              </p>
            </Card>

            <Card className="p-6 lg:p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4 font-work-sans">Closets</h3>
              <p className="text-muted-foreground font-open-sans">
                Closets organizados e elegantes para manter suas roupas sempre em ordem
              </p>
            </Card>

            <Card className="p-6 lg:p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11"
                  />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4 font-work-sans">Banheiros</h3>
              <p className="text-muted-foreground font-open-sans">
                Móveis para banheiro que combinam resistência à umidade com design sofisticado
              </p>
            </Card>

            <Card className="p-6 lg:p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11"
                  />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4 font-work-sans">Projetos Corporativos</h3>
              <p className="text-muted-foreground font-open-sans">
                Soluções profissionais para escritórios e ambientes comerciais com alta durabilidade
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <a
                href="https://wa.me/5511947901838?text=Olá! Gostaria de saber mais sobre os serviços da Casa11 Movelaria."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

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
                    "Profissionais competentes e pontuais. O closet ficou perfeito e aproveitou cada centímetro do
                    espaço disponível."
                  </blockquote>
                  <div className="flex items-center">
                    <OptimizedImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/x.jpg-49x190816491651641641649164.jpeg"
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
                    "Desde o projeto até a instalação, tudo foi impecável. Recomendo a Casa11 para quem busca qualidade
                    e bom atendimento."
                  </blockquote>
                  <div className="flex items-center">
                    <OptimizedImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/x.jpg-59x190816491651641641649164.jpeg"
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
                    "Excelente custo-benefício! Os móveis têm ótima qualidade e o prazo de entrega foi cumprido
                    rigorosamente."
                  </blockquote>
                  <div className="flex items-center">
                    <OptimizedImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/x.jpg-69x190816491651641641649164.jpeg"
                      alt="Roberto Lima - Cliente satisfeito Casa11 Movelaria"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      sizes="48px"
                      quality={85}
                    />
                    <div>
                      <p className="font-bold text-primary font-work-sans">Roberto Lima</p>
                      <p className="text-sm text-muted-foreground font-open-sans">Sala de Estar</p>
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
                    "Transformaram nosso banheiro em um spa! O acabamento é perfeito e os materiais são de primeira
                    qualidade."
                  </blockquote>
                  <div className="flex items-center">
                    <OptimizedImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/x.jpg-79x190816491651641641649164.jpeg"
                      alt="Luciana Ferreira - Cliente satisfeita Casa11 Movelaria"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      sizes="48px"
                      quality={85}
                    />
                    <div>
                      <p className="font-bold text-primary font-work-sans">Luciana Ferreira</p>
                      <p className="text-sm text-muted-foreground font-open-sans">Banheiro Planejado</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <a
                href="https://wa.me/5511947901838?text=Olá! Vi os depoimentos no site e gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
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
              <MessageCircle className="mr-2 w-5 h-5" />
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
