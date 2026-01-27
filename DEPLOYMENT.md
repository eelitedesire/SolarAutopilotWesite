# Deployment Guide - SolarAutopilot Website with Nginx

## Prerequisites
- Ubuntu/Debian server with root access
- Domain name pointing to your server IP
- Node.js 18+ installed
- PostgreSQL installed

## Step 1: Install Required Software

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install Nginx
sudo apt install -y nginx

# Install PostgreSQL
sudo apt install -y postgresql postgresql-contrib

# Install Certbot for SSL
sudo apt install -y certbot python3-certbot-nginx
```

## Step 2: Setup PostgreSQL Database

```bash
# Switch to postgres user
sudo -u postgres psql

# Create database and user
CREATE DATABASE solarautopilot;
CREATE USER solarautopilot WITH PASSWORD 'your-secure-password';
GRANT ALL PRIVILEGES ON DATABASE solarautopilot TO solarautopilot;
\q
```

## Step 3: Deploy Application

```bash
# Create directory
sudo mkdir -p /var/www/solarautopilot
cd /var/www/solarautopilot

# Clone or upload your project files here
# Then:

# Install dependencies
npm install

# Copy production environment file
cp .env.production .env.local

# Edit environment variables
nano .env.local
# Update:
# - DATABASE_URL with your PostgreSQL credentials
# - ADMIN_PASSWORD with secure password
# - NEXTAUTH_SECRET (generate with: openssl rand -base64 32)
# - NEXTAUTH_URL with your domain
# - NEXT_PUBLIC_SITE_URL with your domain

# Run Prisma migrations
npx prisma generate
npx prisma db push

# Build the application
npm run build

# Test the build
npm start
# Press Ctrl+C to stop
```

## Step 4: Setup Systemd Service

```bash
# Copy service file
sudo cp solarautopilot.service /etc/systemd/system/

# Edit service file if needed
sudo nano /etc/systemd/system/solarautopilot.service
# Update User and WorkingDirectory if different

# Set correct permissions
sudo chown -R www-data:www-data /var/www/solarautopilot

# Reload systemd
sudo systemctl daemon-reload

# Enable and start service
sudo systemctl enable solarautopilot
sudo systemctl start solarautopilot

# Check status
sudo systemctl status solarautopilot
```

## Step 5: Configure Nginx

```bash
# Copy nginx config
sudo cp nginx.conf /etc/nginx/sites-available/solarautopilot

# Edit config with your domain
sudo nano /etc/nginx/sites-available/solarautopilot
# Replace 'yourdomain.com' with your actual domain

# Create symbolic link
sudo ln -s /etc/nginx/sites-available/solarautopilot /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test nginx config
sudo nginx -t

# Restart nginx
sudo systemctl restart nginx
```

## Step 6: Setup SSL Certificate

```bash
# Get SSL certificate from Let's Encrypt
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Follow prompts and select redirect HTTP to HTTPS

# Test auto-renewal
sudo certbot renew --dry-run
```

## Step 7: Configure Firewall

```bash
# Allow SSH, HTTP, HTTPS
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```

## Step 8: Verify Deployment

Visit your domain:
- https://yourdomain.com - Main website
- https://yourdomain.com/admin/login - Admin panel

Login with credentials from .env.local

## Maintenance Commands

```bash
# View logs
sudo journalctl -u solarautopilot -f

# Restart service
sudo systemctl restart solarautopilot

# Update application
cd /var/www/solarautopilot
git pull  # or upload new files
npm install
npm run build
sudo systemctl restart solarautopilot

# Database backup
pg_dump -U solarautopilot solarautopilot > backup.sql

# Database restore
psql -U solarautopilot solarautopilot < backup.sql
```

## Troubleshooting

### Service won't start
```bash
sudo journalctl -u solarautopilot -n 50
```

### Database connection error
```bash
# Check PostgreSQL is running
sudo systemctl status postgresql

# Test connection
psql -U solarautopilot -d solarautopilot -h localhost
```

### Nginx errors
```bash
sudo nginx -t
sudo tail -f /var/log/nginx/solarautopilot-error.log
```

### Permission issues
```bash
sudo chown -R www-data:www-data /var/www/solarautopilot
sudo chmod -R 755 /var/www/solarautopilot
```

## Performance Optimization

### Enable Nginx caching
Already configured in nginx.conf for static files

### Enable compression
Add to nginx.conf:
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
```

### PM2 Alternative (Optional)
Instead of systemd, you can use PM2:
```bash
npm install -g pm2
pm2 start npm --name "solarautopilot" -- start
pm2 startup
pm2 save
```

## Security Checklist

- ✅ SSL certificate installed
- ✅ Firewall configured
- ✅ Strong admin password set
- ✅ Database password secured
- ✅ NEXTAUTH_SECRET generated randomly
- ✅ File upload size limited (500MB in nginx.conf)
- ✅ Security headers enabled
- ✅ Regular backups scheduled

## Support

For issues, check:
- Application logs: `sudo journalctl -u solarautopilot -f`
- Nginx logs: `/var/log/nginx/solarautopilot-error.log`
- Database logs: `/var/log/postgresql/`

---

**Your website is now live at https://yourdomain.com** 🚀
