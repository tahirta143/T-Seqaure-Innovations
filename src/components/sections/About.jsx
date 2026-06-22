"use client";

import React from "react";
import { Lightbulb, Shield, ShieldCheck, Cpu } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-[#6E1A37]" />,
      title: "Innovation",
      description:
        "We push boundaries, integrating state-of-the-art AI agents and design methodologies into every single project.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#6E1A37]" />,
      title: "Quality",
      description:
        "We maintain high engineering standards, clean architecture, and exhaustive code quality checks.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#6E1A37]" />,
      title: "Trust",
      description:
        "Transparent communication, client ownership, and consistent long-term partnerships define our values.",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#6E1A37]" />,
      title: "Scalability",
      description:
        "We build solutions prepared for millions of active users, using modern cloud setups and clean code.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-card/30 border-y border-border"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="about-inner-container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: General Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-sm font-extrabold uppercase tracking-widest text-accent">
              Who We Are
            </span>
            <h2 className="about-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
              We Craft Software That Drives Exponential Business Growth
            </h2>
            <p className="about-desc text-sm sm:text-base text-foreground/70 dark:text-gray-400 leading-relaxed">
              At T Square Technologies, we are architects of premium digital solutions. We combine advanced development workflows, UI/UX aesthetics, and artificial intelligence to design products that scale effortlessly. 
              Our agency has worked with enterprises, startups, and clients worldwide, implementing complex full-stack solutions and high-performing mobile setups.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 text-accent font-semibold group hover:underline text-sm"
              >
                <span>Learn more about our methods</span>
                <span className="transform transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Center: Image Banner */}
          <div className="lg:col-span-3 relative h-[380px] lg:h-[450px] rounded-2xl overflow-hidden border border-border/80 shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              alt="Collaboration"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          {/* Right: Core Values List */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-widest text-accent">
              Our Core Values
            </h3>
            <div className="flex flex-col gap-4">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  className="value-card p-4 rounded-xl border border-border bg-card/40 hover:border-accent/30 transition-colors flex gap-4 items-start"
                >
                  <div className="p-2 rounded-lg bg-card border border-border text-accent flex-shrink-0 h-fit">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold">{val.title}</h4>
                    <p className="text-xs text-foreground/75 dark:text-gray-400 leading-relaxed mt-1">
                      {val.description}
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
