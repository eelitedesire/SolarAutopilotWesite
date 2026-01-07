'use client'

import { Github, MessageCircle, Twitter, Youtube, Mail, ExternalLink } from 'lucide-react'

const footerSections = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#features' },
      { name: 'Download', href: '#download' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Roadmap', href: '/roadmap' },
      { name: 'Changelog', href: '/changelog' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Getting Started', href: '/docs/getting-started' },
      { name: 'API Docs', href: '/docs/api' },
      { name: 'GitHub', href: 'https://github.com/solarautopilot', external: true },
      { name: 'Community Forum', href: '/community' },
      { name: 'Blog', href: '/blog' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Security', href: '/security' },
      { name: 'Contact', href: '/contact' }
    ]
  }
]

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/solarautopilot' },
  { name: 'Discord', icon: MessageCircle, href: 'https://discord.gg/solarautopilot' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/solarautopilot' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@solarautopilot' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@solarautopilot.com' }
]

export default function Footer() {
  return (
    <footer className="bg-dark-secondary border-t border-gray-800">
      <div className="container-custom py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-dark font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">SolarAutopilot</span>
            </div>
            <p className="text-text-secondary mb-6 leading-relaxed max-w-md">
              Intelligent solar energy management powered by AI. Save money, reduce your carbon footprint, 
              and optimize your solar system with academic-backed algorithms.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-dark rounded-lg flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary/10 transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4 text-primary">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-text-secondary hover:text-primary transition-colors duration-200 flex items-center"
                    >
                      {link.name}
                      {link.external && <ExternalLink size={12} className="ml-1" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-text-secondary text-sm">
              © 2024 SolarAutopilot. Open Source MIT License.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-text-secondary">All systems operational</span>
              </div>
              
              <div className="text-text-secondary">
                Made with ❤️ by the community
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}