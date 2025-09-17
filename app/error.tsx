"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Home, RefreshCw } from "lucide-react"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="text-6xl lg:text-7xl font-bold text-destructive mb-4">500</div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Algo deu errado!</h1>
          <p className="text-lg text-muted-foreground mb-8">Ocorreu um erro inesperado. Nossa equipe foi notificada.</p>
        </div>

        <Card className="border-border mb-8">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">O que você pode fazer:</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>• Tente recarregar a página</p>
              <p>• Volte à página inicial</p>
              <p>• Entre em contato se o problema persistir</p>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} size="lg">
            <RefreshCw className="mr-2 w-5 h-5" />
            Tentar Novamente
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/">
              <Home className="mr-2 w-5 h-5" />
              Voltar ao Início
            </Link>
          </Button>
        </div>

        <div className="mt-8 p-4 bg-card rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">Casa11 Movelaria - Móveis planejados em Santo André</p>
        </div>
      </div>
    </div>
  )
}
