"use client"
import { Button } from "@/components/ui/button"

interface BlogFilterProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function BlogFilter({ categories, selectedCategory, onCategoryChange }: BlogFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      <Button
        variant={selectedCategory === "Todas" ? "default" : "outline"}
        onClick={() => onCategoryChange("Todas")}
        className="rounded-full px-6"
      >
        Todas as Categorias
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className="rounded-full px-6"
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
