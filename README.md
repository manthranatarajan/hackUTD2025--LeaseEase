# LeaseEase - AI-Powered Car Leasing Platform 🚗

An intelligent car leasing platform with voice-enabled chatbot assistance.

## 🚀 Quick Start

### Local Development

1. **Install dependencies**
```bash
npm install
cd server && npm install && cd ..
```

2. **Set up environment variables**
```bash
# Copy example files
cp .env.example .env
cp server/.env.example server/.env

# Add your credentials to .env and server/.env
```

3. **Run the application**
```bash
# Terminal 1 - Backend
cd server
npm start

# Terminal 2 - Frontend
npm run dev
```

Visit `http://localhost:5174`

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions to deploy to:
- **Frontend**: Vercel (free)
- **Backend**: Render (free)
- **Database**: Supabase (already configured)

**TL;DR**: Push to GitHub → Connect to Vercel & Render → Add environment variables → Deploy! ✨

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Express + Node.js
- **Database**: Supabase (PostgreSQL)
- **Voice AI**: ElevenLabs + Web Speech API
- **Deployment**: Vercel + Render

## 📁 Project Structure

```
├── src/              # Frontend React app
├── server/           # Backend Express API
├── supabase/         # Database migrations
├── public/           # Static assets
└── DEPLOYMENT.md     # Deployment guide
```

## 🔑 Features

- 🎤 Voice-enabled AI chatbot
- 🚗 Dynamic car inventory from Supabase
- 💰 Real-time finance calculations
- 🎨 Modern, responsive UI
- 🔊 Text-to-speech responses

## 📝 License

MIT
