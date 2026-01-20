# Quick Start Guide - SolarAutopilot Website

## 🚀 Get Started in 5 Minutes

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Navigate to website directory
cd SolarAutopilotWesite

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
SolarAutopilotWesite/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page (imports all components)
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── FeaturesShowcase.tsx # Feature highlights
│   ├── AIFeatures.tsx       # AI system details
│   ├── TechnicalSpecs.tsx   # Technical specifications
│   ├── Documentation.tsx    # Documentation hub
│   ├── UserGuide.tsx        # User guide
│   ├── InstallationGuide.tsx # Installation instructions
│   ├── DownloadSection.tsx  # Download links
│   ├── APIDocumentation.tsx # API reference
│   ├── Benefits.tsx         # Benefits section
│   ├── HowItWorks.tsx       # How it works
│   ├── VideoTutorials.tsx   # Video tutorials
│   ├── ComparisonTable.tsx  # Comparison table
│   ├── PricingSection.tsx   # Pricing
│   ├── FAQ.tsx              # FAQ section
│   ├── FinalCTA.tsx         # Final call-to-action
│   ├── Footer.tsx           # Footer
│   └── InteractiveDashboard.tsx # Dashboard preview
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies
└── tsconfig.json            # TypeScript configuration
```

## 🎨 Key Components

### 1. Hero Section
The main landing section with headline, CTA buttons, and dashboard preview.

**Location**: `components/Hero.tsx`

**Key Features**:
- Animated background with particles
- Dual CTAs (Download + Demo)
- Trust indicators
- Interactive dashboard preview

### 2. AI Features
Comprehensive showcase of the AI system capabilities.

**Location**: `components/AIFeatures.tsx`

**Sections**:
- Solar forecasting
- Load prediction
- Charging optimization
- Pattern detection
- Performance metrics
- Learning phases
- Academic foundation

### 3. Technical Specs
Complete technical documentation and specifications.

**Location**: `components/TechnicalSpecs.tsx`

**Includes**:
- Technology stack (Backend, Database, Frontend, AI/ML)
- System requirements
- Supported inverters
- System architecture
- Network ports

### 4. Documentation Hub
Categorized documentation with 8 main sections.

**Location**: `components/Documentation.tsx`

**Categories**:
- Getting Started
- API Reference
- AI System
- Data & Analytics
- Integrations
- Security
- CLI Tools
- Advanced

### 5. User Guide
Step-by-step instructions for all aspects of the system.

**Location**: `components/UserGuide.tsx`

**Guides**:
- Getting Started
- System Configuration
- Tibber Integration
- AI System Setup
- Data Management
- Notifications & Alerts
- Optimization Strategies
- Security & Backup

### 6. Installation Guide
Platform-specific installation instructions.

**Location**: `components/InstallationGuide.tsx`

**Methods**:
- Home Assistant add-on
- Docker deployment
- Desktop applications
- Manual installation

### 7. API Documentation
Complete API reference with examples.

**Location**: `components/APIDocumentation.tsx`

**Tabs**:
- REST API endpoints
- MQTT topics
- WebSocket connections

### 8. Download Section
Multi-platform download options.

**Location**: `components/DownloadSection.tsx`

**Platforms**:
- Windows (x64, x86)
- macOS (Universal)
- Linux (deb, AppImage)
- Home Assistant
- Docker

## 🎯 Customization Guide

### Update Download Links

Edit `components/DownloadSection.tsx`:

```typescript
const platforms = [
  {
    icon: Monitor,
    name: 'Windows',
    downloads: [
      { 
        label: 'Download .exe (x64)', 
        url: 'YOUR_DOWNLOAD_URL_HERE' 
      }
    ]
  }
]
```

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#DEAF0B',        // Your primary color
  'primary-dark': '#B89209', // Darker shade
  dark: '#1A1A1A',           // Background
}
```

### Update Content

Each component has its own content arrays. For example, in `AIFeatures.tsx`:

```typescript
const aiFeatures = [
  {
    icon: Brain,
    title: 'Your Feature Title',
    description: 'Your description',
    features: ['Feature 1', 'Feature 2']
  }
]
```

### Add New Section

1. Create new component in `components/YourSection.tsx`
2. Import in `app/page.tsx`
3. Add to the component list

```typescript
import YourSection from '@/components/YourSection'

export default function Home() {
  return (
    <main>
      {/* ... other components ... */}
      <YourSection />
    </main>
  )
}
```

## 🔧 Development Tips

### Hot Reload
Changes to components automatically reload in the browser.

### TypeScript
All components use TypeScript for type safety.

### Animations
Using Framer Motion for smooth animations:

```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  Your content
</motion.div>
```

### Responsive Design
All components are mobile-responsive using Tailwind's responsive classes:

```typescript
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
```

## 📦 Build & Deploy

### Production Build

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel deploy
```

### Deploy to Netlify

```bash
npm run build
# Upload the .next folder to Netlify
```

### Docker Deployment

```bash
docker build -t solarautopilot-website .
docker run -p 3000:3000 solarautopilot-website
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### Build Errors
```bash
# Check TypeScript errors
npm run lint

# Fix automatically
npm run lint -- --fix
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 🎉 You're Ready!

The website is now fully set up with:
- ✅ 15+ comprehensive sections
- ✅ AI features showcase
- ✅ Complete documentation
- ✅ Installation guides
- ✅ API documentation
- ✅ Download section
- ✅ User guides
- ✅ Technical specs
- ✅ Responsive design
- ✅ Smooth animations

Start customizing and make it your own! 🚀
