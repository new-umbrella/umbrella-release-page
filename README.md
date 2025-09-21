# Umbrella

<div align="center">

  <h1>🌂 Umbrella</h1>
  <p><strong>A modular React Native application featuring a plugin-based architecture</strong></p>

  <p>
    <a href="https://github.com/new-umbrella/umbrella">📱 View App Repository</a> •
    <a href="https://www.umbrella-app.xyz" target="_blank">🌐 Website</a> •
    <a href="https://github.com/new-umbrella/umbrella/releases">⬇️ Download</a>
  </p>
</div>

---

## 📱 About Umbrella

Umbrella is a revolutionary media application built with React Native that introduces a plugin-based architecture for dynamic content delivery. Unlike traditional apps with fixed functionality, Umbrella allows users to extend capabilities through JavaScript plugins that run in a secure sandboxed environment.

### ✨ Key Features

- **🔌 Plugin System**: Dynamically download and execute JavaScript plugins in a secure Node.js sandbox
- **🛡️ Sandboxed Execution**: Secure environment using vm2 and nodejs-mobile-react-native for untrusted code execution
- **⚡ High Performance**: Optimized plugin execution with minimal memory usage and fast startup times
- **🌐 Web Scraping**: Built-in Node.js support for web scraping and data extraction
- **📱 Material Design 3**: Modern UI following Material Design 3 principles with React Native Paper
- **🎨 Comprehensive Settings**: Full customization options for app behavior and user preferences
- **📂 State Management**: Persistent state using Zustand for storing and managing app data
- **🔗 External Integration**: Seamless integration with external media players like MX Player

### 🏗️ Architecture

Umbrella follows CLEAN architecture principles combined with MVVM pattern, ensuring:

- **Modular component structure**
- **Centralized state management**
- **Secure plugin execution environment**
- **Optimized performance across platforms**

## 🌐 Release Page Website

This repository contains the official release page website for Umbrella, built with modern web technologies to showcase the app's features, provide downloads, and serve as documentation.

### 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Icons**: Lucide React
- **Theme**: Custom purple theme (#6f11db) with dark/light mode support
- **Animations**: Framer Motion compatible transitions
- **Typography**: Geist font family

### 📄 Pages

- **🏠 Homepage**: Hero section, feature showcase, and call-to-action
- **⚙️ Features**: Detailed feature breakdown and technical architecture
- **📸 Screenshots**: Interactive gallery with modal popup views
- **📚 Documentation**: Installation guides, plugin development, and API reference
- **⬇️ Download**: Release management with installation instructions

### 🎨 Features

- **Responsive Design**: Mobile-first approach with tablet and desktop optimizations
- **Interactive Elements**: Animated hero carousel, scroll animations, and hover effects
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance**: Optimized images, lazy loading, and modern web standards
- **SEO Ready**: Meta tags, structured data, and semantic HTML

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/new-umbrella/umbrella-release-page.git
cd umbrella-release-page
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

---

## 📦 Project Structure

```
umbrella-release-page/
├── app/                          # Next.js app router pages
│   ├── documentation/           # Documentation page
│   ├── download/                # Download page
│   ├── features/                # Features page
│   ├── screenshots/             # Screenshots gallery
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/                   # Reusable components
│   ├── ui/                      # shadcn/ui components
│   ├── animated-section.tsx     # Scroll animation wrapper
│   ├── hero-carousel.tsx        # Homepage carousel
│   ├── navbar.tsx               # Navigation component
│   └── theme-provider.tsx       # Theme provider
├── public/                       # Static assets
│   └── assets/
│       └── images/
│           └── screenshots/     # App screenshots
└── lib/                         # Utilities
    └── utils.ts                 # Utility functions
```

---

## 🤝 Contributing

We welcome contributions to improve the release page! Please see the main [Umbrella repository](https://github.com/new-umbrella/umbrella) for contribution guidelines.

### Ways to Contribute

- 🐛 **Report Bugs**: Found an issue? [Create an issue](https://github.com/new-umbrella/umbrella-release-page/issues)
- 💡 **Suggest Features**: Have ideas for the website? [Start a discussion](https://github.com/new-umbrella/umbrella-release-page/discussions)
- 🛠️ **Code Contributions**: Help improve the codebase
- 📖 **Documentation**: Improve documentation and guides

---

## 📄 License

This project is part of the Umbrella ecosystem. See the main [Umbrella repository](https://github.com/new-umbrella/umbrella) for licensing information.

---

## 🔗 Links

- **📱 App Repository**: [github.com/new-umbrella/umbrella](https://github.com/new-umbrella/umbrella)
- **🌐 Website**: Coming Soon
- **⬇️ Downloads**: [github.com/new-umbrella/umbrella/releases](https://github.com/new-umbrella/umbrella/releases)
- **📚 Documentation**: [github.com/new-umbrella/umbrella#readme](https://github.com/new-umbrella/umbrella#readme)
- **💬 Discussions**: [github.com/new-umbrella/umbrella/discussions](https://github.com/new-umbrella/umbrella/discussions)

---

<div align="center">
  <p><strong>Made with ❤️ for the open-source community</strong></p>
  <p>
    <img src="https://img.shields.io/github/stars/new-umbrella/umbrella?style=social" alt="GitHub Stars" />
    <img src="https://img.shields.io/github/forks/new-umbrella/umbrella?style=social" alt="GitHub Forks" />
  </p>
</div>
