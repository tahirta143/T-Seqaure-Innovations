"use client";

import React from "react";
import { Smartphone, Globe, BrainCircuit, Settings2, Code2, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Services() {
  const servicesData = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Custom Business Software",
      description:
        "Tailored enterprise solutions designed to streamline workflows, manage complex operations, and scale your business processes with custom databases and portals.",
      badge: "Enterprise",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      details: ["Custom ERP", "SaaS Portals", "Database Design", "Workflow Automation"],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Applications",
      description:
        "High-performance, secure, responsive, and SEO-optimized web applications built with modern frontend and backend frameworks for flawless user experiences.",
      badge: "Core",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      details: ["Next.js", "React", "Node.js", "TypeScript", "TailwindCSS"],
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Applications",
      description:
        "Elegantly designed native and cross-platform mobile apps for iOS and Android, taking your product from concept to App Store and Google Play.",
      badge: "Flagship",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
      details: ["Flutter", "React Native", "iOS", "Android", "Firebase"],
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Industry-Ready Products",
      description:
        "Ready-to-deploy, fully customizable software products—including healthcare systems, POS ecosystems, and gym platforms—configured to match your brand.",
      badge: "Turnkey",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
      details: ["Ready-Made SaaS", "White-Label", "Rapid Deployment", "Pre-built Modules"],
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "AI Agents & Automation",
      description:
        "Develop and deploy autonomous AI agents, smart chatbots, RAG pipelines, and automated intelligence integrations using state-of-the-art LLMs.",
      badge: "AI First",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
      details: ["AI Agents", "LangChain", "OpenAI API", "Claude", "RAG Systems"],
    },
    {
      icon: <Settings2 className="w-6 h-6" />,
      title: "Odoo & ERP Integration",
      description:
        "Custom Odoo modules, ERP configuration, and business workflow automation. We tailor Odoo to fit your exact operations — not the other way around.",
      badge: "Specialist",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
      details: ["Odoo 16/17", "Custom Modules", "ERP Integration", "Python", "XML"],
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
              className="relative h-full border border-border bg-card/50 hover:border-accent/40 shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 group"
            >
              <CardHeader className="p-0 space-y-6">
                {/* Image Container */}
                <div className="relative w-full h-44 rounded-xl overflow-hidden bg-[#0c0c0e]/30 flex-shrink-0 border border-border/20">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>

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