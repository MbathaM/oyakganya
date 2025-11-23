"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Users, LineChart, CheckSquare, Zap, UserCheck, Layers } from 'lucide-react';

export function WhyUs() {
  // Competitive Advantages from PDF Section 6
  const advantages = [
    {
      icon: Layers,
      title: "Holistic Integration",
      text: "A unique combination of coaching and HR consulting that bridges the gap between personal mindset and organisational compliance."
    },
    {
      icon: UserCheck,
      title: "Human-Centred Approach",
      text: "We prioritize psychological safety and empathy, ensuring that every intervention respects the human element of business."
    },
    {
      icon: Users,
      title: "Tailored Solutions",
      text: "We design bespoke strategies specifically for individuals and SMEs, moving beyond 'one-size-fits-all' templates."
    },
    {
      icon: Shield,
      title: "Compliance-Aligned",
      text: "Expert HR support that ensures you meet legislative requirements (Employment Equity, etc.) with practical implementation."
    },
    {
      icon: Star,
      title: "Transformation Expertise",
      text: "Deep expertise in confidence-building, personal clarity, and facilitating genuine transformation."
    },
    {
      icon: Zap,
      title: "Career Development",
      text: "Strong offering for professionals including strategic CV revamps and profile enhancement."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
       <div className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-accent font-bold tracking-widest uppercase text-xs block mb-4">Our Edge</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Competitive Advantage</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl opacity-80 max-w-2xl mx-auto font-light">
             We seek to inspire transformation, build capability, and cultivate sustainable success.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {advantages.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col p-8 rounded-sm bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group"
            >
              <div className="bg-white w-14 h-14 flex items-center justify-center shadow-sm text-gray-400 group-hover:text-accent transition-colors mb-6 border border-gray-100">
                <reason.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{reason.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Client Base Section - PDF Section 7 */}
        <div className="bg-primary/5 border border-primary/10 p-12 lg:p-20 max-w-5xl mx-auto relative">
            <CheckSquare className="w-16 h-16 text-accent opacity-20 absolute top-8 right-8" />
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">Who We Support</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 mt-2 bg-accent rounded-full"></div>
                    <p className="text-lg text-gray-700">Small to Medium Enterprises (SMEs)</p>
                </div>
                 <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 mt-2 bg-accent rounded-full"></div>
                    <p className="text-lg text-gray-700">Start-ups and growing consulting firms</p>
                </div>
                 <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 mt-2 bg-accent rounded-full"></div>
                    <p className="text-lg text-gray-700">Professionals seeking growth or career transition</p>
                </div>
                 <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 mt-2 bg-accent rounded-full"></div>
                    <p className="text-lg text-gray-700">Organisations requiring HR compliance and structural alignment</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
