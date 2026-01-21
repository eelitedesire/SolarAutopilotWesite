'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Do I need Home Assistant to use SolarAutopilot?',
    answer: 'No! SolarAutopilot is available as a standalone desktop application for Windows, macOS, and Linux, as well as a Docker container. While it includes a dedicated Home Assistant add-on, it works perfectly fine on its own with direct connections to your solar system.'
  },
  {
    question: 'What platforms does SolarAutopilot support?',
    answer: 'SolarAutopilot runs on Windows 10+, macOS 10.13+, Linux (Ubuntu 18.04+), and includes a dedicated Home Assistant add-on plus Docker containers. Choose the installation method that works best for your setup.'
  },
  {
    question: 'What solar systems are supported?',
    answer: 'SolarAutopilot supports any solar system that provides data connections or works with compatible monitoring solutions. This includes most major inverter brands like Fronius, SolarEdge, Huawei, Growatt, Goodwe, and many others. The system auto-detects your inverter type and configuration.'
  },
  {
    question: 'Is my data sent to the cloud?',
    answer: 'Yes, your energy data is securely transmitted to our CARBONOZ data center at login.carbonoz.com for AI processing, analytics, and CO2 tracking. All data is encrypted in transit and stored securely to provide you with advanced insights and optimization features.'
  },
  {
    question: 'Can I use it commercially?',
    answer: 'Yes! SolarAutopilot is a CARBONOZ product that can be downloaded and used freely for both personal and commercial purposes. You can use it to optimize your solar energy systems in residential or business environments.'
  },
  {
    question: "What's the power consumption?",
    answer: 'SolarAutopilot is extremely lightweight, typically consuming less than 50MB of RAM and minimal CPU resources. On a Raspberry Pi 4, it uses less than 2W of power - negligible compared to your solar system output.'
  },
  {
    question: 'Does it work offline?',
    answer: 'Yes, for basic optimization. SolarAutopilot can optimize based on your historical patterns and battery state without internet. However, dynamic pricing features require internet access to fetch real-time electricity prices from supported providers.'
  },
  {
    question: 'How do I get the desktop app?',
    answer: 'Visit our GitHub Actions page and download the latest "Universal Builds" workflow. Choose the artifact for your platform (windows-installers, macos-universal, linux-x64, or linux-arm64-rpi). All installers include dependencies and are ready to run.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Everything you need to know about SolarAutopilot. Can't find what you're looking for? 
            Ask our community on Discord.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="bg-dark-secondary rounded-xl border border-gray-700 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-dark/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={20} className="text-primary" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-text-secondary leading-relaxed border-t border-gray-700 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">Still have questions?</h3>
            <p className="text-text-secondary mb-6">
              Join our active community on Discord or GitHub Discussions. 
              Our community and maintainers are happy to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/eelitedesire/SolarAutopilotApp/discussions" target="_blank" rel="noopener noreferrer" className="btn-primary">GitHub Discussions</a>
              <a href="https://github.com/eelitedesire/SolarAutopilotApp/issues" target="_blank" rel="noopener noreferrer" className="btn-secondary">Report Issues</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}