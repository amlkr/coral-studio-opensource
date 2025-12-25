'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, ArrowLeft, Scan, Eye, Target, Palette, AlertTriangle, Zap } from 'lucide-react'

// Simulated analysis result
const mockAnalysis = {
  shotType: { code: 'MS', name: 'Medium Shot', confidence: 0.89 },
  angle: { type: 'Picado', degrees: -15, interpretation: 'Posición de dominación sobre el sujeto' },
  subject: { 
    position: 'Descentrado izquierda', 
    frameRatio: 0.32,
    facialVisibility: 0.85 
  },
  composition: {
    balance: 0.38,
    focalPoint: 'Tercio inferior',
    ruleOfThirds: false
  },
  colors: ['#2d3436', '#636e72', '#b2bec3', '#c77dff', '#1a1a2e'],
  stigmaIndex: 0.68,
  patterns: [
    'Ángulo picado reduce estatura simbólica del sujeto',
    'Posición descentrada sugiere marginalización',
    'Baja proporción en frame indica distanciamiento'
  ],
  theoreticalLens: {
    fanon: 'La mirada desde arriba reproduce la posición colonial del observador sobre el observado.',
    segato: 'El encuadre normaliza una pedagogía visual de la subordinación.',
    quijano: 'La composición refleja matrices coloniales de jerarquización del cuerpo.'
  }
}

export default function DemoPage() {
  const [image, setImage] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string>('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<typeof mockAnalysis | null>(null)
  const [selectedLens, setSelectedLens] = useState('fanon')

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      processFile(file)
    }
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      processFile(file)
    }
  }, [])

  const processFile = (file: File) => {
    setFileName(file.name)
    const reader = new FileReader()
    reader.onload = (e) => {
      setImage(e.target?.result as string)
      setResult(null)
    }
    reader.readAsDataURL(file)
  }

  const runAnalysis = async () => {
    setIsAnalyzing(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2500))
    setResult(mockAnalysis)
    setIsAnalyzing(false)
  }

  const getStigmaColor = (value: number) => {
    if (value < 0.3) return 'text-coral-secondary'
    if (value < 0.6) return 'text-coral-warning'
    return 'text-coral-accent'
  }

  const getStigmaLabel = (value: number) => {
    if (value < 0.3) return 'Contravisual'
    if (value < 0.6) return 'Neutral'
    if (value < 0.8) return 'Problemático'
    return 'Violencia simbólica'
  }

  return (
    <main className="min-h-screen bg-coral-bg">
      <div className="grain" />
      
      {/* Header */}
      <header className="border-b border-coral-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 text-coral-muted hover:text-coral-text transition-colors">
            <ArrowLeft size={18} />
            <span className="text-sm">Volver</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <span className="text-coral-primary">◉</span>
            <span className="font-display font-bold">LABORATORIO</span>
          </div>

          <div className="flex items-center gap-2 text-coral-secondary text-sm font-mono">
            <span className="w-2 h-2 bg-coral-secondary rounded-full pulse-dot" />
            DEMO MODE
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 min-h-[calc(100vh-200px)]">
          
          {/* Left Panel - Upload */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h1 className="font-display text-3xl font-bold mb-2">Analizar imagen</h1>
              <p className="text-coral-muted">
                Subí una imagen para que el Ojo CORAL la analice
              </p>
            </div>

            {/* Lens selector */}
            <div className="mb-6">
              <label className="font-mono text-xs text-coral-muted uppercase tracking-wider block mb-2">
                Lente teórico
              </label>
              <div className="flex gap-2 flex-wrap">
                {[
                  { id: 'fanon', label: 'Fanon' },
                  { id: 'segato', label: 'Segato' },
                  { id: 'quijano', label: 'Quijano' },
                  { id: 'birri', label: 'Birri' },
                ].map(lens => (
                  <button
                    key={lens.id}
                    onClick={() => setSelectedLens(lens.id)}
                    className={`px-4 py-2 rounded text-sm font-mono transition-all ${
                      selectedLens === lens.id
                        ? 'bg-coral-primary text-coral-bg'
                        : 'bg-coral-card border border-coral-border text-coral-muted hover:border-coral-primary'
                    }`}
                  >
                    {lens.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Drop zone */}
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className={`flex-1 border-2 border-dashed rounded-lg flex flex-col items-center justify-center transition-all cursor-pointer relative overflow-hidden ${
                image ? 'border-coral-primary/50' : 'border-coral-border hover:border-coral-primary/50'
              }`}
            >
              {image ? (
                <>
                  <img 
                    src={image} 
                    alt="Uploaded"
                    className="max-h-full max-w-full object-contain"
                  />
                  {isAnalyzing && (
                    <div className="absolute inset-0 bg-coral-bg/90 flex flex-col items-center justify-center">
                      <div className="relative w-24 h-24 mb-4">
                        <div className="absolute inset-0 border-2 border-coral-primary/30 rounded-full" />
                        <div className="absolute inset-0 border-2 border-coral-primary border-t-transparent rounded-full animate-spin" />
                        <Eye className="absolute inset-0 m-auto text-coral-primary" size={32} />
                      </div>
                      <p className="font-mono text-coral-primary text-sm">Analizando con Coral TPU...</p>
                      <div className="w-48 h-1 bg-coral-border rounded mt-4 overflow-hidden">
                        <motion.div 
                          className="h-full bg-coral-primary"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 2.5 }}
                        />
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center p-8">
                  <Upload className="mx-auto text-coral-muted mb-4" size={48} />
                  <p className="text-coral-muted mb-2">Arrastrá una imagen o hacé click</p>
                  <p className="text-coral-muted/50 text-sm">JPG, PNG • Hasta 10MB</p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>

            {/* Analyze button */}
            <button
              onClick={runAnalysis}
              disabled={!image || isAnalyzing}
              className={`mt-6 py-4 rounded font-medium font-mono text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                image && !isAnalyzing
                  ? 'bg-coral-primary text-coral-bg hover:opacity-90 glow-primary'
                  : 'bg-coral-card text-coral-muted cursor-not-allowed'
              }`}
            >
              <Scan size={18} />
              {isAnalyzing ? 'Analizando...' : 'Ejecutar análisis'}
            </button>

            {fileName && (
              <p className="mt-3 text-coral-muted text-sm font-mono truncate">
                {fileName}
              </p>
            )}
          </div>

          {/* Right Panel - Results */}
          <div className="flex flex-col">
            <AnimatePresence mode="wait">
              {result ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1 overflow-auto"
                >
                  {/* Stigma Index - Hero */}
                  <div className={`bg-coral-card border rounded-lg p-6 mb-6 ${
                    result.stigmaIndex > 0.6 ? 'border-coral-accent' : 'border-coral-border'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="font-mono text-xs text-coral-muted uppercase tracking-wider mb-1">
                          Índice de estigmatización
                        </p>
                        <div className={`text-5xl font-display font-bold ${getStigmaColor(result.stigmaIndex)}`}>
                          {(result.stigmaIndex * 100).toFixed(0)}%
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded text-sm font-mono ${
                        result.stigmaIndex > 0.6 
                          ? 'bg-coral-accent/20 text-coral-accent' 
                          : 'bg-coral-secondary/20 text-coral-secondary'
                      }`}>
                        {getStigmaLabel(result.stigmaIndex)}
                      </div>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="h-2 bg-coral-border rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full ${
                          result.stigmaIndex > 0.6 ? 'bg-coral-accent' : 'bg-coral-secondary'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${result.stigmaIndex * 100}%` }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                  </div>

                  {/* Technical Analysis */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-coral-card border border-coral-border rounded-lg p-4">
                      <div className="flex items-center gap-2 text-coral-muted mb-2">
                        <Target size={14} />
                        <span className="font-mono text-xs uppercase">Tipo de plano</span>
                      </div>
                      <p className="text-2xl font-bold text-coral-primary">{result.shotType.code}</p>
                      <p className="text-sm text-coral-muted">{result.shotType.name}</p>
                    </div>

                    <div className="bg-coral-card border border-coral-border rounded-lg p-4">
                      <div className="flex items-center gap-2 text-coral-muted mb-2">
                        <Eye size={14} />
                        <span className="font-mono text-xs uppercase">Ángulo</span>
                      </div>
                      <p className="text-2xl font-bold text-coral-accent">{result.angle.degrees}°</p>
                      <p className="text-sm text-coral-muted">{result.angle.type}</p>
                    </div>

                    <div className="bg-coral-card border border-coral-border rounded-lg p-4">
                      <div className="flex items-center gap-2 text-coral-muted mb-2">
                        <Zap size={14} />
                        <span className="font-mono text-xs uppercase">Ratio en frame</span>
                      </div>
                      <p className="text-2xl font-bold">{(result.subject.frameRatio * 100).toFixed(0)}%</p>
                      <p className="text-sm text-coral-muted">{result.subject.position}</p>
                    </div>

                    <div className="bg-coral-card border border-coral-border rounded-lg p-4">
                      <div className="flex items-center gap-2 text-coral-muted mb-2">
                        <Palette size={14} />
                        <span className="font-mono text-xs uppercase">Paleta</span>
                      </div>
                      <div className="flex gap-1 mt-2">
                        {result.colors.map((color, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Patterns Detected */}
                  <div className="bg-coral-card border border-coral-border rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 text-coral-muted mb-3">
                      <AlertTriangle size={14} />
                      <span className="font-mono text-xs uppercase">Patrones detectados</span>
                    </div>
                    {result.patterns.map((pattern, i) => (
                      <div key={i} className="flex items-start gap-3 mb-2 last:mb-0">
                        <span className="text-coral-accent">•</span>
                        <p className="text-sm text-coral-muted">{pattern}</p>
                      </div>
                    ))}
                  </div>

                  {/* Theoretical Interpretation */}
                  <div className="bg-coral-card border border-coral-primary/30 rounded-lg p-4">
                    <p className="font-mono text-xs text-coral-primary uppercase tracking-wider mb-3">
                      Interpretación — {selectedLens.toUpperCase()}
                    </p>
                    <p className="text-coral-muted italic leading-relaxed">
                      "{result.theoreticalLens[selectedLens as keyof typeof result.theoreticalLens]}"
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col items-center justify-center text-center"
                >
                  <div className="text-6xl text-coral-border mb-4">◎</div>
                  <p className="text-coral-muted mb-2">Subí una imagen para analizarla</p>
                  <p className="text-coral-muted/50 text-sm">
                    El Ojo CORAL descompondrá cada capa de significado
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  )
}
