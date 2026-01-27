# SolarAutopilot Website - Production System

Advanced, production-ready marketing website with full CMS, real file hosting, and admin dashboard.

## ✨ Features

### 🎯 Core Features
- **Real File Hosting**: S3/R2 object storage for installer downloads
- **Admin CMS**: Full content management system with authentication
- **Blog System**: Create, edit, publish blog posts with Markdown
- **Changelog**: Version history management
- **Roadmap**: Visual product roadmap with status tracking
- **Contact Form**: Email notifications for inquiries
- **Community Page**: Social links and contribution info
- **About Page**: Dynamic content management

### 🔐 Security
- NextAuth.js authentication
- Bcrypt password hashing
- Protected admin routes
- SQL injection prevention (Prisma)
- XSS protection
- CSRF tokens

### 📦 Tech Stack
- **Frontend**: Next.js 14, React 18, TypeScript, TailwindCSS, Framer Motion
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Storage**: Cloudflare R2 / AWS S3
- **Auth**: NextAuth.js
- **Email**: Nodemailer (SMTP)

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- PostgreSQL database
- Cloudflare R2 or AWS S3 account

### Installation

```bash
# Clone repository
git clone <your-repo>
cd solarautopilot-website

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Edit .env.local with your credentials

# Generate Prisma client
npx prisma generate

# Push database schema
npx prisma db push

# Run development server
npm run dev
```

Visit http://localhost:3000

## 📋 Environment Setup

See `.env.local.example` for all required variables:

- `DATABASE_URL`: PostgreSQL connection string
- `STORAGE_*`: S3/R2 credentials
- `ADMIN_*`: Admin authentication
- `SMTP_*`: Email configuration
- `NEXTAUTH_*`: Authentication secrets

## 🎨 Admin Dashboard

Access: `/admin/login`

### Features
- **Downloads Management**: Upload installers, enable/disable, track downloads
- **Blog Management**: Create/edit posts, Markdown support, tags
- **Changelog**: Version entries with release dates
- **Roadmap**: Feature planning with status tracking
- **Pages**: Edit About page content
- **Contacts**: View form submissions

### Upload Flow
1. Admin uploads file via dashboard
2. File uploads to R2/S3
3. Public CDN URL generated
4. Download link appears on website
5. Users download directly from CDN

## 📄 Pages

### Public Pages
- `/` - Homepage with all sections
- `/blog` - Blog listing
- `/blog/[slug]` - Blog post detail
- `/about` - About page
- `/changelog` - Version history
- `/roadmap` - Product roadmap
- `/contact` - Contact form
- `/community` - Community links

### Admin Pages
- `/admin/login` - Admin login
- `/admin/dashboard` - CMS dashboard

## 🗄️ Database Schema

```prisma
- Download: Installer files
- BlogPost: Blog content
- Changelog: Version history
- Roadmap: Feature planning
- Page: Dynamic pages
- Setting: Site settings
- Contact: Form submissions
```

## 🔌 API Endpoints

### Public
- `GET /api/downloads` - List downloads
- `GET /api/blog` - List blog posts
- `GET /api/blog?slug=xxx` - Get post
- `GET /api/changelog` - List changelogs
- `GET /api/roadmap` - List roadmap
- `POST /api/contact` - Submit contact form
- `GET /api/pages?slug=xxx` - Get page

### Admin (Authenticated)
- `POST /api/downloads` - Upload file
- `PUT /api/downloads` - Update download
- `DELETE /api/downloads` - Delete download
- `POST /api/blog` - Create post
- `PUT /api/blog` - Update post
- `DELETE /api/blog` - Delete post
- `POST /api/changelog` - Create entry
- `POST /api/roadmap` - Create item
- `PUT /api/pages` - Update page

See `API.md` for full documentation.

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy

### Docker
```bash
docker-compose up -d
```

### VPS
```bash
npm run build
pm2 start npm --name "solarautopilot" -- start
```

See `SETUP.md` for detailed deployment instructions.

## 💰 Cost Estimate

- **Vercel**: Free (Hobby) or $20/mo (Pro)
- **Database**: Free (Vercel Postgres) or $5-20/mo
- **R2 Storage**: Free (10GB) or $0.015/GB
- **Domain**: $10-15/year
- **Email**: Free (Gmail) or $10/mo

**Total: $0-50/month**

## 🔧 Development

```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm start

# Database
npm run db:push      # Push schema
npm run db:studio    # Open Prisma Studio
npm run db:generate  # Generate client
```

## 📁 Project Structure

```
├── app/
│   ├── (pages)/          # Public pages
│   ├── admin/            # Admin dashboard
│   └── api/              # API routes
├── components/           # React components
├── lib/
│   ├── db/              # Database client
│   ├── storage/         # S3/R2 client
│   ├── email/           # Email service
│   └── auth/            # Auth config
├── prisma/
│   └── schema.prisma    # Database schema
└── public/              # Static assets
```

## 🎯 Key Differences from Original

### Before
- Static JSON files for content
- GitHub releases for downloads
- No authentication
- No database
- No admin panel
- Static export only

### After
- PostgreSQL database
- Real file hosting (R2/S3)
- Secure admin authentication
- Full CMS dashboard
- Dynamic content
- Blog, Changelog, Roadmap
- Contact form with email
- API routes
- Production-ready

## 🔒 Security Best Practices

1. Use strong admin password
2. Enable 2FA on hosting platform
3. Use environment variables
4. Keep dependencies updated
5. Add rate limiting
6. Enable HTTPS
7. Regular backups
8. Monitor error logs

## 📊 Monitoring

Recommended tools:
- Vercel Analytics
- Sentry (error tracking)
- Uptime monitoring
- Database metrics

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## 📝 License

MIT License - Copyright (c) 2024 CARBONOZ

## 🆘 Support

- Documentation: `SETUP.md`, `API.md`
- Issues: GitHub Issues
- Community: `/community`

---

Built with ❤️ for the solar energy community
