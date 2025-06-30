
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
        return 'border-t-blue-400 text-blue-400';
      case 'green':
        return 'border-t-green-400 text-green-400';
      case 'purple':
        return 'border-t-purple-400 text-purple-400';
      default:
        return 'border-t-gray-400 text-gray-400';
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-400">Expertise & Technologies</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-t-4 border border-gray-700 ${getColorClasses(category.color)}`}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
                  <category.icon className={`h-6 w-6 ${getColorClasses(category.color)}`} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs bg-gray-700/50 text-gray-300 border border-gray-600 hover:bg-gray-600/50">
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
