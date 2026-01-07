# SolarAutopilot Marketing Website

A modern, professional marketing website for SolarAutopilot - an AI-powered solar energy management system.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by Tailscale, Grafana, and InfluxDB
- **Performance Optimized**: Built with Next.js 14 and optimized for Lighthouse scores 95+
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Accessibility**: WCAG 2.1 Level AA compliant
- **SEO Optimized**: Complete meta tags, structured data, and sitemap
- **Smooth Animations**: Framer Motion animations for enhanced user experience

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Inter font
- **Language**: TypeScript

## 🎨 Brand Colors

```css
--primary: #DEAF0B;        /* Golden Yellow - Main brand color */
--primary-dark: #B89209;   /* Darker shade for hover states */
--primary-light: #F4E5A1;  /* Light shade for backgrounds */
--dark: #1A1A1A;           /* Dark backgrounds */
--dark-secondary: #2D2D2D; /* Secondary dark */
--text-primary: #FFFFFF;   /* White text on dark */
--text-secondary: #A0A0A0; /* Gray text */
--success: #10B981;        /* Green for positive metrics */
--accent-blue: #3B82F6;    /* Blue accents */
```

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/solarautopilot/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Build for Production

```bash
npm run build
npm start
```

## 🐳 Docker Deployment

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine AS base
   
   FROM base AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app
   COPY package.json package-lock.json* ./
   RUN npm ci
   
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build
   
   FROM base AS runner
   WORKDIR /app
   ENV NODE_ENV production
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs
   
   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
   
   USER nextjs
   EXPOSE 3000
   ENV PORT 3000
   CMD ["node", "server.js"]
   ```

2. **Build and run**
   ```bash
   docker build -t solarautopilot-website .
   docker run -p 3000:3000 solarautopilot-website
   ```

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main homepage
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section with CTA
│   ├── Benefits.tsx         # Key benefits grid
│   ├── HowItWorks.tsx       # Process timeline
│   ├── DownloadSection.tsx  # Platform downloads
│   ├── ComparisonTable.tsx  # Feature comparison
│   ├── PricingSection.tsx   # Free pricing info
│   ├── FAQ.tsx              # Frequently asked questions
│   ├── FinalCTA.tsx         # Final call-to-action
│   └── Footer.tsx           # Site footer
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## 🎯 Key Sections

1. **Hero Section**: Compelling headline with AI optimization focus
2. **Benefits**: 6 key benefits with icons and descriptions
3. **How It Works**: 4-step process timeline
4. **Download**: Platform-specific download options
5. **Comparison**: Feature comparison table
6. **Pricing**: Free and open source messaging
7. **FAQ**: Common questions and answers
8. **Final CTA**: Last chance conversion
9. **Footer**: Links and social media

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### Static Export
```bash
# Add to next.config.js:
# output: 'export'
npm run build
# Deploy the 'out' folder
```

## 📊 Performance Targets

- **Lighthouse Performance**: 95+
- **First Contentful Paint**: < 1 second
- **Time to Interactive**: < 3 seconds
- **Page Load Time**: < 2 seconds on 3G

## 🎨 Design System

### Typography
- **Headings**: Inter font, bold weights
- **Body**: Inter font, regular weight
- **Code**: Monospace font

### Spacing
- **Section Padding**: 4rem (64px) on desktop, 2rem (32px) on mobile
- **Component Spacing**: 1.5rem (24px) between elements
- **Grid Gaps**: 2rem (32px) on desktop, 1rem (16px) on mobile

### Animations
- **Duration**: 0.2s for micro-interactions, 0.5s for page transitions
- **Easing**: ease-out for entrances, ease-in for exits
- **Hover Effects**: Scale 1.05, color transitions

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#DEAF0B',
      // ... other colors
    }
  }
}
```

### Content
All content is in the component files. Key areas to customize:
- Headlines in `Hero.tsx`
- Benefits in `Benefits.tsx`
- Download links in `DownloadSection.tsx`
- FAQ content in `FAQ.tsx`

### Animations
Modify Framer Motion animations in individual components or add new ones using the `motion` components.

## 📝 SEO Optimization

The website includes:
- Complete meta tags in `layout.tsx`
- Open Graph and Twitter Card support
- Structured data for rich snippets
- Semantic HTML structure
- Alt text for images
- Proper heading hierarchy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🆘 Support

- **Documentation**: [docs.solarautopilot.com](https://docs.solarautopilot.com)
- **Community**: [Discord](https://discord.gg/solarautopilot)
- **Issues**: [GitHub Issues](https://github.com/solarautopilot/website/issues)
- **Email**: hello@solarautopilot.com# SolarAutopilotWesite
