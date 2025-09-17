import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo-footer.png"
                alt="Casa11 Movelaria"
                width={200}
                height={60}
                className="h-10 sm:h-12 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 mb-4 font-open-sans text-sm sm:text-base leading-relaxed">
              Especialistas em móveis planejados em Santo André. Transformamos seus sonhos em realidade com qualidade e
              design exclusivo.
            </p>
            <div className="space-y-3">
              <div className="flex items-start sm:items-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-xs sm:text-sm leading-relaxed">
                  Av. São Paulo, 422 - Cidade São Jorge, Santo André - SP, 09111-410
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                <a href="tel:+5511947901838" className="text-xs sm:text-sm hover:text-accent transition-colors">
                  (11) 94790-1838
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                <a
                  href="mailto:movelariacasa11@gmail.com"
                  className="text-xs sm:text-sm hover:text-accent transition-colors break-all sm:break-normal"
                >
                  movelariacasa11@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-work-sans">Links Rápidos</h4>
            <ul className="space-y-2 font-open-sans">
              <li>
                <Link href="/sobre" className="text-sm hover:text-accent transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-sm hover:text-accent transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-sm hover:text-accent transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm hover:text-accent transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-work-sans">Serviços</h4>
            <ul className="space-y-2 font-open-sans text-xs sm:text-sm">
              <li>Cozinhas Planejadas</li>
              <li>Dormitórios Planejados</li>
              <li>Home Office</li>
              <li>Salas e Painéis</li>
              <li>Banheiros Planejados</li>
              <li>Áreas Gourmet</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-primary-foreground/60 font-open-sans leading-relaxed">
            © 2024 Casa11 Movelaria. Todos os direitos reservados.
            <span className="block sm:inline sm:ml-1 mt-1 sm:mt-0">Santo André - SP</span>
          </p>
        </div>
      </div>

      {/* Schema.org LocalBusiness structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Casa11 Movelaria",
            description: "Especialistas em móveis planejados em Santo André",
            url: "https://www.casa11movelaria.com.br",
            telephone: "+5511947901838",
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
              latitude: "-23.6821604",
              longitude: "-46.5448085",
            },
            openingHours: "Mo-Fr 08:00-18:00, Sa 08:00-12:00",
            priceRange: "$$",
          }),
        }}
      />
    </footer>
  )
}
