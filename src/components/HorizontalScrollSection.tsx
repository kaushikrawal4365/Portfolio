import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    icon: "🎨"
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Firebase", "PostgreSQL", "MongoDB", "REST APIs"],
    icon: "⚙️"
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "Docker", "VS Code", "Postman", "CI/CD", "Linux"],
    icon: "🚀"
  },
  {
    category: "Machine Learning",
    items: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Data Analysis"],
    icon: "🤖"
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Team Collaboration", "Communication", "Leadership", "Agile"],
    icon: "💡"
  },
];

const HorizontalScrollSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <>
      {/* Desktop Version - Horizontal Scroll */}
      <section
        ref={containerRef}
        id="skills"
        className="relative hidden md:block h-[300vh]"
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-secondary/30 to-background pointer-events-none" />

          {/* Section Header - Fixed on left */}
          <div className="absolute left-6 lg:left-16 z-20 max-w-xs">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-mono text-sm"
            >
              // Skills & Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-4 mb-4"
            >
              What I
              <span className="text-gradient"> Know</span>
            </motion.h2>
            <p className="text-muted-foreground text-sm hidden md:block">
              Scroll to explore my technical skills and expertise across different domains.
            </p>
          </div>

          {/* Horizontal Scrolling Cards */}
          <motion.div
            style={{ x }}
            className="flex gap-8 pl-[40%] md:pl-[35%] lg:pl-[30%] pr-16"
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -10 }}
                className="flex-shrink-0 w-80 md:w-96"
              >
                <div className="glass-strong rounded-3xl p-8 h-full border-2 border-border/50 hover:border-primary/30 transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    className="text-5xl mb-6"
                  >
                    {skillGroup.icon}
                  </motion.div>

                  {/* Category */}
                  <h3 className="text-2xl font-display font-bold mb-6">
                    {skillGroup.category}
                  </h3>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "hsl(var(--primary))",
                          color: "hsl(var(--primary-foreground))",
                        }}
                        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium cursor-default transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Decorative line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-8 origin-left"
                  />
                </div>
              </motion.div>
            ))}

            {/* Final CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="flex-shrink-0 w-80 md:w-96"
            >
              <div className="bg-primary text-primary-foreground rounded-3xl p-8 h-full flex flex-col justify-center items-center text-center shadow-xl">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-5xl mb-6"
                >
                  🤝
                </motion.span>
                <h3 className="text-2xl font-display font-bold mb-4">
                  Let's Work Together
                </h3>
                <p className="opacity-80 mb-6">
                  Ready to bring your ideas to life with clean code and stunning design.
                </p>
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-background text-foreground rounded-full font-medium"
                >
                  Get In Touch
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Progress Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-1 bg-secondary rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full bg-primary origin-left"
            />
          </div>
        </div>
      </section>

      {/* Mobile Version - Vertical Layout */}
      <section id="skills-mobile" className="py-20 md:hidden relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-sm block"
          >
            // Skills & Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold mt-4 mb-12"
          >
            What I <span className="text-gradient">Know</span>
          </motion.h2>

          {/* Skills Cards - Vertical Stack */}
          <div className="space-y-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="glass-strong rounded-2xl p-6 border-2 border-border/50"
              >
                {/* Icon & Category */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{skillGroup.icon}</span>
                  <h3 className="text-xl font-display font-bold">
                    {skillGroup.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-primary-foreground rounded-2xl p-8 text-center"
            >
              <span className="text-4xl block mb-4">🤝</span>
              <h3 className="text-xl font-display font-bold mb-2">
                Let's Work Together
              </h3>
              <p className="opacity-80 mb-6 text-sm">
                Ready to bring your ideas to life with clean code and stunning design.
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-block px-6 py-3 bg-background text-foreground rounded-full font-medium"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HorizontalScrollSection;

