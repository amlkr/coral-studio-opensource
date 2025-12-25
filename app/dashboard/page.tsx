'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  LayoutGrid, List, Plus, Search, Bell, Settings, 
  Play, Eye, AlertTriangle, TrendingUp, Clock, 
  CheckCircle, Calendar, BarChart3, Users
} from 'lucide-react'

// Mock data
const projects = [
  { id: 1, thumbnail: '/api/placeholder/300/200', name: 'Cobertura protestas 2024', frames: 847, stigma: 0.73 },
  { id: 2, thumbnail: '/api/placeholder/300/200', name: 'Noticieros prime time', frames: 2341, stigma: 0.68 },
  { id: 3, thumbnail: '/api/placeholder/300/200', name: 'Documental interior', frames: 456, stigma: 0.31 },
  { id: 4, thumbnail: '/api/placeholder/300/200', name: 'Archivo histórico TV', frames: 1893, stigma: 0.79 },
  { id: 5, thumbnail: '/api/placeholder/300/200', name: 'Medios comunitarios', frames: 678, stigma: 0.22 },
  { id: 6, thumbnail: '/api/placeholder/300/200', name: 'Campaña electoral', frames: 3421, stigma: 0.65 },
  { id: 7, thumbnail: '/api/placeholder/300/200', name: 'Representación rural', frames: 234, stigma: 0.41 },
  { id: 8, thumbnail: '/api/placeholder/300/200', name: 'Análisis publicidad', frames: 1102, stigma: 0.58 },
  { id: 9, thumbnail: '/api/placeholder/300/200', name: 'Cine argentino 90s', frames: 567, stigma: 0.35 },
  { id: 10, thumbnail: '/api/placeholder/300/200', name: 'Cobertura deportiva', frames: 789, stigma: 0.44 },
]

const schedule = [
  { time: '09:30', title: 'Análisis corpus TN', type: 'analysis', status: 'pending' },
  { time: '10:30', title: 'Review LoRA cultural', type: 'review', status: 'active' },
  { time: '12:00', title: 'Workshop comunidad', type: 'workshop', status: 'pending' },
  { time: '14:30', title: 'Sync con 3AYES', type: 'sync', status: 'pending' },
  { time: '15:00', title: 'Export reportes', type: 'export', status: 'pending' },
]

const activity = {
  total: 283,
  breakdown: [
    { label: 'Análisis', hours: 121, color: '#0a0a0a' },
    { label: 'Investigación', hours: 68, color: '#ffcc00' },
    { label: 'Entrenamiento', hours: 54, color: '#c77dff' },
    { label: 'Validación', hours: 27, color: '#ff6b6b' },
    { label: 'Export', hours: 13, color: '#e0e0e0' },
  ]
}

const tasks = [
  { name: 'Análisis corpus completo', logged: '136 h', due: 'May 31', progress: 78 },
  { name: 'Entrenar LoRA Wichi', logged: '14 h', due: 'Jun 23', progress: 25 },
  { name: 'Documentación API', logged: '200 h', due: 'Abr 9', progress: 95 },
  { name: 'UI Dashboard v2', logged: '7 h', due: 'Oct 16', progress: 12 },
]

const alerts = [
  { time: '14:32', media: 'Medio A', message: 'Índice supera umbral (0.85) en nota barrios', level: 'high' },
  { time: '14:28', media: 'Medio C', message: 'Patrón masificación detectado en protesta', level: 'medium' },
  { time: '14:15', media: 'Medio A', message: '12 planos picados consecutivos', level: 'high' },
]

export default function DashboardPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <main className="min-h-screen bg-coral-bg">
      <div className="grain" />

      {/* Top Navigation */}
      <nav className="border-b border-coral-border bg-coral-bg/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-[1800px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-coral-primary text-xl">◉</span>
              <span className="font-display font-bold">CORAL</span>
            </Link>
            
            <div className="flex items-center gap-1">
              {['Dashboard', 'Projects', 'Multimedia', 'Team', 'Reports'].map((item, i) => (
                <button
                  key={item}
                  className={`px-4 py-2 rounded text-sm transition-colors ${
                    i === 0 
                      ? 'bg-coral-card text-coral-text' 
                      : 'text-coral-muted hover:text-coral-text'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-coral-muted hover:text-coral-text transition-colors text-sm">
              Integrations
            </button>
            <div className="w-10 h-10 rounded-full bg-coral-primary/20 border border-coral-primary/50 flex items-center justify-center">
              <span className="text-coral-primary text-sm font-bold">A</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-[1800px] mx-auto px-6 py-6">
        
        {/* Projects Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-coral-muted text-2xl font-light">Projects</h1>
          
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-coral-muted" size={16} />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-coral-card border border-coral-border rounded pl-10 pr-4 py-2 text-sm w-64 focus:outline-none focus:border-coral-primary transition-colors"
              />
            </div>

            {/* View toggle */}
            <div className="flex items-center border border-coral-border rounded overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-coral-primary text-coral-bg' : 'text-coral-muted hover:text-coral-text'}`}
              >
                <LayoutGrid size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-coral-primary text-coral-bg' : 'text-coral-muted hover:text-coral-text'}`}
              >
                <List size={16} />
              </button>
            </div>

            {/* Add new */}
            <button className="flex items-center gap-2 bg-coral-card border border-coral-border rounded px-4 py-2 text-sm hover:border-coral-primary transition-colors">
              Add New...
              <Plus size={14} />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-video bg-coral-card rounded-lg overflow-hidden cursor-pointer border border-transparent hover:border-coral-primary transition-all"
            >
              {/* Placeholder gradient background */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, 
                    hsl(${(i * 37) % 360}, 30%, 15%), 
                    hsl(${(i * 37 + 60) % 360}, 40%, 10%)
                  )`
                }}
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-coral-bg/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                <p className="text-sm font-medium truncate">{project.name}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-coral-muted">{project.frames} frames</span>
                  <span className={`text-xs font-mono ${
                    project.stigma > 0.6 ? 'text-coral-accent' : 'text-coral-secondary'
                  }`}>
                    {(project.stigma * 100).toFixed(0)}%
                  </span>
                </div>
              </div>

              {/* Stigma indicator */}
              <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${
                project.stigma > 0.6 ? 'bg-coral-accent' : project.stigma > 0.4 ? 'bg-coral-warning' : 'bg-coral-secondary'
              }`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Widgets - Like your original design */}
        <div className="grid grid-cols-3 gap-6">
          
          {/* Schedule Widget */}
          <div className="bg-coral-primary rounded-2xl p-6 text-coral-bg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium">Schedule</h2>
              <div className="flex gap-2 text-sm">
                <button className="bg-coral-bg/20 px-3 py-1 rounded font-medium">Day</button>
                <button className="opacity-60 hover:opacity-100 transition-opacity">Week</button>
                <button className="opacity-60 hover:opacity-100 transition-opacity">Month</button>
              </div>
            </div>

            <div className="space-y-3">
              {schedule.map((item, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-4 p-3 rounded-lg bg-coral-bg/10 hover:bg-coral-bg/20 transition-colors"
                >
                  <span className="text-sm font-mono opacity-70 w-12">{item.time}</span>
                  <div className={`w-2 h-2 rounded-full ${
                    item.status === 'active' ? 'bg-coral-secondary' : 'bg-coral-bg/30'
                  }`} />
                  <span className="flex-1 text-sm">{item.title}</span>
                  {item.status === 'active' && (
                    <button className="bg-coral-secondary text-coral-bg text-xs px-3 py-1 rounded font-medium">
                      Join
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-3 bg-coral-bg/20 rounded-lg text-sm font-medium hover:bg-coral-bg/30 transition-colors flex items-center justify-center gap-2">
              <Plus size={16} />
              Add Meeting
            </button>
          </div>

          {/* Activity Widget */}
          <div className="bg-coral-card border border-coral-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium">Activity</h2>
              <div className="flex items-center gap-2 text-sm text-coral-muted">
                <button className="hover:text-coral-text transition-colors">←</button>
                <span>Today</span>
                <button className="hover:text-coral-text transition-colors">→</button>
              </div>
            </div>

            {/* Donut Chart Placeholder */}
            <div className="flex items-center gap-8">
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  {activity.breakdown.map((item, i) => {
                    const total = activity.breakdown.reduce((acc, curr) => acc + curr.hours, 0)
                    const percentage = (item.hours / total) * 100
                    const offset = activity.breakdown.slice(0, i).reduce((acc, curr) => acc + (curr.hours / total) * 100, 0)
                    
                    return (
                      <circle
                        key={item.label}
                        cx="18"
                        cy="18"
                        r="14"
                        fill="none"
                        stroke={item.color}
                        strokeWidth="4"
                        strokeDasharray={`${percentage} ${100 - percentage}`}
                        strokeDashoffset={-offset}
                        className="transition-all duration-500"
                      />
                    )
                  })}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs text-coral-muted">
                    {activity.total}h
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-2">
                {activity.breakdown.map((item) => (
                  <div key={item.label} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-coral-muted">{item.label}</span>
                    </div>
                    <span className="font-mono">{item.hours} h</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tasks Widget */}
          <div className="bg-coral-card border border-coral-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium">Tasks</h2>
              <div className="flex items-center gap-4 text-sm text-coral-muted">
                <button className="hover:text-coral-text transition-colors flex items-center gap-1">
                  <span>Filter</span>
                </button>
                <button className="hover:text-coral-text transition-colors flex items-center gap-1">
                  <span>Sort by</span>
                </button>
                <button className="text-coral-primary hover:opacity-80 transition-opacity">
                  All Tasks →
                </button>
              </div>
            </div>

            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-coral-muted border-b border-coral-border">
                  <th className="pb-3 font-normal">Name</th>
                  <th className="pb-3 font-normal text-right">Logged</th>
                  <th className="pb-3 font-normal text-right">Due Date</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, i) => (
                  <tr key={i} className="border-b border-coral-border/50 last:border-0">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-coral-border/50 flex items-center justify-center">
                          <CheckCircle size={14} className={
                            task.progress > 90 ? 'text-coral-secondary' : 'text-coral-muted'
                          } />
                        </div>
                        <span className="text-sm">{task.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-right">
                      <span className="text-sm text-coral-muted font-mono">{task.logged}</span>
                    </td>
                    <td className="py-4 text-right">
                      <span className="text-sm text-coral-muted">{task.due}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alerts Section */}
        <div className="mt-6 bg-coral-accent/10 border border-coral-accent/30 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-coral-accent" size={18} />
            <h2 className="font-mono text-sm uppercase tracking-wider text-coral-accent">
              Alertas en tiempo real
            </h2>
            <span className="ml-auto text-xs text-coral-muted font-mono">
              {alerts.length} nuevas
            </span>
          </div>

          <div className="space-y-2">
            {alerts.map((alert, i) => (
              <div 
                key={i}
                className="flex items-center gap-4 p-3 bg-coral-bg/50 rounded-lg"
              >
                <span className="font-mono text-xs text-coral-muted w-12">{alert.time}</span>
                <span className={`text-sm font-medium w-20 ${
                  alert.level === 'high' ? 'text-coral-accent' : 'text-coral-warning'
                }`}>
                  {alert.media}
                </span>
                <span className="text-sm text-coral-muted flex-1">{alert.message}</span>
                <button className="text-xs text-coral-primary hover:underline">Ver</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
