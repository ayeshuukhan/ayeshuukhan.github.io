import SectionBlock from "./SectionBlock";
import { ExternalLink } from "lucide-react";

// Put images in public/certs/ (cert1.png ...) and edit this list.
const certificates = [
  { title: "Agentic AI Engineering", issuer: "IBM", year: "2025", image: "certs/cert1.png", url: "https://coursera.org/share/1088972329fe180b2a12de0f4fd52e4b" },
  { title: "RAG and Agentic AI ", issuer: "IBM", year: "2025", image: "certs/cert2.png", url: "https://coursera.org/share/05b834ed54806bd65eb387d2760f5e73" },
  { title: "AI Developer", issuer: "IBM", year: "2025", image: "certs/cert3.png", url: "https://coursera.org/share/ec4ac2b83e30b3b37f2888726decaca3" },
  { title: "Machine Learning ", issuer: "University of Washingtion", year: "2023", image: "certs/cert4.png", url: "https://coursera.org/share/4a0d9cfd8db750d7d6331511e1bc970a" },
  { title: "Data Analytics", issuer: "Google", year: "2023", image: "certs/cert5.png", url: "https://coursera.org/share/55e6abb074cc4aa3d0d61280bb313564" },
  { title: "AI Intern", issuer: "National Centre of Artificial Intelligence", year: "2025", image: "certs/cert7.png", url: "#" },
  { title: "IT Intern", issuer: "Wah Nobel", year: "2023", image: "certs/cert8.png", url: "#" },
 
  
  
];

const CertificatesSection = () => (
  <SectionBlock id="certificates" title="Certificates">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certificates.map((c) => (
        <a
          key={c.title}
          href={c.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col h-[300px] border-2 border-foreground p-4 bg-card hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300"
        >
          <div className="h-40 w-full bg-secondary border border-foreground/10 overflow-hidden mb-4">
            <img
              src={`${import.meta.env.BASE_URL}${c.image}`}
              alt={c.title}
              className="w-full h-full object-cover"
              onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
            />
          </div>
          <h3 className="text-lg font-black text-foreground leading-tight">{c.title}</h3>
          <p className="font-mono text-xs text-foreground/50 mt-1">
            {c.issuer} · {c.year}
          </p>
          <span className="mt-auto inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest font-bold text-foreground/70 group-hover:text-foreground">
            View credential <ExternalLink className="w-3 h-3" />
          </span>
        </a>
      ))}
    </div>
  </SectionBlock>
);

export default CertificatesSection;
