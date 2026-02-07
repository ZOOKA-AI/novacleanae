<div align="center">
<img width="1200" height="475" alt="Nova Clean AE Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

# 🌟 Nova Clean AE

### نظام ذكي لإدارة خدمات التنظيف ومكافحة الحشرات
### Smart AI-Powered Cleaning & Pest Control Management System

[![React](https://img.shields.io/badge/React-19.2.4-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF.svg)](https://vitejs.dev/)
[![Google GenAI](https://img.shields.io/badge/Google-GenAI-4285F4.svg)](https://ai.google.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[العربية](#-نظرة-عامة) | [English](#-overview)

</div>

---

## 🇸🇦 النسخة العربية

### 📖 نظرة عامة

**Nova Clean AE** هو نظام ذكي متطور يعمل بتقنيات الذكاء الاصطناعي لإدارة خدمات التنظيف ومكافحة الحشرات في أبوظبي. يوفر النظام واجهة سهلة الاستخدام وتجربة متميزة للعملاء.

### ✨ الميزات الرئيسية

- 🤖 **ذكاء اصطناعي متقدم**: مدعوم بتقنية Google Gemini AI
- 🌐 **دعم متعدد اللغات**: العربية والإنجليزية
- 📱 **تصميم متجاوب**: يعمل على جميع الأجهزة
- 🎨 **واجهة عصرية**: تصميم حديث وسهل الاستخدام
- ⚡ **أداء سريع**: بُني باستخدام Vite و React 19
- 🔒 **آمن وموثوق**: معايير أمان عالية

### 🛠️ التقنيات المستخدمة

- **Frontend Framework**: React 19.2.4
- **Language**: TypeScript 5.8.2
- **Build Tool**: Vite 6.2.0
- **AI Integration**: Google Generative AI
- **Styling**: Modern CSS with TypeScript

### 📋 المتطلبات

- Node.js >= 18.0.0
- npm >= 9.0.0
- مفتاح API من Google Gemini

### 🚀 التثبيت والتشغيل

1. **استنساخ المستودع**
```bash
git clone https://github.com/ZOOKA-AI/novacleanae.git
cd novacleanae
```

2. **تثبيت الحزم**
```bash
npm install
```

3. **إعداد المتغيرات البيئية**
```bash
cp .env.example .env.local
```
ثم قم بتعديل `.env.local` وأضف مفتاح API الخاص بك:
```env
GEMINI_API_KEY=your_api_key_here
```

4. **تشغيل المشروع محلياً**
```bash
npm run dev
```
افتح المتصفح على: http://localhost:5173

5. **بناء للإنتاج**
```bash
npm run build
```

### 📁 هيكل المشروع

```
novacleanae/
├── components/         # مكونات React القابلة لإعادة الاستخدام
├── services/          # خدمات API والمنطق
├── App.tsx            # المكون الرئيسي
├── index.tsx          # نقطة الدخول
├── translations.ts    # ملفات الترجمة
├── types.ts           # تعريفات TypeScript
├── vite.config.ts     # إعدادات Vite
└── package.json       # إعدادات المشروع
```

### 🧪 الأوامر المتاحة

| الأمر | الوصف |
|-------|--------|
| `npm run dev` | تشغيل المشروع في وضع التطوير |
| `npm run build` | بناء المشروع للإنتاج |
| `npm run preview` | معاينة النسخة النهائية |
| `npm run lint` | فحص جودة الكود |
| `npm run lint:fix` | إصلاح مشاكل الكود تلقائياً |
| `npm run format` | تنسيق الكود |
| `npm run type-check` | فحص أنواع TypeScript |

### 🤝 المساهمة

نرحب بمساهماتكم! يرجى قراءة [دليل المساهمة](CONTRIBUTING.md) قبل البدء.

### 🔒 الأمان

إذا اكتشفت ثغرة أمنية، يرجى الاطلاع على [سياسة الأمان](SECURITY.md).

### 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - انظر ملف [LICENSE](LICENSE) للتفاصيل.

### 📞 التواصل

- **المطور**: ZOOKA-AI
- **المستودع**: [github.com/ZOOKA-AI/novacleanae](https://github.com/ZOOKA-AI/novacleanae)
- **AI Studio**: [View App](https://ai.studio/apps/drive/1RLDmPqjiN5I2AvtYgteM81zzBeKVgf9K)

---

## 🇬🇧 English Version

### 📖 Overview

**Nova Clean AE** is an advanced AI-powered system for managing cleaning and pest control services in Abu Dhabi. It provides an intuitive interface and exceptional user experience.

### ✨ Key Features

- 🤖 **Advanced AI**: Powered by Google Gemini AI
- 🌐 **Multilingual**: Arabic and English support
- 📱 **Responsive Design**: Works on all devices
- 🎨 **Modern UI**: Contemporary and user-friendly design
- ⚡ **High Performance**: Built with Vite & React 19
- 🔒 **Secure & Reliable**: High security standards

### 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.4
- **Language**: TypeScript 5.8.2
- **Build Tool**: Vite 6.2.0
- **AI Integration**: Google Generative AI
- **Styling**: Modern CSS with TypeScript

### 📋 Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Google Gemini API Key

### 🚀 Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/ZOOKA-AI/novacleanae.git
cd novacleanae
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.example .env.local
```
Edit `.env.local` and add your API key:
```env
GEMINI_API_KEY=your_api_key_here
```

4. **Run locally**
```bash
npm run dev
```
Open your browser at: http://localhost:5173

5. **Build for production**
```bash
npm run build
```

### 📁 Project Structure

```
novacleanae/
├── components/         # Reusable React components
├── services/          # API services and business logic
├── App.tsx            # Main application component
├── index.tsx          # Entry point
├── translations.ts    # Translation files
├── types.ts           # TypeScript definitions
├── vite.config.ts     # Vite configuration
└── package.json       # Project configuration
```

### 🧪 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |
| `npm run lint:fix` | Auto-fix code issues |
| `npm run format` | Format code |
| `npm run type-check` | Check TypeScript types |

### 🤝 Contributing

Contributions are welcome! Please read [Contributing Guidelines](CONTRIBUTING.md) before starting.

### 🔒 Security

If you discover a security vulnerability, please see [Security Policy](SECURITY.md).

### 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

### 📞 Contact

- **Developer**: ZOOKA-AI
- **Repository**: [github.com/ZOOKA-AI/novacleanae](https://github.com/ZOOKA-AI/novacleanae)
- **AI Studio**: [View App](https://ai.studio/apps/drive/1RLDmPqjiN5I2AvtYgteM81zzBeKVgf9K)

---

<div align="center">

**Made with ❤️ by ZOOKA-AI**

⭐ If you find this project useful, please give it a star!

</div>

