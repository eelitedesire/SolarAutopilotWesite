'use client'

import { motion } from 'framer-motion'
import { Download, Monitor, Smartphone, HardDrive, Container, Apple } from 'lucide-react'

const platforms = [
  {
    icon: Monitor,
    name: 'Windows',
    version: '1.0.0',
    size: '~250 MB',
    requirements: 'Windows 10+',
    downloads: [
      { label: 'Download .exe', type: 'exe', url: 'https://github.com/solarautopilot/releases/download/v1.0.0/solarautopilot-windows.exe' },
      { label: 'Download .msi', type: 'msi', url: 'https://github.com/solarautopilot/releases/download/v1.0.0/solarautopilot-windows.msi' }
    ]
  },
  {
    icon: Smartphone,
    name: 'Linux',
    version: '1.0.0',
    size: 'Various',
    requirements: 'Ubuntu 20.04+, Debian 11+',
    downloads: [
      { label: 'Download .deb', type: 'deb', url: 'https://github.com/solarautopilot/releases/download/v1.0.0/solarautopilot-linux.deb' },
      { label: 'Download .rpm', type: 'rpm', url: 'https://github.com/solarautopilot/releases/download/v1.0.0/solarautopilot-linux.rpm' },
      { label: 'Download AppImage', type: 'appimage', url: 'https://github.com/solarautopilot/releases/download/v1.0.0/solarautopilot-linux.AppImage' }
    ]
  },
  {
    icon: Apple,
    name: 'macOS',
    version: '1.0.0',
    size: '~200 MB',
    requirements: 'macOS 11+',
    downloads: [
      { label: 'Download .dmg', type: 'dmg', url: 'https://github.com/solarautopilot/releases/download/v1.0.0/solarautopilot-macos.dmg' },
      { label: 'Download .pkg', type: 'pkg', url: 'https://github.com/solarautopilot/releases/download/v1.0.0/solarautopilot-macos.pkg' }
    ]
  },
  {
    icon: HardDrive,
    name: 'Raspberry Pi',
    version: '1.0.0 (ARM)',
    size: '~180 MB',
    requirements: 'Pi 3/4/5',
    downloads: [
      { label: 'Download ARM', type: 'arm', url: 'https://github.com/solarautopilot/releases/download/v1.0.0/solarautopilot-arm64.tar.gz' },
      { label: 'Quick Install', type: 'script', url: 'https://get.solarautopilot.com/pi' }
    ]
  },
  {
    icon: Container,
    name: 'Docker',
    version: 'Latest',
    size: '~200 MB',
    requirements: 'Docker 20.10+',
    downloads: [
      { label: 'Docker Hub', type: 'docker', url: 'https://hub.docker.com/r/solarautopilot/app' },
      { label: 'View Docs', type: 'docs', url: 'https://docs.solarautopilot.com/docker' }
    ]
  }
]

const installCommands = [
  {
    title: 'Quick Install (Linux/Mac)',
    command: 'curl -fsSL https://get.solarautopilot.com | sh'
  },
  {
    title: 'Docker',
    command: 'docker run -d --name solarautopilot solarautopilot/app'
  },
  {
    title: 'Docker Compose',
    command: 'docker-compose up -d'
  }
]

export default function DownloadSection() {
  return (
    <section id="download" className="section-padding bg-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Download <span className="text-primary">SolarAutopilot</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Choose your platform and start optimizing in minutes. All downloads are free, open source, and require no registration.
          </p>
        </motion.div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:scale-105 transition-transform duration-300"
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <platform.icon size={32} className="text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                
                <div className="space-y-1 mb-6 text-sm text-text-secondary">
                  <div>Version: {platform.version}</div>
                  <div>Size: {platform.size}</div>
                  <div>Requirements: {platform.requirements}</div>
                </div>
                
                <div className="space-y-2">
                  {platform.downloads.map((download, downloadIndex) => (
                    <a
                      key={downloadIndex}
                      href={download.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 block text-center ${
                        downloadIndex === 0
                          ? 'bg-primary text-dark hover:bg-primary-dark'
                          : 'border border-primary text-primary hover:bg-primary hover:text-dark'
                      }`}
                    >
                      {download.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Installation Commands */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-dark-secondary rounded-xl p-8 border border-gray-700"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Quick Installation</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {installCommands.map((cmd, index) => (
              <div key={index} className="bg-dark rounded-lg p-4 border border-gray-600">
                <div className="text-sm text-primary font-medium mb-2">{cmd.title}</div>
                <div className="bg-gray-900 rounded p-3 font-mono text-sm text-text-secondary overflow-x-auto">
                  <code>{cmd.command}</code>
                </div>
                <button className="mt-3 text-xs text-primary hover:text-primary-dark transition-colors">
                  Copy to clipboard
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-text-secondary">Downloads</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-text-secondary">Countries</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">1.2M+</div>
            <div className="text-text-secondary">kWh Optimized</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">★ 4.9</div>
            <div className="text-text-secondary">GitHub Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}