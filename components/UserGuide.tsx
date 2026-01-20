'use client'

import { motion } from 'framer-motion'
import { BookOpen, Settings, Zap, TrendingUp, Bell, Shield, Database, Cpu } from 'lucide-react'

const guides = [
  {
    icon: BookOpen,
    title: 'Getting Started',
    description: 'Complete setup guide from installation to first optimization',
    topics: [
      {
        title: 'Installation',
        steps: [
          'Choose your platform (Home Assistant, Docker, Desktop)',
          'Follow platform-specific installation instructions',
          'Access the web interface at http://localhost:6789',
          'Complete the initial setup wizard'
        ]
      },
      {
        title: 'Initial Configuration',
        steps: [
          'Configure MQTT broker connection',
          'Set up inverter communication (Modbus/Serial)',
          'Connect to InfluxDB for data storage',
          'Configure battery and inverter parameters'
        ]
      }
    ]
  },
  {
    icon: Settings,
    title: 'System Configuration',
    description: 'Configure your solar system parameters and preferences',
    topics: [
      {
        title: 'Inverter Setup',
        steps: [
          'Select your inverter brand (Deye, Sunsynk, Growatt, etc.)',
          'Configure communication protocol (Modbus TCP/RTU)',
          'Set inverter IP address or serial port',
          'Test connection and verify data flow'
        ]
      },
      {
        title: 'Battery Configuration',
        steps: [
          'Enter battery capacity (kWh)',
          'Set SOC limits (min 20%, max 100%)',
          'Configure charge/discharge rates',
          'Enable battery health monitoring'
        ]
      }
    ]
  },
  {
    icon: Zap,
    title: 'Tibber Integration',
    description: 'Connect to Tibber for dynamic electricity pricing',
    topics: [
      {
        title: 'API Setup',
        steps: [
          'Create Tibber account at tibber.com',
          'Generate API token from developer portal',
          'Enter API token in SolarAutopilot settings',
          'Verify price data is being received'
        ]
      },
      {
        title: 'Price Optimization',
        steps: [
          'Set charging price threshold (recommended ≤8¢/kWh)',
          'Configure maximum price limit',
          'Enable dynamic pricing optimization',
          'Monitor cost savings in dashboard'
        ]
      }
    ]
  },
  {
    icon: Cpu,
    title: 'AI System Setup',
    description: 'Enable and configure AI-powered optimization',
    topics: [
      {
        title: 'Training Data',
        steps: [
          'Ensure 30+ days of historical data in InfluxDB',
          'Verify PV power and load data completeness',
          'Check data quality metrics (>80% coverage)',
          'Wait for initial AI training (24-48 hours)'
        ]
      },
      {
        title: 'AI Configuration',
        steps: [
          'Enable AI optimization in settings',
          'Set learning rate and confidence thresholds',
          'Configure prediction horizons (24-48 hours)',
          'Monitor AI performance metrics'
        ]
      }
    ]
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Configure data storage and retention policies',
    topics: [
      {
        title: 'InfluxDB Setup',
        steps: [
          'InfluxDB is included and auto-configured',
          'Access InfluxDB UI at http://localhost:8086',
          'Configure data retention policies',
          'Set up automatic data cleanup (optional)'
        ]
      },
      {
        title: 'Grafana Integration',
        steps: [
          'Grafana provisioning is automatic',
          'Access dashboards via web interface',
          'Customize dashboard layouts',
          'Create custom queries and visualizations'
        ]
      }
    ]
  },
  {
    icon: Bell,
    title: 'Notifications & Alerts',
    description: 'Set up alerts for important system events',
    topics: [
      {
        title: 'Telegram Notifications',
        steps: [
          'Create Telegram bot via @BotFather',
          'Get bot token and chat ID',
          'Configure in notification settings',
          'Test notification delivery'
        ]
      },
      {
        title: 'Alert Rules',
        steps: [
          'Create custom alert rules (SOC, power, price)',
          'Set threshold values and conditions',
          'Choose notification channels',
          'Configure alert frequency and cooldown'
        ]
      }
    ]
  },
  {
    icon: TrendingUp,
    title: 'Optimization Strategies',
    description: 'Understand and configure charging strategies',
    topics: [
      {
        title: 'Battery Size Strategies',
        steps: [
          'Small (≤15kWh): Price-sensitive charging',
          'Medium (15-20kWh): Hybrid approach',
          'Large (>20kWh): Self-consumption focus',
          'System auto-detects optimal strategy'
        ]
      },
      {
        title: 'Performance Tuning',
        steps: [
          'Monitor AI prediction accuracy (target >85%)',
          'Review cost savings reports',
          'Adjust price thresholds based on results',
          'Fine-tune learning parameters if needed'
        ]
      }
    ]
  },
  {
    icon: Shield,
    title: 'Security & Backup',
    description: 'Secure your installation and backup data',
    topics: [
      {
        title: 'Security Setup',
        steps: [
          'Enable authentication for web interface',
          'Configure SSL/TLS certificates',
          'Set up firewall rules',
          'Use strong passwords for all services'
        ]
      },
      {
        title: 'Backup & Recovery',
        steps: [
          'Configure automatic backups',
          'Export configuration files',
          'Backup InfluxDB data regularly',
          'Test restore procedures'
        ]
      }
    ]
  }
]

export default function UserGuide() {
  return (
    <section id="user-guide" className="section-padding bg-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Complete <span className="text-primary">User Guide</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Step-by-step instructions to get the most out of SolarAutopilot
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:border-primary/40"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-primary/10 rounded-xl p-3">
                  <guide.icon className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{guide.title}</h3>
                  <p className="text-text-secondary">{guide.description}</p>
                </div>
              </div>

              <div className="space-y-6">
                {guide.topics.map((topic, topicIndex) => (
                  <div key={topicIndex}>
                    <h4 className="text-lg font-semibold mb-3 text-primary">
                      {topic.title}
                    </h4>
                    <ul className="space-y-2">
                      {topic.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary text-xs font-bold">
                              {stepIndex + 1}
                            </span>
                          </div>
                          <span className="text-text-secondary text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 card bg-primary/5 border-primary/20"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Pro <span className="text-primary">Tips</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-primary font-semibold mb-2">📊 Data Quality</div>
              <p className="text-sm text-text-secondary">
                Ensure at least 30 days of clean historical data for optimal AI performance. 
                Check data completeness regularly.
              </p>
            </div>
            <div>
              <div className="text-primary font-semibold mb-2">⚡ Price Thresholds</div>
              <p className="text-sm text-text-secondary">
                Academic research shows optimal charging at ≤8¢/kWh. Adjust based on your 
                local electricity rates.
              </p>
            </div>
            <div>
              <div className="text-primary font-semibold mb-2">🔋 Battery Health</div>
              <p className="text-sm text-text-secondary">
                Keep SOC between 20-80% for daily use. Full charges occasionally help 
                battery calibration.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
