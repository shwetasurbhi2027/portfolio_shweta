
import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypingAnimation from './TypingAnimation';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Name and Title */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 min-h-[200px] lg:min-h-[160px]">
              <TypingAnimation 
                text="Shweta Surbhi" 
                speed={200}
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent"
              />
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-2">
              AI/ML Engineer & Researcher
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Bachelor of Technology in Computer Science with AI
            </p>
          </div>

          {/* Profile Image and CGPA */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 via-purple-400 to-teal-400 shadow-2xl">
                <img 
                  src="/lovable-uploads/b76f3581-9629-425c-8fc1-1562a4c4afe6.png" 
                  alt="Shweta Surbhi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 via-purple-400/20 to-teal-400/20"></div>
            </div>
            
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700">
              <h2 className="text-2xl font-bold text-gray-200 mb-4 text-center">Current CGPA</h2>
              <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent text-center">
                8.72
              </div>
              <p className="text-gray-400 mt-2 text-center">Latest SGPA: 9.45</p>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-gray-800/70 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-gray-700">
              <Phone className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-gray-300">+91-9899533666</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/70 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-gray-700">
              <Mail className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-medium text-gray-300">shwetasurbhi1@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/70 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-gray-700">
              <MapPin className="h-4 w-4 text-teal-400" />
              <span className="text-sm font-medium text-gray-300">New Delhi</span>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" size="lg" className="bg-gray-800/70 backdrop-blur-sm hover:bg-gray-700/90 border-gray-600 text-gray-300 hover:text-white">
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="bg-gray-800/70 backdrop-blur-sm hover:bg-gray-700/90 border-gray-600 text-gray-300 hover:text-white">
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
