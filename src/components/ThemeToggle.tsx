import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-full bg-secondary animate-pulse" />
        );
    }

    const isDark = theme === "dark";

    return (
        <motion.button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: isDark ? 180 : 0,
                    scale: isDark ? 0 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute"
            >
                <Sun className="w-5 h-5 text-foreground" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    rotate: isDark ? 0 : -180,
                    scale: isDark ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute"
            >
                <Moon className="w-5 h-5 text-foreground" />
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;
