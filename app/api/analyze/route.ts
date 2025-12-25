import { NextResponse } from 'next/server'

// Mock analysis - in production, connect to Coral TPU backend
export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const image = formData.get('image') as File
    const lens = formData.get('lens') as string || 'fanon'

    if (!image) {
      return NextResponse.json(
        { error: 'No image provided' },
        { status: 400 }
      )
    }

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Mock response - in production, this comes from Coral TPU
    const analysis = {
      shotType: {
        code: ['ECU', 'CU', 'MCU', 'MS', 'MLS', 'FS', 'LS', 'ELS'][Math.floor(Math.random() * 8)],
        name: 'Medium Shot',
        confidence: 0.85 + Math.random() * 0.14
      },
      angle: {
        type: Math.random() > 0.5 ? 'Picado' : 'Normal',
        degrees: Math.floor((Math.random() - 0.5) * 30),
        interpretation: 'Posición que sugiere relación de poder'
      },
      subject: {
        position: Math.random() > 0.5 ? 'Centro' : 'Descentrado',
        frameRatio: 0.2 + Math.random() * 0.5,
        facialVisibility: Math.random()
      },
      composition: {
        balance: Math.random(),
        focalPoint: 'Tercio inferior',
        ruleOfThirds: Math.random() > 0.5
      },
      colors: [
        '#2d3436',
        '#636e72', 
        '#b2bec3',
        `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`,
        '#1a1a2e'
      ],
      stigmaIndex: Math.random(),
      patterns: [
        'Análisis de ángulo de cámara',
        'Proporción del sujeto en frame',
        'Posición en la composición'
      ],
      theoreticalLens: {
        fanon: 'La mirada reproduce estructuras coloniales de observación.',
        segato: 'El encuadre participa de pedagogías visuales de subordinación.',
        quijano: 'La composición refleja matrices de colonialidad del ver.',
        birri: 'Posibilidad de contravisualidad presente en la imagen.'
      },
      metadata: {
        processingTime: Math.floor(Math.random() * 100) + 50,
        tpuAccelerated: false,
        timestamp: new Date().toISOString()
      }
    }

    return NextResponse.json(analysis)
  } catch (error) {
    console.error('Analysis error:', error)
    return NextResponse.json(
      { error: 'Analysis failed' },
      { status: 500 }
    )
  }
}
