'use client'

import { useState } from 'react'
import { Menu, X, Github, Download } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-dark/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="https://carbonoz.com/assets/images/image04.jpg?v=baf9c51a" 
              alt="SolarAutopilot Logo" 
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="text-xl font-bold">SolarAutopilot</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-text-secondary hover:text-primary transition-colors">Features</a>
            <a href="#ai-features" className="text-text-secondary hover:text-primary transition-colors">AI System</a>
            <a href="#documentation" className="text-text-secondary hover:text-primary transition-colors">Docs</a>
            <a href="#download" className="text-text-secondary hover:text-primary transition-colors">Download</a>
            <a href="#api-docs" className="text-text-secondary hover:text-primary transition-colors">API</a>
            <a href="https://github.com/CARBONOZ-RENEWABLES/solarautopilot" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors flex items-center space-x-1">
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#download" className="btn-primary flex items-center space-x-2">
              <Download size={16} />
              <span>Download</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-text-secondary hover:text-primary transition-colors">Features</a>
              <a href="#ai-features" className="text-text-secondary hover:text-primary transition-colors">AI System</a>
              <a href="#documentation" className="text-text-secondary hover:text-primary transition-colors">Docs</a>
              <a href="#download" className="text-text-secondary hover:text-primary transition-colors">Download</a>
              <a href="#api-docs" className="text-text-secondary hover:text-primary transition-colors">API</a>
              <a href="https://github.com/CARBONOZ-RENEWABLES/solarautopilot" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors flex items-center space-x-1">
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a href="#download" className="btn-primary flex items-center justify-center space-x-2 mt-4">
                <Download size={16} />
                <span>Download</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}