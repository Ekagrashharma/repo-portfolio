import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Ekagra<span className="text-accent">.</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Full stack developer building the future, one product at a time.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Social</h4>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg glass-effect hover:text-accent transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg glass-effect hover:text-accent transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg glass-effect hover:text-accent transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg glass-effect hover:text-accent transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {year} Ekagra Sharma. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
