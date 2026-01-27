# SolarAutopilot Website - Production Setup Guide

## Overview

This is a complete production-ready system with:
- Real file hosting via S3/R2
- Full admin CMS with database
- Blog, Changelog, Roadmap, Contact, Community pages
- Secure authentication
- Email notifications

## Architecture

```
Frontend (Next.js 14)
├── Public Pages (/, /blog, /about, /changelog, /roadmap, /contact, /community)
├── Admin Dashboard (/admin/dashboard)
└── API Routes (/api/*)

Backend Services
├── PostgreSQL Database (Prisma ORM)
├── Object Storage (Cloudflare R2 / AWS S3)
├── Email Service (SMTP)
└── Authentication (NextAuth.js)
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Database

**Option A: Local PostgreSQL**
```bash
# Install PostgreSQL
brew install postgresql  # macOS
# or use Docker
docker run --name postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres

# Create database
createdb solarautopilot
```

**Option B: Cloud Database (Recommended)**
- Vercel Postgres
- Supabase
- Railway
- Neon

Update `.env.local`:
```
DATABASE_URL="postgresql://user:password@host:5432/solarautopilot"
```

### 3. Setup Object Storage

**Cloudflare R2 (Recommended - Free 10GB)**

1. Go to Cloudflare Dashboard → R2
2. Create bucket: `solarautopilot-downloads`
3. Create API token with R2 permissions
4. Get Account ID from R2 dashboard

Update `.env.local`:
```
STORAGE_ENDPOINT="https://<account-id>.r2.cloudflarestorage.com"
STORAGE_ACCESS_KEY="your-access-key"
STORAGE_SECRET_KEY="your-secret-key"
STORAGE_BUCKET="solarautopilot-downloads"
STORAGE_PUBLIC_URL="https://downloads.yourdomain.com"
```

**Setup Custom Domain for R2:**
1. R2 Dashboard → Bucket → Settings → Public Access
2. Add custom domain: `downloads.yourdomain.com`
3. Add CNAME record in your DNS

**Alternative: AWS S3**
```
STORAGE_ENDPOINT="https://s3.amazonaws.com"
STORAGE_ACCESS_KEY="your-aws-access-key"
STORAGE_SECRET_KEY="your-aws-secret-key"
STORAGE_BUCKET="solarautopilot-downloads"
STORAGE_PUBLIC_URL="https://downloads.yourdomain.com"
```

### 4. Setup Authentication

Generate admin password hash:
```bash
node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('your-password', 10))"
```

Update `.env.local`:
```
ADMIN_USERNAME="admin"
ADMIN_PASSWORD_HASH="$2a$10$..."
NEXTAUTH_SECRET="generate-random-32-char-string"
NEXTAUTH_URL="http://localhost:3000"
```

### 5. Setup Email (Optional)

**Gmail:**
1. Enable 2FA on your Google account
2. Generate App Password
3. Update `.env.local`:

```
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"
CONTACT_EMAIL="contact@yourdomain.com"
```

**Alternative: SendGrid, Mailgun, AWS SES**

### 6. Initialize Database

```bash
npx prisma generate
npx prisma db push
```

### 7. Run Development Server

```bash
npm run dev
```

Visit:
- Website: http://localhost:3000
- Admin: http://localhost:3000/admin/login

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

**Database:** Use Vercel Postgres or external provider
**Storage:** Use Cloudflare R2 with custom domain

### Docker

```bash
docker build -t solarautopilot-website .
docker run -p 3000:3000 --env-file .env.local solarautopilot-website
```

### VPS (Ubuntu)

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PostgreSQL
sudo apt install postgresql postgresql-contrib

# Clone and setup
git clone <your-repo>
cd solarautopilot-website
npm install
npm run build

# Use PM2 for process management
npm install -g pm2
pm2 start npm --name "solarautopilot" -- start
pm2 save
pm2 startup
```

## Admin Dashboard Usage

### Upload Installers

1. Login: `/admin/login`
2. Go to Downloads tab
3. Click "Upload File"
4. Select installer file
5. Enter platform (windows/macos/linux)
6. Enter version (e.g., 2.1.0)
7. File uploads to R2/S3 automatically

### Manage Blog

1. Go to Blog tab
2. Click "New Post"
3. Write content in Markdown
4. Add tags
5. Publish or save as draft

### Manage Changelog

1. Go to Changelog tab
2. Add version entries
3. Markdown supported

### Manage Roadmap

1. Go to Roadmap tab
2. Add features
3. Set status: planned/in-progress/completed
4. Set priority: low/medium/high

### Edit Pages

1. Go to Pages tab
2. Edit About page content
3. Markdown supported

## File Download Flow

```
User clicks download
    ↓
Frontend fetches from /api/downloads
    ↓
Returns CDN URL (https://downloads.yourdomain.com/...)
    ↓
Browser downloads directly from R2/S3
    ↓
Download counter increments
```

## Security

- Admin routes protected by NextAuth
- File uploads validated
- SQL injection prevented (Prisma)
- XSS protection (React)
- CSRF tokens (NextAuth)
- Rate limiting recommended (add middleware)

## Monitoring

Add to production:
- Sentry for error tracking
- Vercel Analytics
- Database connection pooling
- CDN caching headers

## Backup

```bash
# Database backup
pg_dump solarautopilot > backup.sql

# Restore
psql solarautopilot < backup.sql
```

## Troubleshooting

**Database connection fails:**
- Check DATABASE_URL format
- Verify database exists
- Check firewall rules

**File upload fails:**
- Verify R2/S3 credentials
- Check bucket permissions
- Verify CORS settings

**Admin login fails:**
- Verify password hash generated correctly
- Check NEXTAUTH_SECRET is set
- Clear browser cookies

## Cost Estimate

- Vercel: Free (Hobby) or $20/mo (Pro)
- Database: Free (Vercel Postgres) or $5-20/mo
- R2 Storage: Free (10GB) or $0.015/GB
- Domain: $10-15/year
- Email: Free (Gmail) or $10/mo (SendGrid)

**Total: $0-50/month**

## Support

- GitHub Issues
- Documentation: /docs
- Community: /community
