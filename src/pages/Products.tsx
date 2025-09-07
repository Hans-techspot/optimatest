import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, Truck, ShieldCheck } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'Optima AI Pro',
    description: 'Advanced AI solutions for business automation',
    price: 999,
    image: 'https://api.a0.dev/assets/image?text=Optima%20AI%20Pro&aspect=1:1&seed=123',
    rating: 4.8,
    features: ['Automated workflows', 'Predictive analytics', '24/7 support']
  },
  {
    id: 2,
    name: 'Optima AI Basic',
    description: 'Essential AI tools for small businesses',
    price: 499,
    image: 'https://api.a0.dev/assets/image?text=Optima%20AI%20Basic&aspect=1:1&seed=456',
    rating: 4.5,
    features: ['Basic automation', 'Customer support', 'Monthly updates']
  },
  {
    id: 3,
    name: 'Optima AI Enterprise',
    description: 'Comprehensive AI suite for large organizations',
    price: 1999,
    image: 'https://api.a0.dev/assets/image?text=Optima%20AI%20Enterprise&aspect=1:1&seed=789',
    rating: 4.9,
    features: ['Full automation', 'Advanced analytics', 'Priority support']
  }
];

const Products: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Our AI Solutions</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Transform your business with our cutting-edge AI products designed to streamline operations and drive growth.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: product.id * 0.1 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <Card className="h-full flex flex-col backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-sm flex items-center">
                  <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                  {product.rating}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-300 mb-4">{product.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-2xl font-bold">
                    ${product.price.toLocaleString()}
                    <span className="text-sm font-normal text-gray-400">/mo</span>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <Truck className="w-4 h-4 mr-1" />
                    Free Shipping
                  </div>
                  <div className="flex items-center">
                    <ShieldCheck className="w-4 h-4 mr-1" />
                    1 Year Warranty
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;