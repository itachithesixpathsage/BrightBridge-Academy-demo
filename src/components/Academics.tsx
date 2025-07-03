import React from 'react';
import { BookOpen, Beaker, Palette, Globe, Music, Calculator, Microscope, Gamepad2 } from 'lucide-react';

export const Academics: React.FC = () => {
  const gradePrograms = [
    {
      level: 'Elementary (K-5)',
      description: 'Foundation building through play-based learning and core skill development',
      highlights: ['Phonics & Reading', 'Math Fundamentals', 'Science Exploration', 'Creative Arts']
    },
    {
      level: 'Middle School (6-8)',
      description: 'Transitional learning with increased independence and subject specialization',
      highlights: ['Advanced Mathematics', 'Laboratory Sciences', 'World Languages', 'Leadership Skills']
    },
    {
      level: 'High School (9-12)',
      description: 'College preparatory curriculum with AP courses and specialized tracks',
      highlights: ['AP Program', 'Dual Enrollment', 'Senior Capstone', 'College Counseling']
    }
  ];

  const specialPrograms = [
    {
      icon: Beaker,
      name: 'STEM Excellence',
      description: 'Advanced Science, Technology, Engineering, and Mathematics curriculum with hands-on labs and robotics.',
      features: ['State-of-the-art labs', 'Coding bootcamps', 'Engineering challenges', 'Science fairs']
    },
    {
      icon: Palette,
      name: 'Creative Arts',
      description: 'Comprehensive arts education including visual arts, theater, music, and digital media.',
      features: ['Professional studios', 'Performance opportunities', 'Art exhibitions', 'Digital creation']
    },
    {
      icon: Globe,
      name: 'Global Languages',
      description: 'World language immersion programs preparing students for global citizenship.',
      features: ['Spanish & French', 'Cultural exchanges', 'Native speakers', 'Study abroad prep']
    },
    {
      icon: BookOpen,
      name: 'Advanced Placement',
      description: 'College-level courses across multiple disciplines for high-achieving students.',
      features: ['20+ AP courses', 'College credit', 'Expert instruction', 'Test preparation']
    }
  ];

  const activities = [
    { icon: Calculator, name: 'Math Team', category: 'Academic' },
    { icon: Microscope, name: 'Science Club', category: 'Academic' },
    { icon: Music, name: 'Orchestra', category: 'Arts' },
    { icon: Palette, name: 'Art Society', category: 'Arts' },
    { icon: Globe, name: 'Model UN', category: 'Leadership' },
    { icon: BookOpen, name: 'Debate Team', category: 'Leadership' },
    { icon: Gamepad2, name: 'Robotics', category: 'STEM' },
    { icon: Beaker, name: 'Chemistry Club', category: 'STEM' }
  ];

  return (
    <section id="academics" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-academy-navy mb-6">
            Academic Excellence
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive curriculum challenges students to think critically, solve problems creatively, 
            and develop the skills needed for success in college and beyond.
          </p>
        </div>

        {/* Grade Level Programs */}
        <div className="mb-20">
          <h3 className="font-montserrat font-bold text-3xl text-academy-navy text-center mb-12">
            Grade Level Programs
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {gradePrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <h4 className="font-montserrat font-bold text-2xl text-academy-navy mb-4">
                  {program.level}
                </h4>
                <p className="font-open-sans text-gray-700 mb-6 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-2">
                  {program.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-warm-orange rounded-full"></div>
                      <span className="font-open-sans text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Special Programs */}
        <div className="mb-20">
          <h3 className="font-montserrat font-bold text-3xl text-academy-navy text-center mb-12">
            Specialized Programs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-academy-blue p-4 rounded-lg w-fit mx-auto mb-4">
                  <program.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-montserrat font-bold text-xl text-academy-navy mb-3">
                  {program.name}
                </h4>
                <p className="font-open-sans text-gray-600 mb-4 leading-relaxed">
                  {program.description}
                </p>
                <ul className="text-left space-y-1">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-warm-orange rounded-full"></div>
                      <span className="font-open-sans text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum Highlights */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 mb-20">
          <h3 className="font-montserrat font-bold text-3xl text-academy-navy text-center mb-8">
            Curriculum Highlights
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="font-montserrat font-bold text-3xl text-warm-orange mb-2">20+</div>
              <div className="font-open-sans text-gray-700">AP Courses Offered</div>
            </div>
            <div className="text-center">
              <div className="font-montserrat font-bold text-3xl text-warm-orange mb-2">100%</div>
              <div className="font-open-sans text-gray-700">College Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="font-montserrat font-bold text-3xl text-warm-orange mb-2">4.2</div>
              <div className="font-open-sans text-gray-700">Average AP Score</div>
            </div>
            <div className="text-center">
              <div className="font-montserrat font-bold text-3xl text-warm-orange mb-2">6</div>
              <div className="font-open-sans text-gray-700">World Languages</div>
            </div>
            <div className="text-center">
              <div className="font-montserrat font-bold text-3xl text-warm-orange mb-2">15</div>
              <div className="font-open-sans text-gray-700">Science Labs</div>
            </div>
            <div className="text-center">
              <div className="font-montserrat font-bold text-3xl text-warm-orange mb-2">95%</div>
              <div className="font-open-sans text-gray-700">Graduate Satisfaction</div>
            </div>
          </div>
        </div>

        {/* After-School Activities */}
        <div>
          <h3 className="font-montserrat font-bold text-3xl text-academy-navy text-center mb-12">
            After-School Activities & Clubs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-light-blue p-3 rounded-lg w-fit mx-auto mb-3 group-hover:bg-academy-blue transition-colors">
                  <activity.icon className="h-6 w-6 text-academy-blue group-hover:text-white" />
                </div>
                <h4 className="font-montserrat font-semibold text-academy-navy mb-1">
                  {activity.name}
                </h4>
                <p className="font-open-sans text-sm text-gray-600">{activity.category}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-academy-blue text-white px-8 py-3 rounded-lg font-montserrat font-semibold hover:bg-academy-navy transition-colors">
              View All Activities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};