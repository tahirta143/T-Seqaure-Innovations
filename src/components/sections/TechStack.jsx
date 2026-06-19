"use client";

import React from "react";
import { Cpu, Server, Database, Brain, Sparkles, Smartphone, Code2, Cloud } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TechStack() {
  const stacks = [
    {
      id: "frontend",
      icon: <Cpu className="w-5 h-5 text-[#6E1A37]" />,
      title: "Frontend Development",
      description: "We craft responsive, interactive user interfaces with optimized render performance, utilizing modern frameworks and single-codebase mobile SDKs.",
      items: [
        { name: "Flutter", detail: "Beautiful native iOS & Android applications from a single codebase.", icon: <Smartphone className="w-4 h-4 text-[#6E1A37]" /> },
        { name: "React Native", detail: "High-performance native apps constructed with React hooks.", icon: <Code2 className="w-4 h-4 text-[#6E1A37]" /> },
        { name: "Next.js", detail: "SEO-friendly, server-side rendered modern React web platforms.", icon: <Sparkles className="w-4 h-4 text-[#6E1A37]" /> },
        { name: "TypeScript", detail: "Statically typed JavaScript codebases preventing production bugs.", icon: <Code2 className="w-4 h-4 text-[#6E1A37]" /> },
        { name: "Tailwind CSS", detail: "Utility-first design systems facilitating fast styling iterations.", icon: <Sparkles className="w-4 h-4 text-[#6E1A37]" /> },
      ],
    },
    {
      id: "backend",
      icon: <Server className="w-5 h-5 text-[#6E1A37]" />,
      title: "Backend Services",
      description: "Our microservice and server configurations emphasize high throughput, data integrity, secure auth structures, and low latency endpoints.",
      items: [
        { name: "Node.js", detail: "Event-driven asynchronous backend execution environments.", icon: <Server className="w-4 h-4 text-[#6E1A37]" /> },
        { name: "Express.js", detail: "Minimalist server routing configurations and middleware structures.", icon: <Code2 className="w-4 h-4 text-[#6E1A37]" /> },
        { name: "REST APIs", detail: "Exhaustively documented endpoint endpoints for external app syncing.", icon: <Code2 className="w-4 h-4 text-[#6E1A37]" /> },
        { name: "GraphQL", detail: "Query languages enabling frontend clients to fetch exactly what they request.", icon: <Sparkles className="w-4 h-4 text-[#6E1A37]" /> },
        { name: "WebSockets", detail: "Full-duplex real-time synchronization channels for chat and live boards.", icon: <Sparkles className="w-4 h-4 text-[#6E1A37]" /> },
      ],
    },
    {
      id: "databases",
      icon: <Database className="w-5 h-5 text-[#6E1A37]" />,
      title: "Databases & Cloud",
      description: "We configure containerized environments, replication strategies, server caches, and scalable cloud structures.",
      items: [
        { name: "PostgreSQL", detail: "Acid-compliant relational data management for complex query loads.", icon: <Database className="w-4 h-4 text-[#6E1A37]" /> },
        { name: "MongoDB", detail: "Document-oriented NoSQL storage for flexible schemas.", icon: <Database className="w-4 h-4 text-[#6E1A37]" /> },
        { name: "Redis", detail: "Key-value memory caching layer optimizing API response speeds.", icon: <Sparkles className="w-4 h-4 text-[#6E1A37]" /> },
        { name: "Docker", detail: "Containerization mechanisms ensuring dev-to-production environment parity.", icon: <Cloud className="w-4 h-4 text-[#6E1A37]" /> },
        { name: "AWS", detail: "Highly available server hosting, S3 file stores, and CDN deployment.", icon: <Cloud className="w-4 h-4 text-[#6E1A37]" /> },
      ],
    },
    {
      id: "ai",
      icon: <Brain className="w-5 h-5 text-[#6E1A37]" />,
      title: "Artificial Intelligence",
      description: "We deploy intelligent agents, prompt orchestration templates, and cognitive semantic lookups directly inside production services.",
      items: [
        { name: "OpenAI LLMs", detail: "GPT integration powering automated text tasks and chat widgets.", icon: <Brain className="w-4 h-4 text-[#6E1A37]" /> },
        { name: "AI Agents", detail: "Self-correcting code architectures performing workflows autonomously.", icon: <Sparkles className="w-4 h-4 text-[#6E1A37]" /> },
        { name: "LangChain", detail: "Orchestration templates chaining models with data loaders.", icon: <Code2 className="w-4 h-4 text-[#6E1A37]" /> },
        { name: "RAG Systems", detail: "Retrieval-augmented generation feeding local context into prompts.", icon: <Database className="w-4 h-4 text-[#6E1A37]" /> },
        { name: "Vector Databases", detail: "Semantic embedding matching algorithms for custom search flows.", icon: <Database className="w-4 h-4 text-[#6E1A37]" /> },
      ],
    },
  ];

  return (
    <section
      id="tech-stack"
      className="py-24 relative overflow-hidden bg-card/20 border-y border-border"
    >
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <Tabs defaultValue="frontend" className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Side: Copy and Tabs Navigation List (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-sm font-extrabold uppercase tracking-widest text-accent">
                  Our Technology Orbit
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Modern Architectures Built for Enterprise Scale
                </h2>
                <p className="text-sm sm:text-base text-foreground/75 dark:text-gray-400 leading-relaxed">
                  We select robust, future-proof tech stacks that guarantee low latencies, modularity, 
                  and easy scaling for millions of active requests.
                </p>
              </div>

              {/* Tabs Control */}
              <TabsList className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-2 bg-transparent p-0 h-auto w-full">
                {stacks.map((stack) => (
                  <TabsTrigger
                    key={stack.id}
                    value={stack.id}
                    className="flex items-center gap-3 justify-start px-4 py-3 rounded-xl border border-border bg-card/50 hover:bg-card text-foreground/70 data-[state=active]:text-accent data-[state=active]:border-accent/40 data-[state=active]:bg-accent/5 transition-all text-sm font-semibold text-left w-full cursor-pointer shadow-sm"
                  >
                    <div className="p-1 rounded-lg bg-background border border-border flex-shrink-0">
                      {stack.icon}
                    </div>
                    <span>{stack.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Right Side: Tabs Content (7 Cols) */}
            <div className="lg:col-span-7">
              {stacks.map((stack) => (
                <TabsContent key={stack.id} value={stack.id} className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                  <Card className="border border-border/80 rounded-3xl bg-card shadow-lg p-6 sm:p-8 space-y-6">
                    <CardHeader className="p-0 space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                          {stack.icon}
                        </div>
                        <CardTitle className="text-xl font-bold">{stack.title}</CardTitle>
                      </div>
                      <CardDescription className="text-sm text-foreground/70 dark:text-gray-400 pt-2 leading-relaxed">
                        {stack.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-0 space-y-4 border-t border-border/40 pt-6">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Core Frameworks</h4>
                      <div className="space-y-4">
                        {stack.items.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="flex items-start gap-4 p-4 rounded-xl border border-border/60 bg-background/50 hover:bg-background/80 hover:border-accent/30 transition-all shadow-sm"
                          >
                            <div className="p-2 rounded-lg bg-card border border-border text-accent flex-shrink-0 mt-0.5">
                              {item.icon}
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-sm text-foreground">{item.name}</span>
                                <Badge variant="secondary" className="text-[8px] px-1.5 py-0 rounded font-bold uppercase tracking-wider bg-accent/5 text-accent border border-accent/15">
                                  Standard
                                </Badge>
                              </div>
                              <p className="text-xs text-foreground/60 leading-normal">{item.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </div>

          </div>
        </Tabs>
      </div>
    </section>
  );
}
