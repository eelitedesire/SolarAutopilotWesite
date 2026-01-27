#!/bin/bash

echo "🚀 SolarAutopilot Website Setup"
echo "================================"
echo ""

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local from example..."
    cp .env.local.example .env.local
    echo "⚠️  Please edit .env.local with your credentials"
    echo ""
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Generate Prisma client
echo "🔧 Generating Prisma client..."
npx prisma generate

# Ask if user wants to push database schema
read -p "Push database schema? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🗄️  Pushing database schema..."
    npx prisma db push
fi

# Generate admin password
read -p "Generate admin password hash? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    node scripts/generate-password.js
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env.local with your credentials"
echo "2. Run: npm run dev"
echo "3. Visit: http://localhost:3000"
echo "4. Admin: http://localhost:3000/admin/login"
echo ""
