"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Palette,
  Brain,
  Code,
  Zap,
  GitBranch,
  Users,
  BarChart3,
  ShoppingCart,
  Sparkles,
  Menu,
  X,
} from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SKILLS_CATEGORIES } from "./utils/constant/skills.constant"
import { EXPERIENCE } from "./utils/constant/experience.constant"
import {PROJECTS} from "./utils/constant/projects.contant"


gsap.registerPlugin(ScrollTrigger)




// ============================================================================
// HERO SECTION
// ============================================================================
function HeroSection() {
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
    <section className="min-h-screen pt-32 pb-20 px-6 noise-bg" id="home">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <div className="accent-line mb-8" />
            <h1 ref={nameRef} className="text-7xl lg:text-8xl font-black text-foreground leading-tight">
              Ekagra <span className="text-accent">Sharma</span>
            </h1>
            <p ref={subtitleRef} className="text-2xl lg:text-3xl text-muted-foreground mt-6 font-medium">
              Full Stack Developer & Designer
            </p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            I build modern web products with beautiful interfaces and robust backends. Expertise in Next.js, TypeScript,
            and AI integration.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass-effect font-bold rounded-lg hover:border-accent/50 transition-all"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex gap-6">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div ref={imageRef} className="relative h-96 lg:h-full min-h-96">
          <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-transparent rounded-2xl" />
          <img
            src="/professional-developer-portrait.jpg"
            alt="Ekagra Sharma"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}


// ============================================================================
// ABOUT SECTION
// ============================================================================
function AboutSection() {
  const titleRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        duration: 0.8,
        opacity: 0,
        y: 40,
      })

      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
        duration: 0.8,
        opacity: 0,
        y: 40,
        delay: 0.2,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 noise-bg" id="about">
      <div className="max-w-4xl mx-auto">
        <div ref={titleRef} className="mb-16">
          <div className="accent-line mb-8" />
          <h2 className="text-6xl lg:text-7xl font-black text-foreground leading-tight">
            About <span className="text-accent">Me</span>
          </h2>
        </div>

        <div ref={contentRef} className="space-y-8 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm <span className="text-accent font-semibold">Ekagra Sharma</span>, a full-stack developer and designer
            passionate about building elegant, scalable products that solve real-world problems. With a deep interest in
            both engineering and design, I believe the best products emerge at the intersection of these disciplines.
          </p>

          <p>
            My journey into tech started with a curiosity about how things work. I've since built multiple SaaS
            projects, designed robust systems, and continuously pushed myself to learn cutting-edge technologies. I'm
            fascinated by AI, systems thinking, and the 20/80 rule — doing the 20% of work that generates 80% of the
            value.
          </p>

          <div className="grid md:grid-cols-2 gap-12 my-12">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="accent-line" /> Skills
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> Full-stack development
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> UI/UX design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> AI integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> System design
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="accent-line" /> Tech Stack
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> Next.js & React
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> GSAP & Framer Motion
                </li>
              </ul>
            </div>
          </div>

          <p>
            I'm constantly learning, experimenting with new technologies, and staying updated with industry trends. My
            approach is driven by the philosophy that great products are built through collaboration, clear thinking,
            and relentless focus on what matters most.
          </p>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// PROJECTS SECTION
// ============================================================================
function ProjectsSection() {
  const titleRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        duration: 0.8,
        opacity: 0,
        y: 40,
      })

      {/*
        gsap.from(".project-card", {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
        duration: 0.6,
        opacity: 0,
        y: 40,
        stagger: 0.1,
      })
       */}
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 noise-bg" id="projects">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="mb-16">
          <div className="accent-line mb-8" />
          <h2 className="text-6xl lg:text-7xl font-black text-foreground leading-tight">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl">
            A selection of work that demonstrates my approach to design, engineering, and product development.
          </p>
        </div>

       <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> 
          {PROJECTS.map((project) => {
            const IconComponent = project.icon
            return (
              <a
                key={project.title}
                href={project.href}
                className="project-card group glass-effect p-8 rounded-xl hover:border-accent/50 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <IconComponent size={32} className="text-accent" />
                  </div>
                  <span className="text-xs font-semibold text-accent uppercase">{project.type}</span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-accent font-semibold group-hover:gap-6 transition-all">
                  <span>View Project</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// SKILLS SECTION
// ============================================================================
function SkillsSection() {
  const titleRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        duration: 0.8,
        opacity: 0,
        y: 40,
      })

      {/*gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
        duration: 0.6,
        opacity: 0,
        y: 40,
        stagger: 0.05,
      })*/}
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 noise-bg" id="skills">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="mb-16">
          <div className="accent-line mb-8" />
          <h2 className="text-6xl lg:text-7xl font-black text-foreground leading-tight">
            Skills & <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl">
            A comprehensive overview of my technical and professional capabilities built through years of experience.
          </p>
        </div>

         Main Skills Categories 
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {SKILLS_CATEGORIES.map((item) => {
            const IconComponent = item.icon
            return (
              <div
                key={item.category}
                className="skill-card glass-effect p-8 rounded-xl hover:border-accent/50 transition-all duration-300 hover:translate-y-[-4px] h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <IconComponent size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.category}</h3>
                </div>

                <ul className="space-y-3">
                  {item.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                    >
                      <span className="text-accent text-sm">▸</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Tools Section - Fixed Layout */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-foreground mb-12 flex items-center gap-3">
            <span className="accent-line" />
            Development & Design Tools
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold text-accent mb-6">Development Tools</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "VS Code",
                  "Git",
                  "Vercel",
                  "GitHub",
                  "NPM/Yarn",
                  "Docker",
                  "AWS",
                  "Stripe",
                  "GraphQL",
                  "REST APIs",
                  "Postman",
                  "Linux",
                ].map((tool) => (
                  <div
                    key={tool}
                    className="glass-effect p-4 rounded-lg text-center hover:border-accent/50 transition-all hover:translate-y-[-2px]"
                  >
                    <p className="text-sm font-medium text-foreground">{tool}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-accent mb-6">Design & Prototyping Tools</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Figma",
                  "Adobe XD",
                  "Framer",
                  "Photoshop",
                  "Illustrator",
                  "InVision",
                  "Webflow",
                  "Sketch",
                  "Prototype.app",
                  "Spline",
                  "After Effects",
                  "Loom",
                ].map((tool) => (
                  <div
                    key={tool}
                    className="glass-effect p-4 rounded-lg text-center hover:border-accent/50 transition-all hover:translate-y-[-2px]"
                  >
                    <p className="text-sm font-medium text-foreground">{tool}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Proficiency Summary */}
        <div className="mt-20 glass-effect p-12 rounded-xl">
          <h3 className="text-2xl font-bold text-foreground mb-8">Proficiency Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-foreground font-semibold">Frontend Development</span>
                <span className="text-accent text-sm">95%</span>
              </div>
              <div className="h-2 bg-background rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent to-accent/50 rounded-full"
                  style={{ width: "95%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-foreground font-semibold">Backend Development</span>
                <span className="text-accent text-sm">90%</span>
              </div>
              <div className="h-2 bg-background rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent to-accent/50 rounded-full"
                  style={{ width: "90%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-foreground font-semibold">UI/UX Design</span>
                <span className="text-accent text-sm">85%</span>
              </div>
              <div className="h-2 bg-background rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent to-accent/50 rounded-full"
                  style={{ width: "85%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-foreground font-semibold">DevOps & Cloud</span>
                <span className="text-accent text-sm">80%</span>
              </div>
              <div className="h-2 bg-background rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent to-accent/50 rounded-full"
                  style={{ width: "80%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// EXPERIENCE SECTION
// ============================================================================
function ExperienceSection() {
  const titleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        duration: 0.8,
        opacity: 0,
        y: 40,
      })

     {/*
       gsap.from(".exp-item", {
        scrollTrigger: {
          trigger: ".exp-item",
          start: "top 80%",
        },
        duration: 0.6,
        opacity: 0,
        y: 40,
        stagger: 0.2,
      }) */}
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 noise-bg" id="experience">
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef} className="mb-16">
          <div className="accent-line mb-8" />
          <h2 className="text-6xl lg:text-7xl font-black text-foreground leading-tight">
            Experience & <span className="text-accent">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl">
            A timeline of my professional journey and key accomplishments.
          </p>
        </div>

        <div className="space-y-8">
          {EXPERIENCE.map((exp, idx) => (
            <div
              key={exp.company}
              className="exp-item glass-effect p-8 rounded-xl border-l-4 border-accent hover:border-accent/70 transition-all hover:translate-y-[-4px]"
            >
              {/* Header with Title and Duration */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-accent font-bold text-lg">0{idx + 1}</span>
                    <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                  </div>
                  <p className="text-accent font-semibold text-lg mt-1">{exp.company}</p>
                </div>
                <span className="text-muted-foreground text-sm whitespace-nowrap px-4 py-2 bg-accent/5 rounded-lg">
                  {exp.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8 text-base">{exp.description}</p>

              {/* Achievements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {exp.achievements.map((achievement) => (
                  <div key={achievement} className="bg-accent/5 p-4 rounded-lg border border-accent/10">
                    <p className="text-sm text-foreground font-medium flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              {exp.details && (
                <div>
                  <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.details.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium text-foreground bg-background border border-accent/20 rounded-full hover:border-accent/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mt-6 pt-6 border-t border-accent/10">
                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Key Highlights</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.details.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="text-accent mt-1">→</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline Summary */}
        <div className="mt-16 glass-effect p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-foreground mb-8">Career Timeline</h3>
          <div className="relative">
            {EXPERIENCE.map((exp, idx) => (
              <div key={exp.company} className="flex gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent border-2 border-background" />
                  {idx !== EXPERIENCE.length - 1 && <div className="w-0.5 h-24 bg-accent/20 mt-2" />}
                </div>
                <div className="pb-8">
                  <p className="text-muted-foreground text-sm">{exp.duration}</p>
                  <p className="text-foreground font-semibold">
                    {exp.title} at {exp.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// CONTACT SECTION
// ============================================================================
function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const titleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        duration: 0.8,
        opacity: 0,
        y: 40,
      })

      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
        },
        duration: 0.8,
        opacity: 0,
        y: 40,
        delay: 0.2,
      })
    })

    return () => ctx.revert()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setTimeout(() => {
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    }, 1500)
  }

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 noise-bg" id="contact">
      <div className="max-w-2xl mx-auto">
        <div ref={titleRef} className="mb-16 text-center">
          <div className="accent-line mb-8 mx-auto w-fit" />
          <h2 className="text-6xl lg:text-7xl font-black text-foreground leading-tight">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground mt-6">
            I'm always interested in hearing about new projects and opportunities.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form glass-effect p-8 rounded-xl space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
          />

          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
          />

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 transition-colors resize-none"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-accent text-center">Thanks for reaching out. I'll get back to you soon!</p>
          )}
        </form>
      </div>
    </section>
  )
}

// ============================================================================
// NAVBAR COMPONENT
// ============================================================================
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1))
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 200 && rect.bottom >= 200
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-foreground">
          ES<span className="text-accent">.</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.href.slice(1) ? "text-accent" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu with gradient background */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 md:hidden bg-gradient-to-b from-background via-background/95 to-background/80 border-b border-border backdrop-blur-md">
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.href.slice(1) ? "text-accent" : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// ============================================================================
// FOOTER COMPONENT
// ============================================================================
function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center text-muted-foreground space-y-2">
        <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
        <p className="text-sm mt-2">© 2025 Ekagra Sharma. All rights reserved.</p>
      </div>
    </footer>
  )
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default Home
