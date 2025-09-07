import React from 'react';
import HeroSection from '../components/HeroSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Welcome to Our Website"
        subtitle="Discover amazing features and services"
        ctaText="Get Started"
        ctaLink="/services"
        imageUrl="https://api.a0.dev/assets/image?text=RideShare&aspect=1:1&seed=123"
      />
    </div>
  );
};

export default Home;
