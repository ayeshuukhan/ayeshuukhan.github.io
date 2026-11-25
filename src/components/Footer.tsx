import { Github, Linkedin, ArrowUp, Heart, Globe, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/ayeshuukhan", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ayesha-khan-6762071b4",
      label: "LinkedIn",
    },
    {
      icon: Globe,
      href: "https://abdoabozena7.github.io/Clean_Portofoio/",
      label: "Portfolio",
    },
    {
      icon: Mail,
      href: "mailto:ak31khan.03@gmail.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-card border-t-4 border-foreground pt-16 pb-32 px-6 md:pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-tighter italic">
              AYESHA KHAN<span className="text-foreground">.....</span>
            </h2>
            <p className="text-foreground/60 max-w-sm leading-relaxed">
              AI-focused graduate and software engineer
              building LLM agents, RAG workflows, machine learning pipelines,
              and Python/FastAPI systems.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-foreground/40">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium hover:underline underline-offset-4 decoration-2 transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 flex flex-col items-start md:items-end">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-foreground/40">
              Back to start
            </h3>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 px-6 py-3 border-2 border-foreground bg-card font-bold uppercase tracking-wider transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Top
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-6 px-4 md:px-12 lg:px-0">
          <p className="text-xs font-mono text-foreground/40 uppercase tracking-widest text-center md:text-left">
            (c) {currentYear} Ayesha Khan
          </p>
          <p className="text-xs font-mono text-foreground/40 flex items-center justify-center gap-2 uppercase tracking-widest text-center md:text-right">
            Designed and Engineered with
            <Heart className="w-3.5 h-3.5 text-foreground fill-foreground animate-heartbeat inline-block" />
            by Ayesha
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
