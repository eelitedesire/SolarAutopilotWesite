'use client'

import { motion } from 'framer-motion'
import { Github, MessageCircle, Mail, BookOpen, Users, Heart, Star, GitFork } from 'lucide-react'

const communityChannels = [
  {
    icon: Github,
    title: 'GitHub',
    description: 'Source code, issues, and contributions',
    link: 'https://github.com/CARBONOZ-RENEWABLES/solarautopilot',
    stats: ['Open Source', 'MIT License', 'Active Development'],
    color: 'from-gray-600 to-gray-800'
  },
  {
    icon: MessageCircle,
    title: 'Discord Community',
    description: 'Chat with users and developers',
    link: '#discord',
    stats: ['Real-time Chat', 'Support', 'Discussions'],
    color: 'from-indigo-600 to-indigo-800'
  },
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Complete guides and tutorials',
    link: '#documentation',
    stats: ['User Guides', 'API Docs', 'Examples'],
    color: 'from-blue-600 to-blue-800'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Direct support from the team',
    link: 'mailto:support@carbonoz.com',
    stats: ['24-48h Response', 'Technical Help', 'Bug Reports'],
    color: 'from-green-600 to-green-800'
  }
]

const contributionWays = [
  {
    icon: Star,
    title: 'Star on GitHub',
    description: 'Show your support by starring the repository'
  },
  {
    icon: GitFork,
    title: 'Contribute Code',
    description: 'Submit pull requests and improve the project'
  },
  {
    icon: BookOpen,
    title: 'Write Documentation',
    description: 'Help improve guides and tutorials'
  },
  {
    icon: MessageCircle,
    title: 'Help Others',
    description: 'Answer questions in the community'
  },
  {
    icon: Heart,
    title: 'Sponsor',
    description: 'Support development through sponsorship'
  },
  {
    icon: Users,
    title: 'Share',
    description: 'Spread the word about SolarAutopilot'
  }
]

const resources = [
  {
    category: 'Learning',
    items: [
      { title: 'Getting Started Guide', link: '#install-guide' },
      { title: 'Video Tutorials', link: '#tutorials' },
      { title: 'API Documentation', link: '#api-docs' },
      { title: 'Best Practices', link: '#user-guide' }
    ]
  },
  {
    category: 'Community',
    items: [
      { title: 'GitHub Discussions', link: 'https://github.com/CARBONOZ-RENEWABLES/solarautopilot/discussions' },
      { title: 'Discord Server', link: '#discord' },
      { title: 'Community Guides', link: '#documentation' },
      { title: 'User Showcase', link: '#showcase' }
    ]
  },
  {
    category: 'Development',
    items: [
      { title: 'Contributing Guide', link: 'https://github.com/CARBONOZ-RENEWABLES/solarautopilot/blob/main/CONTRIBUTING.md' },
      { title: 'Code of Conduct', link: 'https://github.com/CARBONOZ-RENEWABLES/solarautopilot/blob/main/CODE_OF_CONDUCT.md' },
      { title: 'Roadmap', link: 'https://github.com/CARBONOZ-RENEWABLES/solarautopilot/projects' },
      { title: 'Release Notes', link: 'https://github.com/CARBONOZ-RENEWABLES/solarautopilot/releases' }
    ]
  },
  {
    category: 'Support',
    items: [
      { title: 'FAQ', link: '#faq' },
      { title: 'Troubleshooting', link: '#troubleshooting' },
      { title: 'Report Bug', link: 'https://github.com/CARBONOZ-RENEWABLES/solarautopilot/issues/new' },
      { title: 'Request Feature', link: 'https://github.com/CARBONOZ-RENEWABLES/solarautopilot/issues/new' }
    ]
  }
]

export default function Community() {
  return (
    <section id="community" className="section-padding bg-dark-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join the <span className="text-primary">Community</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Connect with users, get support, and contribute to the future of solar energy management
          </p>
        </motion.div>

        {/* Community Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {communityChannels.map((channel, index) => (
            <motion.a
              key={index}
              href={channel.link}
              target={channel.link.startsWith('http') ? '_blank' : '_self'}
              rel={channel.link.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:border-primary/40 group"
            >
              <div className={`bg-gradient-to-br ${channel.color} p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                <channel.icon className="text-white mx-auto" size={32} />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{channel.title}</h3>
              <p className="text-text-secondary text-sm mb-4">{channel.description}</p>
              
              <div className="space-y-2">
                {channel.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="flex items-center space-x-2 text-xs text-text-secondary">
                    <div className="w-1 h-1 bg-primary rounded-full" />
                    <span>{stat}</span>
                  </div>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contribution Ways */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Ways to <span className="text-primary">Contribute</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {contributionWays.map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:border-primary/40 group"
              >
                <way.icon className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="font-semibold mb-2 text-sm">{way.title}</h4>
                <p className="text-xs text-text-secondary">{way.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Community <span className="text-primary">Resources</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <h4 className="text-lg font-bold mb-4 text-primary">{resource.category}</h4>
                <ul className="space-y-2">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : '_self'}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-sm text-text-secondary hover:text-primary transition-colors flex items-center space-x-2 group/link"
                      >
                        <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        <span>{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card bg-primary/5 border-primary/20 text-center"
        >
          <Users className="text-primary mx-auto mb-6" size={48} />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Be Part of the <span className="text-primary">Movement</span>
          </h3>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Join thousands of users optimizing their solar systems with AI. Together, we're building 
            a sustainable future powered by intelligent energy management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/CARBONOZ-RENEWABLES/solarautopilot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center space-x-2"
            >
              <Github size={20} />
              <span>Star on GitHub</span>
            </a>
            <a
              href="#discord"
              className="btn-secondary inline-flex items-center justify-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Join Discord</span>
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-text-secondary">Open Source</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">MIT</div>
            <div className="text-text-secondary">License</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">Active</div>
            <div className="text-text-secondary">Development</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">Global</div>
            <div className="text-text-secondary">Community</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
