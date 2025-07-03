import React from 'react';
import { Target, Heart, Lightbulb, Trophy, Users, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Academic Excellence',
      description: 'Rigorous curriculum designed to challenge and inspire every student to reach their highest potential.'
    },
    {
      icon: Heart,
      title: 'Character Development',
      description: 'Building integrity, compassion, and leadership skills that last a lifetime.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing technology and creative thinking to prepare students for tomorrow\'s challenges.'
    },
    {
      icon: Trophy,
      title: 'Achievement',
      description: 'Celebrating success in academics, arts, athletics, and community service.'
    }
  ];

  const faculty = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Head of School',
      education: 'Ph.D. Education Leadership, Harvard',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Prof. James Chen',
      role: 'STEM Director',
      education: 'M.S. Computer Science, MIT',
      image: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Ms. Elena Rodriguez',
      role: 'Arts & Humanities Chair',
      education: 'M.F.A. Creative Arts, Yale',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-academy-navy mb-6">
            About BrightBridge Academy
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over three decades, we've been shaping the minds of tomorrow's leaders through 
            innovative education, personalized attention, and an unwavering commitment to excellence.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-light-blue rounded-2xl p-8 lg:p-12 mb-16">
          <div className="text-center">
            <h3 className="font-montserrat font-bold text-3xl text-academy-navy mb-6">Our Mission</h3>
            <p className="font-open-sans text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              To provide an exceptional educational experience that empowers students to think critically, 
              act ethically, and contribute meaningfully to their communities. We foster intellectual 
              curiosity, creativity, and character development in a nurturing environment that celebrates 
              diversity and promotes global citizenship.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h3 className="font-montserrat font-bold text-3xl text-academy-navy text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-academy-blue p-3 rounded-lg w-fit mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-montserrat font-semibold text-xl text-academy-navy mb-3">
                  {value.title}
                </h4>
                <p className="font-open-sans text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* History & Accreditations */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-montserrat font-bold text-3xl text-academy-navy mb-6">Our History</h3>
            <div className="space-y-4 font-open-sans text-gray-700 leading-relaxed">
              <p>
                Founded in 1992 by visionary educators Dr. Robert and Margaret Bright, BrightBridge Academy 
                began with just 45 students and a dream to revolutionize private education.
              </p>
              <p>
                Over the past three decades, we've grown to serve over 450 students while maintaining our 
                commitment to small class sizes and personalized attention. Our graduates have gone on to 
                attend prestigious universities worldwide and become leaders in their chosen fields.
              </p>
              <p>
                Today, BrightBridge Academy stands as a beacon of educational excellence, consistently 
                ranked among the top private schools in the region.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-montserrat font-bold text-3xl text-academy-navy mb-6">Accreditations</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-warm-orange p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-montserrat font-semibold text-academy-navy">NAIS Accredited</div>
                  <div className="font-open-sans text-gray-600">National Association of Independent Schools</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-warm-orange p-2 rounded-lg">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-montserrat font-semibold text-academy-navy">Blue Ribbon School</div>
                  <div className="font-open-sans text-gray-600">U.S. Department of Education Recognition</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-warm-orange p-2 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-montserrat font-semibold text-academy-navy">IB World School</div>
                  <div className="font-open-sans text-gray-600">International Baccalaureate Program</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Faculty Highlights */}
        <div>
          <h3 className="font-montserrat font-bold text-3xl text-academy-navy text-center mb-12">
            Meet Our Distinguished Faculty
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="font-montserrat font-bold text-xl text-academy-navy mb-2">
                    {member.name}
                  </h4>
                  <p className="font-open-sans font-semibold text-warm-orange mb-2">
                    {member.role}
                  </p>
                  <p className="font-open-sans text-gray-600 text-sm">
                    {member.education}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <div className="bg-light-blue rounded-lg p-6 inline-block">
              <div className="font-montserrat font-bold text-2xl text-academy-navy mb-2">8:1</div>
              <div className="font-open-sans text-gray-700">Student-Teacher Ratio</div>
              <div className="font-open-sans text-sm text-gray-600 mt-2">
                Ensuring personalized attention for every student
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};