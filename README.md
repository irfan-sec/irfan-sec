# 🔐 Irfan's Cybersecurity Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing cybersecurity expertise, projects, and professional background.

![Portfolio Homepage](https://github.com/user-attachments/assets/31d364c7-634b-41b8-886e-99ef6e8a28cc)

## ✨ Features

- **Modern Design**: Clean, professional interface with cybersecurity theme
- **Responsive Layout**: Fully responsive design for all devices
- **Fast Performance**: Built with Next.js 15 for optimal speed
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Interactive Elements**: Smooth animations and hover effects

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: SVG icons and security-themed emojis
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts

## 📱 Pages

### Home Page (`/`)
- Hero section with professional introduction
- Skills overview (Red Team, Blue Team, Purple Team)
- Certification roadmap
- Call-to-action sections

### About Page (`/about`)
- Detailed professional background
- Technical expertise breakdown
- Skills categorization (Programming, Security Tools, OS)
- Current focus and goals

### Projects Page (`/projects`)
- Featured projects showcase
- Complete projects grid with filtering
- GitHub repository integration
- Project statistics and technologies

### Contact Page (`/contact`)
- Professional contact form (demo)
- Service offerings
- Social media links
- Response time information

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/irfan-sec/irfan-sec.git
   cd irfan-sec
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization Guide

### Colors & Theme
The site uses a cybersecurity-focused color palette:
- **Primary**: Green (#22c55e) - Actions and highlights
- **Secondary**: Blue (#3b82f6) - Links and accents
- **Dark**: Gray-900 (#111827) - Headers and footers
- **Background**: Gray-50 (#f9fafb) - Main content areas

To modify colors, update the Tailwind classes in the components.

### Content Updates

1. **Personal Information**
   - Update `app/layout.tsx` for SEO metadata
   - Modify hero section in `app/page.tsx`
   - Edit about content in `app/about/page.tsx`

2. **Projects**
   - Update the `projects` array in `app/projects/page.tsx`
   - Add your GitHub repositories and descriptions
   - Modify technologies and categories

3. **Contact Information**
   - Update social links in `components/Footer.tsx`
   - Modify contact details in `app/contact/page.tsx`
   - Update email and profile URLs

### Adding New Sections
To add new pages or sections:

1. Create new page files in the `app/` directory
2. Update navigation in `components/Header.tsx`
3. Add footer links in `components/Footer.tsx`
4. Follow the existing component structure

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Using Vercel CLI**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Using Git Integration**
   - Push your code to GitHub
   - Connect your repository to [Vercel](https://vercel.com)
   - Automatic deployments on every push

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `.next` folder to Netlify or connect your Git repository

### Deploy to Other Platforms

The site is a standard Next.js application and can be deployed to any platform supporting Node.js:
- AWS Amplify
- Railway
- Heroku
- DigitalOcean App Platform

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration (auto-generated)
- `tsconfig.json` - TypeScript configuration
- `vercel.json` - Vercel deployment configuration
- `package.json` - Dependencies and scripts

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with Next.js automatic code splitting

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support:
- **Email**: ceoirfan@cyberlearn.systems
- **LinkedIn**: [irfan-security](https://linkedin.com/in/irfan-security)
- **GitHub**: [irfan-sec](https://github.com/irfan-sec)

---

**Built with ❤️ by Irfan | Cybersecurity Specialist & Ethical Hacker**
