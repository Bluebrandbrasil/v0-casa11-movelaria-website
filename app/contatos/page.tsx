import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Contatos - Casa11 Movelaria",
  description:
    "Entre em contato com a Casa11 Movelaria. Estamos localizados em Santo André - SP. Solicite seu orçamento gratuito!",
}

export default function ContatosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Entre em Contato</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Estamos prontos para transformar seus sonhos em realidade. Entre em contato conosco e solicite seu
            orçamento!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Informações de Contato</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Nossa equipe está sempre disponível para atendê-lo da melhor forma possível.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-black/30 hover:bg-black/40">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Phone className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Telefone / WhatsApp</h3>
                        <p className="text-gray-700 font-semibold mb-4">(11) 94790-1838</p>
                        <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                          <a href="https://wa.me/5511947901838" target="_blank" rel="noopener noreferrer">
                            Chamar no WhatsApp
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-black/30 hover:bg-black/40">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">E-mail</h3>
                        <p className="text-gray-700 font-medium break-all">movelariacasa11@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-black/30 hover:bg-black/40">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Endereço</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Av. São Paulo, 422
                          <br />
                          Cidade São Jorge
                          <br />
                          Santo André - SP
                          <br />
                          09111-410
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-black/30 hover:bg-black/40">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Clock className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Horário de Funcionamento</h3>
                        <div className="text-gray-700 text-sm space-y-1">
                          <p>
                            <strong>Seg - Sex:</strong> 8h às 18h
                          </p>
                          <p>
                            <strong>Sábado:</strong> 8h às 12h
                          </p>
                          <p>
                            <strong>Domingo:</strong> Fechado
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Localização</h2>
                <p className="text-lg text-gray-600 mb-8">Venha nos visitar! Estamos localizados em Santo André, SP.</p>
              </div>

              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.123456789!2d-46.5234567!3d-23.6789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2b2b2b2b%3A0x1234567890abcdef!2sAv.%20S%C3%A3o%20Paulo%2C%20422%20-%20Cidade%20S%C3%A3o%20Jorge%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009111-410!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Casa11 Movelaria"
                />
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a
                    href="https://wa.me/5511947901838?text=Olá! Gostaria de solicitar um orçamento para móveis planejados."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Solicitar Orçamento
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
