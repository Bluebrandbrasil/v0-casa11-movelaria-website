import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Home, Phone, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="text-8xl lg:text-9xl font-bold text-primary mb-4">404</div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Página Não Encontrada</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ops! A página que você está procurando não existe ou foi movida.
            </p>
          </div>

          <Card className="border-border mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">O que você pode fazer:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-left">
                  <h3 className="font-semibold mb-2">Navegação Rápida</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Voltar à página inicial</li>
                    <li>• Conhecer nossos serviços</li>
                    <li>• Ver nossa galeria de projetos</li>
                    <li>• Entrar em contato conosco</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold mb-2">Precisa de Ajuda?</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Fale conosco pelo WhatsApp</li>
                    <li>• Ligue: (11) 94790-1838</li>
                    <li>• Email: movelariacasa11@gmail.com</li>
                    <li>• Visite nosso showroom em Santo André</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="mr-2 w-5 h-5" />
                Voltar ao Início
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/#nossos-ambientes">
                <Search className="mr-2 w-5 h-5" />
                Ver Serviços
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contatos">
                <Phone className="mr-2 w-5 h-5" />
                Falar Conosco
              </Link>
            </Button>
          </div>

          <div className="mt-12 p-6 bg-card rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-2">Casa11 Movelaria</h3>
            <p className="text-muted-foreground">
              Especialistas em móveis planejados em Santo André há mais de 10 anos.
              <br />
              Transformamos seus sonhos em realidade com qualidade e design exclusivo.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
