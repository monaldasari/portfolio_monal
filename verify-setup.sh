#!/bin/bash

# Portfolio Setup Verification Script
# Run this to verify your portfolio is ready to go

echo "🔍 Checking Portfolio Setup..."
echo ""

# Check if files exist
if [ -f "public/profile.jpg" ] || [ -f "public/profile.png" ] || [ -f "public/profile.webp" ]; then
    echo "✅ Profile picture found"
else
    echo "❌ Profile picture NOT found"
    echo "   Please add one of: profile.jpg, profile.png, or profile.webp to /public/"
fi

if [ -f "public/resume.pdf" ]; then
    echo "✅ Resume PDF found"
else
    echo "❌ Resume PDF NOT found"
    echo "   Please add resume.pdf to /public/"
fi

if [ -f ".env.local" ]; then
    echo "✅ .env.local file exists"
else
    echo "⚠️  .env.local not found (optional)"
    echo "   Run: cp .env.local.example .env.local"
fi

echo ""
echo "📁 Checking required components..."

files=(
    "src/app/globals.css"
    "src/app/page.tsx"
    "src/components/HomeSection.tsx"
    "src/components/ContactSection.tsx"
    "src/components/ResumePDF.tsx"
    "src/components/Navbar.tsx"
    "src/components/Footer.tsx"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file (MISSING!)"
    fi
done

echo ""
echo "🚀 Setup complete! Run:"
echo "   npm install (if needed)"
echo "   npm run dev"
echo "   Open http://localhost:3000"
