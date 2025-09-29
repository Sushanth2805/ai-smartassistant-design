# AI Landing Page

A modern, responsive landing page for an AI assistant platform built with React, TypeScript, and Material-UI v7. Features glassmorphism design, flowing gradients, and futuristic aesthetics.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will open automatically at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Features

- **Modern Design**: Glassmorphism effects with flowing green gradients
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth animations and hover effects
- **Performance Optimized**: Built with Vite for fast development and builds
- **Type Safe**: Full TypeScript support with strict type checking
- **Accessible**: Following WCAG guidelines for accessibility

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Material-UI v7** - Component library with theming
- **Emotion** - CSS-in-JS styling solution
- **Vite** - Fast build tool and development server

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx   # Header navigation
│   ├── HeroSection.tsx  # Main hero section
│   ├── FeaturesSection.tsx
│   ├── DashboardPreview.tsx
│   ├── BenefitsSection.tsx
│   ├── SocialProof.tsx
│   ├── PricingSection.tsx
│   └── Footer.tsx
├── theme.ts            # Material-UI theme configuration
├── main.tsx           # Application entry point
└── App.ailandingpage.tsx # Main app component
```

## 🎯 Performance Tips

- The app uses code splitting and lazy loading for optimal performance
- Images are optimized and served from CDN
- CSS-in-JS is configured for minimal runtime overhead
- Production builds are optimized with tree shaking

## 🔧 Customization

### Theme
Edit `src/theme.ts` to customize colors, typography, and spacing.

### Components
All components are modular and can be easily customized or replaced.

### Content
Update text content, images, and links directly in the component files.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.