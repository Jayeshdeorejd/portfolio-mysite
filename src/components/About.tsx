import React from 'react';
import { User, Target, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Intro
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <User className="w-32 h-32 text-white" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="prose prose-lg text-gray-700">
              <p className="text-xl leading-relaxed">
                I'm an MSc Statistics and Data Science student at NMIMS University, with a Bachelor's in Statistics. 
                I specialize in statistical modeling, machine learning, and business intelligence, using tools like 
                Python, R, Power BI, LangChain, and Streamlit.
              </p>
              
              <p className="text-xl leading-relaxed">
                I've worked on impactful projects like blockchain fraud detection, an AI-powered financial chatbot 
                using RAG, and financial risk modeling. I also led market research and marketing mix modeling during 
                my internship. As Co-Founder of Inquilab Company, I drive marketing and strategy through data-led 
                decision-making.
              </p>
              
              <p className="text-xl leading-relaxed font-semibold text-blue-600">
                I'm passionate about transforming complex data into real-world, high-impact solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <Target className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Mission</h3>
                <p className="text-gray-700">
                  Transform complex data into actionable insights that drive real-world impact and business success.
                </p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-xl">
                <Lightbulb className="w-8 h-8 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Vision</h3>
                <p className="text-gray-700">
                  Bridge the gap between statistical theory and practical applications in the evolving data landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}