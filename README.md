# Crepa Lab 🧪

Sitio web de Crepa Lab — restaurante de crepas saludables en UVM.

## Stack
- **Next.js 16** (export estático)
- **Tailwind CSS v4**
- **shadcn/ui**
- **Netlify** para hosting

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Correr en desarrollo
npm run dev

# Construir para producción
npm run build
```

## Deploy en Netlify

### Opción 1 — Desde GitHub (recomendado)
1. Sube este proyecto a un repo en GitHub
2. Ve a [netlify.com](https://netlify.com) → "Add new site" → "Import from Git"
3. Selecciona el repo
4. Build command: `npm run build`
5. Publish directory: `out`
6. ¡Deploy!

### Opción 2 — Drag & Drop
1. Corre `npm run build` localmente
2. Arrastra la carpeta `out/` a [app.netlify.com/drop](https://app.netlify.com/drop)

## Estructura del proyecto

```
├── app/
│   ├── page.tsx          # Página principal
│   ├── layout.tsx        # Layout raíz
│   └── globals.css       # Estilos globales
├── components/
│   └── crepa-lab/        # Componentes del sitio
│       ├── logo.tsx
│       ├── menu-card.tsx
│       ├── menu-section.tsx
│       ├── concept-section.tsx
│       └── space-render.tsx
├── lib/
│   └── menu-data.ts      # Datos del menú
└── public/
    └── images/           # Imágenes del sitio
```
