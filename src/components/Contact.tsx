
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-400">Ready to collaborate on exciting AI/ML projects</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border border-gray-700">
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">shwetasurbhi1@gmail.com</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border border-gray-700">
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+91-9899533666</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border border-gray-700">
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-300">New Delhi, India</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            <Github className="h-5 w-5 mr-2" />
            GitHub Profile
          </Button>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white">
            <Linkedin className="h-5 w-5 mr-2" />
            LinkedIn Profile
          </Button>
          <Button variant="outline" size="lg" className="bg-gray-800/70 backdrop-blur-sm hover:bg-gray-700/90 border-gray-600 text-gray-300 hover:text-white">
            <Download className="h-5 w-5 mr-2" />
            Download Resume
          </Button>
        </div>
        
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">Open to Opportunities</h3>
          <p className="text-gray-300 mb-6">
            I'm actively seeking internships and full-time opportunities in AI/ML, Software Development, and Research. 
            Let's discuss how we can work together to create innovative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-700">AI/ML Engineering</span>
            <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-700">Research</span>
            <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-sm font-medium border border-green-700">Software Development</span>
            <span className="bg-teal-900/50 text-teal-300 px-3 py-1 rounded-full text-sm font-medium border border-teal-700">Data Science</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
