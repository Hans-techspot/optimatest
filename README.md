# Vite + React + TypeScript + Tailwind CSS

This template provides a fast, modern development experience with:

- ⚡️ [Vite](https://vitejs.dev/) - Fast build tool and dev server
- ⚛️ [React 18](https://reactjs.org/) - UI library with React Router v6
- 🔷 [TypeScript](https://www.typescriptlang.org/) - Type safety
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start development server:**
   ```bash
   pnpm dev
   ```

3. **Build for production:**
   ```bash
   pnpm build
   ```

4. **Preview production build:**
   ```bash
   pnpm preview
   ```

## Project Structure

```
src/
├── App.tsx          # Main application component with routing
├── App.css          # App-specific styles
├── index.css        # Global styles with Tailwind
├── main.tsx         # Application entry point
├── pages/           # Page components with routing
│   ├── Home.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── components/      # Reusable UI components
├── hooks/           # Custom React hooks
└── utils/           # Utility functions
```

## Features

- 🚀 **Fast Refresh** - Instant updates during development
- 📱 **Responsive Design** - Mobile-first with Tailwind CSS
- 🎯 **Type Safety** - Full TypeScript support
- 🔧 **ESLint** - Code quality and consistency
- 📦 **Modern Build** - ES modules and tree shaking
- 🔄 **Routing** - Multi-page navigation with React Router v6

## Customization

- Edit `src/App.tsx` to modify the main component and routing
- Update `tailwind.config.js` to customize Tailwind
- Modify `vite.config.ts` for build configuration
- Add new components in the `src/` directory

## AI Development

This project includes `AIRULES.md` with comprehensive guidelines for AI-assisted development. The AI will use these rules to:

- Generate code following React and TypeScript best practices
- Apply Tailwind CSS for consistent styling
- Maintain proper component structure and state management
- Ensure responsive design and accessibility
- Follow established patterns for forms, API integration, and state management
- Create responsive, accessible, and performant components
- Implement proper multi-page routing with React Router

## Deployment

This project is ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Happy coding! 🎉