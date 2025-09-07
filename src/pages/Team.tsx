import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin: string;
  twitter: string;
  email: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    position: 'CEO & Founder',
    bio: 'Alex is the visionary behind Optima AI, leading the company with over 15 years of experience in artificial intelligence and machine learning.',
    image: 'https://api.a0.dev/assets/image?text=Alex%20Johnson&aspect=1:1&seed=123',
    linkedin: 'https://linkedin.com/in/alexjohnson',
    twitter: 'https://twitter.com/alexjohnson',
    email: 'alex@optima.ai'
  },
  {
    id: 2,
    name: 'Sarah Williams',
    position: 'Chief Technology Officer',
    bio: 'Sarah leads our technical team, ensuring our AI solutions are at the cutting edge of technology with her expertise in software engineering.',
    image: 'https://api.a0.dev/assets/image?text=Sarah%20Williams&aspect=1:1&seed=456',
    linkedin: 'https://linkedin.com/in/sarahwilliams',
    twitter: 'https://twitter.com/sarahwilliams',
    email: 'sarah@optima.ai'
  },
  {
    id: 3,
    name: 'Michael Brown',
    position: 'Head of Product',
    bio: 'Michael oversees our product development, ensuring our solutions meet the needs of our customers with his deep understanding of user experience.',
    image: 'https://api.a0.dev/assets/image?text=Michael%20Brown&aspect=1:1&seed=789',
    linkedin: 'https://linkedin.com/in/michaelbrown',
    twitter: 'https://twitter.com/michaelbrown',
    email: 'michael@optima.ai'
  }
];

const Team: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Meet Our Team</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Our team of experts is dedicated to delivering cutting-edge AI solutions that transform businesses.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: member.id * 0.1 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <Card className="h-full flex flex-col backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-blue-300">{member.position}</p>
                </div>
              </div>
              <CardContent className="flex-grow p-6">
                <p className="text-gray-300 mb-4">{member.bio}</p>
                <div className="flex space-x-4 mt-auto">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href={`mailto:${member.email}`} className="text-blue-400 hover:text-blue-300">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;