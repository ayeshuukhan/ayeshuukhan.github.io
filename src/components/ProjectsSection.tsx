import { Github, ExternalLink } from "lucide-react";
import SectionBlock from "./SectionBlock";
import { Badge } from "./ui/badge";

type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
};

const projects: Project[] = [
  {
    title: "Intent Based Violence Prediction System",
    description:
      "A CV-based pre-violence intent detection system designed to identify early behavioral warning signs and potentially threatening activities before they escalate into actual violence. The project utilizes a self-created dataset and (ViT) models to analyze visual patterns and classify pre-violent intent",
    tags: ["Computer Vision", "Vision Transformers", "ViT", "Deep Learning", "Behavior Analysis", "Threat Assessment"],
  },
  {
    title: "LogPulse",
    description:
      "Real-time log monitoring and alerting. Applications send logs to a Node.js gateway; the logs flow through Apache Kafka to Python processors, are stored in PostgreSQL, are analysed by an alert engine, and appear on a live React dashboard.",
      tags: ["React", "FastAPI", "Apache Kafka", "PostgreSQL", "Docker",],
    githubUrl: "https://github.com/ayeshuukhan/LogPulse.git",
  },

  {
    title: "Model-Forge",
    description:
      "Kubernetes-based MLOps platform that deploys multiple machine learning models as independent microservices behind a centralized API Gateway, featuring containerization, automated horizontal scaling, persistent data storage, asynchronous event handling, and real-time monitoring.",
    tags: ["Python", "FastAPI", "Docker", "Kubernetes", "Microservices", "PostgreSQL", "Redis", "Prometheus", "Grafana", "MLOps"],
    githubUrl: "https://github.com/ayeshuukhan/Model-Forge",
  },

  {
    title: "System-Resource-Monitor",
    description:
      "A C++17 terminal utility that monitors CPU, RAM, disk, uptime and running processes in real time on Windows. It shows a colour dashboard built with FTXUI, raises threshold alerts, and writes a timestamped log.",
    tags: ["C++17", "Win32 API", "FTXUI", "CMake", "Git", ],
  },
  {
    title: "AquaVision",
    description:
      "Custom-trained underwater object detection system powered by YOLOv11 that identifies and localizes six marine species—fish, sharks, penguins, puffins, starfish, and stingrays—from underwater images, enabling real-time marine life monitoring, research, and species recognition.",
    tags: ["Computer Vision", "YOLOv11", "Deep Learning", "Object Detection","PyTorch"],
    githubUrl: "https://github.com/ayeshuukhan/AquaVision",
  },

  // {
  //   title: "Robot Vision / Real-Time Object Detection",
  //   description:
  //     "AI vision project for real-time object detection in robot point-of-view videos, enabling perception, tracking, and scene understanding.",
  //   tags: ["Python", "Computer Vision", "Object Detection", "Video Analytics"],
  //   githubUrl: "https://github.com/abdoabozena7/robot-vision-dart",
  // },
  // {
  //   title: "Agentic Router Attack Simulation",
  //   description:
  //     "Simulation of router manipulation and task tampering in agentic AI systems, showing how insecure tool routing can lead to sensitive data leakage.",
  //   tags: ["Agentic AI Safety", "Simulation", "Prompt Tampering"],
  //   githubUrl:
  //     "https://github.com/abdoabozena7/agentic-router-attack-simulation",
  // },
];

const ProjectsSection = () => (
  <SectionBlock id="projects" title="Projects">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.title}
          className="group relative border-2 border-foreground p-5 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 bg-card"
        >
          <div>
            <h3 className="text-xl font-black text-foreground group-hover:underline decoration-4 underline-offset-4 break-words">
              {project.title}
            </h3>
            <p className="body-text mt-4 text-sm font-normal">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="font-mono text-[10px] font-bold border border-foreground/10 px-1.5 py-0"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {project.githubUrl && (
            <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-foreground/10">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-foreground bg-card text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-foreground hover:text-background"
              >
                <Github className="w-3.5 h-3.5" />
                Source
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-foreground bg-card text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-foreground hover:text-background"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View Repo
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ProjectsSection;
