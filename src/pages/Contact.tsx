import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-8">Have questions? Reach out to us!</p>
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <input className="bg-gray-800 text-white appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-gray-700 focus:border-blue-500" type="text" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <input className="bg-gray-800 text-white appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-gray-700 focus:border-blue-500" type="email" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <textarea className="bg-gray-800 text-white appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-gray-700 focus:border-blue-500" placeholder="Your Message"></textarea>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
