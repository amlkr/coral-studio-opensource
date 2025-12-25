'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, Layers, Shield, Users, ArrowRight, Github, Play } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to Supabase
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen">
      <div className="grain" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-coral-bg/80 backdrop-blur-md border-b border-coral-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-coral-primary text-2xl">◉</span>
            <span className="font-display text-xl font-bold">CORAL</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link href="/demo" className="text-coral-muted hover:text-coral-text transition-colors text-sm">
              Demo
            </Link>
            <Link href="/dashboard" className="text-coral-muted hover:text-coral-text transition-colors text-sm">
              Dashboard
            </Link>
            <a 
              href="#waitlist" 
              className="bg-coral-primary text-coral-bg px-4 py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Acceso anticipado
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6 gradient-animated">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-coral-primary text-sm tracking-widest mb-6">
              SISTEMA DE CONTRAVIGILANCIA VISUAL
            </p>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Desenmascarar<br />
              <span className="text-glow-primary text-coral-primary">para liberar</span>
            </h1>
            
            <p className="text-coral-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Herramientas de análisis crítico de imágenes que revelan la violencia simbólica 
              oculta en el lenguaje visual. Para investigadores, artistas y comunidades.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/demo"
                className="group flex items-center justify-center gap-2 bg-coral-primary text-coral-bg px-8 py-4 rounded font-medium hover:opacity-90 transition-all glow-primary"
              >
                <Play size={18} />
                Probar el Ojo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/dashboard"
                className="flex items-center justify-center gap-2 border border-coral-border px-8 py-4 rounded font-medium hover:border-coral-primary transition-colors"
              >
                Ver Dashboard
              </Link>
            </div>
          </motion.div>

          {/* Floating elements */}
          <motion.div 
            className="absolute top-1/4 left-10 text-coral-primary/20 text-6xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            ◎
          </motion.div>
          <motion.div 
            className="absolute bottom-1/4 right-10 text-coral-secondary/20 text-4xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            ◉
          </motion.div>
        </div>
      </section>

      {/* What is CORAL */}
      <section className="py-32 px-6 border-t border-coral-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <p className="font-mono text-coral-secondary text-sm tracking-widest mb-4">
                ¿QUÉ ES CORAL?
              </p>
              <h2 className="font-display text-4xl font-bold mb-6">
                El tercer ojo<br />que revela lo oculto
              </h2>
              <p className="text-coral-muted leading-relaxed mb-6">
                CORAL es un ecosistema de herramientas que analiza imágenes y videos 
                para detectar patrones de violencia simbólica. Usando inteligencia artificial 
                y marcos teóricos críticos (Fanon, Segato, Quijano), el sistema cuantifica 
                cómo los medios construyen jerarquías visuales.
              </p>
              <p className="text-coral-muted leading-relaxed">
                No es neutral. No pretende serlo. Es una herramienta de contravigilancia 
                epistemológica diseñada desde y para el sur global.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Eye, label: 'Análisis', desc: 'Clasificación de planos, ángulos, composición' },
                { icon: Layers, label: 'Teoría', desc: 'Marcos críticos decoloniales aplicados' },
                { icon: Shield, label: 'Denuncia', desc: 'Evidencia cuantificable de violencia simbólica' },
                { icon: Users, label: 'Comunidad', desc: 'LoRAs culturales validados por comunidades' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-coral-card border border-coral-border rounded-lg p-6 card-hover"
                >
                  <item.icon className="text-coral-primary mb-3" size={24} />
                  <h3 className="font-medium mb-1">{item.label}</h3>
                  <p className="text-coral-muted text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Eyes */}
      <section className="py-32 px-6 bg-coral-card/50 border-t border-coral-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono text-coral-primary text-sm tracking-widest mb-4">
              3AYES — HARDWARE
            </p>
            <h2 className="font-display text-4xl font-bold">
              Los tres ojos del despertar
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                eye: '1',
                name: 'CAPTURA',
                desc: 'El ojo que registra lo visible. Sensor, óptica, el momento cristalizado.',
                color: 'coral-muted'
              },
              {
                eye: '2', 
                name: 'ANÁLISIS',
                desc: 'El ojo que procesa lo técnico. Coral TPU, métricas, datos estructurados.',
                color: 'coral-secondary'
              },
              {
                eye: '3',
                name: 'REVELACIÓN',
                desc: 'El ojo que ve lo oculto. Marcos teóricos, patrones de poder, violencia desenmascarada.',
                color: 'coral-primary'
              }
            ].map((item, i) => (
              <motion.div
                key={item.eye}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <div className={`text-8xl font-display font-bold text-${item.color} mb-4 text-glow-${item.color === 'coral-primary' ? 'primary' : 'secondary'}`}>
                  {item.eye}
                </div>
                <h3 className="font-mono text-sm tracking-widest mb-3">{item.name}</h3>
                <p className="text-coral-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-32 px-6 border-t border-coral-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono text-coral-secondary text-sm tracking-widest mb-4">
              ¿PARA QUIÉN?
            </p>
            <h2 className="font-display text-4xl font-bold">
              Múltiples miradas, una herramienta
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Investigadores',
                desc: 'Antropólogos visuales, cientistas sociales, filósofos. Datos cuantificables para papers y denuncias.',
                highlight: 'Procesar 10.000 imágenes de noticieros y mapear asimetrías de representación.'
              },
              {
                title: 'Artistas & Cineastas',
                desc: 'Documentalistas, fotógrafos, creadores visuales. Autoconocimiento del propio lenguaje.',
                highlight: 'Entrenar LoRAs con tu universo visual y generar desde tu mirada única.'
              },
              {
                title: 'Comunidades',
                desc: 'Pueblos originarios, organizaciones sociales, medios comunitarios. La herramienta es tuya.',
                highlight: 'Analizar cómo te representan otros y entrenar tu propia mirada como modelo.'
              },
              {
                title: 'Educadores',
                desc: 'Profesores, talleristas, formadores. Pedagogía de la mirada crítica.',
                highlight: 'Workshops de descolonización visual con herramientas concretas.'
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-coral-card border border-coral-border rounded-lg p-8 card-hover"
              >
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-coral-muted mb-4">{item.desc}</p>
                <p className="text-coral-primary text-sm border-l-2 border-coral-primary pl-4">
                  {item.highlight}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-32 px-6 bg-coral-card/50 border-t border-coral-border">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-coral-primary text-sm tracking-widest mb-4">
              ACCESO ANTICIPADO
            </p>
            <h2 className="font-display text-4xl font-bold mb-6">
              Sé parte del despertar
            </h2>
            <p className="text-coral-muted mb-10">
              CORAL está en desarrollo activo. Dejá tu email para recibir acceso 
              anticipado y novedades del proyecto.
            </p>

            {!submitted ? (
              <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="flex-1 bg-coral-bg border border-coral-border rounded px-4 py-3 text-coral-text placeholder:text-coral-muted focus:outline-none focus:border-coral-primary transition-colors"
                />
                <button
                  type="submit"
                  className="bg-coral-primary text-coral-bg px-6 py-3 rounded font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Unirme
                </button>
              </form>
            ) : (
              <div className="bg-coral-secondary/10 border border-coral-secondary rounded-lg p-6">
                <p className="text-coral-secondary font-medium">
                  ✓ Gracias por unirte. Te contactaremos pronto.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-coral-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-coral-primary">◉</span>
            <span className="font-display font-bold">CORAL</span>
            <span className="text-coral-muted text-sm ml-2">
              "Desenmascarar para liberar"
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-coral-muted text-sm">
            <Link href="/demo" className="hover:text-coral-text transition-colors">Demo</Link>
            <Link href="/dashboard" className="hover:text-coral-text transition-colors">Dashboard</Link>
            <a href="https://github.com" className="hover:text-coral-text transition-colors flex items-center gap-1">
              <Github size={16} />
              GitHub
            </a>
          </div>

          <p className="text-coral-muted text-sm font-mono">
            amlkr × 2024
          </p>
        </div>
      </footer>
    </main>
  )
}
