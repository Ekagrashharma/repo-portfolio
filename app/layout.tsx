import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Ekagra Sharma | Full Stack Developer & Designer",
  description:
    "Full stack developer, designer, and AI enthusiast. Building real-world products with Next.js, TypeScript, and modern technologies.",
  keywords: ["Full Stack Developer", "Web Designer", "AI", "Next.js", "React", "TypeScript"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${spaceGrotesk.className} antialiased overflow-x-hidden`}>{children}</body>
    </html>
  )
}
