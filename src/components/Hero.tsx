import React from 'react';
import { ChevronRight, Star, Award, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-light-blue via-white to-blue-50">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8923094/pexels-photo-8923094.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-warm-orange text-warm-orange" />
                ))}
              </div>
              <span className="text-gray-600 font-open-sans">Rated #1 Private School</span>
            </div>
            
            <h1 className="font-montserrat font-bold text-5xl lg:text-6xl text-academy-navy leading-tight mb-6">
              Where <span className="text-academy-blue">Potential</span> is{' '}
              <span className="text-warm-orange">Unlocked</span>
            </h1>
            
            <p className="font-open-sans text-xl text-gray-600 leading-relaxed mb-8">
              At BrightBridge Academy, we nurture tomorrow's leaders through innovative education, 
              personalized learning, and a commitment to excellence that spans over three decades.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-warm-orange text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-orange-500 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                Schedule a Tour
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-academy-blue text-academy-blue px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-academy-blue hover:text-white transition-all duration-300">
                Begin Application
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-montserrat font-bold text-3xl text-academy-navy mb-2">8:1</div>
                <div className="font-open-sans text-gray-600">Student-Teacher Ratio</div>
              </div>
              <div className="text-center">
                <div className="font-montserrat font-bold text-3xl text-academy-navy mb-2">98%</div>
                <div className="font-open-sans text-gray-600">College Acceptance</div>
              </div>
              <div className="text-center">
                <div className="font-montserrat font-bold text-3xl text-academy-navy mb-2">30+</div>
                <div className="font-open-sans text-gray-600">Years Excellence</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8923094/pexels-photo-8923094.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Diverse students engaged in collaborative learning"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-academy-navy/20 to-transparent"></div>
            </div>
            
            {/* Floating Achievement Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 animate-bounce-gentle">
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-warm-orange" />
                <div>
                  <div className="font-montserrat font-semibold text-academy-navy">NAIS Accredited</div>
                  <div className="font-open-sans text-sm text-gray-600">Excellence in Education</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 animate-bounce-gentle" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-academy-blue" />
                <div>
                  <div className="font-montserrat font-semibold text-academy-navy">450+ Students</div>
                  <div className="font-open-sans text-sm text-gray-600">Grades K-12</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};