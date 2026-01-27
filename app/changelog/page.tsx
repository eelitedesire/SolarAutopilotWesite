'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Package, Zap } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

interface Changelog {
  id: string
  version: string
  title: string
  content: string
  type: string
  releaseDate: string
}

export default function ChangelogPage() {
  const [changelogs, setChangelogs] = useState<Changelog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/changelog')
      .then(res => res.json())
      .then(data => {
        setChangelogs(data)
        setLoading(false)
      })
  }, [])

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'release': return 'text-green-400 bg-green-400/10'
      case 'hotfix': return 'text-red-400 bg-red-400/10'
      case 'beta': return 'text-blue-400 bg-blue-400/10'
      default: return 'text-primary bg-primary/10'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-dark">
      <Header />
      
      <section className="section-padding pt-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="heading-1 mb-6">
              <span className="text-primary">Changelog</span>
            </h1>
            <p className="body-large text-text-secondary">
              Track all updates, improvements, and new features
            </p>
          </motion.div>

          <div className="space-y-8">
            {changelogs.map((log, index) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-elevated border-l-4 border-primary"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="heading-3">{log.version}</h2>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(log.type)}`}>
                        {log.type}
                      </span>
                    </div>
                    <h3 className="heading-4 text-text-secondary mb-2">{log.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary body-small">
                    <Calendar size={14} />
                    <span>{new Date(log.releaseDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <ReactMarkdown>{log.content}</ReactMarkdown>
                </div>
              </motion.div>
            ))}
          </div>

          {changelogs.length === 0 && (
            <div className="text-center py-20">
              <Package size={48} className="mx-auto text-text-secondary mb-4" />
              <p className="text-text-secondary body-large">No changelog entries yet</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
