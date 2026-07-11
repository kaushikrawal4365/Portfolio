import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  color: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "FitApply",
    description: "An AI-powered SaaS platform built to analyze job descriptions and automatically tailor resumes to bypass Applicant Tracking Systems (ATS). Designed a secure full-stack architecture featuring dynamic AI integration, professional PDF rendering, and a subscription-based payment gateway, demonstrating a comprehensive understanding of scalable software development.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Supabase Auth", "Prisma ORM", "PostgreSQL", "Gemini AI", "Tailwind CSS v4", "Stripe API", "Playwright"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
    color: "from-indigo-500/20 to-blue-500/20",
    github: "https://github.com/kaushikrawal4365/Resume-Builder-JD",
  },
  {
    id: 2,
    title: "EcoPrompt",
    description: "A sustainable prompt optimizer that runs entirely locally, saving water and CO2 emissions at scale. Built as a Chrome extension with an Electron desktop app, it optimizes AI prompts without cloud dependencies, making AI interactions more environmentally friendly.",
    tech: ["Chrome Extension", "Electron.js", "JavaScript", "Local Processing"],
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop",
    color: "from-green-500/20 to-emerald-500/20",
    github: "https://github.com/kaushikrawal4365/EcoPrompt-main",
  },
  {
    id: 3,
    title: "PeerLink",
    description: "A smart student networking platform that connects students based on complementary skills. Using cosine similarity algorithms, students who want to teach and learn different skills are matched to create perfect peer-to-peer learning partnerships.",
    tech: ["React", "Firebase", "Machine Learning", "Cosine Similarity"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    color: "from-blue-500/20 to-purple-500/20",
    github: "https://github.com/kaushikrawal4365/Peerlink",
  },
  {
    id: 4,
    title: "Developer's Journal",
    description: "A fast, minimal app that helps developers think before coding, stay focused during sessions, and actually learn from their work. Features goal setting, session tracking, and reflection – all stored locally with Google sign-in authentication.",
    tech: ["React", "Firebase", "Google Auth", "Local Storage"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    color: "from-emerald-500/20 to-teal-500/20",
    live: "https://dev-journal-v1.web.app",
  },
  {
    id: 5,
    title: "Bixpli.com",
    description: "Professional website for ABA clinic services, built during my internship at Bizniti Digital. A minimalist yet effective design using WordPress and Elementor Pro to showcase services for building ABA clinics for children.",
    tech: ["WordPress", "Elementor Pro", "Minimalist"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    color: "from-purple-500/20 to-pink-500/20",
    live: "https://bixpli.com",
  },
  {
    id: 6,
    title: "m4hair.com",
    description: "Elegant and premium website for a high-end hair salon, crafted during my internship at Bizniti Digital. Built with WordPress and Elementor Pro to deliver a sophisticated, luxury experience that reflects the salon's brand.",
    tech: ["WordPress", "WPBakery", "Premium Design"],
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
    color: "from-orange-500/20 to-red-500/20",
    live: "https://m4hair.com",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, rotateX }}
      className="perspective-1000"
    >
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          scale: isHovered ? 1.02 : 1,
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
            : "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        }}
        transition={{ duration: 0.3 }}
        className={`
          relative glass-strong rounded-3xl overflow-hidden border-2 border-border/50 hover:border-primary/30 transition-all
          ${index % 2 === 0 ? "lg:ml-0 lg:mr-12" : "lg:ml-12 lg:mr-0"}
        `}
      >
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`} />

        <div className="relative grid lg:grid-cols-2 gap-0">
          {/* Image */}
          <motion.div
            className={`relative h-64 lg:h-80 overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""
              }`}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent lg:hidden" />
          </motion.div>

          {/* Content */}
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-mono text-xs mb-2"
            >
              Project {String(project.id).padStart(2, "0")}
            </motion.span>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-3xl font-display font-bold mb-4"
            >
              {project.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mb-6"
            >
              {project.description}
            </motion.p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.github && (
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="View on GitHub"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              )}
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="View live site"
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              )}
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-1 text-primary font-medium ml-auto"
                >
                  View Live
                  <ChevronRight className="w-4 h-4" />
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 bg-gradient-soft">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-sm"
          >
            // Featured Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mt-4"
          >
            Projects I've
            <span className="text-gradient"> Built</span>
          </motion.h2>
        </div>

        {/* Projects Stack */}
        <div className="space-y-16 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
