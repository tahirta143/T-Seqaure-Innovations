"use client";

import React from "react";

export default function Stats() {
  const statsData = [
    { label: "Projects Completed", value: "20", suffix: "+" },
    { label: "Core Technologies", value: "10", suffix: "+" },
    { label: "Client Satisfaction", value: "100", suffix: "%" },
    { label: "Support Coverage", value: "24", suffix: "/7" },
  ];

  return (
    <section
      className="py-16 relative overflow-hidden bg-background text-foreground border-y border-border transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="stats-wrapper grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="stat-card p-6 rounded-2xl bg-card border border-border/80 backdrop-blur-sm text-center flex flex-col justify-center items-center hover:border-accent/40 transition-all duration-200"
            >
              <div className="flex items-baseline justify-center text-4xl sm:text-5xl lg:text-6xl font-extrabold text-accent mb-3 tracking-tight">
                <span>{stat.value}</span>
                <span className="text-xl sm:text-2xl ml-0.5">{stat.suffix}</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
