'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Quote,
  Star,
  Target,
  Users,
  Briefcase,
  BookOpen,
  Brain,
  ShieldCheck,
} from "lucide-react";
import { TESTIMONIALS } from "@/config/constants";


export function Home() {
  // Select the first testimonial to feature
  const featuredTestimonial = TESTIMONIALS[0];

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Video Background Layer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="min-w-full min-h-full absolute object-cover"
            poster="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920"
          >
            <source
              src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* Heavy Navy Overlay for Brand Consistency & Text Readability */}
          <div className="absolute inset-0 bg-primary/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-left lg:pr-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-accent font-bold tracking-widest uppercase text-xs">
                Transformation-Driven Consulting
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight text-white">
              Clarity. Confidence. <br />
              <span className="text-accent">Transformation.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl font-light">
              Empowering individuals and organisations to rise with purpose,
              alignment, and strategic intention.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-accent hover:bg-white hover:text-primary text-primary font-bold py-4 px-8 rounded-sm transition-all duration-300 text-center shadow-lg hover:shadow-accent/50"
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/services"
                className="border border-white/30 hover:border-white text-white hover:bg-white/10 font-medium py-4 px-8 rounded-sm transition-all duration-300 text-center backdrop-blur-sm"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>

          {/* Hero Image/visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 border-4 border-white/10 p-2 rounded-sm">
              <img
                // src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                src="/images/IMG_9369.jpg"
                alt="Onkabetse Mphako - Founder"
                className="w-full h-auto rounded-sm shadow-2xl grayscale-0 hover:grayscale-0 transition-all duration-700"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded-sm max-w-xs">
                <p className="font-serif italic text-primary text-lg leading-tight">
                  "We guide clients from uncertainty to intentional, empowered
                  action."
                </p>
                <p className="text-xs font-bold text-accent mt-3 uppercase tracking-wider">
                  Onkabetse Mphako
                </p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center animate-bounce"
        >
          <span className="text-[10px] uppercase tracking-widest mb-2">
            Scroll
          </span>
          <ChevronRight className="rotate-90" size={20} />
        </motion.div> */}
      </section>

      {/* Why We Exist Section - Specific Request */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#0A1A33 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 border-t-4 border-l-4 border-accent opacity-50"></div>
              <span className="text-accent font-bold tracking-widest uppercase text-xs block mb-4">
                Our Core Purpose
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
                Why We Exist
              </h2>

              <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6">
                <p className="text-xl font-light text-gray-800">
                  We exist to help clients move from{" "}
                  <span className="font-bold text-primary border-b-2 border-accent/50">
                    uncertainty to clarity
                  </span>{" "}
                  and from{" "}
                  <span className="font-bold text-primary border-b-2 border-accent/50">
                    self-doubt to confidence
                  </span>
                  .
                </p>
                <p>
                  At Oyakganya Consulting Hub, we believe true transformation
                  happens at the intersection of mindset and structure. That's
                  why our work uniquely integrates:
                </p>
                <ul className="space-y-4 mt-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-accent/10 p-1 rounded-full text-accent mt-1">
                      <Brain size={18} />
                    </div>
                    <span>
                      <strong>Coaching Psychology:</strong> To unlock human
                      potential, shift behaviors, and build resilience.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-accent/10 p-1 rounded-full text-accent mt-1">
                      <ShieldCheck size={18} />
                    </div>
                    <span>
                      <strong>HR Expertise:</strong> To build compliant,
                      scalable, and people-centered systems.
                    </span>
                  </li>
                </ul>
                <p className="border-l-4 border-primary pl-4 italic text-gray-500 mt-6">
                  We provide supportive, psychologically safe spaces where
                  individuals and organisations can grow with confidence and
                  strategic intention.
                </p>
              </div>
            </div>

            <div className="md:w-1/2 grid grid-cols-2 gap-5">
              <div className="bg-white p-8 rounded-sm shadow-lg transform translate-y-8 border-b-4 border-accent hover:-translate-y-1 transition-transform duration-300">
                <Target className="text-accent w-10 h-10 mb-4" />
                <h3 className="font-bold text-primary text-lg mb-2">Clarity</h3>
                <p className="text-sm text-gray-500">
                  Moving from confusion to clear strategic direction.
                </p>
              </div>
              <div className="bg-primary text-white p-8 rounded-sm shadow-lg border-b-4 border-accent hover:-translate-y-1 transition-transform duration-300">
                <Star className="text-accent w-10 h-10 mb-4" />
                <h3 className="font-bold text-white text-lg mb-2">
                  Confidence
                </h3>
                <p className="text-sm text-gray-300">
                  Replacing self-doubt with empowered action.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-lg col-span-2 flex items-center gap-6 border-b-4 border-accent hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg">
                    Human-Centred Growth
                  </h3>
                  <p className="text-sm text-gray-500">
                    Aligning personal development with organisational goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Grid / Services Teaser */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Ready to Rise?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose a pathway to begin your transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <Link
              href="/contact"
              className="bg-slate-50 p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group border-t-4 border-transparent hover:border-accent hover:bg-white"
            >
              <BookOpen className="text-primary mb-4 w-8 h-8 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-lg text-primary mb-2">
                Book a Discovery Call
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Start with a conversation about your needs.
              </p>
              <span className="text-accent font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                Connect <ArrowRight size={14} className="ml-1" />
              </span>
            </Link>

            {/* Card 2 */}
            <Link
              href="/services"
              className="bg-slate-50 p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group border-t-4 border-transparent hover:border-accent hover:bg-white"
            >
              <Target className="text-primary mb-4 w-8 h-8 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-lg text-primary mb-2">
                Coaching Packages
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Mindset, career, and leadership coaching.
              </p>
              <span className="text-accent font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                View Details <ArrowRight size={14} className="ml-1" />
              </span>
            </Link>

            {/* Card 3 */}
            <Link
              href="/services"
              className="bg-slate-50 p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group border-t-4 border-transparent hover:border-accent hover:bg-white"
            >
              <Briefcase className="text-primary mb-4 w-8 h-8 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-lg text-primary mb-2">
                HR Consulting
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Compliance, policy, and talent management.
              </p>
              <span className="text-accent font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                Learn More <ArrowRight size={14} className="ml-1" />
              </span>
            </Link>

            {/* Card 4 */}
            <Link
              href="/services"
              className="bg-slate-50 p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group border-t-4 border-transparent hover:border-accent hover:bg-white"
            >
              <Star className="text-primary mb-4 w-8 h-8 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-lg text-primary mb-2">
                CV & Profile Revamp
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Stand out with professional branding.
              </p>
              <span className="text-accent font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                Get Started <ArrowRight size={14} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 text-accent mx-auto mb-8 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-relaxed mb-8 italic">
              "{featuredTestimonial.quote}"
            </h2>

            <div className="flex flex-col items-center gap-2 mb-10">
              <p className="font-bold text-xl">{featuredTestimonial.author}</p>
              <p className="text-accent uppercase tracking-widest text-xs">
                {featuredTestimonial.position}
              </p>
            </div>

            <Link
              href="/testimonials"
              className="inline-flex items-center border-b-2 border-accent pb-1 text-white hover:text-accent transition-colors font-bold tracking-wide"
            >
              Read More Success Stories{" "}
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">
            Let's Build Your Future
          </h2>
          <p className="text-gray-600 mb-10 text-lg max-w-2xl mx-auto">
            Whether you are an individual seeking clarity or an organisation
            seeking alignment, we are your partners in growth.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-light text-white font-bold py-4 px-12 rounded-sm shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
