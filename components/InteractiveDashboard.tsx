'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Battery, Zap, DollarSign, Sun, Activity } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function InteractiveDashboard() {
  const [solarProduction, setSolarProduction] = useState(6.8)
  const [batteryLevel, setBatteryLevel] = useState(92)
  const [costSavings, setCostSavings] = useState(247)
  
  const energyData = [
    { time: '00:00', solar: 0, battery: 85, grid: 2.1, cost: 0.12 },
    { time: '06:00', solar: 1.2, battery: 78, grid: 1.8, cost: 0.15 },
    { time: '12:00', solar: 8.5, battery: 95, grid: -2.3, cost: -0.08 },
    { time: '18:00', solar: 3.2, battery: 88, grid: 0.5, cost: 0.22 },
    { time: '24:00', solar: 0, battery: 82, grid: 1.9, cost: 0.18 }
  ]
  
  useEffect(() => {
    const dataInterval = setInterval(() => {
      setSolarProduction(prev => prev + (Math.random() - 0.5) * 0.5)
      setBatteryLevel(prev => Math.max(85, Math.min(95, prev + (Math.random() - 0.5) * 2)))
      setCostSavings(prev => prev + Math.random() * 2)
    }, 2000)
    
    return () => {
      clearInterval(dataInterval)
    }
  }, [])

  return (
    <div id="showcase" className="relative bg-gradient-to-br from-dark-secondary via-dark to-dark-secondary rounded-2xl border border-gray-700 overflow-hidden max-w-6xl mx-auto">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-blue/5"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-blue rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-success rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
      
      <div className="relative z-10 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Metrics */}
          <div className="lg:col-span-1 space-y-4">
            <motion.h3 
              className="text-xl font-semibold mb-4 flex items-center"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Activity className="mr-2 text-primary" size={20} />
              Live Metrics
            </motion.h3>
            
            <motion.div 
              className="bg-dark/80 backdrop-blur-sm rounded-lg p-4 border border-gray-600"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(26, 26, 26, 0.9)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-text-secondary">Solar Production</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Sun className="text-yellow-500" size={16} />
                </motion.div>
              </div>
              <motion.div 
                className="text-2xl font-bold text-yellow-500"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {solarProduction.toFixed(1)} kW
              </motion.div>
              <motion.div 
                className="text-xs text-success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                +12% vs yesterday
              </motion.div>
            </motion.div>

            <motion.div 
              className="bg-dark/80 backdrop-blur-sm rounded-lg p-4 border border-gray-600"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(26, 26, 26, 0.9)' }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-text-secondary">Battery Level</span>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Battery className="text-success" size={16} />
                </motion.div>
              </div>
              <motion.div 
                className="text-2xl font-bold text-success"
                animate={{ color: ['#10B981', '#34D399', '#10B981'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {Math.round(batteryLevel)}%
              </motion.div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2 overflow-hidden">
                <motion.div 
                  className="bg-success h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${batteryLevel}%` }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="bg-dark/80 backdrop-blur-sm rounded-lg p-4 border border-gray-600"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(26, 26, 26, 0.9)' }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-text-secondary">Cost Savings</span>
                <motion.div
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <DollarSign className="text-primary" size={16} />
                </motion.div>
              </div>
              <motion.div 
                className="text-2xl font-bold text-primary"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                €{Math.round(costSavings)}
              </motion.div>
              <div className="text-xs text-success">This month</div>
            </motion.div>
          </div>

          {/* Energy Flow Diagram */}
          <div className="lg:col-span-2">
            <motion.h3 
              className="text-xl font-semibold mb-4 flex items-center"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <Zap className="mr-2 text-primary" size={20} />
              Energy Flow
            </motion.h3>
            
            <div className="bg-dark/80 backdrop-blur-sm rounded-lg p-6 border border-gray-600 h-64 relative overflow-hidden">
              {/* Solar Panels */}
              <motion.div 
                className="absolute top-4 left-8 bg-yellow-500/20 backdrop-blur-sm rounded-lg p-3 border border-yellow-500/50"
                animate={{ 
                  y: [0, -8, 0],
                  boxShadow: ['0 0 0 rgba(234, 179, 8, 0)', '0 0 20px rgba(234, 179, 8, 0.3)', '0 0 0 rgba(234, 179, 8, 0)']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Sun className="text-yellow-500" size={24} />
                </motion.div>
                <motion.div 
                  className="text-xs text-yellow-500 mt-1 font-bold"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {solarProduction.toFixed(1)}kW
                </motion.div>
              </motion.div>

              {/* Battery */}
              <motion.div 
                className="absolute bottom-4 left-8 bg-success/20 backdrop-blur-sm rounded-lg p-3 border border-success/50"
                animate={{ 
                  scale: [1, 1.08, 1],
                  boxShadow: ['0 0 0 rgba(16, 185, 129, 0)', '0 0 20px rgba(16, 185, 129, 0.3)', '0 0 0 rgba(16, 185, 129, 0)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Battery className="text-success" size={24} />
                <motion.div 
                  className="text-xs text-success mt-1 font-bold"
                  animate={{ color: ['#10B981', '#34D399', '#10B981'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {Math.round(batteryLevel)}%
                </motion.div>
              </motion.div>

              {/* House */}
              <motion.div 
                className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-accent-blue/20 backdrop-blur-sm rounded-lg p-3 border border-accent-blue/50"
                animate={{ 
                  rotate: [0, 2, -2, 0],
                  boxShadow: ['0 0 0 rgba(59, 130, 246, 0)', '0 0 15px rgba(59, 130, 246, 0.3)', '0 0 0 rgba(59, 130, 246, 0)']
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-6 h-6 bg-accent-blue/50 rounded"></div>
                <div className="text-xs text-accent-blue mt-1 font-bold">2.1kW</div>
              </motion.div>

              {/* Animated Energy Flow Lines */}
              <svg className="absolute inset-0 w-full h-full">
                <motion.path
                  d="M 80 40 Q 200 40 280 100"
                  stroke="#DEAF0B"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,4"
                  animate={{ 
                    strokeDashoffset: [0, -24],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <motion.path
                  d="M 80 200 Q 200 200 280 140"
                  stroke="#10B981"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,4"
                  animate={{ 
                    strokeDashoffset: [0, -24],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />
              </svg>

              {/* AI Decision Indicator */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary/30 backdrop-blur-sm rounded-full p-3 border border-primary/50"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1],
                  boxShadow: ['0 0 0 rgba(222, 175, 11, 0)', '0 0 25px rgba(222, 175, 11, 0.5)', '0 0 0 rgba(222, 175, 11, 0)']
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity },
                  boxShadow: { duration: 3, repeat: Infinity }
                }}
              >
                <div className="w-4 h-4 bg-primary rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Energy Chart */}
        <div className="mt-8">
          <motion.h3 
            className="text-xl font-semibold mb-4 flex items-center"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <TrendingUp className="mr-2 text-primary" size={20} />
            24-Hour Energy Profile
          </motion.h3>
          
          <div className="bg-dark/80 backdrop-blur-sm rounded-lg p-6 border border-gray-600">
            <div className="flex justify-between items-end h-32 space-x-2">
              {energyData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <motion.div 
                    className="w-full bg-gradient-to-t from-primary/60 to-primary/80 rounded-t relative overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: `${Math.max(data.solar * 12, 8)}px`,
                      opacity: 1
                    }}
                    transition={{ duration: 1.5, delay: index * 0.3 }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(222, 175, 11, 0.9)'
                    }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-transparent to-primary/20"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                    <motion.div 
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-primary font-bold bg-dark/80 px-2 py-1 rounded"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.3 + 1 }}
                    >
                      {data.solar}kW
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="text-xs text-text-secondary mt-2 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.3 + 0.5 }}
                  >
                    {data.time}
                  </motion.div>
                </div>
              ))}
            </div>
            
            <motion.div 
              className="flex justify-between mt-6 text-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
            >
              <div className="flex items-center">
                <motion.div 
                  className="w-3 h-3 bg-primary rounded mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-text-secondary">Solar Production</span>
              </div>
              <div className="flex items-center">
                <motion.div 
                  className="w-3 h-3 bg-success rounded mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <span className="text-text-secondary">Battery Level</span>
              </div>
              <div className="flex items-center">
                <motion.div 
                  className="w-3 h-3 bg-accent-blue rounded mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <span className="text-text-secondary">Grid Usage</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* AI Insights */}
        <motion.div 
          className="mt-6 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-lg p-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 0 25px rgba(222, 175, 11, 0.2)'
          }}
        >
          <div className="flex items-center mb-2">
            <motion.div 
              className="w-3 h-3 bg-primary rounded-full mr-2"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-primary">🤖 AI Insight</span>
          </div>
          <motion.p 
            className="text-sm text-text-secondary"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Optimal charging window detected at 11:30 AM. Battery will charge to 95% using excess solar production, 
            saving €3.20 compared to evening grid charging.
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}