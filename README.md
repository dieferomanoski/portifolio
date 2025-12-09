# 🌐 Personal Portfolio

A modern, minimalist portfolio website built with Next.js, TypeScript, and React. Features stunning animations, collapsible sections, and a hypnotic 3D orb visualization.

![Portfolio Preview](https://img.shields.io/badge/Next.js-16.0.7-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwindcss)
![React Icons](https://img.shields.io/badge/React_Icons-5.0-61dafb?style=for-the-badge&logo=react)

## ✨ Features

- **🎨 Hypnotic 3D Orb** - Mesmerizing canvas animation with orbital particles and pulsing neon rings
- **📂 Collapsible Sections** - Smooth accordion-style project and skills sections
- **🎯 Real Tech Icons** - 50+ technology logos from `react-icons`
- **✍️ Text Animations** - Fade, slide, typewriter, and glitch effects
- **🌊 Liquid Ether Background** - Animated particle network background
- **📱 Fully Responsive** - Optimized for all devices
- **⚡ Performance Optimized** - Static generation with Next.js
- **🎭 Smooth Transitions** - CSS animations and transforms

## 🛠️ Tech Stack

### Core
- **Next.js 16** - React framework with App Router
- **React 19** - Latest React with server components
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling

### Libraries
- **react-icons** - 50,000+ SVG icons (Simple Icons, Font Awesome)
- **Canvas API** - 2D graphics for animations

### Skills Showcased
9 categories covering 40+ technologies:
- Languages (TypeScript, JavaScript, Go, Dart, SQL, Solidity)
- Frontend (React, Next.js, Angular, TailwindCSS)
- Mobile (React Native, Flutter, iOS/Android)
- Backend (Node.js, NestJS, REST APIs, WebSockets, Redis, RabbitMQ)
- Architecture (Microservices, Event-Driven, MVC/MVVM, TDD)
- DevOps (Docker, AWS, CI/CD, GitHub Actions)
- Security (Keycloak, OAuth, Secure-by-design)
- Web3 (Ethereum, Solidity, ERC-20/721, Smart Contracts)
- Tools (Git, GitHub Workflows)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/dieferomanoski/portfolio.git
cd portfolio

# Install dependencies
yarn

# Run development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navbar & backgrounds
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles & animations
│
├── components/
│   ├── sections/           # Page sections
│   │   ├── HeroMinimal.tsx           # Hero with hypnotic orb
│   │   ├── ProjectsCollapsible.tsx   # Projects accordion
│   │   ├── SkillsCollapsible.tsx     # Skills accordion
│   │   └── ContactSectionMinimal.tsx # Contact info
│   │
│   ├── text/               # Text animation components
│   │   ├── FadeInText.tsx
│   │   ├── SlideInText.tsx
│   │   └── TypewriterText.tsx
│   │
│   ├── backgrounds/        # Background effects
│   │   └── LiquidEtherBg.tsx
│   │
│   ├── AnimeCharacter.tsx  # Hypnotic orb visualization
│   ├── NavbarMinimal.tsx   # Navigation with active detection
│   ├── ScrollIndicator.tsx # Progress bar
│   └── ScrollBackgroundSwitcher.tsx
│
├── config/
│   ├── site.ts             # Site configuration
│   └── skills.ts           # Skills data (easy to edit!)
│
└── data/
    └── projects.ts         # Projects data
```

## ⚙️ Configuration

### Add/Edit Skills

Edit `src/config/skills.ts`:

```typescript
{
  title: "Your Category",
  skills: [
    { name: "Technology", icon: "SiReact", category: "Category" },
  ],
}
```

Icon names from [react-icons](https://react-icons.github.io/react-icons/):
- `Si` prefix for Simple Icons (brand logos)
- `Fa` prefix for Font Awesome (generic icons)

### Add/Edit Projects

Edit `src/data/projects.ts`:

```typescript
{
  title: "Project Name",
  description: "Project description",
  tech: ["React", "Node.js", "TypeScript"],
  demoUrl: "https://demo.com",
  codeUrl: "https://github.com/user/repo"
}
```

### Update Personal Info

Edit `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: "Your Name",
  role: "Your Role",
  email: "your@email.com",
  socials: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username"
  }
}
```

## 🎨 Key Features Explained

### Hypnotic Orb
- 8 concentric pulsing neon rings
- 80 orbital particles with unique speeds
- Glowing central core with breathing animation
- Rotating code symbols (`</>`, `{}`, `[]`, `=>`)
- Multiple simultaneous animations (float, rotate, orbit)

### Collapsible Sections
- Click headers to expand/collapse
- Smooth 500ms animations
- Staggered content reveal
- Glow effects on hover
- First item open by default

### Active Section Detection
- Navbar highlights current section
- Uses `getBoundingClientRect()` API
- Detects when section is in viewport center (35%)
- Passive scroll listeners for performance

## 📈 Performance

- ✅ Static generation (SSG)
- ✅ 60 FPS animations with `requestAnimationFrame`
- ✅ Optimized bundle size
- ✅ Lazy loading where applicable
- ✅ Passive event listeners
- ✅ CSS-based animations for smooth transitions

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to [Vercel](https://vercel.com) for automatic deployments.

### Other Platforms
- **Netlify**: `npm run build` → Deploy `.next` folder
- **Cloudflare Pages**: Supports Next.js out of the box
- **Self-hosted**: Run `npm run start` after building

## 🔧 Customization Tips

### Change Orb Colors
Edit `src/components/AnimeCharacter.tsx`:
- Line 67-69: Ring colors (`hue: 200` = cyan, change to any 0-360)
- Line 48: Particle color range (`hue: Math.random() * 60 + 180`)

### Change Text Animations
Edit component props in `src/components/sections/HeroMinimal.tsx`:
```tsx
<FadeInText text="..." delay={600} />  // Adjust delay
<SlideInText text="..." direction="left" /> // Change direction
```

### Adjust Collapse Speed
Edit `src/components/sections/SkillsCollapsible.tsx`:
```tsx
transition-all duration-500  // Change 500 to desired ms
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Built with ❤️ by Dieferson Romanoski (https://github.com/dieferomanoski)

- 🌐 Portfolio: [yourportfolio.com](https://dieferomanoski.dev)
- 💼 LinkedIn: [linkedin.com/in/username](https://linkedin.com/in/dieferomanoski)
- 🐙 GitHub: [@username](https://github.com/dieferomanoski)

## 🙏 Acknowledgments
- [Next.js](https://nextjs.org) - React framework
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [react-icons](https://react-icons.github.io/) - Icon library

---

⭐ Star this repo if you found it helpful!
