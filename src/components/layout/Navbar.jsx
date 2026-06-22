"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTheme } from "../Providers";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
import navbarLogo from "@/app/navbar-logo.png";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const services = [
  {
    icon: "💼",
    title: "Custom Business Software",
    desc: "Tailored enterprise ERPs, database management, & workflow tools",
    color: "bg-emerald-500/20",
  },
  {
    icon: "🌐",
    title: "Web Applications",
    desc: "High-performance full-stack web apps using Next.js & React",
    color: "bg-accent/20",
  },
  {
    icon: "📱",
    title: "Mobile Applications",
    desc: "Native & cross-platform iOS & Android apps via Flutter & React Native",
    color: "bg-violet-500/20",
  },
  {
    icon: "📦",
    title: "Industry-Ready Products",
    desc: "Pre-built, customizable SaaS products ready to launch immediately",
    color: "bg-amber-500/20",
  },
  {
    icon: "🤖",
    title: "AI Agents & Automation",
    desc: "Embed intelligent agents, RAG, and LLM automation into workflows",
    color: "bg-red-500/20",
  },
  {
    icon: "💻",
    title: "Odoo & ERP Integration",
    desc: "Custom modules, configurations, & integrations to fit your operations",
    color: "bg-teal-500/20",
  },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Our Work", href: "#products" },
    { name: "About Us", href: "#about" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Contact Us", href: "#contact" },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    setServicesOpen(false);
    if (href === "#" || href === "body") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.querySelector(href);
    if (!target) return;
    window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-background/90 backdrop-blur-md border-b border-border shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleScrollTo(e, "#")}
          className="flex items-center"
          aria-label="T Square Labs home"
        >
          <Image
            src={navbarLogo}
            alt="T Square Labs"
            priority
            className="h-12 w-40 rounded-lg object-cover object-center sm:w-52"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">

          {/* Home */}
          <a
            href="#"
            onClick={(e) => handleScrollTo(e, "#")}
            className="px-3 py-2 text-sm font-medium opacity-80 hover:opacity-100 hover:text-accent transition-all duration-200 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Services Dropdown */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium opacity-80 hover:opacity-100 hover:text-accent transition-all duration-200"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
            >
              Our Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Mega Dropdown */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[580px] bg-card border border-border rounded-2xl shadow-2xl p-5 transition-all duration-200 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 ${
                servicesOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-2 pointer-events-none"
              }`}
            >
              <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-card border-l border-t border-border rotate-45" />

              <p className="text-[11px] font-semibold tracking-widest uppercase text-foreground/40 mb-4 pb-3 border-b border-border">
                What We Build For You
              </p>

              <div className="grid grid-cols-2 gap-2">
                {services.map((svc) => (
                  <a
                    key={svc.title}
                    href="#services"
                    onClick={(e) => handleScrollTo(e, "#services")}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent/10 transition-all duration-150 group/card"
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0 ${svc.color}`}
                    >
                      {svc.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground group-hover/card:text-accent transition-colors">
                        {svc.title}
                      </p>
                      <p className="text-xs text-foreground/50 leading-relaxed mt-0.5">
                        {svc.desc}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-border">
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, "#services")}
                  className="text-xs font-medium text-accent hover:underline"
                >
                  View all services →
                </a>
              </div>
            </div>
          </div>

          {/* Other nav links */}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="px-3 py-2 text-sm font-medium opacity-80 hover:opacity-100 hover:text-accent transition-all duration-200 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-lg border border-border hover:border-accent bg-card/50 hover:bg-card text-foreground transition-all duration-200"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="glow-btn px-5 py-2.5 rounded-lg bg-accent hover:bg-accent/95 text-white text-sm font-semibold shadow-[0_0_15px_var(--glow)] transition-all duration-200"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border bg-card/50 text-foreground"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Shadcn Sheet for Drawer */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 rounded-lg border border-border bg-card/50 text-foreground"
                aria-label="Toggle Menu"
              >
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs sm:max-w-sm bg-background border-l border-border px-6 py-24 flex flex-col justify-between">
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              
              <nav className="flex flex-col space-y-2 overflow-y-auto">
                <a
                  href="#"
                  onClick={(e) => handleScrollTo(e, "#")}
                  className="text-xl font-semibold opacity-90 hover:text-accent transition-colors py-2"
                >
                  Home
                </a>

                {/* Mobile Services Shadcn Accordion */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="services" className="border-0">
                    <AccordionTrigger className="text-xl font-semibold opacity-90 hover:text-accent transition-colors py-2 hover:no-underline [&_svg]:hidden">
                      <span className="flex items-center justify-between w-full">
                        Our Services
                        <ChevronDown size={18} className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180" />
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="mt-2 ml-2 flex flex-col gap-3 pb-3">
                      {services.map((svc) => (
                        <a
                          key={svc.title}
                          href="#services"
                          onClick={(e) => handleScrollTo(e, "#services")}
                          className="flex items-center gap-3 group"
                        >
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 ${svc.color}`}
                          >
                            {svc.icon}
                          </div>
                          <span className="text-sm font-medium opacity-80 group-hover:text-accent transition-colors">
                            {svc.title}
                          </span>
                        </a>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-xl font-semibold opacity-90 hover:text-accent transition-colors py-2"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="flex flex-col space-y-4">
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "#contact")}
                  className="glow-btn w-full text-center py-3 rounded-lg bg-accent text-white font-semibold shadow-[0_0_15px_var(--glow)]"
                >
                  Book Consultation
                </a>
                <p className="text-xs text-center opacity-40">
                  © {new Date().getFullYear()} T Square Technologies.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}