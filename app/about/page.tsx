"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
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
        y: 30,
      })

      gsap.from(contentRef.current?.children || [], {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
        duration: 0.8,
        opacity: 0,
        y: 20,
        stagger: 0.1,
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
              About <span className="text-accent">Me</span>
            </h1>
          </div>

          <div ref={contentRef} className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm <span className="text-accent font-semibold">Ekagra Sharma</span>, a full-stack developer and designer
              passionate about building elegant, scalable products that solve real-world problems. With a deep interest
              in both engineering and design, I believe the best products emerge at the intersection of these
              disciplines.
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

            <p>
              When I'm not coding or designing, you'll find me exploring emerging technologies, contributing to the
              design and development community, or working on personal projects that push the boundaries of what's
              possible on the web.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
