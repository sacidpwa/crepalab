import { Logo } from "@/components/crepa-lab/logo"
import { MenuSection } from "@/components/crepa-lab/menu-section"
import { SpaceRender } from "@/components/crepa-lab/space-render"
import { ConceptSection } from "@/components/crepa-lab/concept-section"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Beaker } from "lucide-react"

export default function CrepaLabPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-lab-mint/20 to-background">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/10 rounded-full" />
          <div className="absolute top-40 right-20 w-20 h-20 border-2 border-accent/10 rounded-full" />
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-primary/5 rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-8">
          {/* Nav */}
          <nav className="flex items-center justify-between mb-16">
            <Logo />
            <div className="hidden md:flex items-center gap-6">
              <a href="#menu" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Menú
              </a>
              <a href="#concepto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Concepto
              </a>
              <a href="#espacio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Espacio
              </a>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="text-center py-12 md:py-20">
            <Badge className="mb-6 bg-primary/10 text-primary border border-primary/20">
              <Beaker className="w-3 h-3 mr-1" />
              COMIDA RÁPIDA SALUDABLE
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              <span className="text-primary">Especialistas</span> en <span className="text-accent">crepas</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Crepas multigrano con harina de linaza, ajonjolí y avena. 
              Smoothies servidos en matraces de laboratorio. 
              Nutrición real para estudiantes reales.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Área de Comida UVM</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Lun - Vie: 8:00 - 20:00</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center pb-8">
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <span className="text-xs text-muted-foreground font-mono">SCROLL</span>
              <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
            </div>
          </div>
        </div>
      </header>

      {/* Menu Section */}
      <section id="menu" className="max-w-6xl mx-auto px-4 md:px-8">
        <MenuSection />
      </section>

      {/* Concept Section */}
      <section id="concepto" className="max-w-6xl mx-auto px-4 md:px-8">
        <ConceptSection />
      </section>

      {/* Space Render Section */}
      <section id="espacio">
        <SpaceRender />
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold">
                  Crepa<span className="text-primary">Lab</span>
                </span>
              </div>
              <p className="text-sm text-background/70">
                Especialistas en Crepas
              </p>
            </div>
            
            <div>
              <h4 className="font-mono text-xs tracking-wider mb-4 text-primary">UBICACIÓN</h4>
              <p className="text-sm text-background/70">
                Área de Comida<br />
                Universidad del Valle de México (UVM)<br />
                Campus Principal
              </p>
            </div>
            
            <div>
              <h4 className="font-mono text-xs tracking-wider mb-4 text-primary">HORARIO</h4>
              <p className="text-sm text-background/70">
                Lunes a Viernes<br />
                8:00 AM - 8:00 PM<br />
                <span className="text-xs">(Horario escolar)</span>
              </p>
            </div>
          </div>
          
          <div className="border-t border-background/10 mt-8 pt-8 text-center">
            <p className="text-xs text-background/50 font-mono">
              © 2026 CREPA LAB • TODOS LOS DERECHOS RESERVADOS
            </p>
            <p className="text-xs text-background/30 font-mono mt-2">
              * Los valores nutricionales son aproximados y pueden variar según la preparación.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
