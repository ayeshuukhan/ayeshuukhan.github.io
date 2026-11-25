import SectionBlock from "./SectionBlock";
import GithubGraph from "./GithubGraph";

const skillCategories = [
  {
    title: "AI & ML",
    skills: [
      "Generative AI",
      "LLM Agents",
      "RAG",
      "LangGraph",
      "Prompt Engineering",
      "Multi-Agent Systems",
      "Transformers",
      "NLP",
      "Machine Learning",
      "Deep Learning",
      "MLOps",
    ],
  },
  {
    title: "Data Science",
    skills: [
      "EDA",
      "Data Preprocessing",
      "Feature Engineering",
      "Model Evaluation",
      "Sentiment Analysis",
      "Computer Vision/YOLO",
    ],
  },
  {
    title: "Backend & MLOps",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "RESTful APIs",
      "Kafka",
      "Streamlit",
      "Distributed Systems",
      "Backend System Architecture",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "SQLite"],
  },
  {
    title: "Languages & Tools",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Git",
      "GitHub",
      "Docker Basics",
      "kotlin",
      "C++",
      "Docker Compose",
      "Linux",
    ],
  },
  {
    title: "Frontend",
    skills: ["React", "Vite", "Tailwind CSS"],
  },
  {
    title: "Certification",
    skills: [
      "Google - Advanced Data Analytics",
      "UOM - Machine Learning",
    ],
  },
];

const SkillsSection = () => (
  <SectionBlock id="skills" title="Technical Skills">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {skillCategories.map((category, idx) => (
        <div
          key={category.title}
          className="group opacity-0 animate-in fade-in slide-in-from-bottom-4 fill-mode-forwards"
          style={{
            animationDelay: `${idx * 100}ms`,
            animationDuration: "600ms",
            animationFillMode: "forwards",
          }}
        >
          <div className="flex flex-col h-full border-t-2 border-foreground pt-4">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] mb-6 text-foreground/40 group-hover:text-foreground transition-colors duration-300">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 border border-foreground/5 text-xs font-medium hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="w-full pt-12 border-t border-foreground/5">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/40">
            GitHub Activity
          </h3>
          <div className="h-[1px] flex-1 bg-foreground/5 mx-6"></div>
        </div>
        <GithubGraph />
      </div>
    </div>
  </SectionBlock>
);

export default SkillsSection;
