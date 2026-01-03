import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Stat {
    label: string;
    value: number;
    suffix: string;
    icon: string;
}

const stats: Stat[] = [
    { label: "Projects Completed", value: 5, suffix: "+", icon: "🚀" },
    { label: "Technologies Mastered", value: 12, suffix: "+", icon: "⚡" },
    { label: "Coffee Consumed", value: 500, suffix: "+", icon: "☕" },
    { label: "Lines of Code", value: 10000, suffix: "+", icon: "💻" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000; // 2 seconds
            const increment = end / (duration / 16); // 60fps

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="text-4xl md:text-5xl font-bold text-foreground">
            {count.toLocaleString()}
            {suffix}
        </div>
    );
};

const StatsSection = () => {
    return (
        <section className="py-20 bg-gradient-soft relative overflow-hidden">
            {/* Background Elements */}
            <motion.div
                animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -top-32 -right-32 w-96 h-96 bg-blob-1 blob opacity-20"
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-mono text-sm">// By the Numbers</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
                        Impact in <span className="text-gradient">Numbers</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-6 glass-light rounded-2xl hover:glass-strong transition-all"
                        >
                            <div className="text-5xl mb-4">{stat.icon}</div>
                            <Counter value={stat.value} suffix={stat.suffix} />
                            <p className="text-muted-foreground mt-2 text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
