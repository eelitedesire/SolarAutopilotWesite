# SolarAutopilot Website

Advanced, Grafana-style marketing website for CARBONOZ SolarAutopilot - AI-powered solar energy management system.

## 🚀 Features

### New Advanced Sections

1. **AI Features Showcase** - Detailed explanation of the AI system
   - Solar generation forecasting
   - Load prediction
   - Intelligent charging strategy
   - Pattern detection
   - Learning phases visualization

2. **Technical Specifications** - Complete technical documentation
   - Technology stack (Backend, Database, Frontend, AI/ML)
   - System requirements (Minimum, Recommended, Optimal)
   - Supported inverters with status
   - System architecture layers
   - Network ports and services

3. **Documentation Hub** - Categorized documentation
   - Getting Started guides
   - API Reference
   - AI System documentation
   - Data & Analytics
   - Integrations
   - Security
   - CLI Tools
   - Advanced topics

4. **User Guide** - Step-by-step instructions
   - Installation and setup
   - System configuration
   - Tibber integration
   - AI system setup
   - Data management
   - Notifications & alerts
   - Optimization strategies
   - Security & backup

5. **Installation Guide** - Platform-specific instructions
   - Home Assistant add-on
   - Docker deployment
   - Desktop applications
   - Manual installation

6. **API Documentation** - Complete API reference
   - REST API endpoints
   - MQTT topics
   - WebSocket connections
   - Authentication

7. **Enhanced Download Section** - Multi-platform downloads
   - Windows (x64, x86)
   - macOS (Universal)
   - Linux (deb, AppImage)
   - Home Assistant add-on
   - Docker images

## 🛠️ Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Design Philosophy

The website follows Grafana's design principles:

- **Dark Theme**: Professional dark background with golden accents
- **Data-Focused**: Emphasis on metrics, charts, and technical details
- **Clean Layout**: Spacious, organized sections with clear hierarchy
- **Interactive**: Smooth animations and hover effects
- **Technical**: Detailed specifications and documentation
- **Developer-Friendly**: Complete API docs and code examples

## 📱 Sections Overview

### Hero Section
- Eye-catching headline with AI emphasis
- Clear value proposition (12.7% cost savings)
- Dual CTAs (Download + Demo)
- Trust indicators (Open Source, No Subscription, Privacy)
- Interactive dashboard preview

### Features Showcase
- Real-time dashboard capabilities
- AI optimization engine
- Smart automation
- Multi-platform support

### AI Features
- Detailed AI system explanation
- Performance metrics
- Learning phases
- Academic foundation

### Technical Specs
- Complete technology stack
- System requirements
- Supported inverters
- Architecture overview

### Documentation
- 8 categorized documentation sections
- Quick links to API docs and examples
- Community guides

### User Guide
- 8 comprehensive guide sections
- Step-by-step instructions
- Pro tips and best practices

### Installation Guide
- 4 installation methods
- Platform-specific commands
- Next steps checklist

### Download Section
- 5 platform options
- Version information
- Quick install commands
- Download statistics

### API Documentation
- REST API endpoints
- MQTT topics
- WebSocket examples
- Authentication guide

## 🎯 Key Highlights

### Based on Real App Features
- ✅ AI-powered optimization (12.7% cost savings)
- ✅ Home Assistant integration
- ✅ Tibber dynamic pricing
- ✅ InfluxDB + Grafana
- ✅ MQTT support
- ✅ Multi-inverter support (Deye, Sunsynk, Growatt)
- ✅ Desktop apps (Windows, macOS, Linux)
- ✅ Docker deployment
- ✅ Academic research-backed

### Advanced Features
- 🧠 Solar forecasting without weather APIs
- 📊 Pattern detection and clustering
- 🔋 Battery health optimization
- 💰 Dynamic pricing optimization
- 📱 Telegram notifications
- 🔒 Security and authentication
- 📈 Real-time monitoring
- 🤖 Reinforcement learning (DQN)

## 🔗 Important Links

- GitHub: https://github.com/CARBONOZ-RENEWABLES/solarautopilot
- CARBONOZ: https://carbonoz.com
- Home Assistant: Add-on store

## 📝 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: '#DEAF0B',        // Golden yellow
  'primary-dark': '#B89209',
  dark: '#1A1A1A',           // Dark background
  'dark-secondary': '#2D2D2D',
}
```

### Content
All content is in component files under `/components`:
- Hero.tsx - Main headline
- FeaturesShowcase.tsx - Feature cards
- AIFeatures.tsx - AI system details
- TechnicalSpecs.tsx - Technical information
- Documentation.tsx - Doc categories
- UserGuide.tsx - Step-by-step guides
- InstallationGuide.tsx - Installation steps
- DownloadSection.tsx - Download links
- APIDocumentation.tsx - API reference

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Docker
```bash
docker build -t solarautopilot-website .
docker run -p 3000:3000 solarautopilot-website
```

### Static Export
```bash
npm run build
# Deploy the 'out' directory to any static host
```

## 📄 License

MIT License - Copyright (c) 2024 CARBONOZ buyAfraction Limited

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For support, visit the GitHub repository or contact CARBONOZ support.

---

Built with ❤️ by CARBONOZ for the solar energy community
