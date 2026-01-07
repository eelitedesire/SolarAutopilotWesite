'use client'

import { motion } from 'framer-motion'
import { Download, Link, Settings, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Download,
    title: 'Install',
    description: 'Download for your platform with one-command installation and Docker support included.',
    details: ['Cross-platform binaries', 'Docker containers', 'Package managers']
  },
  {
    icon: Link,
    title: 'Connect',
    description: 'Point to Solar Assistant and auto-discover all components with automatic entity mapping.',
    details: ['Auto-discovery', 'MQTT/REST API', 'Entity mapping']
  },
  {
    icon: Settings,
    title: 'Configure',
    description: 'Add your Tibber API key, configure MQTT broker, set preferences, and enable AI engine.',
    details: ['MQTT broker setup', 'API integration', 'AI activation']
  },
  {
    icon: TrendingUp,
    title: 'Optimize',
    description: 'AI learns your patterns, makes smart decisions 24/7, and continuously improves performance.',
    details: ['Pattern learning', '24/7 operation', 'Continuous improvement']
  }
]

export default function HowItWorks() {
  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            From Installation to Optimization in <span className="text-primary">Minutes</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            No complex configuration. No manual rules. Just intelligent optimization that works out of the box.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-xl relative z-10">
                    {index + 1}
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-dark-secondary rounded-xl p-6 border border-gray-700 hover:border-primary/30 transition-all duration-300 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <step.icon size={24} className="text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-text-secondary flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-2 text-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="#download" className="btn-primary text-lg px-8 py-4">
            Start Your 5-Minute Setup
          </a>
        </motion.div>
      </div>
    </section>
  )
}