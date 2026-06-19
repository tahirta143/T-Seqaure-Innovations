"use client";

import React from "react";
import { Smartphone, Globe, BrainCircuit, Key, Settings2, Code2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Services() {
  const servicesData = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Development",
      description:
        "Beautiful, performant mobile apps for iOS and Android — from MVPs to full-scale products. We handle the full cycle: design, development, and deployment.",
      badge: "Flagship",
      details: ["Flutter", "React Native", "iOS", "Android"],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Development",
      description:
        "Fast, SEO-optimised full-stack web applications built with modern frameworks. Clean code, great UX, and pixel-perfect interfaces that convert.",
      badge: "Core",
      details: ["Next.js", "React", "TypeScript", "Node.js", "TailwindCSS"],
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "AI Integration",
      description:
        "Embed powerful AI capabilities into your product — chatbots, content generation, smart search, and automation pipelines using the latest LLMs.",
      badge: "Trending",
      details: ["OpenAI", "Claude API", "LangChain", "RAG", "Agents"],
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "API Development & Integration",
      description:
        "Custom REST and GraphQL APIs built for scale. We also integrate third-party APIs — payment gateways, CRMs, social platforms, and more.",
      badge: "Essential",
      details: ["REST", "GraphQL", "Webhooks", "Stripe", "OAuth2"],
    },
    {
      icon: <Settings2 className="w-6 h-6" />,
      title: "Odoo Development",
      description:
        "Custom Odoo modules, ERP configuration, and business workflow automation. We tailor Odoo to fit your exact operations — not the other way around.",
      badge: "Specialist",
      details: ["Odoo 16/17", "Custom Modules", "ERP", "Python", "XML"],
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Software Engineering",
      description:
        "End-to-end software solutions across the stack — SaaS platforms, automation tools, dashboards, CLI tools, and anything in between.",
      badge: "Full-Stack",
      details: ["Python", "Django", "PostgreSQL", "Docker", "CI/CD"],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden bg-background"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="services-header text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-sm font-extrabold uppercase tracking-widest text-accent">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Everything You Need to Build & Scale
          </h2>
          <p className="text-sm sm:text-base text-foreground/70 dark:text-gray-400 leading-relaxed">
            From mobile apps to AI integrations and enterprise ERP systems — we bring the full engineering stack so you can focus on your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              className="relative h-full border border-border bg-card/50 hover:border-accent/40 shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between p-6 sm:p-8"
            >
              <CardHeader className="p-0 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-xl bg-card border border-border text-accent shadow-sm flex-shrink-0">
                    {service.icon}
                  </div>
                  {service.badge && (
                    <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-accent/5 border-accent/15 text-accent">
                      {service.badge}
                    </Badge>
                  )}
                </div>

                <div className="space-y-3">
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-sm text-foreground/80 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="p-0 border-t border-border/40 pt-4 mt-6">
                <div className="flex flex-wrap gap-1.5">
                  {service.details.map((detail, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded bg-foreground/5 text-foreground/70 border border-foreground/5"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}