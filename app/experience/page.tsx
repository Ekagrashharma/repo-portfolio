"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const EXPERIENCES = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Startup",
    period: "2023 - Present",
    description:
      "Leading full-stack development of scalable SaaS products. Architecting systems, mentoring junior developers, and driving technical excellence.",
    achievements: ["Built 5+ production apps", "Led technical team", "Optimized performance by 40%"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency",
    period: "2022 - 2023",
    description:
      "Developed custom web solutions for clients. Worked across the entire stack from UI design to backend architecture.",
    achievements: ["Delivered 20+ projects", "Improved code quality", "Client satisfaction rate: 98%"],
  },
  {
    title: "Frontend Engineer",
    company: "SaaS Company",
    period: "2021 - 2022",
    description:
      "Focused on building beautiful, performant user interfaces. Implemented design systems and modern animations.",
    achievements: ["Created design system", "Performance improvements", "Component library adoption"],
  },
  {
    title: "Freelance Developer",
    company: "Self-employed",
    period: "2020 - Present",
    description:
      "Building independent projects and taking on selective client work. Focus on innovative, high-quality products.",
    achievements: ["Multiple SaaS launches", "Open source contributions", "Growing portfolio"],
  },
]

export default function Experience() {
  const titleRef = useRef(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        duration: 0.8,
        opacity: 0,
        y: 30,
      })

      gsap.from(timelineRef.current?.children || [], {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
        },
        duration: 0.6,
        opacity: 0,
        x: -30,
        stagger: 0.15,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main>
      <Navbar />

      <section className="min-h-screen pt-32 pb-20 px-6 noise-bg">
        <div className="max-w-4xl mx-auto">
          <div ref={titleRef} className="mb-16">
            <div className="accent-line mb-8" />
            <h1 className="text-6xl lg:text-7xl font-black text-foreground leading-tight">
              Professional <span className="text-accent">Experience</span>
            </h1>
          </div>

          <div ref={timelineRef} className="space-y-0">
            {EXPERIENCES.map((exp, idx) => (
              <div key={exp.title} className="relative">
                {/* Timeline line */}
                {idx !== EXPERIENCES.length - 1 && (
                  <div className="absolute left-0 top-24 w-1 h-32 bg-gradient-to-b from-accent to-transparent" />
                )}

                <div className="glass-effect p-8 rounded-xl mb-8 hover:border-accent/50 transition-all">
                  {/* Timeline dot */}
                  <div className="absolute -left-6 top-8 w-4 h-4 rounded-full bg-accent border-4 border-background" />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-accent font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-muted-foreground whitespace-nowrap">{exp.period}</span>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="text-accent">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
