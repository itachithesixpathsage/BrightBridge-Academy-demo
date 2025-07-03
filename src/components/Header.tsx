import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Phone, Calendar, Users } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Campus Life', href: '#campus' },
    { name: 'Contact', href: '#contact' },
  ];

  const quickLinks = [
    { name: 'Emergency', icon: Phone, href: '#emergency' },
    { name: 'Parent Portal', icon: Users, href: '#portal' },
    { name: 'Calendar', icon: Calendar, href: '#calendar' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Quick Links Bar */}
      <div className="bg-academy-navy text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex space-x-6">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center space-x-1 hover:text-warm-orange transition-colors"
              >
                <link.icon className="h-4 w-4" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>📧 info@brightbridgeacademy.edu</span>
            <span>📞 (555) 123-4567</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-4 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-academy-blue p-2 rounded-lg">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="font-montserrat font-bold text-xl text-academy-navy">
                BrightBridge Academy
              </h1>
              <p className="text-sm text-gray-600 font-open-sans">Excellence in Education</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-open-sans font-medium text-gray-700 hover:text-academy-blue transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-warm-orange text-white px-6 py-2 rounded-lg font-montserrat font-medium hover:bg-orange-500 transition-colors duration-200">
              Schedule a Tour
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-open-sans font-medium text-gray-700 hover:text-academy-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-warm-orange text-white px-6 py-2 rounded-lg font-montserrat font-medium hover:bg-orange-500 transition-colors w-fit">
                Schedule a Tour
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};