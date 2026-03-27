# Portfolio Monal

A modern, clean, and responsive personal portfolio website built with Next.js and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI**: Light theme with pastel accents and smooth animations
- **Sections**: Home, About, Projects, Contact
- **Interactive Elements**: Hover effects, smooth scrolling, active navbar highlighting
- **Contact Form**: Simple form with validation

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/monaldasari/portfolio_monal.git
   cd portfolio_monal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
└── components/
    ├── Navbar.tsx
    ├── Footer.tsx
    ├── HomeSection.tsx
    ├── AboutSection.tsx
    ├── ProjectsSection.tsx
    ├── ContactSection.tsx
    ├── Card.tsx
    └── Button.tsx
```

## Customization

- **Profile Image**: Replace the placeholder image in `HomeSection.tsx` with your actual photo
- **Projects**: Update the projects array in `ProjectsSection.tsx` with your real projects
- **Colors**: Modify Tailwind classes in components for custom colors
- **Content**: Edit the text content in each section component

## Deployment to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy automatically or manually

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library

## License

© 2026 Monal Dasari. All rights reserved.
