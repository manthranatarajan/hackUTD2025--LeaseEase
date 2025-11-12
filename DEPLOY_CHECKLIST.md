# 🚀 Quick Deployment Checklist

Follow these steps to deploy your LeaseEase app to production.

## ✅ Pre-Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Supabase database is set up with migrations
- [ ] ElevenLabs API key is working
- [ ] App runs locally without errors

## 🌐 Deployment Steps

### 1️⃣ Deploy Backend (Render)

Go to: https://render.com/dashboard

1. **New Web Service**
   - Connect GitHub repo
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`

2. **Environment Variables**
   ```
   ELEVENLABS_API_KEY=sk_649345e09b84759426d4ac77833ffce54134c7f090b57ede
   PORT=3001
   FRONTEND_URL=*
   ```

3. **Copy your backend URL**: `https://your-backend.onrender.com`

⏱️ Wait ~3 minutes for deployment

### 2️⃣ Deploy Frontend (Vercel)

Go to: https://vercel.com/new

1. **Import Repository**
   - Select your GitHub repo
   - Framework: Vite (auto-detected)

2. **Environment Variables**
   ```
   VITE_SUPABASE_URL=https://npmdyautxvxxbqjtglmz.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wbWR5YXV0eHZ4eGJxanRnbG16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4ODk2MzEsImV4cCI6MjA3ODQ2NTYzMX0.LvHVrnZFBlTclcC2hCnB0SSYn0acQ-g22dNnEs_6x50
   VITE_BACKEND_URL=https://your-backend.onrender.com
   ```
   
   ⚠️ Replace `https://your-backend.onrender.com` with your actual backend URL!

3. **Deploy**

⏱️ Wait ~2 minutes for deployment

### 3️⃣ Test Production App

1. Visit your Vercel URL: `https://your-app.vercel.app`
2. Test features:
   - [ ] Car listings load
   - [ ] Chatbot responds
   - [ ] Voice features work
   - [ ] Finance calculator works

## 🎉 Done!

Your app is now live at: `https://your-app.vercel.app`

Share it with:
- Users
- Investors
- Demo judges
- Friends

## 🔄 Future Deployments

Auto-deploy on every push:

```bash
git add .
git commit -m "New feature"
git push origin main
```

Both Vercel and Render will automatically redeploy! 🎯

## 🆘 Troubleshooting

**Backend not responding?**
- Render free tier sleeps after 15min
- First request takes ~30-60 seconds to wake up

**CORS errors?**
- Update backend `FRONTEND_URL` to your exact Vercel URL
- Redeploy backend on Render

**Environment variables not working?**
- Check spelling (case-sensitive!)
- Redeploy after adding/changing variables

For detailed troubleshooting, see [DEPLOYMENT.md](./DEPLOYMENT.md)
