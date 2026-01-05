"use client"

import { useEffect, useRef } from "react"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import gsap from "gsap"

export function Hero() {
  const nameRef = useRef(null)
  const subtitleRef = useRef(null)
  const imageRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.from(nameRef.current, {
        duration: 1,
        opacity: 0,
        y: 50,
      })
        .from(
          subtitleRef.current,
          {
            duration: 0.8,
            opacity: 0,
            y: 30,
          },
          "-=0.5",
        )
        .from(
          imageRef.current,
          {
            duration: 0.8,
            opacity: 0,
            scale: 0.9,
          },
          "-=0.5",
        )
        .from(
          ctaRef.current,
          {
            duration: 0.6,
            opacity: 0,
            y: 20,
          },
          "-=0.4",
        )
    })

    return () => ctx.revert()
  }, [])

  const socials = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ekagra@example.com", label: "Email" },
  ]

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 noise-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <div>
            <div className="accent-line mb-8" />
            <h1 ref={nameRef} className="text-7xl lg:text-8xl font-black text-foreground leading-tight tracking-tight">
              Ekagra
              <br />
              <span className="text-accent">Sharma</span>
            </h1>
          </div>

          <p
            ref={subtitleRef}
            className="text-xl lg:text-2xl text-muted-foreground font-light max-w-md leading-relaxed"
          >
            Full Stack Developer <span className="text-accent">×</span> Designer <span className="text-accent">×</span>{" "}
            AI Enthusiast
          </p>

          <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
            Building elegant, real-world products that combine sharp design with robust engineering. Passionate about
            clean code, modern technologies, and turning ideas into scalable solutions.
          </p>

          {/* Social Links */}
          <div className="flex gap-6 pt-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass-effect hover:bg-white/10 transition-all hover:text-accent group"
                aria-label={label}
              >
                <Icon size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div ref={ctaRef} className="pt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:scale-105 transition-transform group"
            >
              Let's build together
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right side - Image placeholder */}
        <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
          <div
            ref={imageRef}
            className="absolute inset-0 rounded-2xl overflow-hidden glass-effect border-2 border-accent/20"
          >
            <div className="w-full h-full bg-gradient-to-br from-accent/10 to-transparent flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-accent to-accent/30 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl">👨‍💻</span>
                </div>
                <p className="text-muted-foreground text-sm">Professional Photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
