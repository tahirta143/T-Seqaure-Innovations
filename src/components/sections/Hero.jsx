"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  Code2,
  Bot,
  ShoppingBag,
  Megaphone,
  TrendingUp,
  ShoppingCart,
  Headset,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroArrows = dynamic(() => import("./HeroArrows"), { ssr: false });

export default function Hero() {
  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const getColor = (dotColorClass) => {
    const colors = {
      "bg-sky-400": "#6E1A37",
      "bg-purple-400": "#6E1A37",
      "bg-emerald-400": "#6E1A37",
      "bg-amber-500": "#6E1A37",
      "bg-pink-500": "#6E1A37",
      "bg-teal-400": "#6E1A37",
      "bg-indigo-400": "#6E1A37",
    };

    return colors[dotColorClass] || "#6E1A37";
  };

  const leftFeatures = [
    {
      title: "Web Development",
      desc: "Modern Responsive & High Performance Websites",
      icon: <Code2 className="w-5 h-5 text-[#6E1A37]" />,
      dotColor: "bg-[#6E1A37]",
    },
    {
      title: "AI Automation & Agents",
      desc: "Smart Automation That Saves Time & Boosts Efficiency",
      icon: <Bot className="w-5 h-5 text-[#6E1A37]" />,
      dotColor: "bg-[#6E1A37]",
    },
    {
      title: "Shopify Development",
      desc: "Custom Shopify Stores That Convert & Scale",
      icon: <ShoppingBag className="w-5 h-5 text-[#6E1A37]" />,
      dotColor: "bg-[#6E1A37]",
    },
    {
      title: "Digital Marketing",
      desc: "Result Driven Campaigns That Grow Your Brand",
      icon: <Megaphone className="w-5 h-5 text-[#6E1A37]" />,
      dotColor: "bg-[#6E1A37]",
    },
  ];

  const rightFeatures = [
    {
      title: "AI-Powered SEO",
      desc: "Smarter SEO Strategies Powered by AI for Higher Rankings",
      icon: <TrendingUp className="w-5 h-5 text-[#6E1A37]" />,
      dotColor: "bg-[#6E1A37]",
    },
    {
      title: "E-Commerce Services",
      desc: "End-To-End Solutions for Your Online Store Success",
      icon: <ShoppingCart className="w-5 h-5 text-[#6E1A37]" />,
      dotColor: "bg-[#6E1A37]",
    },
    {
      title: "Virtual Assistant",
      desc: "Reliable Support — Manage Tasks & Save Your Time",
      icon: <Headset className="w-5 h-5 text-[#6E1A37]" />,
      dotColor: "bg-[#6E1A37]",
    },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden grid-bg bg-background text-foreground"
    >
      {/* Visual Ambient Overlays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 xl:grid-cols-12 gap-12 items-center relative z-10">

        {/* Hero Left Content (5 Cols on large screen, 12 on mobile) */}
        <div className="xl:col-span-5 flex flex-col justify-center text-left space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] font-extrabold tracking-wider uppercase text-primary">
              Next-Gen Software Agency
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground">
            Building The Future With <span className="text-primary">Mobile, Web & AI</span>
          </h1>

          <p className="text-base sm:text-lg text-foreground/80 dark:text-gray-300 font-medium max-w-2xl leading-relaxed">
            T Square Technologies develops high-performance applications and intelligent software solutions for modern businesses. We combine engineering excellence with stunning UI aesthetics.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#products" onClick={(e) => handleScrollTo(e, "#products")}>
              <Button className="h-12 px-8 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg hover:bg-primary/90 transition-colors flex items-center gap-2 cursor-pointer">
                <span>View Our Products</span>
                <ArrowRight size={16} />
              </Button>
            </a>
            <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")}>
              <Button variant="outline" className="h-12 px-8 rounded-xl border border-border bg-card/50 hover:bg-card text-foreground font-semibold transition-colors cursor-pointer">
                Book Consultation
              </Button>
            </a>
          </div>
        </div>

        {/* Hero Right Visual Dashboard (7 Cols on large screen, 12 on mobile) */}
        <div className="xl:col-span-7 flex items-center justify-center relative w-full">
          <div className="w-full relative py-6 sm:py-8 overflow-visible z-10">

            {/* Visual SVG Connecting Lines (Visible on desktop only) */}
            <HeroArrows leftFeatures={leftFeatures} rightFeatures={rightFeatures} getColor={getColor} />

            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

              {/* Left Column: 4 Feature Cards */}
              <div className="lg:col-span-4 flex flex-col gap-5 justify-between h-full">
                {leftFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-3.5 rounded-xl border border-border/80 bg-card/90 shadow-md hover:border-primary/40 transition-all duration-300 relative group"
                  >
                    <div className="flex items-center gap-3 w-full transition-transform duration-300 group-hover:-translate-x-1">
                      <div className="p-2 rounded-lg bg-background border border-border flex-shrink-0">
                        {feat.icon}
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="text-xs font-bold text-foreground">{feat.title}</h3>
                        <p className="text-[10px] text-foreground/60 leading-normal">{feat.desc}</p>
                      </div>
                    </div>
                    {/* SVG Connector Anchor point */}
                    <div
                      id={`left-dot-${idx}`}
                      className={`hidden lg:block absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-background ${feat.dotColor} z-20`}
                    />
                  </div>
                ))}
              </div>

              {/* Center Column: Portrait Image & Callout Banner */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center relative min-h-[380px] lg:min-h-0">
                {/* Background Ring glow */}
                <div className="absolute w-56 h-56 rounded-full border border-primary/20 bg-primary/5 blur-xl -z-10 animate-pulse"></div>

                {/* Main Portrait Image */}
                <div className="relative w-48 h-60 sm:w-56 sm:h-72 lg:w-48 lg:h-64 xl:w-52 xl:h-72 overflow-hidden flex items-end">
                  <Image
                    src="/hero_developer2.png"
                    alt="Developer"
                    width={300}
                    height={400}
                    priority
                    className="object-contain w-full h-full scale-105"
                  />
                  {/* Center Hub behind the developer */}
                  <div id="center-hub" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/30 border border-primary/50 animate-pulse z-0" />
                </div>

                {/* Floating Banner beneath portrait */}
                <div className="mt-4 ml-8 px-4 py-2.6 rounded-xl border border-primary/30 bg-background/95 backdrop-blur shadow-lg flex items-center space-x-2.5 max-w-[240px] text-center justify-center">
                  <div className="p-1.5 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <Rocket size={15} className="animate-bounce" />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] text-foreground/50 uppercase font-bold tracking-wider">Our Commitment</p>
                    <p className="text-[10px] font-bold text-foreground leading-tight">More Time, More Growth.</p>
                  </div>
                </div>
              </div>

              {/* Right Column: 3 Feature Cards */}
              <div className="lg:col-span-4 flex flex-col gap-6 justify-center h-full">
                {rightFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-3.5 rounded-xl border border-border/80 bg-card/90 shadow-md hover:border-primary/40 transition-all duration-300 relative group"
                  >
                    <div className="flex items-center gap-3 w-full transition-transform duration-300 group-hover:translate-x-1">
                      <div className="p-2 rounded-lg bg-background border border-border flex-shrink-0">
                        {feat.icon}
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="text-xs font-bold text-foreground">{feat.title}</h3>
                        <p className="text-[10px] text-foreground/60 leading-normal">{feat.desc}</p>
                      </div>
                    </div>
                    {/* SVG Connector Anchor point */}
                    <div
                      id={`right-dot-${idx}`}
                      className={`hidden lg:block absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-background ${feat.dotColor} z-20`}
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-widest font-semibold mb-2">
          Scroll Down
        </span>
        <div className="w-6 h-10 rounded-full border border-foreground/30 flex justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
