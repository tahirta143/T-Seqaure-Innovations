"use client";

import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MessageSquare, ChevronDown, Check } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Reusable dropdown component
function SelectDropdown({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <div className="space-y-2" ref={ref}>
      <label className="text-[10px] font-bold text-foreground/55 uppercase tracking-widest">
        {label}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-card border border-border hover:border-accent/60 focus:border-accent focus:outline-none text-sm text-foreground transition-colors"
        >
          <span className={value ? "text-foreground" : "text-foreground/40"}>
            {value || `Select ${label}`}
          </span>
          <ChevronDown
            size={15}
            className={`text-foreground/50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className="w-full flex items-center justify-between px-4 py-3 text-sm text-left hover:bg-accent/10 hover:text-accent transition-colors border-b border-border/40 last:border-0"
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-medium">{opt.label}</span>
                </div>
                {value === opt.value && (
                  <Check size={14} className="text-accent flex-shrink-0" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Contact() {
  const containerRef = useRef(null);
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const projectTypeOptions = [
    { value: "Mobile App", label: "Mobile App" },
    { value: "Web Development", label: "Web Development" },
    { value: "AI Integration", label: "AI Integration" },
    { value: "API Development", label: "API Development" },
    { value: "Odoo Development", label: "Odoo Development" },
    { value: "SaaS Platform", label: "SaaS Platform" },
    { value: "Other", label: "Other / Not Sure" },
  ];

  const budgetOptions = [
    { value: "<20k PKR", label: "Less than 20,000 PKR" },
    { value: "20k–50k PKR", label: "20,000 – 50,000 PKR" },
    { value: "50k–100k PKR", label: "50,000 – 100,000 PKR" },
    { value: "100k–250k PKR", label: "100,000 – 250,000 PKR" },
    { value: "250k–500k PKR", label: "250,000 – 500,000 PKR" },
    { value: "500k–1M PKR", label: "500,000 – 1,000,000 PKR" },
    { value: "1M+ PKR", label: "1,000,000+ PKR" },
    { value: "Not sure", label: "Not sure yet" },
  ];


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-inner-container",
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSubmitted(false);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          projectType,
          budget,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setFormState({ name: "", email: "", company: "", message: "" });
        setProjectType("");
        setBudget("");
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Unable to connect to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-24 relative overflow-hidden bg-background text-foreground border-t border-border transition-colors duration-300"
    >
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="contact-inner-container max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-sm font-extrabold uppercase tracking-widest text-accent">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Let's Construct Something Remarkable
          </h2>
          <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
            Have a project in mind? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xl font-bold border-b border-border/40 pb-4 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <a
                href="mailto:tsquareinnovations.info@gmail.com"
                className="flex items-start space-x-4 p-6 rounded-2xl glass-card border border-border hover:border-accent transition-colors"
              >
                <div className="p-3 rounded-xl bg-card border border-border text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground/55 uppercase tracking-widest mb-1">
                    Email Address
                  </h4>
                  <p className="text-base font-semibold break-all">
                    tsquareinnovations.info@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/923254828492"
                target="_blank"
                rel="noreferrer"
                className="flex items-start space-x-4 p-6 rounded-2xl glass-card border border-border hover:border-accent transition-colors"
              >
                <div className="p-3 rounded-xl bg-card border border-border text-accent">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground/55 uppercase tracking-widest mb-1">
                    WhatsApp Chat
                  </h4>
                  <p className="text-base font-semibold">+92 325 4828492</p>
                </div>
              </a>

              <div className="flex items-start space-x-4 p-6 rounded-2xl glass-card border border-border">
                <div className="p-3 rounded-xl bg-card border border-border text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground/55 uppercase tracking-widest mb-1">
                    Direct Phone
                  </h4>
                  <p className="text-base font-semibold">+92 325 4828492</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-6">
              <h4 className="text-xs font-bold text-foreground/55 uppercase tracking-widest mb-4">
                Connect on Social Networks
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/tsquare-labs/?viewAsMember=true"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-card border border-border text-foreground/70 hover:text-foreground hover:border-accent flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-card border border-border text-foreground/70 hover:text-foreground hover:border-accent flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl glass-card border border-border/80 backdrop-blur-md space-y-6"
            >
              <h3 className="text-xl font-bold border-b border-border/40 pb-4 mb-6">
                Tell Us About Your Project
              </h3>

              {/* Project Type Dropdown */}
              <SelectDropdown
                label="What kind of project?"
                options={projectTypeOptions}
                value={projectType}
                onChange={setProjectType}
              />

              {/* Budget Dropdown (PKR) */}
              <SelectDropdown
                label="Project budget (PKR)"
                options={budgetOptions}
                value={budget}
                onChange={setBudget}
              />

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-foreground/55 uppercase tracking-widest">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-accent focus:outline-none text-sm text-foreground transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-foreground/55 uppercase tracking-widest">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-accent focus:outline-none text-sm text-foreground transition-colors"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-foreground/55 uppercase tracking-widest">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  name="company"
                  value={formState.company}
                  onChange={handleInputChange}
                  placeholder="e.g. Acme Corp"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-accent focus:outline-none text-sm text-foreground transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-foreground/55 uppercase tracking-widest">
                  Project Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Describe your project, deadlines, and technical goals..."
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-accent focus:outline-none text-sm text-foreground resize-none transition-colors"
                />
              </div>

              {error && (
                <p className="text-red-500 text-xs font-semibold text-center mt-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="glow-btn w-full py-4 rounded-xl bg-accent hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm shadow-[0_0_15px_var(--glow)] transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare size={16} />
                <span>
                  {loading
                    ? "Sending Inquiry..."
                    : submitted
                    ? "Message Sent Successfully! ✓"
                    : "Submit Project Inquiry"}
                </span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}