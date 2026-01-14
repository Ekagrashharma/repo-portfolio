
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

export const SKILLS_CATEGORIES = [
  {
    category: "Frontend",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: GitBranch,
    skills: ["Node.js", "API Design", "Authentication", ],
  },
  {
    category: "Full Stack",
    icon: Zap,
    skills: ["System Design", "Database Architecture", "Cloud Deployment", "Scaling", "Testing"],
  },
  {
    category: "Design",
    icon: Palette,
    skills: ["UI/UX Design", "Figma", "Prototyping", "Design Systems", "Wireframing"],
  },
  {
    category: "AI & Tools",
    icon: Sparkles,
    skills: ["AI Integration", "OpenAI API",  "Prompt Engineering",],
  },
  {
    category: "DevOps",
    icon: Users,
    skills: [ "Vercel", "CI/CD", "GitHub Actions", "Monitoring"],
  },
]
