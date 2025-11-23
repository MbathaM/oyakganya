"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const addressText = `${siteConfig.address.building}, ${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.province} ${siteConfig.address.postcode}, ${siteConfig.address.country}`;

  return (
    <div className="min-h-screen bg-white">
       <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Get In Touch</h1>
          <p className="text-xl opacity-80 font-light">
             Ready to transform your organisation? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div className="space-y-10">
             <div>
                <span className="text-accent font-bold tracking-widest uppercase text-xs block mb-4">Reach Out</span>
                <h2 className="text-3xl font-serif font-bold text-primary mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-accent flex items-center justify-center text-primary mr-5 shrink-0">
                        <MapPin size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 mb-1">Our Office</h3>
                        <p className="text-gray-600 max-w-xs">{addressText}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-teal flex items-center justify-center text-white mr-5 shrink-0">
                        <Mail size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                        <a href={`mailto:${siteConfig.author.email}`} className="text-gray-600 hover:text-primary transition-colors">{siteConfig.author.email}</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    {/* <div className="w-10 h-10 bg-primary flex items-center justify-center text-white mr-5 shrink-0"> */}
                       <div className="w-10 h-10 bg-teal flex items-center justify-center text-white mr-5 shrink-0">
                        <Phone size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                        <p className="text-gray-600">{siteConfig.author.phone}</p>
                    </div>
                  </div>
                </div>
             </div>

             <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="font-bold text-primary mb-4 border-b border-gray-200 pb-2">Company Registration</h3>
                <div className="grid grid-cols-2 gap-6 text-sm text-gray-600">
                    <div>
                        <span className="block text-xs uppercase tracking-wider opacity-70 mb-1">Reg Number</span>
                        <span className="font-mono text-gray-800">{siteConfig.regNo}</span>
                    </div>
                    <div>
                        <span className="block text-xs uppercase tracking-wider opacity-70 mb-1">VAT Number</span>
                         <span className="font-mono text-gray-800">{siteConfig.vatNo}</span>
                    </div>
                </div>
             </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 shadow-2xl border-t-4 border-accent">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">Send a Message</h2>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary outline-none transition-colors"
                    placeholder="Full Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Service of Interest</label>
                  <select
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary outline-none transition-colors"
                  >
                    <option>General Inquiry</option>
                    <option>HR Consulting</option>
                    <option>Leadership Coaching</option>
                    <option>Skills Development</option>
                    <option>Employment Equity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary outline-none transition-colors"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 transition-all flex items-center justify-center group"
                >
                  Submit Enquiry
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-20 h-20 bg-teal/10 text-teal rounded-full flex items-center justify-center mb-6">
                    <Send size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Message Sent</h3>
                <p className="text-gray-600 mb-8">
                    Thank you for reaching out to Oyakganya Consulting.
                </p>
                <button 
                    onClick={() => setSubmitted(false)}
                    className="text-primary font-bold border-b-2 border-accent hover:text-accent transition-colors pb-1"
                >
                    Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
