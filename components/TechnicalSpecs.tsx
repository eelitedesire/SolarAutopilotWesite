'use client'

import { motion } from 'framer-motion'
import { Server, Database, Cpu, Zap, Shield, Globe, HardDrive, Network } from 'lucide-react'

const techStack = [
  {
    category: 'Backend',
    icon: Server,
    technologies: [
      { name: 'Node.js', version: '14+', description: 'Runtime environment' },
      { name: 'Express.js', version: '4.21+', description: 'Web framework' },
      { name: 'MQTT', version: '4.2+', description: 'IoT messaging' },
      { name: 'WebSocket', version: '8.2+', description: 'Real-time communication' }
    ]
  },
  {
    category: 'Database',
    icon: Database,
    technologies: [
      { name: 'InfluxDB', version: '2.x', description: 'Time-series data' },
      { name: 'MongoDB', version: 'Optional', description: 'Configuration storage' },
      { name: 'Redis', version: 'Optional', description: 'Caching layer' }
    ]
  },
  {
    category: 'Frontend',
    icon: Globe,
    technologies: [
      { name: 'React', version: '18+', description: 'UI framework' },
      { name: 'Vite', version: '5+', description: 'Build tool' },
      { name: 'TailwindCSS', version: '3+', description: 'Styling' },
      { name: 'Chart.js', version: 'Latest', description: 'Data visualization' }
    ]
  },
  {
    category: 'AI/ML',
    icon: Cpu,
    technologies: [
      { name: 'TensorFlow.js', version: 'Optional', description: 'Neural networks' },
      { name: 'Custom ML', version: 'Built-in', description: 'Pattern recognition' },
      { name: 'DQN', version: 'Custom', description: 'Reinforcement learning' },
      { name: 'K-means', version: 'Built-in', description: 'Clustering' }
    ]
  }
]

const systemRequirements = [
  {
    platform: 'Minimum',
    specs: [
      { label: 'CPU', value: '2 cores @ 1.5 GHz' },
      { label: 'RAM', value: '512 MB' },
      { label: 'Storage', value: '2 GB' },
      { label: 'Network', value: '10 Mbps' }
    ]
  },
  {
    platform: 'Recommended',
    specs: [
      { label: 'CPU', value: '4 cores @ 2.0 GHz' },
      { label: 'RAM', value: '1 GB' },
      { label: 'Storage', value: '10 GB SSD' },
      { label: 'Network', value: '100 Mbps' }
    ]
  },
  {
    platform: 'Optimal',
    specs: [
      { label: 'CPU', value: '4+ cores @ 2.5 GHz' },
      { label: 'RAM', value: '2 GB+' },
      { label: 'Storage', value: '20 GB SSD' },
      { label: 'Network', value: 'Gigabit' }
    ]
  }
]

const supportedInverters = [
  {
    brand: 'Deye / Sunsynk',
    models: 'All hybrid models',
    protocol: 'Modbus TCP/RTU',
    status: 'Full Support'
  },
  {
    brand: 'Voltronic / Axpert',
    models: 'MPP Solar series',
    protocol: 'Serial/USB',
    status: 'Full Support'
  },
  {
    brand: 'Growatt',
    models: 'SPH/MIN series',
    protocol: 'Modbus TCP',
    status: 'Full Support'
  },
  {
    brand: 'SMA',
    models: 'Sunny Boy Storage',
    protocol: 'Modbus TCP',
    status: 'Beta'
  },
  {
    brand: 'Fronius',
    models: 'Symo Hybrid',
    protocol: 'Solar API',
    status: 'Planned'
  },
  {
    brand: 'Huawei',
    models: 'LUNA series',
    protocol: 'Modbus TCP',
    status: 'Planned'
  }
]

const architecture = [
  {
    layer: 'Data Collection',
    components: ['MQTT Broker', 'Modbus Gateway', 'Tibber API', 'Sensor Network'],
    icon: Network
  },
  {
    layer: 'Data Storage',
    components: ['InfluxDB Time-Series', 'Configuration Store', 'Historical Archive'],
    icon: HardDrive
  },
  {
    layer: 'AI Processing',
    components: ['Solar Predictor', 'Load Forecaster', 'Charging Optimizer', 'Pattern Detector'],
    icon: Cpu
  },
  {
    layer: 'Control Layer',
    components: ['Inverter Control', 'Battery Management', 'Grid Interface', 'Safety Monitor'],
    icon: Zap
  },
  {
    layer: 'Presentation',
    components: ['Web Dashboard', 'REST API', 'WebSocket Server', 'Mobile Interface'],
    icon: Globe
  },
  {
    layer: 'Security',
    components: ['Authentication', 'SSL/TLS', 'Rate Limiting', 'Input Validation'],
    icon: Shield
  }
]

export default function TechnicalSpecs() {
  return (
    <section id="technical-specs" className="section-padding bg-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Technical <span className="text-primary">Specifications</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Built on modern, scalable architecture with enterprise-grade reliability
          </p>
        </motion.div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Technology <span className="text-primary">Stack</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <stack.icon className="text-primary" size={24} />
                  </div>
                  <h4 className="text-xl font-bold">{stack.category}</h4>
                </div>
                
                <ul className="space-y-3">
                  {stack.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="border-l-2 border-primary/30 pl-3">
                      <div className="font-semibold text-sm">{tech.name}</div>
                      <div className="text-xs text-text-secondary">{tech.description}</div>
                      <div className="text-xs text-primary mt-1">{tech.version}</div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* System Requirements */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            System <span className="text-primary">Requirements</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {systemRequirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card ${index === 1 ? 'border-primary/40' : ''}`}
              >
                <h4 className="text-xl font-bold mb-6 text-center">{req.platform}</h4>
                <ul className="space-y-4">
                  {req.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="flex justify-between items-center">
                      <span className="text-text-secondary">{spec.label}</span>
                      <span className="font-semibold text-primary">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Supported Inverters */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Supported <span className="text-primary">Inverters</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportedInverters.map((inverter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold mb-1">{inverter.brand}</h4>
                    <p className="text-sm text-text-secondary">{inverter.models}</p>
                  </div>
                  <span className={`px-3 py-1 rounded text-xs font-bold ${
                    inverter.status === 'Full Support' ? 'bg-green-500/20 text-green-400' :
                    inverter.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {inverter.status}
                  </span>
                </div>
                <div className="text-sm text-text-secondary">
                  Protocol: <span className="text-primary">{inverter.protocol}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* System Architecture */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            System <span className="text-primary">Architecture</span>
          </h3>
          
          <div className="space-y-4">
            {architecture.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:border-primary/40"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <layer.icon className="text-primary" size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-2">{layer.layer}</h4>
                    <div className="flex flex-wrap gap-2">
                      {layer.components.map((component, compIndex) => (
                        <span
                          key={compIndex}
                          className="px-3 py-1 bg-dark-secondary rounded-full text-sm text-text-secondary border border-gray-700"
                        >
                          {component}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ports & Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 card bg-primary/5 border-primary/20"
        >
          <h3 className="text-xl font-bold mb-6">Network Ports & Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-primary font-semibold mb-2">Port 6789</div>
              <div className="text-text-secondary">Main web interface and API</div>
            </div>
            <div>
              <div className="text-sm text-primary font-semibold mb-2">Port 8086</div>
              <div className="text-text-secondary">InfluxDB time-series database</div>
            </div>
            <div>
              <div className="text-sm text-primary font-semibold mb-2">Port 8000</div>
              <div className="text-text-secondary">WebSocket real-time updates</div>
            </div>
            <div>
              <div className="text-sm text-primary font-semibold mb-2">Port 1883</div>
              <div className="text-text-secondary">MQTT broker (optional)</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
