# AI Development Rules & Guidelines

## 🎯 **Template Overview**
This is a **Vite React + TypeScript + Tailwind CSS** template designed for building modern multi-page web applications. The AI should use this template as a foundation and extend it based on user requirements.

## 🏗️ **Tech Stack & Architecture**

### **Core Technologies**
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite (fast development and optimized builds)
- **Styling**: Tailwind CSS (utility-first CSS framework)
- **Routing**: React Router v6 for multi-page navigation
- **Language**: TypeScript (type-safe JavaScript)
- **Package Manager**: pnpm (fast and efficient)

### **Project Structure**
```
src/
├── main.tsx          # React entry point
├── App.tsx           # Main application component with routing
├── App.css           # App-specific styles
├── index.css         # Global Tailwind CSS imports
├── pages/            # Page components with routing
│   ├── Home.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── components/       # Reusable UI components
├── hooks/            # Custom React hooks
└── utils/            # Utility functions
```

## 🤖 **AI Development Guidelines**

### **1. Code Generation Rules**
- **Always use TypeScript** with proper typing
- **Use functional components** with React hooks
- **Apply Tailwind CSS** for styling (avoid custom CSS when possible)
- **Follow React best practices** (immutable state, proper dependencies)
- **Use modern ES6+ syntax** (arrow functions, destructuring, etc.)

### **2. Multi-Page Application Structure**
- **Create pages in src/pages/** directory with proper routing
- **Use React Router v6** for navigation between pages
- **Define navigation and footer in App.tsx** for consistency across pages
- **Each page should be a self-contained component** with its own state and logic

### **3. Routing Implementation**
```typescript
// App.tsx - Proper routing structure
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
```

### **4. Component Structure**
```typescript
// ✅ Good: Functional component with TypeScript
interface ComponentProps {
  title: string;
  onAction: () => void;
}

export function MyComponent({ title, onAction }: ComponentProps) {
  const [state, setState] = useState('');
  
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <button 
        onClick={onAction}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Action
      </button>
    </div>
  );
}
```

## 🎨 **Styling Guidelines**

### **Tailwind CSS Usage**
- **Primary**: Use Tailwind CSS utility classes
- **Responsive**: Always include mobile-first responsive design
- **Consistent**: Use consistent spacing, colors, and typography
- **Dark Mode**: Implement dark/light theme switching with Tailwind

### **Color Palette**
- Use Tailwind's default color palette
- Maintain consistent color scheme throughout the application
- Use appropriate colors for different UI elements (primary, secondary, accent, etc.)

## 📱 **Multi-Page Application Requirements**

### **Page Organization**
- **Create separate files** for each page in `src/pages/`
- **Each page should be self-contained** with its own components and state
- **Use proper routing** with React Router
- **Implement navigation** that works across all pages
- **Include consistent header/footer** across all pages

### **Navigation & Routing**
- **Use React Router v6** for all navigation
- **Create a Navigation component** in `src/components/`
- **Implement responsive navigation** with mobile hamburger menu
- **Add active state indicators** for current page
- **Ensure all routes are properly defined** in App.tsx

## 🚀 **Development Workflow**

### **When User Requests Features**
1. **Analyze Requirements**: Understand what the user wants to build
2. **Plan Structure**: Design component hierarchy and routing
3. **Update package.json**: Add required dependencies (especially react-router-dom)
4. **Implement Components**: Create/modify components following guidelines
5. **Add Styling**: Apply Tailwind CSS for responsive design
6. **Test Functionality**: Ensure features work as expected
7. **Optimize**: Improve performance and user experience

### **File Organization**
- **Pages**: Route-specific components in `src/pages/`
- **Components**: Reusable UI components in `src/components/`
- **Utils**: Helper functions in `src/utils/`
- **Hooks**: Custom React hooks in `src/hooks/`

## ⚠️ **Important Notes**

1. **Always use React Router** for multi-page applications
2. **Keep navigation and footer in App.tsx** for consistency
3. **Maintain TypeScript** typing throughout
4. **Use Tailwind CSS** for all styling
5. **Follow React Patterns** with hooks and functional components
6. **Test Responsiveness** on different screen sizes
7. **Add dependencies to package.json** before using them

## ✅ **Quality Assurance**

### **Code Quality**
- Use proper TypeScript interfaces and types
- Implement error handling and loading states
- Follow accessibility best practices
- Write clean, maintainable code

### **Performance**
- Optimize images and assets
- Implement lazy loading where appropriate
- Minimize bundle size
- Use React.memo and useMemo for optimization

### **User Experience**
- Implement smooth transitions and animations
- Provide clear feedback for user actions
- Ensure fast loading times
- Create intuitive navigation