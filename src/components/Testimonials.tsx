import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Parent of Emma (Grade 10)',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      text: 'BrightBridge Academy has exceeded our expectations in every way. Emma has grown not just academically but as a confident, compassionate young woman. The teachers truly care about each student\'s success.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Parent of Alex (Grade 8)',
      image: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      text: 'The STEM program here is outstanding. Alex discovered his passion for robotics and coding through the innovative curriculum. He\'s already talking about becoming an engineer!',
      rating: 5
    },
    {
      name: 'Dr. Lisa Martinez',
      role: 'Parent of Sofia (Grade 12)',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      text: 'Sofia just got accepted to her dream university with a scholarship. The college counseling program and rigorous academics prepared her perfectly. We couldn\'t be more grateful.',
      rating: 5
    },
    {
      name: 'Robert Williams',
      role: 'Parent of Marcus (Grade 6)',
      image: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      text: 'The transition to middle school was seamless thanks to the amazing support system. Marcus loves his teachers and has made wonderful friends. The character development program is exceptional.',
      rating: 5
    },
    {
      name: 'Jennifer Taylor',
      role: 'Parent of Olivia (Grade 4)',
      image: 'https://images.pexels.com/photos/6147094/pexels-photo-6147094.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      text: 'Olivia looks forward to school every day! The creative arts program has helped her express herself, and the small class sizes mean she gets the individual attention she needs.',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Parent of Noah (Grade 11)',
      image: 'https://images.pexels.com/photos/5384588/pexels-photo-5384588.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      text: 'The AP program is challenging but incredibly rewarding. Noah\'s critical thinking skills have improved dramatically, and he\'s developed a real love for learning.',
      rating: 5
    }
  ];

  const successStories = [
    {
      student: 'Class of 2023',
      achievement: '100% College Acceptance Rate',
      description: 'Every graduate was accepted to their first or second choice university'
    },
    {
      student: 'Emma Rodriguez \'22',
      achievement: 'Full Scholarship to Stanford',
      description: 'Computer Science program with focus on AI research'
    },
    {
      student: 'James Park \'23',
      achievement: 'National Merit Scholar',
      description: 'One of three students nationwide in environmental science'
    },
    {
      student: 'Maya Patel \'21',
      achievement: 'Rhodes Scholar Finalist',
      description: 'Now studying international relations at Oxford'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-academy-navy mb-6">
            What Parents Say
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from the families who have experienced 
            the BrightBridge Academy difference firsthand.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative mb-6">
                <Quote className="h-8 w-8 text-warm-orange opacity-50 absolute -top-2 -left-2" />
                <p className="font-open-sans text-gray-700 leading-relaxed pl-6">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-montserrat font-semibold text-academy-navy">
                    {testimonial.name}
                  </h4>
                  <p className="font-open-sans text-sm text-gray-600 mb-2">
                    {testimonial.role}
                  </p>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warm-orange text-warm-orange" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div>
          <h3 className="font-montserrat font-bold text-3xl text-academy-navy text-center mb-12">
            Student Success Stories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-academy-blue text-white p-3 rounded-lg w-fit mx-auto mb-4">
                  <Star className="h-6 w-6" />
                </div>
                <h4 className="font-montserrat font-bold text-lg text-academy-navy mb-2">
                  {story.student}
                </h4>
                <p className="font-open-sans font-semibold text-warm-orange mb-3">
                  {story.achievement}
                </p>
                <p className="font-open-sans text-sm text-gray-600 leading-relaxed">
                  {story.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Video Testimonials Section */}
        <div className="mt-20 bg-light-blue rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="font-montserrat font-bold text-3xl text-academy-navy mb-6">
            Watch Our Video Testimonials
          </h3>
          <p className="font-open-sans text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience the genuine emotions and stories from our parent community. 
            See how BrightBridge Academy has transformed their children's lives.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-4">
                <div className="text-gray-500">
                  <div className="w-16 h-16 bg-academy-blue rounded-full flex items-center justify-center mx-auto mb-2">
                    <div className="w-0 h-0 border-l-6 border-l-white border-y-4 border-y-transparent ml-1"></div>
                  </div>
                  <p className="font-open-sans">Parent Testimonial Video</p>
                </div>
              </div>
              <h4 className="font-montserrat font-semibold text-academy-navy mb-2">
                The Peterson Family
              </h4>
              <p className="font-open-sans text-sm text-gray-600">
                "Why we chose BrightBridge Academy"
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-4">
                <div className="text-gray-500">
                  <div className="w-16 h-16 bg-academy-blue rounded-full flex items-center justify-center mx-auto mb-2">
                    <div className="w-0 h-0 border-l-6 border-l-white border-y-4 border-y-transparent ml-1"></div>
                  </div>
                  <p className="font-open-sans">Student Success Story</p>
                </div>
              </div>
              <h4 className="font-montserrat font-semibold text-academy-navy mb-2">
                Alumni Achievement
              </h4>
              <p className="font-open-sans text-sm text-gray-600">
                "From BrightBridge to Harvard Medical School"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};