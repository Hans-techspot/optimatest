import React from 'react';
import HeroSection from '../components/HeroSection';

const About: React.FC = () => {
  return (
    <div>
      <HeroSection
        title="About Us"
        subtitle="Learn more about our company and mission"
        ctaText="Contact Us"
        ctaLink="/contact"
        imageUrl="https://api.a0.dev/assets/image?text=About+Us&aspect=16:9&seed=123"
      />
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Our Story</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Founded in 2010, our company has been at the forefront of innovation in the tech industry. We started with a simple idea and have grown into a leading provider of cutting-edge solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our team of experts is dedicated to delivering exceptional products and services that meet the evolving needs of our clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
