
import React from 'react';
import { Code, Database, Wrench, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Java', 'C++', 'C', 'Python', 'SQL', 'R', 'HTML', 'CSS', 'JavaScript'],
      color: 'blue'
    },
    {
      title: 'Tools & Frameworks',
      icon: Wrench,
      skills: ['Jupyter', 'Visual Studio', 'Figma', 'Git', 'GitHub', 'NumPy', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      color: 'green'
    },
    {
      title: 'Core Expertise',
      icon: Brain,
      skills: ['Data Structures and Algorithms', 'Database Management System', 'Web Development', 'Computer Networks', 'Artificial Intelligence', 'Software Engineering', 'Operating Systems', 'Machine Learning'],
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600">Expertise & Technologies</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-t-4 ${getColorClasses(category.color)}`}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <category.icon className={`h-6 w-6 ${getColorClasses(category.color)}`} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
