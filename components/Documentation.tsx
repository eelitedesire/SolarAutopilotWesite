'use client'

import { motion } from 'framer-motion'
import { Book, Code, Terminal, Wrench, Zap, Shield, Database, Cpu } from 'lucide-react'

const docCategories = [
  {
    icon: Book,
    title: 'Getting Started',
    description: 'Quick start guides and installation instructions',
    links: [
      { label: 'Installation Guide', href: '#install-guide' },
      { label: 'First Time Setup', href: '#setup' },
      { label: 'Configuration', href: '#config' },
      { label: 'Troubleshooting', href: '#troubleshoot' }
    ]
  },
  {
    icon: Code,
    title: 'API Reference',
    description: 'Complete API documentation and examples',
    links: [
      { label: 'REST API', href: '#rest-api' },
      { label: 'WebSocket API', href: '#websocket' },
      { label: 'MQTT Topics', href: '#mqtt' },
      { label: 'Authentication', href: '#auth' }
    ]
  },
  {
    icon: Cpu,
    title: 'AI System',
    description: 'AI-powered optimization and learning',
    links: [
      { label: 'Smart Optimization', href: '#smart-ai' },
      { label: 'Pattern Learning', href: '#pattern-ai' },
      { label: 'Charging Control', href: '#charging-ai' },
      { label: 'Energy Forecasting', href: '#forecasting' }
    ]
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    description: 'Data management and visualization',
    links: [
      { label: 'Database Setup', href: '#database' },
      { label: 'Dashboard Integration', href: '#dashboards' },
      { label: 'Data Export', href: '#export' },
      { label: 'Backup & Restore', href: '#backup' }
    ]
  },
  {
    icon: Zap,
    title: 'Integrations',
    description: 'Connect with your solar ecosystem',
    links: [
      { label: 'Home Assistant', href: '#homeassistant' },
      { label: 'Dynamic Pricing', href: '#pricing' },
      { label: 'Inverter Support', href: '#inverters' },
      { label: 'Notifications', href: '#notifications' }
    ]
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Best practices and security guidelines',
    links: [
      { label: 'Authentication', href: '#security-auth' },
      { label: 'SSL/TLS Setup', href: '#ssl' },
      { label: 'Network Security', href: '#network' },
      { label: 'Privacy Policy', href: '#privacy' }
    ]
  },
  {
    icon: Terminal,
    title: 'CLI Tools',
    description: 'Command-line utilities and scripts',
    links: [
      { label: 'CLI Reference', href: '#cli' },
      { label: 'Automation Scripts', href: '#scripts' },
      { label: 'Cron Jobs', href: '#cron' },
      { label: 'Monitoring', href: '#monitoring' }
    ]
  },
  {
    icon: Wrench,
    title: 'Advanced',
    description: 'Advanced configuration and customization',
    links: [
      { label: 'Docker Deployment', href: '#docker' },
      { label: 'Kubernetes', href: '#k8s' },
      { label: 'Custom Dashboards', href: '#dashboards' },
      { label: 'Plugin Development', href: '#plugins' }
    ]
  }
]

export default function Documentation() {
  return (
    <section id="documentation" className="section-padding bg-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Complete <span className="text-primary">Documentation</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Everything you need to master SolarAutopilot - from installation to advanced AI optimization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {docCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:border-primary/40 group"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-primary/10 rounded-lg p-3 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{category.title}</h3>
                  <p className="text-sm text-text-secondary">{category.description}</p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-primary transition-colors flex items-center space-x-2 group/link"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <a href="#api-docs" className="card hover:border-primary/40 text-center group">
            <Code className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-xl font-semibold mb-2">API Documentation</h3>
            <p className="text-text-secondary text-sm">Complete REST & WebSocket API reference</p>
          </a>
          
          <a href="#examples" className="card hover:border-primary/40 text-center group">
            <Terminal className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-xl font-semibold mb-2">Code Examples</h3>
            <p className="text-text-secondary text-sm">Ready-to-use code snippets and samples</p>
          </a>
          
          <a href="#community" className="card hover:border-primary/40 text-center group">
            <Book className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-xl font-semibold mb-2">Community Guides</h3>
            <p className="text-text-secondary text-sm">Tutorials and guides from the community</p>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
