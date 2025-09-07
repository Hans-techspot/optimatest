import React from 'react';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-xl bg-white/5 border-t border-white/10 py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Optima AI</h3>
            <p className="text-gray-300">We provide cutting-edge AI solutions to transform your business and drive innovation.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">About</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">Services</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">Products</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">Blog</a></li>
              <li><a href="/team" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">Team</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <a href="mailto:info@optimai.com" className="text-gray-300 hover:text-blue-400 transition-colors">info@optimai.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-blue-400 transition-colors">(123) 456-7890</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and news.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; 2025 Optima AI. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
