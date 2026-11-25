import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ChevronDown, Globe } from "lucide-react";

const roles = [
  "Agentic AI Developer",
  "LLM Agents / RAG Builder",
  "Machine Learning Engineer",
  "Python / FastAPI Systems",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Binary background: real ASCII bytes of AI words glow among dim random bits
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const WORDS = ["AI", "LLM", "GPT", "RAG", "AGENT", "NEURAL", "MODEL", "TRAIN"];
    const enc = (w: string) =>
      w.split("").map((c) => c.charCodeAt(0).toString(2).padStart(8, "0")).join("");
    type Bit = { b: string; h: boolean };
    const makeStream = (): Bit[] => {
      const s: Bit[] = [];
      while (s.length < 120) {
        if (Math.random() < 0.4) {
          enc(WORDS[Math.floor(Math.random() * WORDS.length)])
            .split("")
            .forEach((b) => s.push({ b, h: true }));
        } else {
          const n = 6 + Math.floor(Math.random() * 10);
          for (let i = 0; i < n; i++) s.push({ b: Math.random() < 0.5 ? "0" : "1", h: false });
        }
      }
      return s;
    };

    const SZ = 15;
    let cols: { x: number; y: number; v: number; t: number; s: Bit[] }[] = [];
    let W = 0;
    let H = 0;
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      const d = window.devicePixelRatio || 1;
      W = r.width;
      H = r.height;
      canvas.width = W * d;
      canvas.height = H * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      cols = Array.from({ length: Math.floor(W / SZ) }, (_, i) => ({
        x: i * SZ,
        y: -Math.random() * 60,
        v: 0.12 + Math.random() * 0.25,
        t: 14 + Math.floor(Math.random() * 16),
        s: makeStream(),
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.font = "13px monospace";
      for (const c of cols) {
        for (let k = 0; k < c.t; k++) {
          const cy = Math.floor(c.y) - k;
          if (cy < 0) continue;
          const ch = c.s[cy % c.s.length];
          const a = (1 - k / c.t) * (ch.h ? 0.95 : 0.2);
          ctx.fillStyle = ch.h ? `rgba(96,165,250,${a})` : `rgba(59,98,160,${a})`;
          ctx.fillText(ch.b, c.x, cy * SZ);
        }
        c.y += c.v;
        if ((c.y - c.t) * SZ > H) {
          c.y = -Math.random() * 20;
          c.s = makeStream();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden bg-gradient-to-b from-[#10141b] to-background">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{ WebkitMaskImage: "linear-gradient(#000 60%, transparent)", maskImage: "linear-gradient(#000 60%, transparent)" }}
      />

      <div className="absolute top-28 left-6 md:left-10 z-10 hidden md:block">
        <p className="font-mono text-xs text-foreground/60 leading-relaxed font-medium">
          // portfolio.tsx
          <br />
          // version: 3.0.0
          <br />
          // status: production
          <br />
          // last_build: {new Date().toISOString().split("T")[0]}
        </p>
      </div>

      <div className="absolute top-28 right-6 md:right-10 z-10 hidden md:block">
        <p className="font-mono text-xs text-foreground/40 leading-relaxed text-right font-medium">
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i} className="block">
              {String(i + 1).padStart(3, "0")}
            </span>
          ))}
        </p>
      </div>

      <div className="text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-foreground/30 bg-background/80 backdrop-blur-md shadow-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
          <span className="font-mono text-xs text-foreground/90 tracking-[0.15em] uppercase font-medium">
            Open to opportunities
          </span>
        </div>

        <h1
          className="heading-brutal leading-[0.85]"
          style={{ fontSize: "clamp(48px, 10vw, 130px)" }}
        >
          Ayesha Sadiqa 
          <br />
          <span className="text-foreground/20">Khan.</span>
        </h1>

        <div className="mt-6 h-8 flex items-center justify-center">
          <span className="font-mono text-sm md:text-base tracking-[0.2em] text-foreground/50">
            {"< "}
          </span>
          <span className="font-mono text-sm md:text-base tracking-[0.15em] text-foreground/70 font-medium">
            {displayText}
          </span>
          <span
            className={`font-mono text-sm md:text-base text-foreground/70 ${
              cursorVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            |
          </span>
          <span className="font-mono text-sm md:text-base tracking-[0.2em] text-foreground/50">
            {" />"}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mt-8 max-w-md mx-auto">
          {[
            "RAG",
            "FastAPI",
            "Python",
            "Transformers",
            "Kubernetes",
            "Docker",
            "Kafka",
            "PostgreSQL"
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 font-mono text-xs border-2 border-foreground/40 text-foreground/80 font-medium tracking-wider hover:bg-foreground hover:text-background transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 justify-center mt-10">
          {[
            {
              Icon: Github,
              href: "https://github.com/ayeshuukhan",
              label: "GitHub",
            },
            {
              Icon: Linkedin,
              href: "https://www.linkedin.com/in/ayesha-khan-6762071b4",
              label: "LinkedIn",
            },
            {
              Icon: Globe,
              href: "https://abdoabozena7.github.io/Clean_Portofoio/",
              label: "Portfolio",
            },
            {
              Icon: Mail,
              href: "mailto:ak31khan.03@gmail",
              label: "Email",
            },
          ].map(({ Icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative inline-flex items-center justify-center p-3 border-2 border-foreground bg-card text-foreground transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-foreground hover:text-background"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="Ayesha_Sadiqa_Khan_CV.pdf"
            className="group relative inline-flex items-center gap-2 px-8 py-4 border-2 border-foreground bg-foreground text-background text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.12)] hover:bg-foreground hover:text-foreground hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)]"
          >
            <span>Download CV</span>
            <span className="w-2 h-2 border-r-2 border-b-2 border-current rotate-45 -translate-y-[1px] group-hover:translate-y-[1px] transition-transform duration-300"></span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 md:left-10 z-10">
        <span className="text-foreground/80 text-xs tracking-[0.2em] uppercase font-mono font-medium">
          ayeshuukhan.github.io/Portofoio
        </span>
      </div>

      <div className="absolute bottom-10 right-6 md:right-10 z-10 hidden md:block">
        <div className="font-mono text-xs text-foreground/80 text-right leading-relaxed font-medium">
          <p>const experience = "AI + Backend";</p>
          <p>const projects = 5;</p>
          <p>const focus = "LLM + RAG";</p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="w-5 h-5 text-foreground/30 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
