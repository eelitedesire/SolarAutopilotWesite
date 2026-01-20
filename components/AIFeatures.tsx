'use client'

import { motion } from 'framer-motion'
import { Brain, TrendingUp, Zap, Target, BarChart3, Clock, Battery, DollarSign } from 'lucide-react'

const aiFeatures = [
  {
    icon: Brain,
    title: 'Solar Generation Forecasting',
    description: 'AI learns from historical patterns without weather APIs',
    features: [
      'Pattern-based learning from InfluxDB data',
      'Astronomical calculations for sun position',
      'Seasonal adaptation and trend detection',
      '85%+ accuracy for next-day predictions'
    ],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: TrendingUp,
    title: 'Load Forecasting',
    description: 'Predicts household consumption patterns',
    features: [
      'Time-based consumption analysis',
      'Weekend vs weekday pattern detection',
      'Seasonal heating/cooling adaptation',
      '90%+ accuracy for load prediction'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'Intelligent Charging Strategy',
    description: 'Deep Q-Network reinforcement learning optimizer',
    features: [
      '12.7% cost improvement vs fixed tariffs',
      'Multi-objective optimization',
      'Dynamic pricing integration',
      'Battery health consideration'
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Target,
    title: 'Pattern Detection',
    description: 'Unsupervised learning for energy patterns',
    features: [
      'Daily pattern clustering (k-means)',
      'Weather pattern inference',
      'Seasonal transition detection',
      'Anomaly detection and alerts'
    ],
    color: 'from-purple-500 to-pink-500'
  }
]

const performanceMetrics = [
  {
    icon: BarChart3,
    label: 'Solar Accuracy',
    value: '85%+',
    description: 'Next-day prediction accuracy'
  },
  {
    icon: Target,
    label: 'Load Accuracy',
    value: '90%+',
    description: 'Consumption forecasting'
  },
  {
    icon: DollarSign,
    label: 'Cost Savings',
    value: '12.7%',
    description: 'vs traditional systems'
  },
  {
    icon: Clock,
    label: 'Learning Period',
    value: '30-90d',
    description: 'Optimal performance'
  }
]

const learningPhases = [
  {
    phase: 'Phase 1',
    title: 'Initial Training',
    days: 'Day 1-7',
    confidence: '30-50%',
    activities: [
      'Load historical data from InfluxDB',
      'Train solar predictor models',
      'Build load forecasting baseline',
      'Detect initial patterns'
    ]
  },
  {
    phase: 'Phase 2',
    title: 'Active Learning',
    days: 'Day 8-30',
    confidence: '50-80%',
    activities: [
      'Compare predictions vs outcomes',
      'Update model weights',
      'Improve pattern recognition',
      'Refine charging strategies'
    ]
  },
  {
    phase: 'Phase 3',
    title: 'Optimization',
    days: 'Day 31-90',
    confidence: '80-95%',
    activities: [
      'Fine-tune charging decisions',
      'Learn optimal timing patterns',
      'Maximize cost savings',
      'Seasonal adaptation'
    ]
  },
  {
    phase: 'Phase 4',
    title: 'Maintenance',
    days: 'Day 90+',
    confidence: '95%+',
    activities: [
      'Continuous incremental learning',
      'Performance monitoring',
      'Stable high performance',
      'Automatic adaptation'
    ]
  }
]

export default function AIFeatures() {
  return (
    <section id="ai-features" className="section-padding bg-dark">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Brain className="text-primary" size={20} />
            <span className="text-primary font-semibold">AI-Powered Intelligence</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Academic-Grade <span className="text-primary">AI System</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Advanced machine learning that learns your patterns and optimizes energy usage without external APIs
          </p>
        </motion.div>

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:border-primary/40"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`bg-gradient-to-br ${feature.color} p-3 rounded-xl`}>
                  <feature.icon className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-text-secondary">{feature.description}</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Performance <span className="text-primary">Metrics</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:border-primary/40"
              >
                <metric.icon className="text-primary mx-auto mb-4" size={32} />
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-sm font-semibold mb-1">{metric.label}</div>
                <div className="text-xs text-text-secondary">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Phases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            AI Learning <span className="text-primary">Process</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:border-primary/40 relative"
              >
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-dark">
                  {index + 1}
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-primary font-semibold mb-1">{phase.phase}</div>
                  <h4 className="text-xl font-bold mb-2">{phase.title}</h4>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">{phase.days}</span>
                    <span className="text-primary font-semibold">{phase.confidence}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {phase.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-start space-x-2 text-sm text-text-secondary">
                      <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Academic Foundation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 card bg-primary/5 border-primary/20"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Based on <span className="text-primary">Academic Research</span>
            </h3>
            <p className="text-text-secondary mb-6 max-w-3xl mx-auto">
              Our AI system implements findings from peer-reviewed research: 
              "Do dynamic electricity tariffs change the gains of residential PV-battery systems?"
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <Battery className="text-primary mb-2" size={24} />
                <div className="font-semibold mb-1">Battery Optimization</div>
                <div className="text-sm text-text-secondary">
                  Different strategies for small (≤15kWh), medium (15-20kWh), and large (&gt;20kWh) batteries
                </div>
              </div>
              <div>
                <DollarSign className="text-primary mb-2" size={24} />
                <div className="font-semibold mb-1">Price Thresholds</div>
                <div className="text-sm text-text-secondary">
                  Optimal charging at ≤8¢/kWh with 90.25% round-trip efficiency
                </div>
              </div>
              <div>
                <Target className="text-primary mb-2" size={24} />
                <div className="font-semibold mb-1">Proven Results</div>
                <div className="text-sm text-text-secondary">
                  12.7% cost improvement validated through academic research
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
