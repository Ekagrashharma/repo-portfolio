
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
    skills: ["Node.js", "PostgreSQL", "API Design", "Authentication", "WebSockets", "Caching"],
  },
  {
    category: "Full Stack",
    icon: Zap,
    skills: ["System Design", "Database Architecture", "DevOps", "Cloud Deployment", "Scaling", "Testing"],
  },
  {
    category: "Design",
    icon: Palette,
    skills: ["UI/UX Design", "Figma", "Prototyping", "Design Systems", "Wireframing"],
  },
  {
    category: "AI & Tools",
    icon: Sparkles,
    skills: ["AI Integration", "OpenAI API", "LangChain", "Prompt Engineering", "Vector DBs"],
  },
  {
    category: "DevOps",
    icon: Users,
    skills: ["Docker", "AWS", "Vercel", "CI/CD", "GitHub Actions", "Monitoring"],
  },
]
