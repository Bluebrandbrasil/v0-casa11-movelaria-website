"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Share2 } from "lucide-react"
import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog-data"

export function BlogPreviewSection() {
  const blogPosts = getAllBlogPosts().slice(0, 3)

  const handleShare = async (post: any) => {
    try {
      if (navigator.share && navigator.canShare) {
        const shareData = {
          title: post.title,
          text: post.excerpt,
          url: `${window.location.origin}/blog/${post.slug}`,
        }

        // Check if the data can be shared
        if (navigator.canShare(shareData)) {
          await navigator.share(shareData)
        } else {
          // Fallback to clipboard
          await navigator.clipboard.writeText(`${window.location.origin}/blog/${post.slug}`)
          alert("Link copiado para a área de transferência!")
        }
      } else {
        // Fallback for browsers without Web Share API
        await navigator.clipboard.writeText(`${window.location.origin}/blog/${post.slug}`)
        alert("Link copiado para a área de transferência!")
      }
    } catch (error) {
      // If all else fails, show the URL in an alert
      console.error("Share failed:", error)
      const url = `${window.location.origin}/blog/${post.slug}`
      prompt("Copie o link abaixo:", url)
    }
  }

  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4 font-work-sans text-balance">
            Últimas Postagens do Blog
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto font-open-sans text-pretty px-4">
            Inspirações, tendências e dicas exclusivas sobre móveis planejados e design de interiores
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card"
            >
              <div className="relative">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <button
                  onClick={() => handleShare(post)}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110"
                  aria-label="Compartilhar postagem"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <img
                    src={post.authorImage || "/placeholder.svg"}
                    alt={post.author}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-primary">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{post.date}</span>
                    </div>
                    <span className="hidden sm:inline">{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 text-balance font-work-sans leading-tight">
                  {post.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 text-pretty leading-relaxed font-open-sans line-clamp-3">
                  {post.excerpt}
                </p>

                <Button variant="outline" className="w-full group bg-transparent text-sm sm:text-base" asChild>
                  <Link href={`/blog/${post.slug}`}>
                    <span className="hidden sm:inline">Ler Artigo Completo</span>
                    <span className="sm:hidden">Ler Mais</span>
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Blog Posts Button */}
        <div className="text-center">
          <Button size="lg" asChild className="font-semibold w-full sm:w-auto">
            <Link href="/blog">
              <span className="hidden sm:inline">Ver Todas as Postagens</span>
              <span className="sm:hidden">Ver Mais Postagens</span>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
