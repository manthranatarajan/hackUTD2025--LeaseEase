# LeaseEase Deployment Guide

This guide will help you deploy your LeaseEase app so users can access it via a public URL.

## Architecture Overview

- **Frontend (Vite + React + TypeScript)**: Deploy to Vercel
- **Backend (Express + Node.js)**: Deploy to Render
- **Database**: Already hosted on Supabase ✅

## 📦 Prerequisites

1. GitHub account (to push your code)
2. Vercel account (free): https://vercel.com/signup
3. Render account (free): https://render.com/register

---

## 🚀 Step 1: Push Code to GitHub

If you haven't already pushed this repository:

```powershell
# Make sure you're in the project root
cd "C:\Users\manth\Documents\GitHub\hand-controlled-media-player\hackUTD2025--LeaseEase"

# Add all files (except .env which is gitignored)
git add .
git commit -m "Prepare for deployment"
git push origin main
```

---

## 🌐 Step 2: Deploy Frontend to Vercel

### 2.1 Connect Repository

1. Go to https://vercel.com/new
2. Click **"Import Git Repository"**
3. Select your `hackUTD2025--LeaseEase` repository
4. Click **"Import"**

### 2.2 Configure Build Settings

Vercel should auto-detect Vite settings, but verify:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 2.3 Add Environment Variables

Before deploying, add your environment variables:

1. In the deployment setup, scroll to **"Environment Variables"**
2. Add these variables:

```
VITE_SUPABASE_URL=https://npmdyautxvxxbqjtglmz.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wbWR5YXV0eHZ4eGJxanRnbG16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4ODk2MzEsImV4cCI6MjA3ODQ2NTYzMX0.LvHVrnZFBlTclcC2hCnB0SSYn0acQ-g22dNnEs_6x50
```

### 2.4 Deploy

1. Click **"Deploy"**
2. Wait 1-2 minutes for the build to complete
3. You'll get a URL like: `https://lease-ease-xyz.vercel.app` ✨

---

## 🖥️ Step 3: Deploy Backend to Render

### 3.1 Create Web Service

1. Go to https://render.com/dashboard
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Select `hackUTD2025--LeaseEase`

### 3.2 Configure Service Settings

Fill in these settings:

- **Name**: `leaseease-backend` (or your preferred name)
- **Region**: Choose closest to your users
- **Branch**: `main`
- **Root Directory**: `server`
- **Runtime**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Instance Type**: Free

### 3.3 Add Environment Variables

Click **"Advanced"** → **"Add Environment Variable"**:

```
ELEVENLABS_API_KEY=sk_649345e09b84759426d4ac77833ffce54134c7f090b57ede
PORT=3001
```

### 3.4 Deploy

1. Click **"Create Web Service"**
2. Wait for deployment (2-3 minutes)
3. You'll get a URL like: `https://leaseease-backend.onrender.com` ✨

---

## 🔗 Step 4: Connect Frontend to Backend

After backend deploys, update your frontend to use the production backend URL:

### 4.1 Update Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Click **"Settings"** → **"Environment Variables"**
3. Add a new variable:

```
VITE_BACKEND_URL=https://leaseease-backend.onrender.com
```

4. Click **"Redeploy"** to apply changes

### 4.2 Update Code to Use Backend URL

If your frontend has hardcoded backend URLs, update them to use the environment variable:

```typescript
// Example in your API calls
const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';
```

---

## ✅ Step 5: Test Your Deployed App

1. Visit your Vercel URL: `https://your-app.vercel.app`
2. Test all features:
   - Car listings load from Supabase ✓
   - Text-to-speech works (backend API) ✓
   - Chat functionality works ✓

---

## 🎉 You're Live!

Share your URL with users:
- **Frontend URL**: `https://your-app.vercel.app`

Users can now access your app from anywhere! 🚗✨

---

## 🔧 Troubleshooting

### Frontend Issues

**"Missing Supabase environment variables"**
- Check environment variables are set in Vercel dashboard
- Redeploy after adding variables

**404 errors on refresh**
- `vercel.json` should handle this (already included)

### Backend Issues

**Backend not responding**
- Render free tier sleeps after 15 min of inactivity
- First request may take 30-60 seconds to wake up
- Consider upgrading to paid tier for always-on

**CORS errors**
- Update backend CORS settings to allow your Vercel domain
- Add to `server/index.js`: `app.use(cors({ origin: 'https://your-app.vercel.app' }))`

### Database Issues

**No cars showing**
- Run migrations in Supabase SQL Editor
- Check RLS policies are enabled

---

## 📊 Monitoring

- **Vercel**: https://vercel.com/dashboard - View deployment logs
- **Render**: https://render.com/dashboard - View backend logs
- **Supabase**: https://supabase.com/dashboard - View database queries

---

## 💰 Costs

All services used have generous free tiers:

- ✅ Vercel: Free (100GB bandwidth/month)
- ✅ Render: Free (750 hours/month, sleeps after 15min inactivity)
- ✅ Supabase: Free (500MB database, 50MB file storage)

Perfect for demos and MVPs!

---

## 🔄 Continuous Deployment

Both Vercel and Render auto-deploy when you push to GitHub:

```powershell
git add .
git commit -m "Update feature"
git push origin main
```

Your app automatically redeploys! 🎯
