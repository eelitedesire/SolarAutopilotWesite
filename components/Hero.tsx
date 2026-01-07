'use client'

import { motion } from 'framer-motion'
import { Download, Play, Shield, Zap, Globe } from 'lucide-react'
import InteractiveDashboard from './InteractiveDashboard'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Intelligent Solar Energy Management,{' '}
            <span className="text-primary">Powered by AI</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            Optimize your solar system with academic-backed AI that learns your patterns and saves you money. 
            Up to <span className="text-primary font-semibold">12.7% cost reduction</span> compared to traditional systems.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-3"
            >
              <Download size={20} />
              <span>Download for Free</span>
            </motion.a>
            
            <motion.a
              href="#showcase"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4 flex items-center space-x-3"
            >
              <Play size={20} />
              <span>See It In Action</span>
            </motion.a>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-6 text-text-secondary"
          >
            <div className="flex items-center space-x-2">
              <Shield size={16} className="text-primary" />
              <span>Open Source</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap size={16} className="text-primary" />
              <span>No Subscription</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe size={16} className="text-primary" />
              <span>100% Privacy</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 relative"
        >
          <InteractiveDashboard />
        </motion.div>
      </div>
    </section>
  )
}