import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center text-gray-400">
            Made with <Heart className="w-4 h-4 mx-2 text-red-500" /> by Jayesh Deore
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 Jayesh Deore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}