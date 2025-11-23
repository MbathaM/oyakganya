"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { TESTIMONIALS } from '@/config/constants';

export function Testimonials() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-accent font-bold tracking-widest uppercase text-xs block mb-4">Success Stories</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Client Testimonials</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Hear from the leaders and organisations we've partnered with to drive transformation, inclusivity, and sustainable growth.
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 p-10 rounded-sm border-t-4 border-accent shadow-lg relative group hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              <Quote className="text-teal/10 w-20 h-20 absolute -top-2 -right-2 group-hover:text-teal/20 transition-colors" />
              
              <div className="flex gap-1 mb-6 text-accent">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 italic text-lg grow relative z-10">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-serif font-bold text-xl shrink-0 shadow-md">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg leading-tight">{item.author}</h4>
                  <span className="text-xs text-teal font-bold uppercase tracking-wider block mt-1">{item.position}</span>
                  {item.company && <span className="text-xs text-gray-400 block mt-0.5">{item.company}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 py-24 border-t border-gray-800">
         <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl font-serif font-bold text-white mb-6">Join Our Success Stories</h2>
             <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg font-light">
                 Ready to experience the Oyakganya difference? Let's discuss how we can help your organisation thrive through tailored HR and leadership solutions.
             </p>
            <Link href="/contact" className="inline-flex items-center bg-accent hover:bg-white hover:text-primary text-primary font-bold py-4 px-10 transition-all shadow-xl hover:shadow-2xl rounded-sm">
                Start Your Journey <ArrowRight className="ml-2" size={18} />
            </Link>
         </div>
      </div>
    </div>
  );
}
