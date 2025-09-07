import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Optima AI</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><Link to="/" className="text-white hover:text-blue-400 transition-colors">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-blue-400 transition-colors">About</Link></li>
          <li><Link to="/services" className="text-white hover:text-blue-400 transition-colors">Services</Link></li>
          <li><Link to="/products" className="text-white hover:text-blue-400 transition-colors">Products</Link></li>
          <li><Link to="/blog" className="text-white hover:text-blue-400 transition-colors">Blog</Link></li>
          <li><Link to="/team" className="text-white hover:text-blue-400 transition-colors">Team</Link></li>
          <li><Link to="/contact" className="text-white hover:text-blue-400 transition-colors">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <ul className="flex flex-col space-y-2 px-4 py-2">
          <li><Link to="/" className="block py-2 text-white hover:text-blue-400 transition-colors" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" className="block py-2 text-white hover:text-blue-400 transition-colors" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/services" className="block py-2 text-white hover:text-blue-400 transition-colors" onClick={toggleMenu}>Services</Link></li>
          <li><Link to="/products" className="block py-2 text-white hover:text-blue-400 transition-colors" onClick={toggleMenu}>Products</Link></li>
          <li><Link to="/blog" className="block py-2 text-white hover:text-blue-400 transition-colors" onClick={toggleMenu}>Blog</Link></li>
          <li><Link to="/team" className="block py-2 text-white hover:text-blue-400 transition-colors" onClick={toggleMenu}>Team</Link></li>
          <li><Link to="/contact" className="block py-2 text-white hover:text-blue-400 transition-colors" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
