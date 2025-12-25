# CORAL Studio 🔴

**Sistema de Contravigilancia Visual**

> "Desenmascarar para liberar"

## ¿Qué es CORAL?

CORAL es un ecosistema de herramientas de análisis crítico de imágenes que revela la violencia simbólica oculta en el lenguaje visual. Combinando inteligencia artificial con marcos teóricos decoloniales (Fanon, Segato, Quijano, Birri), el sistema cuantifica cómo los medios construyen jerarquías visuales.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL)
- **Deploy**: Vercel

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir http://localhost:3000
```

## Estructura

```
coral-studio-web/
├── app/
│   ├── page.tsx          # Landing
│   ├── demo/
│   │   └── page.tsx      # Laboratorio de análisis
│   ├── dashboard/
│   │   └── page.tsx      # Dashboard principal
│   └── api/
│       ├── analyze/      # API de análisis
│       └── waitlist/     # API de waitlist
├── components/           # Componentes reutilizables
└── public/              # Assets estáticos
```

## Roadmap

- [ ] Conectar análisis real con backend Coral TPU
- [ ] Integrar Supabase para persistencia
- [ ] Sistema de autenticación
- [ ] Exportación de reportes
- [ ] Integración con Grafana
- [ ] API pública documentada

## Ecosistema CORAL

- **3AYES**: Hardware de captura con Raspberry Pi + Coral TPU
- **CORAL Studio**: Esta aplicación web
- **Observatory**: Dashboard de monitoreo en tiempo real
- **Canvas**: Editor de narrativas visuales

## Licencia

MIT © amlkr

---

*"Desenmascarar para liberar" — Contravigilancia epistemológica desde el sur global*
