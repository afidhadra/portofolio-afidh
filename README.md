# 🚀 Afidh Adra - Full Stack Developer Portfolio

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

[![Live Demo](https://img.shields.io/badge/Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://portofolio-afidh.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/afidhadra/portofolio-afidh)

</div>

---

## 🌟 About This Project

A modern, responsive portfolio website showcasing my journey as a **Full Stack Developer** specializing in **Vue.js**, **TypeScript**, and **API Integration**. Built with cutting-edge technologies for optimal performance and user experience.

### 🎯 Key Features

- 🌍 **Bilingual Support** - English & Indonesian
- 🌙 **Dark Mode Toggle** - Seamless theme switching
- 📱 **Fully Responsive** - Perfect on all devices
- ⚡ **Lightning Fast** - Static Site Generation (SSG)
- ♿ **Accessible** - WCAG compliant
- 🔍 **SEO Optimized** - Better search visibility
- 📝 **Blog Integration** - Markdown-based posts
- 🎨 **Modern UI/UX** - Clean and professional design

---

## 🛠️ Tech Stack

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

### Internationalization & Content
![next-intl](https://img.shields.io/badge/next--intl-000000?style=flat&logo=next.js&logoColor=white)
![Gray Matter](https://img.shields.io/badge/Gray_Matter-000000?style=flat&logo=markdown&logoColor=white)

### Testing & Quality
![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=flat&logo=playwright&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)

### Deployment
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white)

---

## 📋 Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **Git** for version control

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/afidhadra/portofolio-afidh.git
cd portofolio-afidh
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Run Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 🧪 Testing

This project includes comprehensive end-to-end testing with Playwright.

### Run Tests
```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run all tests
npm run test:e2e

# View test report
npx playwright show-report
```

---

## 📁 Project Structure

```
portofolio-afidh/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   │   ├── about/         # About page
│   │   ├── blog/          # Blog pages
│   │   ├── contact/       # Contact page
│   │   └── projects/      # Projects page
│   ├── components/        # Reusable components
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Shared components
│   ├── ui/               # UI components
│   └── ...               # Other components
├── lib/                  # Utility functions
├── messages/             # Internationalization files
│   ├── en.json          # English translations
│   └── id.json          # Indonesian translations
├── posts/               # Blog posts (Markdown)
├── public/              # Static assets
└── tests/               # E2E tests
```

---

## 🌐 Internationalization

The portfolio supports two languages:

- **English** (`/en`) - Default language
- **Indonesian** (`/id`) - Bahasa Indonesia

Language switching is available in the navigation menu.

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Next.js

2. **Deploy**
   - Click "Deploy"
   - Your site will be live at `https://portofolio-afidh.vercel.app`

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm start
```

---

## 🎨 Customization

### Content Updates
- **About Page**: Edit `messages/en.json` and `messages/id.json`
- **Projects**: Update `app/[locale]/projects/page.tsx`
- **Blog Posts**: Add Markdown files to `posts/` directory

### Styling
- **Colors**: Modify Tailwind classes in components
- **Layout**: Update component structures
- **Themes**: Customize dark/light mode in `components/ThemeWrapper.tsx`

### Configuration
- **SEO**: Update metadata in `app/layout.tsx`
- **i18n**: Modify language files in `messages/`
- **Build**: Adjust settings in `next.config.ts`

---

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Core Web Vitals**: All green scores
- **Bundle Size**: Optimized with Next.js
- **Loading Speed**: < 2 seconds globally

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Afidh Adra**
- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **WhatsApp**: [Your WhatsApp]
- **Portfolio**: [https://portofolio-afidh.vercel.app](https://portofolio-afidh.vercel.app)

---

<div align="center">

**Made with ❤️ by Afidh Adra**

⭐ **Star this repo if you found it helpful!**

[⬆️ Back to Top](#-afidh-adra---full-stack-developer-portfolio)

</div>
