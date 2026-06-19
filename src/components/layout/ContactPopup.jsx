"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPopup() {
  const [show, setShow] = useState(false);
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [formState, setFormState] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1500); // 1.5s delay
    return () => clearTimeout(timer);
  }, []);

  const handleClose = (open) => {
    if (!open) {
      setShow(false);
    }
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
        setTimeout(() => {
          setShow(false);
          setSubmitted(false);
        }, 3000);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <Dialog open={show} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[480px] p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-2xl">
        <DialogHeader className="mb-4">
          <p className="text-xs font-extrabold uppercase tracking-widest text-accent mb-1">
            Start Your Project
          </p>
          <DialogTitle className="text-2xl font-extrabold tracking-tight text-foreground">
            Let's Build Something Amazing
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground mt-1">
            Tell us about your idea — we'll reply within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-foreground/55 uppercase tracking-widest">
                Project Type
              </label>
              <Select value={projectType} onValueChange={setProjectType}>
                <SelectTrigger className="w-full h-10 px-3 rounded-xl bg-card border border-border focus-visible:border-accent text-sm text-foreground">
                  <SelectValue placeholder="Select Project Type" />
                </SelectTrigger>
                <SelectContent>
                  {projectTypeOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-foreground/55 uppercase tracking-widest">
                Budget (PKR)
              </label>
              <Select value={budget} onValueChange={setBudget}>
                <SelectTrigger className="w-full h-10 px-3 rounded-xl bg-card border border-border focus-visible:border-accent text-sm text-foreground">
                  <SelectValue placeholder="Select Budget" />
                </SelectTrigger>
                <SelectContent>
                  {budgetOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-foreground/55 uppercase tracking-widest">Your Name *</label>
              <Input
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
                placeholder="John Doe"
                className="w-full h-10 rounded-xl bg-background border border-border focus-visible:border-accent"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-foreground/55 uppercase tracking-widest">Email Address *</label>
              <Input
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                required
                placeholder="john@company.com"
                className="w-full h-10 rounded-xl bg-background border border-border focus-visible:border-accent"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-foreground/55 uppercase tracking-widest">Company (Optional)</label>
            <Input
              type="text"
              value={formState.company}
              onChange={(e) => setFormState({ ...formState, company: e.target.value })}
              placeholder="Acme Corp"
              className="w-full h-10 rounded-xl bg-background border border-border focus-visible:border-accent"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-foreground/55 uppercase tracking-widest">Project Details *</label>
            <Textarea
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              required
              rows={3}
              placeholder="Describe your project, goals, and timeline..."
              className="w-full rounded-xl bg-background border border-border focus-visible:border-accent resize-none min-h-[80px]"
            />
          </div>

          {error && (
            <p className="text-red-500 text-xs font-semibold text-center mt-2">
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={loading || submitted}
            className="w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-sm transition-colors flex items-center justify-center space-x-2 shadow-lg"
          >
            <MessageSquare size={15} />
            <span>
              {loading
                ? "Sending..."
                : submitted
                ? "Sent Successfully! ✓"
                : "Submit Project Inquiry"}
            </span>
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
