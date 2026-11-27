import SectionBlock from "./SectionBlock";

const training = [
  {
    role: "Project Intern",
    company: "National Centre of Artificial Intelligence",
    period: "May 2025 - Present",
    description:
      "Conducted research, explored innovative solutions, and collaborated directly with the CEO to define project objectives and technical direction.",
  },
  {
    role: "Digital Operations Manager",
    company: "Talbatrek",
    period: "Present",
    description:
      "Led the design and development of the company’s digital platform, overseeing its technical architecture, implementation, and ongoing optimization.",
  },
  {
    role: "Agentic AI Intern",
    company: "Almahvi",
    period: "Present",
    description:
      "Contributing to the development of Agentic AI solutions, focusing on agent architecture, tool integration, workflow orchestration, and autonomous task execution.",
  },
  {
    role: "AI Intern",
    company: "National centre of Artificial intelligence",
    period: "May 2025 - Sep 2025",
    description:
      "Conducted development on electromyography (EMG) signal data provided by a clinical institution for prosthetic arm applications. Performed signal preprocessing and analysis, and implemented Transformer-based deep learning architectures for model training and movement classification..",
  },

  {
    role: "SAP & Database Intern",
    company: "Wah Nobel Group",
    period: "Jun 2024 - Aug 2024",
    description:
      "Worked on SAP interface configuration and system management, while developed a transportation database system for efficient data storage, retrieval, and management."
  },

];

const experiences = [
  {
    role: "Founder & Branch Chair",
    company: "IEEE Student Branch",
    period: "Dec 2023 - July 2026",
    description:
      "Established and officially registered the university’s IEEE Student Branch, leading it for three consecutive years. Took the initiative in organizing and managing a range of activities, including technical events, hackathons, symposiums, workshops, and social gatherings, creating opportunities for students to connect, learn, and grow professionally.",
    link: "https://www.linkedin.com/in/ieee-student-branch-pafiast-91384a33b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    linkText: "IEEE Student Branch"

  },
  {
    role: "Operations & Logistics Member",
    company: "Google Developer Student Clubs (GDSC)",
    period: "Jan 2023 - July 2023",
    description:
      "Managed operational and logistical aspects of technical events and community activities, coordinating event arrangements, resources, scheduling, and on-ground execution to ensure smooth and successful operations.",
  },
];

const ExperienceSection = () => (
  <SectionBlock id="experience" title="Experience">
    <div className="space-y-16">
      <div>
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] mb-8 text-foreground/40">
          Professional Experience
        </h3>
        <Timeline items={training} />
      </div>

      <div>
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] mb-8 text-foreground/40">
          Volunteering Experience
        </h3>
        <Timeline items={experiences} />
      </div>
    </div>
  </SectionBlock>
);

type TimelineItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  link?: string;
  linkText?: string;
};

const Timeline = ({ items }: { items: TimelineItem[] }) => (
  <div className="space-y-12">
    {items.map((exp) => (
      <div
        key={`${exp.role}-${exp.company}`}
        className="relative pl-8 md:pl-0 border-l md:border-l-0 border-foreground/20 md:grid md:grid-cols-[1fr_2fr] md:gap-8 pb-12 last:pb-0"
      >
        <div className="md:text-right md:pr-8 md:border-r border-foreground/20 relative">
          <div className="hidden md:block absolute top-1 -right-[5px] w-[9px] h-[9px] rounded-full bg-foreground"></div>
          <div className="md:hidden absolute top-1 -left-[5px] w-[9px] h-[9px] rounded-full bg-foreground"></div>

          <h4 className="font-mono text-sm tracking-widest text-foreground/60 uppercase mb-1">
            {exp.period}
          </h4>
          <h3 className="font-bold text-lg md:text-xl">{exp.company}</h3>
        </div>

        <div className="mt-2 md:mt-0">
          <h3 className="text-lg font-bold text-foreground md:hidden mb-2">
            {exp.role}
          </h3>
          <h3 className="text-xl font-bold text-foreground hidden md:block mb-3">
            {exp.role}
          </h3>
          <p className="body-text text-sm md:text-base">{exp.description}</p>
          {exp.link && (
  <a
    href={exp.link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-3 text-sm font-semibold text-blue-500 hover:text-blue-700 underline underline-offset-4 transition-colors duration-300"
  >
    {exp.linkText || "View More"} ↗
  </a>
)}
        </div>
      </div>
    ))}
  </div>
);

export default ExperienceSection;
