"use client"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BlogFilter } from "@/components/blog-filter"
import { ArrowRight, Calendar, User } from "lucide-react"
import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog-data"
import { useState, useMemo } from "react"

export default function BlogClientPage() {
  const allBlogPosts = getAllBlogPosts()
  const [selectedCategory, setSelectedCategory] = useState("Todas")

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(allBlogPosts.map((post) => post.category))]
    return uniqueCategories.sort()
  }, [allBlogPosts])

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "Todas") {
      return allBlogPosts
    }
    return allBlogPosts.filter((post) => post.category === selectedCategory)
  }, [allBlogPosts, selectedCategory])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background to-accent/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">Blog Casa11</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Inspirações, tendências e dicas exclusivas sobre móveis planejados e design de interiores
            </p>
          </div>
        </div>
      </section>

      {/* Blog Filter and Posts */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              {selectedCategory === "Todas"
                ? `Mostrando todos os ${filteredPosts.length} artigos`
                : `${filteredPosts.length} artigo${filteredPosts.length !== 1 ? "s" : ""} em ${selectedCategory}`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card"
              >
                <div className="relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-64 object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-3 text-balance">{post.title}</h3>

                  <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">{post.excerpt}</p>

                  <Button variant="outline" className="w-full group bg-transparent" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Ler Artigo Completo
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">
                Nenhum artigo encontrado para a categoria "{selectedCategory}"
              </p>
              <Button variant="outline" onClick={() => setSelectedCategory("Todas")}>
                Ver Todos os Artigos
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-secondary-foreground">Receba Nossas Novidades</h2>
          <p className="text-xl mb-8 text-secondary-foreground/80">
            Inscreva-se em nossa newsletter e receba dicas exclusivas sobre design de interiores
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-input"
            />
            <Button size="lg" className="whitespace-nowrap">
              Inscrever-se
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Transforme Sua Casa em Lar</h2>
          <p className="text-xl mb-8 opacity-90">
            Solicite seu orçamento gratuito e descubra como podemos criar o ambiente dos seus sonhos
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="https://wa.me/5511947901838" target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento Gratuito
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
