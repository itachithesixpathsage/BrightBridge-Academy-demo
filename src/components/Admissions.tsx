import React, { useState } from 'react';
import { Calendar, DollarSign, FileText, Users, CheckCircle, Clock } from 'lucide-react';

export const Admissions: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    grade: '',
    email: '',
    phone: '',
    contactMethod: 'email',
    interests: [] as string[],
    message: ''
  });

  const applicationSteps = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Complete our online application form with student information and academic history.',
      icon: FileText
    },
    {
      step: 2,
      title: 'Schedule Tour',
      description: 'Visit our campus for a personalized tour and meet with our admissions team.',
      icon: Calendar
    },
    {
      step: 3,
      title: 'Assessment & Interview',
      description: 'Student assessment and family interview to ensure the right fit.',
      icon: Users
    },
    {
      step: 4,
      title: 'Decision & Enrollment',
      description: 'Receive admission decision and complete enrollment process.',
      icon: CheckCircle
    }
  ];

  const tuitionInfo = [
    { grade: 'Kindergarten - 2nd Grade', tuition: '$18,500', description: 'Full day program with extended care options' },
    { grade: '3rd - 5th Grade', tuition: '$20,000', description: 'Enhanced curriculum with specialized instruction' },
    { grade: '6th - 8th Grade', tuition: '$22,500', description: 'Middle school program with electives' },
    { grade: '9th - 12th Grade', tuition: '$25,000', description: 'College preparatory with AP courses' }
  ];

  const importantDates = [
    { event: 'Application Deadline', date: 'February 1, 2025', status: 'upcoming' },
    { event: 'Entrance Assessments', date: 'February 15-28, 2025', status: 'upcoming' },
    { event: 'Admission Decisions', date: 'March 15, 2025', status: 'upcoming' },
    { event: 'Enrollment Deadline', date: 'April 1, 2025', status: 'upcoming' }
  ];

  const interestOptions = [
    'STEM Programs', 'Arts & Music', 'Athletics', 'World Languages', 
    'Advanced Placement', 'Leadership Opportunities', 'Community Service', 'Technology'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInterestChange = (interest: string) => {
    const updatedInterests = formData.interests.includes(interest)
      ? formData.interests.filter(i => i !== interest)
      : [...formData.interests, interest];
    setFormData({ ...formData, interests: updatedInterests });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-academy-navy mb-6">
            Admissions
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join the BrightBridge Academy family where every student's potential is recognized, nurtured, 
            and developed to its fullest. Our admissions process is designed to find the right fit for both 
            student and school.
          </p>
        </div>

        {/* Application Process */}
        <div className="mb-20">
          <h3 className="font-montserrat font-bold text-3xl text-academy-navy text-center mb-12">
            Application Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-light-blue rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-warm-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-montserrat font-bold">
                  {step.step}
                </div>
                <div className="bg-white p-3 rounded-lg w-fit mx-auto mb-4 mt-2">
                  <step.icon className="h-8 w-8 text-academy-blue" />
                </div>
                <h4 className="font-montserrat font-bold text-xl text-academy-navy mb-3">
                  {step.title}
                </h4>
                <p className="font-open-sans text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tuition Information */}
        <div className="mb-20">
          <h3 className="font-montserrat font-bold text-3xl text-academy-navy text-center mb-12">
            Tuition & Fees
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {tuitionInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-montserrat font-bold text-xl text-academy-navy">
                    {info.grade}
                  </h4>
                  <div className="text-right">
                    <div className="font-montserrat font-bold text-2xl text-warm-orange">
                      {info.tuition}
                    </div>
                    <div className="font-open-sans text-sm text-gray-600">per year</div>
                  </div>
                </div>
                <p className="font-open-sans text-gray-700">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Financial Aid */}
          <div className="bg-academy-blue rounded-xl p-8 text-white text-center">
            <DollarSign className="h-12 w-12 mx-auto mb-4" />
            <h4 className="font-montserrat font-bold text-2xl mb-4">Financial Aid Available</h4>
            <p className="font-open-sans text-lg mb-6">
              We believe in making quality education accessible. Over 30% of our students receive 
              financial assistance based on need and merit.
            </p>
            <button className="bg-white text-academy-blue px-6 py-3 rounded-lg font-montserrat font-semibold hover:bg-gray-100 transition-colors">
              Learn About Financial Aid
            </button>
          </div>
        </div>

        {/* Important Dates */}
        <div className="mb-20">
          <h3 className="font-montserrat font-bold text-3xl text-academy-navy text-center mb-12">
            Important Dates & Deadlines
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {importantDates.map((date, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <Clock className="h-8 w-8 text-warm-orange mx-auto mb-3" />
                <h4 className="font-montserrat font-semibold text-academy-navy mb-2">
                  {date.event}
                </h4>
                <p className="font-open-sans text-gray-700 font-medium">{date.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="bg-light-blue rounded-2xl p-8 lg:p-12">
          <h3 className="font-montserrat font-bold text-3xl text-academy-navy text-center mb-8">
            Submit an Inquiry
          </h3>
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-open-sans font-medium text-academy-navy mb-2">
                  Parent/Guardian Name *
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-academy-blue focus:border-transparent"
                />
              </div>
              <div>
                <label className="block font-open-sans font-medium text-academy-navy mb-2">
                  Student Name *
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-academy-blue focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block font-open-sans font-medium text-academy-navy mb-2">
                  Intended Grade *
                </label>
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-academy-blue focus:border-transparent"
                >
                  <option value="">Select Grade</option>
                  <option value="K">Kindergarten</option>
                  <option value="1">1st Grade</option>
                  <option value="2">2nd Grade</option>
                  <option value="3">3rd Grade</option>
                  <option value="4">4th Grade</option>
                  <option value="5">5th Grade</option>
                  <option value="6">6th Grade</option>
                  <option value="7">7th Grade</option>
                  <option value="8">8th Grade</option>
                  <option value="9">9th Grade</option>
                  <option value="10">10th Grade</option>
                  <option value="11">11th Grade</option>
                  <option value="12">12th Grade</option>
                </select>
              </div>
              <div>
                <label className="block font-open-sans font-medium text-academy-navy mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-academy-blue focus:border-transparent"
                />
              </div>
              <div>
                <label className="block font-open-sans font-medium text-academy-navy mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-academy-blue focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-open-sans font-medium text-academy-navy mb-2">
                Preferred Contact Method
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={formData.contactMethod === 'email'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span className="font-open-sans">Email</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    checked={formData.contactMethod === 'phone'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span className="font-open-sans">Phone</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-open-sans font-medium text-academy-navy mb-3">
                Areas of Interest (Select all that apply)
              </label>
              <div className="grid md:grid-cols-4 gap-3">
                {interestOptions.map((interest) => (
                  <label key={interest} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                      className="mr-2"
                    />
                    <span className="font-open-sans text-sm">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-open-sans font-medium text-academy-navy mb-2">
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-academy-blue focus:border-transparent"
                placeholder="Tell us more about your child's interests, goals, or any questions you have..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-warm-orange text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-orange-500 transition-colors"
              >
                Submit Inquiry
              </button>
              <p className="font-open-sans text-sm text-gray-600 mt-4">
                We'll respond to your inquiry within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};