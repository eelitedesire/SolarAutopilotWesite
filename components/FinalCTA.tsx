'use client'

import { motion } from 'framer-motion'
import { Download, Github, ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Start Optimizing Your Solar System{' '}
            <span className="text-primary">Today</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
            Join thousands of users saving money and reducing their carbon footprint with 
            intelligent AI-powered solar optimization.
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="bg-dark-secondary/50 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl font-bold text-primary mb-2">12.7%</div>
              <div className="text-text-secondary">Average Cost Reduction</div>
            </div>
            <div className="bg-dark-secondary/50 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl font-bold text-success mb-2">5 min</div>
              <div className="text-text-secondary">Setup Time</div>
            </div>
            <div className="bg-dark-secondary/50 rounded-xl p-6 border border-gray-700">
              <div className="text-3xl font-bold text-accent-blue mb-2">100%</div>
              <div className="text-text-secondary">Privacy Guaranteed</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
          >
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-xl px-10 py-5 flex items-center space-x-3 shadow-lg shadow-primary/25"
            >
              <Download size={24} />
              <span>Download Now</span>
              <ArrowRight size={20} />
            </motion.a>
            
            <motion.a
              href="https://github.com/solarautopilot"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-xl px-10 py-5 flex items-center space-x-3"
            >
              <Github size={24} />
              <span>View on GitHub</span>
            </motion.a>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-4 text-sm"
          >
            <div className="flex items-center space-x-2 bg-dark-secondary/50 px-4 py-2 rounded-full border border-gray-700">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-text-secondary">★ 4.9 GitHub Rating</span>
            </div>
            <div className="flex items-center space-x-2 bg-dark-secondary/50 px-4 py-2 rounded-full border border-gray-700">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-text-secondary">10K+ Downloads</span>
            </div>
            <div className="flex items-center space-x-2 bg-dark-secondary/50 px-4 py-2 rounded-full border border-gray-700">
              <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
              <span className="text-text-secondary">v1.0.0 Stable</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}