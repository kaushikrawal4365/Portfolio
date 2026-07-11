import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Rocket, Lightbulb } from "lucide-react";

const skills = [
  { icon: Code, label: "Clean Code", color: "text-primary" },
  { icon: Palette, label: "UI/UX Design", color: "text-accent" },
  { icon: Rocket, label: "Performance", color: "text-primary" },
  { icon: Lightbulb, label: "Innovation", color: "text-accent" },
];

const techStack = [
  "React", "Node.js", "MongoDB", "Express",
  "TypeScript", "Firebase", "Java", "Python",
  "AWS", "Docker", "Tailwind CSS", "WordPress"
];

const AboutSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-32 overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-10 w-40 h-40 bg-blob-1 blob opacity-30"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 left-10 w-60 h-60 bg-blob-2 blob opacity-20"
      />

      <motion.div style={{ opacity }} className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-primary font-mono text-sm"
            >
              // About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6"
            >
              Crafting Digital
              <span className="text-gradient"> Experiences</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-6"
            >
              I'm a passionate student developer focused on building innovative solutions
              that bridge technology and education. From full-stack web applications to
              machine learning projects, I love creating tools that solve real-world
              problems and enhance the way people learn and connect.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              With experience in the MERN stack, cloud platforms, and modern development
              tools, I've delivered projects ranging from client websites to innovative
              student networking platforms. Always exploring new technologies and
              eager to share knowledge with the community.
            </motion.p>

            {/* Skills Icons */}
            <div className="flex flex-wrap gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="p-3 glass rounded-xl">
                    <skill.icon className={`w-6 h-6 ${skill.color}`} />
                  </div>
                  <span className="text-xs text-muted-foreground">{skill.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Tech Stack */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-strong rounded-3xl p-8 shadow-xl border-2 border-border/50"
            >
              <h3 className="text-sm font-mono text-muted-foreground mb-6">
                // Tech Stack
              </h3>

              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "hsl(var(--primary))",
                      color: "hsl(var(--primary-foreground))",
                    }}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium cursor-default transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary/30 rounded-lg"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-accent/30 rounded-full"
              />
            </motion.div>

            {/* Floating accent elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -left-8 w-4 h-4 bg-primary rounded-full opacity-60"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 -right-6 w-3 h-3 bg-accent rounded-full opacity-60"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
