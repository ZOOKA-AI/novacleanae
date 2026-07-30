<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Nova Clean UAE - AI-Powered Facility Management

[![CI/CD Pipeline](https://github.com/ZOOKA-AI/novacleanae/actions/workflows/ci.yml/badge.svg)](https://github.com/ZOOKA-AI/novacleanae/actions/workflows/ci.yml)

Nova Clean UAE is a cutting-edge facility management platform that uses Google Gemini AI to deliver elite cleaning, disinfection, and pest control services across the United Arab Emirates.

## Features

- 🤖 **AI-Powered Services**: Integrated with Google Gemini AI for intelligent cleaning analysis
- 🎤 **Voice Assistant**: Real-time voice booking using Gemini Live Audio
- 📸 **Visual Analysis**: AI-powered pest detection and cleaning inspection
- 🎬 **Video Generation**: Marketing content creation with Veo AI
- 🌍 **Bilingual Support**: Full Arabic and English interface
- 📱 **Mobile Responsive**: Optimized for all devices

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 6.2
- **AI Integration**: Google Gemini AI (gemini-3-pro, gemini-2.5-flash)
- **Styling**: Tailwind CSS
- **Node Version**: 24.x (recommended)

## Prerequisites

- Node.js >= 20.0.0
- npm >= 10.0.0
- Google Gemini API key ([Get one here](https://ai.google.dev/))

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ZOOKA-AI/novacleanae.git
   cd novacleanae
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   
4. Edit `.env.local` and add your Gemini API key:
   ```env
   API_KEY=your_gemini_api_key_here
   ```

## Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Type Checking

Run TypeScript type checking:
```bash
npm run typecheck
```

## Deployment

### Vercel

This project is optimized for Vercel deployment:

1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`
3. Set the `API_KEY` environment variable in Vercel dashboard

### Other Platforms

The build outputs to the `dist/` directory and can be deployed to any static hosting service.

## Project Structure

```
novacleanae/
├── components/          # React components
│   ├── AISection.tsx   # AI Lab features
│   ├── Hero.tsx        # Landing section
│   ├── VoiceAssistant.tsx
│   └── ...
├── services/           # API services
│   └── geminiService.ts # Gemini AI integration
├── translations.ts     # i18n translations
├── types.ts           # TypeScript definitions
├── App.tsx            # Root component
├── index.tsx          # Entry point
└── vite.config.ts     # Vite configuration
```

## AI Features

### Voice Booking
Speak with Nova AI to schedule cleaning services in real-time using Gemini Live Audio.

### Visual Analysis
Upload images for AI-powered pest detection and cleaning inspection analysis.

### Content Generation
Create marketing videos and promotional content using Veo AI.

### Smart Search
Find cleaning standards and service updates with Google Search grounding.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is proprietary software owned by ZOOKA-AI.

## Contact

- Website: [Nova Clean UAE](https://novacleanae.vercel.app)
- GitHub: [@ZOOKA-AI](https://github.com/ZOOKA-AI)

---

Made with ❤️ by ZOOKA-AI | Powered by Google Gemini AI
