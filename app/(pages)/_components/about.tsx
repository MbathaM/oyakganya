"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CORE_VALUES } from '@/config/constants';

export function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Minimal Header */}
      <div className="bg-slate-50 py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm block mb-4">Company Overview</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8">Transformation-Driven Coaching & HR</h1>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
                Oyakganya Consulting Hub is a transformation-driven coaching and HR consulting practice dedicated to elevating individuals and organisations through clarity, confidence, and strategic intention.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Story Section */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-32">
            <div className="md:w-1/2 relative">
                <div className="aspect-4/3 bg-gray-200 overflow-hidden shadow-lg relative z-10">
                    <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                        alt="Diverse Team Collaborating" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent z-20 hidden md:block"></div>
                <div className="absolute -top-6 -left-6 w-full h-full border border-gray-200 z-0"></div>
            </div>
            <div className="md:w-1/2">
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Approach</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    We partner with clients to unlock potential, strengthen people systems, and cultivate environments where both personal and organisational growth can thrive.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Our work integrates coaching psychology, HR compliance expertise, and behavioural insight to create solutions that are deeply human, purposeful, and results-focused.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed pl-6 border-l-2 border-accent">
                    Through our coaching programmes, organisational services, and professional career support—including strategic CV revamps—we guide clients from uncertainty to intentional, empowered action.
                </p>
            </div>
        </div>

        {/* Mission & Vision - Dark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-32 shadow-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white p-12 lg:p-16 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-accent flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span> Our Mission
            </h3>
            <p className="text-lg leading-relaxed font-light text-gray-300 mb-6">
              Our mission is to deliver transformative coaching, strategic HR consulting, and impactful career development solutions that promote clarity, compliance, and confidence. We aim to equip individuals and organisations with the structures, tools, and mindsets needed to grow with intention.
            </p>
            <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">We commit to:</p>
            <ul className="mt-3 space-y-2 text-gray-300 text-sm">
                <li>• Providing personalised services rooted in the GRACE values.</li>
                <li>• Building compliant, inclusive, people-centred workplaces.</li>
                <li>• Creating psychologically safe, supportive spaces.</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800 text-white p-12 lg:p-16 relative overflow-hidden"
          >
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent opacity-10 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-teal-400 flex items-center gap-3">
                <span className="w-8 h-px bg-teal-400"></span> Our Vision
            </h3>
            <p className="text-lg leading-relaxed font-light text-gray-300 mb-6">
                We strive to be the leading and trusted partner in personal transformation and organisational development. Our vision is to uplift individuals and equip organisations through solutions that are strategic, human-centred, and anchored in long-term growth.
            </p>
            <ul className="space-y-3 text-gray-300 font-light text-base">
              <li>• Individuals rise with clarity, self-leadership, and confidence.</li>
              <li>• Organisations thrive through inclusive practices and strong foundations.</li>
              <li>• Professionals present themselves with excellence.</li>
            </ul>
          </motion.div>
        </div>

        {/* Values */}
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-xs">The GRACE Framework</span>
          <h2 className="text-4xl font-serif font-bold text-primary mt-4 mb-6">Core Values</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {CORE_VALUES.map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 border border-gray-100 hover:border-accent transition-colors duration-300 group shadow-sm hover:shadow-lg flex flex-col h-full"
            >
              <div className="bg-gray-50 w-12 h-12 flex items-center justify-center rounded-full mb-4 group-hover:bg-primary group-hover:text-accent transition-colors text-primary">
                  <value.icon size={20} />
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">{value.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
