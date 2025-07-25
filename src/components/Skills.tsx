import React from 'react';
import { Code, Database, Brain, Wrench, Users, BarChart } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming & Scripting",
      icon: Code,
      skills: ["Python", "R", "SQL"],
      color: "blue"
    },
    {
      title: "Data Analysis & Visualization",
      icon: BarChart,
      skills: ["Pandas", "NumPy", "Excel", "Power BI", "Matplotlib", "Seaborn"],
      color: "green"
    },
    {
      title: "Machine Learning & Modeling",
      icon: Brain,
      skills: ["Scikit-learn", "XGBoost", "LSTM (basic)", "t-Copula", "Regression", "Classification", "Clustering", "Time Series Analysis", "Hypothesis Testing", "Extreme Value Theory"],
      color: "purple"
    },
    {
      title: "AI & NLP",
      icon: Database,
      skills: ["LangChain", "HuggingFace Embeddings", "FAISS", "Retrieval-Augmented Generation (RAG)", "Text Preprocessing", "Topic Modeling", "SHAP"],
      color: "indigo"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Jupyter Notebook", "Google Colab", "Streamlit", "Git"],
      color: "orange"
    },
    {
      title: "Soft Skills & Strategy",
      icon: Users,
      skills: ["Market Research", "Campaign Planning", "Strategic Thinking", "Data Storytelling", "Communication", "Team Leadership"],
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-50 text-blue-800 border-blue-200",
      green: "bg-green-50 text-green-800 border-green-200",
      purple: "bg-purple-50 text-purple-800 border-purple-200",
      indigo: "bg-indigo-50 text-indigo-800 border-indigo-200",
      orange: "bg-orange-50 text-orange-800 border-orange-200",
      pink: "bg-pink-50 text-pink-800 border-pink-200"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      indigo: "text-indigo-600",
      orange: "text-orange-600",
      pink: "text-pink-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${category.color === 'blue' ? 'bg-blue-100' : 
                    category.color === 'green' ? 'bg-green-100' :
                    category.color === 'purple' ? 'bg-purple-100' :
                    category.color === 'indigo' ? 'bg-indigo-100' :
                    category.color === 'orange' ? 'bg-orange-100' : 'bg-pink-100'}`}>
                    <IconComponent className={`w-6 h-6 ${getIconColorClasses(category.color)}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full border ${getColorClasses(category.color)}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}