"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this to a backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contacts = [
    { icon: Mail, label: "Email", value: "hello@ekagra.dev", href: "mailto:hello@ekagra.dev" },
    { icon: Linkedin, label: "LinkedIn", value: "/in/ekagra", href: "https://linkedin.com" },
    { icon: Github, label: "GitHub", value: "@ekagra", href: "https://github.com" },
    { icon: Twitter, label: "Twitter", value: "@ekagra_dev", href: "https://twitter.com" },
  ]

  return (
    <main>
      <Navbar />

      <section className="min-h-screen pt-32 pb-20 px-6 noise-bg">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="accent-line mb-8" />
            <h1 className="text-6xl lg:text-7xl font-black text-foreground leading-tight">
              Let's work <span className="text-accent">together</span>
            </h1>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl">
              Have a project in mind? Want to collaborate? I'd love to hear from you. Get in touch and let's build
              something amazing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contacts.map((contact) => {
              const Icon = contact.icon
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="glass-effect p-6 rounded-xl hover:border-accent/50 transition-all hover:scale-105 group"
                >
                  <Icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">{contact.label}</h3>
                  <p className="text-foreground font-semibold group-hover:text-accent transition-colors">
                    {contact.value}
                  </p>
                </a>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="glass-effect p-12 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="Project inquiry..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground font-bold py-4 rounded-lg hover:scale-105 transition-transform disabled:opacity-50"
              >
                {submitted ? "✓ Message sent!" : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
