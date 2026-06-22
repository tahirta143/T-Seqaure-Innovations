"use client";

import React from "react";

export default function Products() {
  const productsData = [
    {
      title: "Cognitive AI Agent",
      type: "ai-agent",
      image: "https://images.pexels.com/photos/8294657/pexels-photo-8294657.jpeg",
      description:
        "Autonomous AI agent for workflow automation, customer operations, and intelligent data analysis using RAG and LLMs.",
      techStack: ["Next.js", "LangChain", "OpenAI API", "Python", "Vector DB"],
      liveLink: "https://demo.example.com",
      gitLink: "https://github.com/example",
    },
    {
      title: "Healthcare Management System (HIMS)",
      type: "healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
      description:
        "A comprehensive health management portal and mobile suite that streamlines hospital workflows, patient records, prescriptions, and billing.",
      techStack: ["React Native", "Next.js", "Node.js", "PostgreSQL", "Expo"],
      liveLink: "https://waseeladiabesity.com/",
      gitLink: "https://github.com/example",
    },
    {
      title: "Gym Management System",
      type: "gym",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
      description:
        "A robust gym operations system featuring member subscriptions, automated billing, scan-to-enter check-ins, and a custom mobile app for workout tracking.",
      techStack: ["React", "React Native", "Express.js", "MongoDB", "Stripe API"],
      liveLink: "https://demo.example.com",
      gitLink: "https://github.com/example",
    },
    {
      title: "Retail POS & Mobile App Ecosystem",
      type: "pos",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
      description:
        "Offline-first point-of-sale terminal synced with real-time cloud analytics, multi-branch inventory management, and iOS/Android companion apps for store managers.",
      techStack: ["Flutter", "Dart", "Node.js", "MongoDB", "Firebase"],
      liveLink: "https://demo.example.com",
      gitLink: "https://github.com/example",
    },
    {
      title: "Enterprise E-Commerce Platform",
      type: "ecommerce",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80",
      description:
        "High-performance online storefront with lightning-fast page loading, advanced product searching, dynamic admin panel, and secure Stripe payment gateway.",
      techStack: ["Next.js", "Node.js", "PostgreSQL", "TailwindCSS", "Stripe API"],
      liveLink: "https://demo.example.com",
      gitLink: "https://github.com/example",
    },
    {
      title: "School Management System",
      type: "school",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=80",
      description:
        "Complete academic SaaS portal supporting grades, classroom management, fees invoicing, parental controls, and multi-user notification systems.",
      techStack: ["React", "Express.js", "PostgreSQL", "Node.js"],
      liveLink: "https://demo.example.com",
      gitLink: "https://github.com/example",
    },
  ];

  return (
    <section
      id="products"
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Decorative blob */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="products-header text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-sm font-extrabold uppercase tracking-widest text-accent">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Custom Systems & Software We've Built
          </h2>
          <p className="text-sm sm:text-base text-foreground/75 dark:text-gray-400 leading-relaxed">
            We engineer next-generation applications and enterprise systems tailored to our clients' unique business requirements. Explore some of our key builds.
          </p>
        </div>

        {/* Products Grid */}
        <div className="products-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {productsData.map((project, index) => (
            <div
              key={index}
              className="product-card rounded-2xl border border-border bg-card/40 backdrop-blur-md overflow-hidden flex flex-col lg:flex-row hover:border-accent/40 shadow-lg group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full lg:w-1/2 h-52 lg:h-auto bg-gradient-to-br from-[#0c0c0e] to-[#16161a] overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full
                    object-cover object-top
                    group-hover:object-bottom
                    transition-[object-position] duration-[2000ms] ease-in-out
                    group-hover:scale-105
                    scale-100
                    transition-transform
                  "
                />

                {/* Subtle color accent bar at the bottom of the image */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-80"
                  style={{ backgroundColor: project.color }}
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between lg:w-1/2">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-foreground/70 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-foreground/5 text-foreground/70 border border-foreground/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}