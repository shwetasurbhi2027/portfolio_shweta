
import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: 'AI/ML Intern',
      company: 'Lokachakra - Web3 AI Startup',
      location: 'Remote',
      period: 'June 2025 – July 2025',
      type: 'Internship',
      description: [
        'Developing agentic AI systems and LLM-based architectures from scratch for real-world matchmaking use cases',
        'Building a multi-agent framework to connect startup founders with relevant investors, mentors, or professionals',
        'Exploring and implementing evolving SLMS, LLMS, and decentralized coordination strategies'
      ],
      current: true
    },
    {
      title: 'Researcher, Material Science',
      company: 'IGDTUW',
      location: 'New Delhi',
      period: 'September 2024 - December 2024',
      type: 'Research',
      description: [
        'Co-authored the research paper titled "The Impact of Material Quality on Speaker Performance and Sound Reproduction"'
      ],
      current: false
    },
    {
      title: 'AI/ML Research Trainee, Summer Intern',
      company: 'Centre of Excellence - AI Certificate',
      location: 'IGDTUW',
      period: 'June 2024 - July 2024',
      type: 'Research Internship',
      description: [
        'Designed and deployed a real-time diabetes detection system leveraging machine learning techniques',
        'Utilized Python and algorithms such as Logistic Regression, Decision Tree, Random Forest, SVC, KNN, and Naive Bayes, achieving a peak accuracy of 95%',
        'Co-authored the research paper titled "Early Screening of Diabetes using Machine Learning", published in the International Journal for Multidisciplinary Research (IJFMR)'
      ],
      current: false
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience</h2>
          <p className="text-lg text-gray-600">Professional Journey & Research Work</p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className={`bg-white/90 backdrop-blur-sm border-l-4 ${exp.current ? 'border-l-green-500' : 'border-l-blue-500'} hover:shadow-lg transition-all duration-300`}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-2">
                      <Briefcase className="h-5 w-5 text-blue-600" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-lg font-medium text-gray-700">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge variant={exp.current ? "default" : "secondary"} className="w-fit">
                      {exp.type}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start gap-2">
                      <span className="text-blue-500 mt-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
