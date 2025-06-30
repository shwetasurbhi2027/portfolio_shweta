
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-600">Ready to collaborate on exciting AI/ML projects</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">shwetasurbhi1@gmail.com</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">+91-9899533666</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600">New Delhi, India</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Github className="h-5 w-5 mr-2" />
            GitHub Profile
          </Button>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600">
            <Linkedin className="h-5 w-5 mr-2" />
            LinkedIn Profile
          </Button>
          <Button variant="outline" size="lg" className="bg-white/70 backdrop-blur-sm hover:bg-white/90">
            <Download className="h-5 w-5 mr-2" />
            Download Resume
          </Button>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Open to Opportunities</h3>
          <p className="text-gray-600 mb-6">
            I'm actively seeking internships and full-time opportunities in AI/ML, Software Development, and Research. 
            Let's discuss how we can work together to create innovative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">AI/ML Engineering</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Research</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Software Development</span>
            <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">Data Science</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
