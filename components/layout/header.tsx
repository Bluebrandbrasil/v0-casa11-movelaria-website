"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/#nossos-ambientes" },
    { name: "Contatos", href: "/contatos" },
    { name: "Blog", href: "/blog" },
  ]

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      if (href === "#top") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
      setIsMenuOpen(false)
    } else if (href.startsWith("/#")) {
      e.preventDefault()
      const sectionId = href.substring(2) // Remove "/#"
      if (window.location.pathname !== "/") {
        // Navigate to homepage first, then scroll to section
        window.location.href = href
      } else {
        // Already on homepage, just scroll
        const element = document.querySelector(`#${sectionId}`)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg bg-white/95 shadow-lg py-2 sm:py-4" : "backdrop-blur-md bg-black/20 py-3 sm:py-6"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-header.png"
                alt="Casa11 Movelaria"
                width={360}
                height={80}
                className="h-8 sm:h-10 lg:h-12 w-auto transition-all duration-300"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) =>
                item.href.startsWith("#") || item.href.startsWith("/#") ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer ${
                      isScrolled ? "text-gray-900 hover:text-primary" : "text-white hover:text-gray-200 drop-shadow-lg"
                    }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isScrolled ? "text-gray-900 hover:text-primary" : "text-white hover:text-gray-200 drop-shadow-lg"
                    }`}
                  >
                    {item.name}
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className={isScrolled ? "" : "shadow-lg"}>
              <a href="https://wa.me/5511947901838" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden lg:inline">Solicitar Orçamento</span>
                <span className="lg:hidden">Orçamento</span>
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? "text-gray-900" : "text-white"} p-2 min-w-[44px] min-h-[44px]`}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div
              className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-lg mt-2 ${
                isScrolled ? "bg-white/95 shadow-lg" : "bg-black/80 backdrop-blur-md"
              }`}
            >
              {navigation.map((item) =>
                item.href.startsWith("#") || item.href.startsWith("/#") ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className={`block px-4 py-3 rounded-md text-base font-medium transition-colors min-h-[44px] flex items-center cursor-pointer ${
                      isScrolled
                        ? "text-gray-900 hover:text-primary hover:bg-gray-100"
                        : "text-white hover:text-gray-200 hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 rounded-md text-base font-medium transition-colors min-h-[44px] flex items-center ${
                      isScrolled
                        ? "text-gray-900 hover:text-primary hover:bg-gray-100"
                        : "text-white hover:text-gray-200 hover:bg-white/10"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ),
              )}
              <div className="pt-2">
                <Button asChild className="w-full min-h-[44px]">
                  <a href="https://wa.me/5511947901838" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4 mr-2" />
                    Solicitar Orçamento
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
