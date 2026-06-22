"use client";

import React from "react";
import { Zap, ShieldCheck, HeartHandshake, BrainCircuit, HardDriveDownload, Hammer } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Zap className="w-5 h-5 text-[#6E1A37]" />,
      title: "Fast Delivery",
      description: "We optimize workflows and iterate quickly, shipping fully functional software updates without delays.",
    },
    {
      icon: <Hammer className="w-5 h-5 text-[#6E1A37]" />,
      title: "Modern Technologies",
      description: "We code using state-of-the-art Next.js 15, Flutter, and server systems that stand out.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#6E1A37]" />,
      title: "Clean Architecture",
      description: "We implement testable, clean designs (SOLID, MVVM, Clean Architecture) so modifications are simple.",
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-[#6E1A37]" />,
      title: "AI Expertise",
      description: "We build smart agents, LangChain wrappers, and custom model integrations directly in production.",
    },
    {
      icon: <HardDriveDownload className="w-5 h-5 text-[#6E1A37]" />,
      title: "Scalable Systems",
      description: "We configure containerized environments, replication strategies, server caches, and scalable cloud structures.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#6E1A37]" />,
      title: "Long-Term Support",
      description: "We provide maintenance, regular updates, optimization reviews, and active 24/7 dev monitoring.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-24 relative overflow-hidden bg-card/10 border-y border-border"
    >
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="why-inner-container max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-20 space-y-4">
          <span className="text-sm font-extrabold uppercase tracking-widest text-accent">
            Why Partner With Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            An Engineering Culture Driven by High Standards
          </h2>
          <p className="text-sm sm:text-base text-foreground/75 dark:text-gray-400 leading-relaxed">
            We operate like an elite tech department. We write highly performant code and construct systems prepared for enterprise audits.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Floating Banner */}
          <div className="lg:col-span-5 relative h-[480px] rounded-2xl overflow-hidden border border-border/80 shadow-xl group flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
              alt="Engineering Excellence"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-card/90 backdrop-blur-md border border-border/50 shadow-lg">
              <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Our Standard</p>
              <p className="text-xs font-extrabold text-foreground leading-snug">Elite engineering, zero-compromise code quality, and rapid release cycle.</p>
            </div>
          </div>

          {/* Right Column: Features Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="why-card p-6 rounded-xl border border-border bg-card/20 hover:border-accent/30 transition-colors flex gap-4 items-start"
                >
                  <div className="p-2.5 rounded-lg bg-card border border-border text-accent flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold">{feature.title}</h3>
                    <p className="text-xs text-foreground/75 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
