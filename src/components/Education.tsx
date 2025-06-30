
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Education = () => {
  const educationData = [
    {
      year: '2023-2027',
      degree: 'B.Tech Computer Science with AI',
      institute: 'Indira Gandhi Delhi Technical University for Women, New Delhi',
      score: '8.72 CGPA (Latest SGPA: 9.45)',
      current: true
    },
    {
      year: '2021',
      degree: 'CBSE (XII)',
      institute: 'Oxford Senior Secondary, New Delhi',
      score: '86%',
      current: false
    },
    {
      year: '2019',
      degree: 'CBSE (X)',
      institute: 'Oxford Senior Secondary, New Delhi',
      score: '85%',
      current: false
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-lg text-gray-400">Academic Journey & Achievements</p>
        </div>
        
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card key={index} className={`bg-gray-800/80 backdrop-blur-sm border-l-4 ${edu.current ? 'border-l-blue-400' : 'border-l-gray-600'} hover:shadow-2xl transition-all duration-300 border border-gray-700`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-blue-400" />
                    {edu.degree}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="h-4 w-4" />
                    {edu.year}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-2">{edu.institute}</p>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  edu.current ? 'bg-blue-900/50 text-blue-300 border border-blue-700' : 'bg-gray-700/50 text-gray-300 border border-gray-600'
                }`}>
                  {edu.score}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
