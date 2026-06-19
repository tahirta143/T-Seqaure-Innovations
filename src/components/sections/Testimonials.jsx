"use client";

import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Testimonials() {
  const reviews = [
    {
      name: "Marcus Vance",
      role: "CEO, ApexRetail",
      text: "T Square Technologies delivered our marketplace platform on schedule. The clean code, speed, and support have been outstanding.",
      rating: 5,
    },
    {
      name: "Sophia Chen",
      role: "VP of Product, CarePulse",
      text: "The AI agent platform they integrated into our customer flow cut support ticket loads by 40% in just two weeks.",
      rating: 5,
    },
    {
      name: "David K.",
      role: "Founder, FitSync",
      text: "Exceptional architecture design! Our fitness tracker app operates offline-first flawlessly, saving local SQLite cache without delays.",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      role: "CTO, EduLearn",
      text: "Their Next.js developers are top-notch. Lighthouse SEO scores hit 98/100, which dramatically boosted our organic sign-ups.",
      rating: 5,
    },
    {
      name: "James L.",
      role: "Operations Dir, FastPOS",
      text: "The Restaurant POS Flutter system they built is clean, robust, and performs beautifully on low-spec tablets.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden bg-card/10"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-extrabold uppercase tracking-widest text-accent mb-2 block">
            Client Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            What Tech Leaders Say About Us
          </h2>
          <p className="text-sm sm:text-base text-foreground/70 dark:text-gray-400 max-w-xl mx-auto">
            Read how we have partnered with companies around the globe to build reliable, high-performance software.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {reviews.map((rev, idx) => (
                <CarouselItem key={idx} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="h-full bg-card border border-border rounded-2xl shadow-md hover:border-accent/40 transition-colors flex flex-col justify-between p-6 md:p-8">
                      <CardContent className="p-0 flex flex-col h-full justify-between gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-1 text-amber-500">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} size={15} fill="currentColor" />
                            ))}
                          </div>
                          <p className="text-sm text-foreground/80 italic leading-relaxed">
                            "{rev.text}"
                          </p>
                        </div>
                        <div className="border-t border-border/40 pt-4">
                          <h4 className="text-sm font-bold text-foreground">{rev.name}</h4>
                          <p className="text-[10px] text-foreground/50 font-medium">{rev.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Buttons */}
            <div className="hidden sm:block">
              <CarouselPrevious className="h-9 w-9 border-border bg-card text-foreground hover:bg-accent hover:text-white" />
              <CarouselNext className="h-9 w-9 border-border bg-card text-foreground hover:bg-accent hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
