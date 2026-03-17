"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, FlaskConical, Shirt } from "lucide-react"

export function SpaceRender() {
  const designFeatures = [
    {
      icon: FlaskConical,
      title: "Decoración Científica",
      description: "Matraces, probetas y estructuras moleculares como elementos decorativos en las paredes y estantes."
    },
    {
      icon: Lightbulb,
      title: "Iluminación LED",
      description: "Tiras LED en tonos blancos y verdes que simulan un ambiente de laboratorio moderno."
    },
    {
      icon: Shirt,
      title: "Uniformes Lab",
      description: "Personal vestido con batas de laboratorio blancas y guantes negros, bordadas con el logo Crepa Lab."
    }
  ]

  return (
    <section className="py-12 md:py-20 bg-muted/50 -mx-4 md:-mx-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary text-primary-foreground">
            CONCEPTO DE ESPACIO
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            El Laboratorio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un espacio de 6m x 3m transformado en un laboratorio escolar donde la ciencia 
            se encuentra con la nutrición. Ubicado en el área de comida de UVM.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Render Image */}
          <div className="relative rounded-xl overflow-hidden border-2 border-border shadow-lg">
            <Image
              src="/images/lab-interior-render.jpg"
              alt="Render del interior de Crepa Lab"
              width={800}
              height={600}
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-6">
              <p className="text-card font-mono text-sm">
                RENDER CONCEPTUAL • CREPA LAB UVM
              </p>
              <p className="text-card/80 text-xs mt-1">
                Dimensiones: 6m (frente) × 3m (fondo) = 18m²
              </p>
            </div>
          </div>

          {/* Design Features */}
          <div className="space-y-4">
            {designFeatures.map((feature, index) => (
              <Card key={index} className="border border-border hover:border-primary transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Floor Plan Specs */}
        <div className="mt-12 p-6 bg-card rounded-xl border-2 border-dashed border-primary/30">
          <h3 className="font-mono text-sm text-primary mb-4 tracking-wider">
            ESPECIFICACIONES TÉCNICAS DEL ESPACIO
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-foreground">6m</p>
              <p className="text-xs text-muted-foreground font-mono">FRENTE</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">3m</p>
              <p className="text-xs text-muted-foreground font-mono">FONDO</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">18m²</p>
              <p className="text-xs text-muted-foreground font-mono">ÁREA TOTAL</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">2-3</p>
              <p className="text-xs text-muted-foreground font-mono">OPERADORES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
