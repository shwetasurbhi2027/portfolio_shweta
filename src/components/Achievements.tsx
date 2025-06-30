
import React from 'react';
import { Trophy, Award, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const achievements = [
    {
      title: 'Best Woman in Engineering - Vihaan 007',
      description: 'Awarded among 1200+ participants for outstanding performance',
      year: '2024',
      type: 'Award',
      icon: Trophy,
      color: 'gold'
    },
    {
      title: 'Gen AI Study Jam Program',
      description: 'Selected from thousands of students to participate in this prestigious program, gaining hands-on experience and deep insights into Generative AI technologies',
      year: '2024',
      type: 'Program',
      icon: Award,
      color: 'blue'
    },
    {
      title: 'Smart India Hackathon (SIH) External Round',
      description: 'Achieved recognition as one of the top 50 teams nationwide, earning the opportunity to represent the college in this esteemed innovation competition',
      year: '2024',
      type: 'Competition',
      icon: Users,
      color: 'green'
    },
    {
      title: 'GirlScript Summer of Code',
      description: 'Actively contributed to open-source projects during Girl Script Summer of Code 2024, collaborating with developers to enhance project functionalities and improve code quality',
      year: '2024',
      type: 'Open Source',
      icon: Users,
      color: 'purple'
    }
  ];

  const activities = [
    {
      title: 'Devcation - IGDTUW',
      description: 'Participated in Devcation and demonstrated technical skills and teamwork',
      year: '2024'
    },
    {
      title: 'Hack24 - IIIT Delhi',
      description: 'Competed in Hack24, developed innovative solutions in a competitive hackathon',
      year: '2024'
    },
    {
      title: 'WIEgnite',
      description: 'Engaged in networking and skill-building for women in engineering',
      year: '2024'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'gold':
        return 'border-t-yellow-500 text-yellow-600';
      case 'blue':
        return 'border-t-blue-500 text-blue-600';
      case 'green':
        return 'border-t-green-500 text-green-600';
      case 'purple':
        return 'border-t-purple-500 text-purple-600';
      default:
        return 'border-t-gray-500 text-gray-600';
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Achievements & Activities</h2>
          <p className="text-lg text-gray-600">Recognition & Community Involvement</p>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">Major Achievements</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className={`bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-t-4 ${getColorClasses(achievement.color)}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-2">
                        <achievement.icon className={`h-5 w-5 ${getColorClasses(achievement.color)}`} />
                        {achievement.title}
                      </CardTitle>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <Badge variant="outline">{achievement.type}</Badge>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {achievement.year}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">Extra-Curricular Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-l-4 border-l-teal-500">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <Users className="h-5 w-5 text-teal-600" />
                    {activity.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    {activity.year}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
