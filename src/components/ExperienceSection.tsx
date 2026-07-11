import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  bullets: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    role: "QA Intern",
    company: "Fidelity Investments",
    duration: "March 2026 - Present",
    location: "Bengaluru, Embassy Golf Links",
    bullets: [
      "Proactively engaged in both manual and automation testing, driving initiatives to enhance testing efficiency and system quality.",
      "Led personal projects focused on automating test case generation, significantly reducing manual effort and bolstering overall system reliability.",
      "Worked on development of an automated tool for dynamic test case generation, reducing hundreds of hours of manual effort for business analysts and accelerating feature delivery.",
      "Engineered a file validation utility that automated data comparison across different systems, ensuring critical data integrity and streamlining release processes.",
      "Contributed to a high-visibility migration project, ensuring smooth transitions and validating system integrity through meticulous testing protocols."
    ],
    skills: ["Automation Testing", "Manual Testing", "Test Case Generation", "Data Validation", "Migration Validation"]
  },
  {
    role: "Web Development Intern",
    company: "Bizniti Digital",
    duration: "October 2025 - January 2026",
    location: "Remote / Ahmedabad",
    bullets: [
      "Developed and launched premium websites (including Bixpli.com and m4hair.com) utilizing WordPress, Elementor Pro, and WPBakery.",
      "Optimized website layouts for high-end service businesses, delivering sophisticated, luxury experiences that reflect clients' brands.",
      "Ensured mobile responsiveness, premium design aesthetics, and fast load times across all browser environments.",
      "Collaborated closely with designers and project managers to convert business requirements into functional website features."
    ],
    skills: ["WordPress", "Elementor Pro", "WPBakery", "UI/UX Optimization", "Mobile Responsiveness"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-background">
      {/* Background blobs */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-20 w-80 h-80 bg-blob-2 blob opacity-25 pointer-events-none"
      />
      <motion.div
        animate={{
          y: [20, -20, 20],
          scale: [1, 0.9, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blob-1 blob opacity-25 pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-sm"
          >
            // Professional Path
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mt-4"
          >
            Work <span className="text-gradient">Experience</span>
          </motion.h2>
        </div>

        {/* Timeline Stack */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full border-4 border-background bg-primary -translate-x-1/2 flex items-center justify-center shadow-md z-20">
                    <Briefcase className="w-2.5 h-2.5 text-primary-foreground" />
                  </div>

                  {/* Empty space for alignment in desktop */}
                  <div className="hidden md:block w-1/2 px-12" />

                  {/* Experience Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="glass-strong rounded-3xl p-8 border border-border/50 hover:border-primary/30 shadow-lg relative overflow-hidden group"
                    >
                      {/* Interactive glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                          <h3 className="text-2xl font-display font-bold text-foreground">
                            {exp.role}
                          </h3>
                          <span className="text-sm font-semibold text-primary px-3 py-1 bg-primary/10 rounded-full">
                            {exp.company}
                          </span>
                        </div>

                        {/* Metadata row */}
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-accent" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Bullets */}
                        <ul className="space-y-3 mb-6 text-muted-foreground list-none pl-0">
                          {exp.bullets.map((bullet, idx) => (
                            <li key={idx} className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-primary before:font-bold">
                              {bullet}
                            </li>
                          ))}
                        </ul>

                        {/* Core Skills for Role */}
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
