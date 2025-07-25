import React from 'react';
import { ChevronDown, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image Placeholder */}
          <div className="mx-auto w-48 h-48 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-6xl font-bold text-white">JD</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Jayesh Deore
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Data Science and Statistics enthusiast with expertise in extracting insights, 
              building predictive models, and solving real-world problems through data.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base">
              {['Python', 'R', 'SQL', 'Machine Learning', 'Power BI', 'Tableau'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex justify-center space-x-6 pt-4">
              <a
                href="https://www.linkedin.com/in/jayesh-deore-731b60251/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/Jayeshdeorejd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </div>
          </div>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors animate-bounce"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}