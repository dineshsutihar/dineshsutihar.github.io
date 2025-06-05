import { motion } from 'framer-motion';

interface CategoryDetailsPanelProps {
    activeCategory: {
        title: string;
        color: string;
        gradient: string;
        description: string;
        skills: string[];
    };
}

const CategoryDetailsPanel = ({ activeCategory }: CategoryDetailsPanelProps) => {
    return (
        <motion.div
            className="absolute z-40 top-16 left-1/2 -translate-x-1/2 text-center pointer-events-none max-w-lg"
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    delay: 0.4,
                    type: 'spring',
                    stiffness: 80,
                    damping: 25
                }
            }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
        >
            <motion.h2
                className={`font-mono text-4xl md:text-5xl mb-3 tracking-wide bg-gradient-to-r ${activeCategory.gradient} bg-clip-text text-transparent`}
                style={{
                    filter: `drop-shadow(0 0 20px ${activeCategory.color}40)`
                }}
            >
                {activeCategory.title}
            </motion.h2>

            <motion.p
                className="text-white/80 text-base leading-relaxed px-6 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.6 } }}
            >
                {activeCategory.description}
            </motion.p>

            <motion.div
                className="mt-3 text-white/60 text-sm font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.8 } }}
            >
                {activeCategory.skills.length} skills
            </motion.div>
        </motion.div>
    );
};

export default CategoryDetailsPanel;
export type { CategoryDetailsPanelProps };