"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Award, Star } from 'lucide-react';
import Link from 'next/link';
import { LinkedinIcon as Linkedin } from '@/components/icons';

export function Founder() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Split Screen Large Imagery */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Content Area */}
        <div className="lg:w-1/2 bg-primary text-white flex items-center justify-center p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
            <div className="relative z-10 max-w-xl">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Founder & Director</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Onkabetse Mphako</h1>
                    <div className="w-20 h-1 bg-accent mb-8"></div>
                    <p className="text-xl text-gray-300 leading-relaxed mb-10 font-light">
                        People-focused coach & HR professional.<br/>
                        <span className="text-teal-400 font-medium">Guiding you from self-doubt to purposeful action.</span>
                    </p>
                    <div className="flex gap-4">
                        <Link href="/contact" className="bg-accent hover:bg-accent-light text-primary font-bold py-3 px-8 transition-colors">
                            Work With Onkabetse
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
        
        {/* Right Image Area - Full Height */}
        <div className="lg:w-1/2 h-[50vh] lg:h-auto relative bg-gray-200">
            <img 
                // src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                src="/images/IMG_9357.jpg" 
                alt="Onkabetse Mphako Portrait" 
                className="w-full h-full object-cover grayscale-0 hover:grayscale-0 transition-all duration-1000"
            />
        </div>
      </div>

      {/* Bio Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
                <h2 className="text-4xl font-serif font-bold text-primary mb-8">A Vision for Purposeful Action</h2>
                <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6 max-w-none">
                    <p>
                        Onkabetse Mphako, founder of Oyakganya Consulting Hub, is a people-focused coach and HR professional dedicated to guiding individuals and organisations toward clarity, confidence, and strategic growth.
                    </p>
                    <p>
                        With experience rooted in HR compliance, workforce development, and coaching psychology, she helps clients shift from self-doubt to purposeful action.
                    </p>
                    <p>
                        Her approach integrates empathy with structure, combining professional insight with human-centred coaching to deliver meaningful, sustainable transformation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <div className="border-l-4 border-teal p-6 bg-slate-50">
                        <Award className="text-teal mb-4 w-8 h-8" />
                        <h4 className="font-bold text-primary text-lg mb-2">HR & Workforce Development</h4>
                        <p className="text-gray-600">Rooted in HR compliance and strategic workforce planning.</p>
                    </div>
                    <div className="border-l-4 border-accent p-6 bg-slate-50">
                        <Star className="text-accent mb-4 w-8 h-8" />
                        <h4 className="font-bold text-primary text-lg mb-2">Coaching Psychology</h4>
                        <p className="text-gray-600">Helping clients achieve clarity and confidence.</p>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-4">
                 <div className="bg-primary text-white p-10 relative overflow-hidden shadow-2xl">
                    <Quote className="text-accent absolute top-6 right-6 opacity-20 w-20 h-20" />
                    <p className="text-2xl font-serif italic mb-8 relative z-10 leading-relaxed">
                        "Transformation is not just about changing what you do; it's about evolving who you are and how you show up."
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-xl">O</div>
                        <div>
                            <p className="font-bold text-accent">Onkabetse Mphako</p>
                            <p className="text-sm text-gray-400">Founder</p>
                        </div>
                    </div>
                 </div>
                 
                 <div className="mt-8 text-center">
                     <a 
                        href="https://www.linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-600 hover:text-primary font-medium transition-colors"
                    >
                        <Linkedin className="mr-2" /> Connect on LinkedIn
                    </a>
                 </div>
            </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <span className="text-accent font-bold tracking-widest uppercase text-xs">Leadership in Action</span>
                <h2 className="text-4xl font-serif font-bold text-primary mt-3">Moments of Impact</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
                <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-sm shadow-lg">
                    <img 
                        src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                        alt="Speaking Engagement and Facilitation" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                        <p className="text-white font-medium text-lg">Keynote Speaking & Facilitation</p>
                    </div>
                </div>

                <div className="relative group overflow-hidden rounded-sm shadow-lg">
                    <img 
                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                        alt="Team Coaching and Collaboration" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-teal/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white font-bold">Team Coaching</p>
                    </div>
                </div>

                <div className="relative group overflow-hidden rounded-sm shadow-lg">
                    <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                        alt="Strategic Planning Session" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white font-bold">Strategic Planning</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
