import React from 'react';
import { ExternalLink, Github, Shield, Bot, TrendingUp, BarChart3 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Blockchain Fraud Detection in Bitcoin Transactions",
      subtitle: "Advanced Machine Learning and Explainable AI",
      description: "Developed a stacked ensemble model for detecting anomalies in Bitcoin transactions using multiple ML algorithms. Integrated SHAP analysis for interpretability and deployed the model using Google Colab.",
      icon: Shield,
      github: "https://github.com/Jayeshdeorejd/Anomaly_Detection_in_Bitcoin_Transactions_with_Advanced_ML_and_XAI",
      tags: ["Machine Learning", "SHAP", "Ensemble Methods", "Fraud Detection"]
    },
    {
      title: "AI-Powered Financial Chatbot",
      subtitle: "LangChain, FAISS, and Streamlit",
      description: "Built an interactive financial chatbot using Retrieval-Augmented Generation (RAG) to answer queries from company annual reports. Integrated LangChain, HuggingFace embeddings, FAISS for vector search, and Streamlit for an intuitive web interface.",
      icon: Bot,
      github: "",
      tags: ["RAG", "LangChain", "FAISS", "Streamlit", "NLP"]
    },
    {
      title: "Financial Risk Measurement",
      subtitle: "Extreme Value Theory",
      description: "Applied Extreme Value Theory to estimate Value at Risk (VaR) and Expected Shortfall (ES) for major Indian banks. Used t-Copulas and statistical modeling to evaluate tail risk in financial returns.",
      icon: TrendingUp,
      github: "https://github.com/Jayeshdeorejd/Financial_risk_measurement_using_extreme_value_theory",
      tags: ["Risk Management", "EVT", "t-Copulas", "VaR", "Statistical Modeling"]
    },
    {
      title: "Statistical Analysis on Farmer Suicides in India",
      subtitle: "Demographic and Social Factor Analysis",
      description: "Conducted state-wise analysis of farmer suicides using demographic, social, and agricultural factors. Applied hypothesis testing, regression modeling, and visualized key patterns.",
      icon: BarChart3,
      github: "",
      tags: ["Statistical Analysis", "Hypothesis Testing", "Regression", "Data Visualization"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <p className="text-blue-600 font-medium">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}