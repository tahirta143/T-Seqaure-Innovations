"use client";

import React, { useState, useEffect } from "react";
import { X, MessageSquare, ChevronDown, Check } from "lucide-react";

function PopupSelect({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-1.5 relative">
      <label className="text-[10px] font-bold text-foreground/55 uppercase tracking-widest">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-card border border-border hover:border-accent/60 focus:border-accent focus:outline-none text-sm text-foreground transition-colors"
      >
        <span className={value ? "text-foreground" : "text-foreground/40"}>
          {value || `Select ${label}`}
        </span>
        <ChevronDown
          size={14}
          className={`text-foreground/50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-card border border-border rounded-xl shadow-2xl overflow-hidden max-h-40 overflow-y-auto">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => { onChange(opt.value); setOpen(false); }}
              className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-left hover:bg-accent/10 hover:text-accent transition-colors border-b border-border/40 last:border-0"
            >
              <div className="flex items-center gap-2">
                {opt.icon && <span>{opt.icon}</span>}
                <span className="font-medium">{opt.label}</span>
              </div>
              {value === opt.value && <Check size={13} className="text-accent flex-shrink-0" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ContactPopup() {
  const [show, setShow] = useState(false);
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [formState, setFormState] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShow(false);
      setSubmitted(false);
      setFormState({ name: "", email: "", company: "", message: "" });
      setProjectType("");
      setBudget("");
    }, 2500);
  };

  if (!show) return null;

  const projectTypeOptions = [
    { value: "Mobile App", label: "Mobile App", icon: "📱" },
    { value: "Web Development", label: "Web Development", icon: "🌐" },
    { value: "AI Integration", label: "AI Integration", icon: "🤖" },
    { value: "API Development", label: "API Development", icon: "🔑" },
    { value: "Odoo Development", label: "Odoo Development", icon: "⚙️" },
    { value: "SaaS Platform", label: "SaaS Platform", icon: "💻" },
    { value: "Other", label: "Other / Not Sure", icon: "💬" },
  ];

  const budgetOptions = [
    { value: "<$5k", label: "Less than $5,000", icon: "💵" },
    { value: "$5k–$10k", label: "$5,000 – $10,000", icon: "💵" },
    { value: "$10k–$25k", label: "$10,000 – $25,000", icon: "💰" },
    { value: "$25k–$50k", label: "$25,000 – $50,000", icon: "💰" },
    { value: "$50k+", label: "$50,000+", icon: "🏦" },
    { value: "Not sure", label: "Not sure yet", icon: "🤔" },
  ];

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.25s_ease]"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-card border border-border rounded-3xl shadow-2xl p-8 animate-[slideUp_0.35s_ease]">

        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close popup"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-foreground/10 hover:bg-foreground/20 text-foreground transition-colors"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <p className="text-xs font-extrabold uppercase tracking-widest text-accent mb-1">
            Start Your Project
          </p>
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
            Let's Build Something Amazing
          </h2>
          <p className="text-sm text-foreground/60 mt-1">
            Tell us about your idea — we'll reply within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <PopupSelect label="Project Type" options={projectTypeOptions} value={projectType} onChange={setProjectType} />
            <PopupSelect label="Budget (USD)" options={budgetOptions} value={budget} onChange={setBudget} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-foreground/55 uppercase tracking-widest">Your Name *</label>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
                placeholder="John Doe"
                className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-accent focus:outline-none text-sm text-foreground transition-colors"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-foreground/55 uppercase tracking-widest">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                required
                placeholder="john@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-accent focus:outline-none text-sm text-foreground transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-foreground/55 uppercase tracking-widest">Company (Optional)</label>
            <input
              type="text"
              name="company"
              value={formState.company}
              onChange={(e) => setFormState({ ...formState, company: e.target.value })}
              placeholder="Acme Corp"
              className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-accent focus:outline-none text-sm text-foreground transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-foreground/55 uppercase tracking-widest">Project Details *</label>
            <textarea
              name="message"
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              required
              rows={3}
              placeholder="Describe your project, goals, and timeline..."
              className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-accent focus:outline-none text-sm text-foreground resize-none transition-colors"
            />
          </div>

          <button
            type="submit"
            className="glow-btn w-full py-3.5 rounded-xl bg-accent hover:bg-accent/90 text-white font-bold text-sm shadow-[0_0_15px_var(--glow)] transition-colors flex items-center justify-center space-x-2"
          >
            <MessageSquare size={15} />
            <span>{submitted ? "Sent Successfully! ✓" : "Submit Project Inquiry"}</span>
          </button>
        </form>
      </div>

      {/* Keyframes injected via style tag for popup animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
