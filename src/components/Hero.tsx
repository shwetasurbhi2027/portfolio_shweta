
import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Shweta Surbhi
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-2">
            AI/ML Engineer & Researcher
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Bachelor of Technology in Computer Science with AI
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
            <Phone className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium">+91-9899533666</span>
          </div>
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
            <Mail className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium">shwetasurbhi1@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
            <MapPin className="h-4 w-4 text-teal-600" />
            <span className="text-sm font-medium">New Delhi</span>
          </div>
        </div>
        
        <div className="flex justify-center gap-4 mb-12">
          <Button variant="outline" size="lg" className="bg-white/70 backdrop-blur-sm hover:bg-white/90">
            <Github className="h-5 w-5 mr-2" />
            GitHub
          </Button>
          <Button variant="outline" size="lg" className="bg-white/70 backdrop-blur-sm hover:bg-white/90">
            <Linkedin className="h-5 w-5 mr-2" />
            LinkedIn
          </Button>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Current CGPA</h2>
          <div className="text-5xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            8.72
          </div>
          <p className="text-gray-600 mt-2">Latest SGPA: 9.45</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
