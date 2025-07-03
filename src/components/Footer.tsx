import React from 'react';
import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Academic Programs', href: '#academics' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Campus Life', href: '#campus' },
    { name: 'Faculty & Staff', href: '#faculty' },
    { name: 'Alumni', href: '#alumni' }
  ];

  const parentResources = [
    { name: 'Parent Portal', href: '#portal' },
    { name: 'Academic Calendar', href: '#calendar' },
    { name: 'Emergency Contacts', href: '#emergency' },
    { name: 'Transportation', href: '#transport' },
    { name: 'School Policies', href: '#policies' },
    { name: 'Newsletter', href: '#newsletter' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer id="contact" className="bg-academy-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-warm-orange p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-xl">BrightBridge Academy</h3>
                <p className="text-sm text-gray-300">Excellence in Education</p>
              </div>
            </div>
            <p className="font-open-sans text-gray-300 leading-relaxed mb-6">
              Empowering students to think critically, act ethically, and contribute meaningfully 
              to their communities for over 30 years.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-warm-orange" />
                <span className="font-open-sans">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-warm-orange" />
                <span className="font-open-sans">info@brightbridgeacademy.edu</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-warm-orange mt-1" />
                <div className="font-open-sans">
                  <p>1234 Education Drive</p>
                  <p>Learning Valley, CA 90210</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-open-sans text-gray-300 hover:text-warm-orange transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Parent Resources */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Parent Resources</h4>
            <ul className="space-y-3">
              {parentResources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="font-open-sans text-gray-300 hover:text-warm-orange transition-colors"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Stay Connected</h4>
            <p className="font-open-sans text-gray-300 mb-4">
              Subscribe to our newsletter for updates on events, achievements, and school news.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-warm-orange"
                />
                <button className="bg-warm-orange px-4 py-2 rounded-r-lg hover:bg-orange-500 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-open-sans text-gray-300 mb-3">Follow us on social media:</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-academy-blue p-2 rounded-lg hover:bg-warm-orange transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="mb-12">
          <h4 className="font-montserrat font-bold text-lg mb-6 text-center">Visit Our Campus</h4>
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-gray-500 text-center">
              <MapPin className="h-12 w-12 mx-auto mb-2" />
              <p className="font-open-sans">Interactive Campus Map</p>
              <p className="font-open-sans text-sm">1234 Education Drive, Learning Valley, CA 90210</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="font-open-sans text-gray-300">
              © 2025 BrightBridge Academy. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="font-open-sans text-gray-300 hover:text-warm-orange transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-open-sans text-gray-300 hover:text-warm-orange transition-colors">
                Terms of Service
              </a>
              <a href="#" className="font-open-sans text-gray-300 hover:text-warm-orange transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};