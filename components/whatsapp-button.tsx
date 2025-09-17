"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showHelpText, setShowHelpText] = useState(false)
  const phoneNumber = "5511947901838"

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHelpText(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  const quickMessages = [
    {
      title: "Orçamento Geral",
      message: "Olá! Gostaria de solicitar um orçamento para móveis planejados.",
    },
    {
      title: "Cozinha Planejada",
      message: "Olá! Tenho interesse em uma cozinha planejada. Podem me ajudar?",
    },
    {
      title: "Dormitório Planejado",
      message: "Olá! Gostaria de informações sobre dormitórios planejados.",
    },
    {
      title: "Visita Técnica",
      message: "Olá! Gostaria de agendar uma visita técnica para medição.",
    },
  ]

  const handleWhatsAppClick = (message: string) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
    setIsExpanded(false)
  }

  const handleDirectWhatsApp = () => {
    const defaultMessage = "Olá! Gostaria de mais informações sobre móveis planejados."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, "_blank")
  }

  const isMobile = () => {
    return window.innerWidth <= 768
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {showHelpText && !isExpanded && (
        <div className="absolute right-16 bottom-2 bg-white rounded-lg shadow-lg p-3 border animate-in slide-in-from-right-2 fade-in-0 duration-500 whitespace-nowrap">
          <p className="text-sm font-medium text-gray-800">Posso ajudar?</p>
          <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      )}

      {isExpanded && (
        <Card className="mb-4 w-80 shadow-xl border-border hidden md:block">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-work-sans flex items-center justify-between">
              Fale Conosco
              <Button variant="ghost" size="sm" onClick={() => setIsExpanded(false)}>
                <X className="w-4 h-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {quickMessages.map((msg, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start text-left h-auto p-3 font-open-sans bg-transparent"
                onClick={() => handleWhatsAppClick(msg.message)}
              >
                <div className="w-full">
                  <div className="font-medium">{msg.title}</div>
                  <div className="text-xs text-muted-foreground mt-1 whitespace-normal break-words leading-relaxed">
                    {msg.message}
                  </div>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>
      )}

      <Button
        onClick={() => {
          if (typeof window !== "undefined" && window.innerWidth <= 768) {
            handleDirectWhatsApp()
          } else {
            setIsExpanded(!isExpanded)
          }
        }}
        className="rounded-full w-14 h-14 shadow-lg animate-pulse hover:animate-none bg-green-500 hover:bg-green-600 text-white border-0 p-0 overflow-hidden"
        size="icon"
      >
        <Image
          src="/whatsapp-consultant.png"
          alt="Consultora WhatsApp"
          width={56}
          height={56}
          className="w-full h-full object-cover"
        />
        <span className="sr-only">Falar no WhatsApp</span>
      </Button>
    </div>
  )
}
