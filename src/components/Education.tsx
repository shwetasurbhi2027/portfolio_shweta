
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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <p className="text-lg text-gray-600">Academic Journey & Achievements</p>
        </div>
        
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card key={index} className={`bg-white/80 backdrop-blur-sm border-l-4 ${edu.current ? 'border-l-blue-500' : 'border-l-gray-300'} hover:shadow-lg transition-all duration-300`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                    {edu.degree}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    {edu.year}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-2">{edu.institute}</p>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  edu.current ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
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
