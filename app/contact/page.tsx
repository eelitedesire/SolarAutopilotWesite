'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
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
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="body-large text-text-secondary">
              Have questions? We'd love to hear from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-elevated"
          >
            {status === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle size={64} className="mx-auto text-green-400 mb-6" />
                <h2 className="heading-3 mb-4">Message Sent!</h2>
                <p className="body-large text-text-secondary">
                  We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block body-base mb-2 text-text-primary">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-4 bg-dark border border-gray-600 rounded-lg text-white focus:border-primary focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block body-base mb-2 text-text-primary">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-4 bg-dark border border-gray-600 rounded-lg text-white focus:border-primary focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block body-base mb-2 text-text-primary">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full p-4 bg-dark border border-gray-600 rounded-lg text-white focus:border-primary focus:outline-none"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block body-base mb-2 text-text-primary">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 bg-dark border border-gray-600 rounded-lg text-white focus:border-primary focus:outline-none resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {status === 'error' && (
                  <div className="p-4 bg-red-400/10 border border-red-400/30 rounded-lg text-red-400">
                    Failed to send message. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full md:w-auto"
                >
                  {status === 'sending' ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 text-text-secondary">
              <Mail size={20} />
              <span>Or email us directly at</span>
              <a href="mailto:contact@solarautopilot.com" className="text-primary hover:underline">
                contact@solarautopilot.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
