import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, Clock, Tag } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of AI in Business Automation',
    excerpt: 'Exploring how AI is transforming business processes and what the future holds for automation.',
    content: 'Full article content here...',
    date: '2023-11-15',
    author: 'Jane Doe',
    readTime: '8 min read',
    category: 'Technology',
    image: 'https://api.a0.dev/assets/image?text=AI%20Business%20Automation&aspect=16:9&seed=123'
  },
  {
    id: 2,
    title: 'Machine Learning Trends for 2024',
    excerpt: 'A look at the emerging trends in machine learning that will shape the industry in the coming year.',
    content: 'Full article content here...',
    date: '2023-10-22',
    author: 'John Smith',
    readTime: '6 min read',
    category: 'Technology',
    image: 'https://api.a0.dev/assets/image?text=Machine%20Learning%20Trends&aspect=16:9&seed=456'
  },
  {
    id: 3,
    title: 'The Impact of AI on Healthcare',
    excerpt: 'How artificial intelligence is revolutionizing healthcare delivery and patient outcomes.',
    content: 'Full article content here...',
    date: '2023-09-10',
    author: 'Sarah Johnson',
    readTime: '10 min read',
    category: 'Healthcare',
    image: 'https://api.a0.dev/assets/image?text=AI%20in%20Healthcare&aspect=16:9&seed=789'
  }
];

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Optima AI Blog</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Stay updated with the latest insights, trends, and innovations in AI from our team of experts.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: post.id * 0.1 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <Card className="h-full flex flex-col backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                  <Tag className="w-4 h-4 inline mr-1" />
                  {post.category}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <User className="w-4 h-4 mr-1" />
                  By {post.author}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;