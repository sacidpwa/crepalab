"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wheat, Heart, Zap, Leaf } from "lucide-react"
import { crepaBase } from "@/lib/menu-data"

export function ConceptSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Concept */}
        <div>
          <Badge className="mb-4 bg-lab-mint text-foreground">
            NUESTRA FÓRMULA
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Nutrición basada en ciencia, 
            <span className="text-primary"> sabor sin compromisos</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            En Crepa Lab combinamos ingredientes funcionales con técnicas culinarias 
            para crear comida rápida que nutre tu cuerpo y satisface tu paladar. 
            Cada receta es un experimento exitoso.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Wheat className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Harina Multigrano</h3>
                <p className="text-sm text-muted-foreground">
                  Linaza, ajonjolí y avena en cada crepa para fibra y omega-3.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Ingredientes Reales</h3>
                <p className="text-sm text-muted-foreground">
                  Sin conservadores artificiales. Queso panela, vegetales frescos y proteínas de calidad.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-lab-amber/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-lab-amber" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Energía Sostenida</h3>
                <p className="text-sm text-muted-foreground">
                  Bajo índice glucémico para energía constante, ideal para estudiantes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Base Info */}
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-muted to-card">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Base Multigrano</h3>
                <p className="text-sm text-muted-foreground font-mono">FÓRMULA EXCLUSIVA</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6">
              {crepaBase.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="text-xs font-mono text-primary mb-2 tracking-wider">INGREDIENTES</h4>
                <ul className="space-y-2">
                  {crepaBase.ingredients.map((item, index) => (
                    <li key={index} className="text-sm text-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-mono text-accent mb-2 tracking-wider">BENEFICIOS</h4>
                <ul className="space-y-2">
                  {crepaBase.benefits.map((item, index) => (
                    <li key={index} className="text-sm text-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-xs text-center text-muted-foreground font-mono">
                * Valores nutricionales calculados por porción estándar. 
                Consulta con tu nutriólogo para requerimientos específicos.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
