'use client'

import { motion } from 'framer-motion'
import { Play, Clock, Users, Star, Download, ExternalLink } from 'lucide-react'

const tutorials = [
  {
    title: 'Quick Start Guide',
    duration: '5:32',
    rating: 4.9,
    videoId: 'I76HPteaZuE',
    startTime: 6,
    description: 'Get SolarAutopilot running in under 6 minutes. From download to first optimization.',
    topics: ['Installation', 'Configuration', 'First Run']
  },
  {
    title: 'AI Optimization Explained',
    duration: '8:15',
    rating: 4.8,
    videoId: 'I76HPteaZuE',
    startTime: 6,
    description: 'Deep dive into how the AI makes decisions and learns your energy patterns.',
    topics: ['AI Algorithm', 'Pattern Learning', 'Decision Making']
  },
  {
    title: 'Advanced Configuration',
    duration: '12:45',
    rating: 4.9,
    videoId: 'I76HPteaZuE',
    startTime: 6,
    description: 'Customize SolarAutopilot for complex setups with multiple inverters and batteries.',
    topics: ['Multi-Inverter', 'Custom Rules', 'API Integration']
  }
]

const guides = [
  {
    icon: '📱',
    title: 'Mobile Setup Guide',
    description: 'Configure SolarAutopilot remotely using your smartphone',
    link: '/docs/mobile-setup'
  },
  {
    icon: '🔧',
    title: 'Troubleshooting',
    description: 'Common issues and solutions for smooth operation',
    link: '/docs/troubleshooting'
  },
  {
    icon: '⚡',
    title: 'Performance Tuning',
    description: 'Optimize settings for maximum energy savings',
    link: '/docs/performance'
  },
  {
    icon: '🏠',
    title: 'Home Assistant Integration',
    description: 'Connect with your existing smart home setup',
    link: '/docs/home-assistant'
  }
]

export default function VideoTutorials() {
  return (
    <section id="tutorials" className="section-padding bg-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Learn with <span className="text-primary">Video Tutorials</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Step-by-step video guides to help you master SolarAutopilot. From basic setup to advanced optimization techniques.
          </p>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-dark-secondary rounded-2xl border border-gray-700 overflow-hidden max-w-4xl mx-auto">
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/I76HPteaZuE?start=6"
                title="SolarAutopilot Complete Setup Walkthrough"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Master SolarAutopilot Setup</h3>
              <p className="text-text-secondary mb-4">
                Complete walkthrough covering installation, configuration, and optimization. 
                Perfect for beginners and experienced users alike.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Installation', 'Configuration', 'AI Setup', 'Monitoring', 'Troubleshooting'].map((topic) => (
                  <span key={topic} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tutorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:scale-105 transition-transform duration-300 overflow-hidden"
            >
              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${tutorial.videoId}?start=${tutorial.startTime}`}
                  title={tutorial.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{tutorial.title}</h3>
              <p className="text-text-secondary text-sm mb-3">{tutorial.description}</p>
              
              <div className="flex items-center justify-end text-xs text-text-secondary mb-3">
                <span className="flex items-center">
                  <Star size={12} className="mr-1 text-yellow-500" />
                  {tutorial.rating}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {tutorial.topics.map((topic) => (
                  <span key={topic} className="bg-dark text-text-secondary px-2 py-1 rounded text-xs">
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Guides */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Quick Reference Guides</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((guide, index) => (
              <motion.a
                key={index}
                href={guide.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-secondary rounded-xl p-6 border border-gray-700 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{guide.icon}</div>
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {guide.title}
                </h4>
                <p className="text-text-secondary text-sm mb-3">{guide.description}</p>
                <div className="flex items-center text-primary text-sm">
                  <span>Read Guide</span>
                  <ExternalLink size={14} className="ml-1" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">Ready to Get Started?</h3>
            <p className="text-text-secondary mb-6">
              Download SolarAutopilot now and follow along with our quick start video. 
              You'll be optimizing in minutes!
            </p>
            <a href="#download" className="btn-primary flex items-center space-x-2 mx-auto">
              <Download size={20} />
              <span>Download & Start Tutorial</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}