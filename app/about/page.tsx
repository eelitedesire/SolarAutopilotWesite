'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ReactMarkdown from 'react-markdown'

export default function AboutPage() {
  const [content, setContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/pages?slug=about')
      .then(res => res.json())
      .then(data => {
        setContent(data)
        setLoading(false)
      })
  }, [])

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
          >
            <h1 className="heading-1 mb-8">
              About <span className="text-primary">SolarAutopilot</span>
            </h1>

            {content ? (
              <div className="prose prose-invert prose-lg max-w-none">
                <ReactMarkdown>{content.content}</ReactMarkdown>
              </div>
            ) : (
              <div className="space-y-6 text-text-secondary body-large">
                <p>
                  SolarAutopilot is an advanced AI-powered solar energy management system developed by CARBONOZ. 
                  Our mission is to make solar energy more efficient, accessible, and intelligent for everyone.
                </p>
                <p>
                  Using cutting-edge machine learning algorithms and reinforcement learning, SolarAutopilot 
                  optimizes your solar energy usage in real-time, helping you save up to 12.7% on energy costs.
                </p>
                <p>
                  Built on academic research and real-world testing, our system learns your energy patterns 
                  and adapts to maximize efficiency without requiring expensive weather APIs or complex setup.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
