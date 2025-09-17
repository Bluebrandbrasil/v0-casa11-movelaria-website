"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Erro do Sistema</h1>
            <p className="text-muted-foreground mb-8">Ocorreu um erro crítico. Por favor, recarregue a página.</p>
            <div className="space-x-4">
              <Button onClick={reset}>Tentar Novamente</Button>
              <Button variant="outline" asChild>
                <Link href="/">
                  <Home className="mr-2 w-4 h-4" />
                  Início
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
