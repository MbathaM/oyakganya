"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { SERVICES } from "@/config/constants";
import Link from "next/link";

export function Services() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-800/50 transform skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-accent font-bold tracking-widest uppercase text-xs block mb-4">
            Our Solutions
          </span>
          <h1 className="text-5xl font-serif font-bold mb-6">
            Consulting Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light">
            Tailored strategies for HR excellence, leadership growth, and
            organisational transformation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="space-y-32">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row gap-16 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gray-100 rounded-sm text-primary">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div className="h-px grow bg-gray-200"></div>
                </div>

                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {service.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-700 group"
                    >
                      <div className="mt-1 mr-3 p-0.5 rounded-full bg-teal/10 text-teal group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-base">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1 w-full relative group">
                <div className="absolute top-4 left-4 w-full h-full border-2 border-accent z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                <div className="relative z-10 aspect-square overflow-hidden shadow-2xl bg-gray-200">
                  <img
                    // src={`https://picsum.photos/800/800?random=${index + 10}`}
                    src={`/images/${index + 1}.jpeg`}
                    alt={service.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 py-20 mt-20 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">
            Ready to Transform?
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Whether you need to restructure your HR policies or develop your
            next generation of leaders, we are here to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-accent hover:bg-white hover:text-primary text-primary font-bold py-4 px-10 transition-all"
          >
            Get in Touch <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
