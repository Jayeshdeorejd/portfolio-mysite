import React from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const education = [
    {
      degree: "Master of Science",
      specialization: "Statistics and Data Science",
      institution: "NSOMASA, NMIMS University, Mumbai",
      duration: "July 2024 - Present",
      grade: "CGPA: 8.82",
      current: true
    },
    {
      degree: "Bachelor of Science",
      specialization: "Statistics",
      institution: "K.R.T. Arts B.H. Commerce and A.M. Science College, Nashik",
      duration: "Aug 2021 - May 2024",
      grade: "CGPA: 9.58",
      current: false
    },
    {
      degree: "Higher Secondary Education (HSC)",
      specialization: "Science",
      institution: "",
      duration: "Aug 2019 - June 2021",
      grade: "Percentage: 86.50%",
      current: false
    },
    {
      degree: "Senior Secondary Education (SSC)",
      specialization: "",
      institution: "",
      duration: "",
      grade: "Percentage: 90.40%",
      current: false
    }
  ];

  const internships = [
    {
      title: "Data Analyst Intern",
      company: "Market Maven International",
      duration: "May 2025 – July 2025",
      tools: "Python, Excel, Power BI",
      responsibilities: [
        "Conducted market research on handmade organic soaps for international markets",
        "Performed exploratory data analysis (EDA) to identify consumer trends, pricing patterns, and product preferences",
        "Applied Marketing Mix Modeling (MMM) to assess the effectiveness of various marketing channels using insurance campaign data",
        "Built actionable dashboards in Power BI to support strategic decision-making for insurance marketing initiatives"
      ]
    },
    {
      title: "Data Science Intern",
      company: "Unified Mentor Pvt. Ltd.",
      duration: "Jan 2024 – Feb 2024",
      tools: "Python, Scikit-learn, Pandas",
      responsibilities: [
        "Supported a climate change modeling project using historical data to explore temperature and sea-level trends",
        "Gained hands-on exposure to data preprocessing, feature selection, and model evaluation techniques"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                    {edu.current && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  
                  {edu.specialization && (
                    <p className="text-blue-600 font-medium mb-2">{edu.specialization}</p>
                  )}
                  
                  {edu.institution && (
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{edu.institution}</span>
                    </div>
                  )}
                  
                  {edu.duration && (
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{edu.duration}</span>
                    </div>
                  )}
                  
                  <div className="text-sm font-medium text-gray-900">{edu.grade}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Internships</h3>
            </div>
            
            <div className="space-y-6">
              {internships.map((internship, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{internship.title}</h4>
                  <p className="text-blue-600 font-medium mb-2">{internship.company}</p>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{internship.duration}</span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-700">Tools Used: </span>
                    <span className="text-sm text-gray-600">{internship.tools}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {internship.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}