'use client'

import { motion } from 'framer-motion'
import { Brain, TrendingUp, Shield, Zap, DollarSign, Leaf } from 'lucide-react'

const benefits = [
  {
    icon: Brain,
    title: 'AI-Powered Optimization',
    description: 'Advanced machine learning algorithms continuously optimize your solar energy production and consumption patterns.'
  },
  {
    icon: TrendingUp,
    title: 'Maximize Savings',
    description: 'Reduce energy costs by up to 40% through intelligent energy management and peak-time optimization.'
  },
  {
    icon: Shield,
    title: 'Grid Independence',
    description: 'Achieve energy autonomy with smart battery management and backup power during outages.'
  },
  {
    icon: Zap,
    title: 'Real-Time Monitoring',
    description: 'Track energy production, consumption, and savings with detailed analytics and live dashboards.'
  },
  {
    icon: DollarSign,
    title: 'ROI Tracking',
    description: 'Monitor your solar investment returns with comprehensive financial analytics and projections.'
  },
  {
    icon: Leaf,
    title: 'Carbon Footprint',
    description: 'Track your environmental impact and carbon savings with detailed sustainability metrics.'
  }
]

export default function Benefits() {
  return (
    <section className="py-16 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">SolarAutopilot</span>?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Transform your solar energy system with intelligent automation and optimization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-dark-secondary rounded-xl p-6 border border-gray-700 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="bg-primary/10 rounded-lg p-3 mr-4 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: index % 2 === 0 ? [0, 5, -5, 0] : [0, -5, 5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: index * 0.5 
                    }}
                  >
                    <benefit.icon className="text-primary" size={24} />
                  </motion.div>
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold group-hover:text-primary transition-colors duration-300"
                  animate={{ 
                    color: ['#FFFFFF', '#DEAF0B', '#FFFFFF'] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: index * 0.8 
                  }}
                >
                  {benefit.title}
                </motion.h3>
              </div>
              <motion.p 
                className="text-text-secondary leading-relaxed group-hover:text-white transition-colors duration-300"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {benefit.description}
              </motion.p>
              
              {/* Animated progress indicator */}
              <motion.div 
                className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.5 }}
              >
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary to-accent-blue rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ 
                    duration: 2, 
                    delay: index * 0.2 + 0.8,
                    ease: "easeOut"
                  }}
                />
              </motion.div>
              
              {/* Floating particles effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                {[...Array(3)].map((_, particleIndex) => (
                  <motion.div
                    key={particleIndex}
                    className="absolute w-1 h-1 bg-primary/30 rounded-full"
                    style={{
                      left: `${20 + particleIndex * 30}%`,
                      top: `${80}%`,
                    }}
                    animate={{
                      y: [-20, -40, -20],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3 + particleIndex * 0.5
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}