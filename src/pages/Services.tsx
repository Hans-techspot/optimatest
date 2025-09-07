import React from 'react';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications tailored to your business needs.',
      icon: '🌐',
    },
    {
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications for iOS and Android.',
      icon: '📱',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services.',
      icon: '☁️',
    },
    {
      title: 'Data Analytics',
      description: 'Advanced analytics and business intelligence solutions.',
      icon: '📊',
    },
  ];

  return (
    <div>
      <HeroSection
        title="Our Services"
        subtitle="Discover the solutions we offer to help your business grow"
        ctaText="Get Started"
        ctaLink="/contact"
        imageUrl="https://api.a0.dev/assets/image?text=Our+Services&aspect=16:9&seed=123"
      />
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
