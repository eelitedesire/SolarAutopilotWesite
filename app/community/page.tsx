'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Github, MessageCircle, Send, Users, ExternalLink } from 'lucide-react'

const communityLinks = [
  {
    name: 'GitHub',
    description: 'Contribute to the project, report issues, and view source code',
    icon: Github,
    url: 'https://github.com/CARBONOZ-RENEWABLES/solarautopilot',
    color: 'from-gray-500 to-gray-700',
  },
  {
    name: 'Discord',
    description: 'Join our community for real-time discussions and support',
    icon: MessageCircle,
    url: '#',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Telegram',
    description: 'Get updates and connect with other users',
    icon: Send,
    url: '#',
    color: 'from-cyan-500 to-blue-500',
  },
]

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-dark">
      <Header />
      
      <section className="section-padding pt-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="heading-1 mb-6">
              Join Our <span className="text-primary">Community</span>
            </h1>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              Connect with other solar energy enthusiasts, get support, and contribute to the project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {communityLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-interactive group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <link.icon size={28} className="text-white" />
                </div>

                <h3 className="heading-4 mb-3 flex items-center gap-2">
                  {link.name}
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                <p className="body-base text-text-secondary">
                  {link.description}
                </p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card-elevated text-center"
          >
            <Users size={48} className="mx-auto text-primary mb-6" />
            <h2 className="heading-2 mb-4">
              Contribute to <span className="text-primary">SolarAutopilot</span>
            </h2>
            <p className="body-large text-text-secondary mb-8 max-w-2xl mx-auto">
              SolarAutopilot is open source. We welcome contributions from developers, 
              designers, and solar energy experts.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://github.com/CARBONOZ-RENEWABLES/solarautopilot" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Github size={18} />
                <span>View on GitHub</span>
              </a>
              <a href="https://github.com/CARBONOZ-RENEWABLES/solarautopilot/issues" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Report an Issue
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
