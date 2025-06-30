
import React from 'react';
import { Code, ExternalLink, Github, Calendar, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'apkiPehchan',
      subtitle: 'Voice-based automated attendance',
      period: 'Present',
      status: 'In Progress',
      description: [
        'Developed a multilingual AI attendance assistant (English and Hindi) with text-to-speech features',
        'Trained models on 1000+ audio samples, achieving 95% recognition accuracy with noise cancellation techniques'
      ],
      technologies: ['Python', 'Machine Learning', 'Voice Recognition', 'AI'],
      github: true,
      deployed: false
    },
    {
      title: 'IGDTUW Marketplace',
      subtitle: 'A student-centric platform for campus-based buying and selling',
      period: 'Present',
      status: 'Live',
      description: [
        'Developed a web app using React and Firebase for IGDTUW students to buy and sell used items on campus',
        'Research paper accepted at ICAIN 2025; to be published in Springer LNNS'
      ],
      technologies: ['React', 'Firebase', 'Web Development', 'Research'],
      github: false,
      deployed: true,
      research: true
    },
    {
      title: 'Neuro-nurture',
      subtitle: 'Adaptive learning platform for neurodiverse',
      period: 'Oct 2024',
      status: 'Completed',
      description: [
        'Created a responsive and adaptive learning platform to address the distinct requirements of neurodiverse students',
        'Conducted in-depth user research and iterative testing, ensuring platform usability and boosting engagement'
      ],
      technologies: ['React', 'UI/UX', 'Accessibility', 'User Research'],
      github: false,
      deployed: true
    },
    {
      title: 'Krida',
      subtitle: 'Centralized, inclusive sports info platform',
      period: 'Apr 2024',
      status: 'Completed',
      description: [
        'Conceptualized and implemented a centralized platform to provide seamless access to information about national-level athletic events',
        'Designed an intuitive and inclusive user interface, promoting accessibility across diverse populations'
      ],
      technologies: ['Web Development', 'UI/UX', 'Accessibility', 'Sports'],
      github: false,
      deployed: true
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <p className="text-lg text-gray-600">Building Solutions & Driving Innovation</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-t-4 border-t-purple-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-2">
                      <Code className="h-5 w-5 text-purple-600" />
                      {project.title}
                    </CardTitle>
                    <p className="text-gray-600 mb-3">{project.subtitle}</p>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <Badge variant={project.status === 'In Progress' ? 'default' : project.status === 'Live' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {project.period}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {project.description.map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start gap-2">
                      <span className="text-purple-500 mt-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 flex-wrap">
                  {project.github && (
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  )}
                  {project.deployed && (
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {project.research && (
                    <Button variant="outline" size="sm">
                      <Users className="h-4 w-4 mr-2" />
                      Research Paper
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
