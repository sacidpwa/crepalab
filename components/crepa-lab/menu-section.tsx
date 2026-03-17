"use client"

import { MenuCard } from "./menu-card"
import { menuItems } from "@/lib/menu-data"
import { FlaskConical, Cookie, CupSoda } from "lucide-react"

export function MenuSection() {
  const saladas = menuItems.filter(item => item.category === "salada")
  const dulces = menuItems.filter(item => item.category === "dulce")
  const smoothies = menuItems.filter(item => item.category === "smoothie")

  return (
    <section className="py-12 md:py-20">
      {/* Crepas Saladas */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <FlaskConical className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Experimentos Salados
            </h2>
            <p className="text-sm text-muted-foreground font-mono">
              CREPAS SALADAS • PROTEÍNA COMPLETA
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {saladas.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Crepas Dulces */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
            <Cookie className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Fórmulas Dulces
            </h2>
            <p className="text-sm text-muted-foreground font-mono">
              CREPAS DULCES • ENERGÍA NATURAL
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dulces.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Smoothies */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-lab-mint/30 flex items-center justify-center">
            <CupSoda className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Elixires de Laboratorio
            </h2>
            <p className="text-sm text-muted-foreground font-mono">
              SMOOTHIES 500ML • SERVIDOS EN MATRAZ
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {smoothies.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
