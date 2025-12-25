import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'CORAL Studio | Sistema de Contravigilancia Visual',
  description: 'Desenmascarar para liberar. Herramientas de análisis crítico de imágenes para investigadores, artistas y comunidades.',
  keywords: ['análisis visual', 'violencia simbólica', 'contravigilancia', 'AI', 'cinematografía'],
  authors: [{ name: 'amlkr' }],
  openGraph: {
    title: 'CORAL Studio',
    description: 'Sistema de Contravigilancia Visual',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${jetbrains.variable} ${playfair.variable}`}>
      <body className="bg-coral-bg text-coral-text antialiased">
        {children}
      </body>
    </html>
  )
}
