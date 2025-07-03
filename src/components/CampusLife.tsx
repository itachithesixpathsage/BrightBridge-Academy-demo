import React, { useState } from 'react';
import { Camera, MapPin, Shield, Users, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

export const CampusLife: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      url: 'https://images.pexels.com/photos/8923094/pexels-photo-8923094.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Classrooms',
      title: 'Modern Learning Spaces'
    },
    {
      url: 'https://images.pexels.com/photos/5427644/pexels-photo-5427644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Science',
      title: 'State-of-the-Art Labs'
    },
    {
      url: 'https://images.pexels.com/photos/7092365/pexels-photo-7092365.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Arts',
      title: 'Creative Studios'
    },
    {
      url: 'https://images.pexels.com/photos/8923123/pexels-photo-8923123.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Athletics',
      title: 'Sports Facilities'
    },
    {
      url: 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Library',
      title: 'Learning Commons'
    },
    {
      url: 'https://images.pexels.com/photos/8923065/pexels-photo-8923065.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Dining',
      title: 'Cafeteria & Commons'
    }
  ];

  const facilities = [
    {
      name: 'Science & Technology Center',
      description: 'State-of-the-art laboratories for chemistry, physics, biology, and computer science',
      features: ['15 specialized labs', '3D printing station', 'Robotics workshop', 'Maker space']
    },
    {
      name: 'Arts & Performance Wing',
      description: 'Professional-grade facilities for visual and performing arts education',
      features: ['Art studios', '500-seat auditorium', 'Music practice rooms', 'Dance studio']
    },
    {
      name: 'Athletic Complex',
      description: 'Comprehensive sports facilities supporting our championship athletics program',
      features: ['Full-size gymnasium', 'Olympic pool', 'Track & field', 'Tennis courts']
    },
    {
      name: 'Learning Commons',
      description: 'Modern library and collaborative learning spaces with extensive digital resources',
      features: ['50,000+ books', 'Digital media center', 'Study pods', '24/7 online access']
    }
  ];

  const safetyMeasures = [
    {
      icon: Shield,
      title: 'Secure Campus',
      description: 'Controlled access points and 24/7 security monitoring'
    },
    {
      icon: Users,
      title: 'Staff Training',
      description: 'All staff certified in CPR, first aid, and emergency response'
    },
    {
      icon: MapPin,
      title: 'Safe Transportation',
      description: 'GPS-tracked buses with certified drivers and safety protocols'
    },
    {
      icon: Calendar,
      title: 'Emergency Preparedness',
      description: 'Regular drills and comprehensive emergency response plans'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="campus" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-academy-navy mb-6">
            Campus Life
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience a vibrant campus community where learning extends beyond the classroom. 
            Our 75-acre campus provides the perfect environment for academic excellence and personal growth.
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="mb-20">
          <h3 className="font-montserrat font-bold text-3xl text-academy-navy text-center mb-12">
            Campus Photo Gallery
          </h3>
          
          {/* Main Gallery Display */}
          <div className="relative mb-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={galleryImages[currentImageIndex].url}
                alt={galleryImages[currentImageIndex].title}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-open-sans text-sm bg-warm-orange px-3 py-1 rounded-full mb-2">
                  {galleryImages[currentImageIndex].category}
                </p>
                <h4 className="font-montserrat font-bold text-2xl">
                  {galleryImages[currentImageIndex].title}
                </h4>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-academy-navy" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-academy-navy" />
            </button>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative rounded-lg overflow-hidden h-20 ${
                  index === currentImageIndex ? 'ring-4 ring-academy-blue' : 'opacity-70 hover:opacity-100'
                } transition-all duration-300`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Virtual Tour */}
        <div className="mb-20 bg-light-blue rounded-2xl p-8 lg:p-12 text-center">
          <Camera className="h-16 w-16 text-academy-blue mx-auto mb-6" />
          <h3 className="font-montserrat font-bold text-3xl text-academy-navy mb-6">
            Take a Virtual Tour
          </h3>
          <p className="font-open-sans text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Explore our beautiful campus from the comfort of your home with our interactive 360° virtual tour. 
            Walk through classrooms, labs, and common areas to get a true feel for the BrightBridge experience.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg p-6">
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-4">
                <div className="text-gray-500 text-center">
                  <Camera className="h-12 w-12 mx-auto mb-2" />
                  <p className="font-open-sans">Interactive Campus Tour</p>
                </div>
              </div>
              <h4 className="font-montserrat font-semibold text-academy-navy mb-2">
                Full Campus Experience
              </h4>
              <p className="font-open-sans text-sm text-gray-600">
                Visit every building and outdoor space
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-4">
                <div className="text-gray-500 text-center">
                  <Users className="h-12 w-12 mx-auto mb-2" />
                  <p className="font-open-sans">Live Virtual Tour</p>
                </div>
              </div>
              <h4 className="font-montserrat font-semibold text-academy-navy mb-2">
                Guided Experience
              </h4>
              <p className="font-open-sans text-sm text-gray-600">
                Join a live tour with Q&A session
              </p>
            </div>
          </div>
          <button className="bg-academy-blue text-white px-8 py-3 rounded-lg font-montserrat font-semibold hover:bg-academy-navy transition-colors">
            Start Virtual Tour
          </button>
        </div>

        {/* Campus Facilities */}
        <div className="mb-20">
          <h3 className="font-montserrat font-bold text-3xl text-academy-navy text-center mb-12">
            Campus Facilities
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <h4 className="font-montserrat font-bold text-2xl text-academy-navy mb-4">
                  {facility.name}
                </h4>
                <p className="font-open-sans text-gray-700 mb-6 leading-relaxed">
                  {facility.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {facility.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-warm-orange rounded-full"></div>
                      <span className="font-open-sans text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety & Security */}
        <div>
          <h3 className="font-montserrat font-bold text-3xl text-academy-navy text-center mb-12">
            Safety & Security
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {safetyMeasures.map((measure, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-academy-blue p-3 rounded-lg w-fit mx-auto mb-4">
                  <measure.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-montserrat font-semibold text-xl text-academy-navy mb-3">
                  {measure.title}
                </h4>
                <p className="font-open-sans text-gray-600 leading-relaxed">
                  {measure.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-academy-navy rounded-2xl p-8 lg:p-12 text-white text-center">
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h4 className="font-montserrat font-bold text-2xl mb-4">
              Your Child's Safety is Our Priority
            </h4>
            <p className="font-open-sans text-lg mb-6 max-w-2xl mx-auto">
              We maintain the highest safety standards with comprehensive security measures, 
              trained staff, and emergency protocols to ensure every student feels safe and secure.
            </p>
            <button className="bg-warm-orange text-white px-6 py-3 rounded-lg font-montserrat font-semibold hover:bg-orange-500 transition-colors">
              View Safety Protocols
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};