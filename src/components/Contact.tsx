import React from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about data science and statistics. 
              Feel free to reach out through any of the channels below!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:jayeshnmims2024@gmail.com"
              className="group bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-red-600 font-medium">jayeshnmims2024@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/jayesh-deore-731b60251/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h3>
              <p className="text-blue-600 font-medium">Connect with me</p>
            </a>

            <a
              href="https://github.com/Jayeshdeorejd"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">GitHub</h3>
              <p className="text-gray-600 font-medium">View my projects</p>
            </a>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
            <Send className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Whether you have a project in mind, need consultation on data science solutions, 
              or just want to discuss the latest trends in machine learning, I'd love to hear from you.
            </p>
            <a
              href="mailto:jayeshnmims2024@gmail.com"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}