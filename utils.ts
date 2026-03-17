"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Flame, Dumbbell, Wheat, Droplets, Leaf } from "lucide-react"
import type { MenuItem } from "@/lib/menu-data"

interface MenuCardProps {
  item: MenuItem
}

export function MenuCard({ item }: MenuCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "salada":
        return "bg-primary text-primary-foreground"
      case "dulce":
        return "bg-accent text-accent-foreground"
      case "smoothie":
        return "bg-lab-mint text-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "salada":
        return "Salada"
      case "dulce":
        return "Dulce"
      case "smoothie":
        return "Smoothie 500ml"
      default:
        return category
    }
  }

  return (
    <Card 
      className="group overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 cursor-pointer bg-card"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className={getCategoryColor(item.category)}>
            {getCategoryLabel(item.category)}
          </Badge>
          {item.badge && (
            <Badge variant="secondary" className="bg-card/90 text-foreground backdrop-blur-sm">
              {item.badge}
            </Badge>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
          <div className="flex items-end justify-between">
            <h3 className="text-xl font-bold text-card">{item.name}</h3>
            <span className="text-2xl font-bold text-card">${item.price}</span>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4 space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
        
        {/* Nutrition Facts - Always Visible */}
        <div className="grid grid-cols-5 gap-2 p-3 bg-muted rounded-lg">
          <div className="flex flex-col items-center text-center">
            <Flame className="w-4 h-4 text-destructive mb-1" />
            <span className="text-lg font-bold text-foreground">{item.calories}</span>
            <span className="text-[10px] text-muted-foreground font-mono">KCAL</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Dumbbell className="w-4 h-4 text-primary mb-1" />
            <span className="text-lg font-bold text-foreground">{item.protein}g</span>
            <span className="text-[10px] text-muted-foreground font-mono">PROT</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Wheat className="w-4 h-4 text-accent mb-1" />
            <span className="text-lg font-bold text-foreground">{item.carbs}g</span>
            <span className="text-[10px] text-muted-foreground font-mono">CARB</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Droplets className="w-4 h-4 text-lab-amber mb-1" />
            <span className="text-lg font-bold text-foreground">{item.fat}g</span>
            <span className="text-[10px] text-muted-foreground font-mono">GRAS</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Leaf className="w-4 h-4 text-lab-green mb-1" />
            <span className="text-lg font-bold text-foreground">{item.fiber}g</span>
            <span className="text-[10px] text-muted-foreground font-mono">FIBRA</span>
          </div>
        </div>

        {/* Ingredients - Expandable */}
        <div 
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-2 border-t border-border">
            <h4 className="text-xs font-mono text-muted-foreground mb-2 tracking-wider">
              FÓRMULA / INGREDIENTES
            </h4>
            <ul className="space-y-1">
              {item.ingredients.map((ingredient, index) => (
                <li 
                  key={index}
                  className="text-sm text-foreground flex items-start gap-2"
                >
                  <span className="text-primary font-mono text-xs mt-0.5">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-xs text-center text-muted-foreground font-mono">
          {isExpanded ? "▲ Clic para cerrar" : "▼ Clic para ver ingredientes"}
        </p>
      </CardContent>
    </Card>
  )
}
