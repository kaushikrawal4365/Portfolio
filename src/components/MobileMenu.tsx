import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navItems: Array<{ name: string; href: string }>;
}

const MobileMenu = ({ isOpen, onClose, navItems }: MobileMenuProps) => {
    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    />

                    {/* Menu Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed top-0 right-0 bottom-0 w-full max-w-sm glass-strong z-50 shadow-2xl"
                    >
                        <div className="flex flex-col h-full p-6">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-12">
                                <motion.h2
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-xl font-display font-bold text-gradient"
                                >
                                    Menu
                                </motion.h2>
                                <motion.button
                                    onClick={onClose}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-2 hover:bg-secondary rounded-full transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X className="w-6 h-6" />
                                </motion.button>
                            </div>

                            {/* Navigation Links */}
                            <nav className="flex-1">
                                <ul className="space-y-2">
                                    {navItems.map((item, index) => (
                                        <motion.li
                                            key={item.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + index * 0.05 }}
                                        >
                                            <a
                                                href={item.href}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    scrollToSection(item.href);
                                                }}
                                                className="block px-6 py-4 text-lg font-medium rounded-xl hover:bg-secondary transition-colors"
                                            >
                                                {item.name}
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Footer */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="pt-6 border-t border-border"
                            >
                                <p className="text-sm text-muted-foreground text-center">
                                    © 2026 Kaushik Rawal
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
