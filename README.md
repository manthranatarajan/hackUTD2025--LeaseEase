# LeaseEase - Toyota Leasing Platform 🚗

> **Voice-enabled car shopping with intelligent recommendations**

An AI-powered car leasing assistant that understands your lifestyle and budget through natural conversation.

---

## ✨ Features

- 🎤 **Voice-Enabled Chat** - Speak or type your requirements naturally
- 🧠 **AI Recommendations** - Lifestyle-based vehicle matching (family, commuter, adventurer, etc.)
- 🔍 **Compare Vehicles** - Side-by-side comparison of 2 vehicles
- 📍 **Dealership Locator** - Find nearby Toyota dealers
- 💰 **Finance Calculator** - Calculate monthly payments with custom terms
- 🚗 **3D Vehicle Viewer** - Interactive 3D models of vehicles ⚠️ **(In Progress - Models Need Improvement)**

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Supabase account
- ElevenLabs API key

### Installation

```bash
# Install dependencies
npm install
cd server && npm install && cd ..

# Configure environment variables
cp .env.example .env
cp server/.env.example server/.env
# Edit .env files with your credentials

# Run the application
# Terminal 1 - Backend
cd server
npm start

# Terminal 2 - Frontend
npm run dev
```

Visit `http://localhost:5174`

---

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Express + Node.js
- **Database**: Supabase (PostgreSQL)
- **Voice AI**: ElevenLabs + Web Speech API
- **3D**: Three.js (planned improvement)

---

## 🚧 Known Issues & Improvements Needed

### ⚠️ 3D Models
- **Status**: Fallback implementation currently in use
- **Location**: `public/models/`
- **Issue**: GLB files for 3D vehicle models need to be added and optimized
- **Planned**: High-quality, interactive 3D models for all vehicle types
---

## 🌐 Deployment

Quick deploy to production:

1. **Backend** → [Render.com](https://render.com) (free)
2. **Frontend** → [Vercel.com](https://vercel.com) (free)
3. **Database** → Supabase (already configured)

See `DEPLOYMENT.md` for detailed instructions.

---

## 📝 License

MIT

---

**Built with for HackUTD 2025**

*Challenges: ElevenLabs (Speech) + Toyota (Mobility)*