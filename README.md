# LeaseEase — Voice-Powered Car Leasing Assistant (HackUTD 2025)

LeaseEase is a conversational web app that helps drivers explore, compare, and understand car lease options. It supports natural voice input and produces lifelike voice responses using ElevenLabs. The assistant can search inventory, estimate monthly payments, and answer follow-up questions — making leasing simpler and more accessible.

Built for HackUTD 2025. Submitted to:
- ElevenLabs Challenge — immersive, high‑quality speech experiences
- Toyota Challenge — mobility and automotive user experience

## What It Does

- Listens to your voice (browser speech recognition) and understands requests like “Find a Toyota Camry under $350 per month.”
- Searches available vehicles and trims, then calculates estimated lease payments based on inputs (price, term, down payment, APR/taxes assumptions).
- Speaks back a concise summary via ElevenLabs TTS and shows details on screen.
- Supports quick follow-ups like “Compare with Corolla,” “Extend term to 36 months,” or “Lower the down payment to $1,000.”

## Demo Walkthrough

1. Open the app and press the mic button or type.
2. Say: “Find me a Toyota Camry I can lease for under $350 per month.”
3. The app parses your request, looks up vehicles, and computes estimates based on your constraints.
4. You’ll hear a natural voice summary and see results with key numbers and assumptions.
5. Try follow-ups: “Compare with Corolla,” “Make it 36 months,” or “Increase down payment to $2,000.”

## Tech Stack

- Frontend: React, TypeScript, Vite, Tailwind CSS
- Backend: Node.js, Express
- Data: Supabase (PostgreSQL) for inventory and metadata
- Voice: Browser Speech Recognition API (STT) + ElevenLabs (TTS via backend proxy)
- Deployment: Vercel (frontend) and Render (backend)

## Architecture (High Level)

- Browser UI handles input, displays results, and triggers speech.
- Backend `server` exposes `/api/elevenlabs/text-to-speech` to securely call ElevenLabs and stream back `audio/mpeg`.
- Supabase provides vehicle data and supports filtering (price, model, trim). Frontend uses env-configured URL and anon key.

```
User ↔ Browser (React)
   ├─ STT: Web Speech API
   ├─ Data: Supabase (public API)
   └─ TTS: POST /api/elevenlabs/text-to-speech → ElevenLabs
```

## Quick Start

Prereqs: Node.js 18+, npm

1) Install dependencies
```
npm install
cd server && npm install && cd ..
```

2) Configure environment
```
cp .env.example .env
cp server/.env.example server/.env
```
Fill values in both files:
- `.env`
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`
  - `VITE_BACKEND_URL` (default `http://localhost:3001`)
- `server/.env`
  - `ELEVENLABS_API_KEY` (from ElevenLabs dashboard)
  - `PORT` (default `3001`)
  - `FRONTEND_URL` (e.g., `http://localhost:5174` or `*` for local dev)

3) Run locally
```
# Terminal 1 — Backend
cd server
npm start

# Terminal 2 — Frontend
npm run dev
```
Open `http://localhost:5174`

## License

MIT

