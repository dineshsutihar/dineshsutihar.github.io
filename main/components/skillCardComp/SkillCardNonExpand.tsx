import { motion } from 'framer-motion';


interface SkillCardNonExpandProps {
    onExpand: () => void;
    skillCategories: { title: string; color: string; icon: React.ComponentType<{ className?: string }> }[];
}


const SkillCardNonExpand = ({ onExpand, skillCategories }: SkillCardNonExpandProps) => {
    return (
        <motion.div
            className="w-full max-w-2xl relative z-10"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 25 }}
            layoutId="skills-container"
        >
            <motion.div
                className="bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 relative min-h-fit h-full cursor-pointer group hover:bg-blue-700/15 transition-all duration-500 shadow-2xl"
                onClick={onExpand}
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.3), 0 0 30px rgba(255,255,255,0.1)"
                }}
                whileTap={{ scale: 0.98 }}
            >
                <motion.h1
                    className="text-6xl md:text-7xl font-mono font-bold text-white/90 mb-4 text-center tracking-wider"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    MY SKILLS
                </motion.h1>

                <motion.p
                    className="text-white/60 text-center text-lg font-mono tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    Click to explore
                </motion.p>

                <motion.div
                    className="flex justify-center gap-4 mt-8 opacity-50 group-hover:opacity-70 transition-opacity"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.7 }}
                >
                    {skillCategories.slice(0, 5).map((category, i) => (
                        <motion.div
                            key={category.title}
                            className="w-8 h-8 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${category.color}30` }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                delay: 0.8 + i * 0.1,
                                type: 'spring',
                                stiffness: 120,
                                damping: 15
                            }}
                        >
                            <category.icon className="w-4 h-4" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default SkillCardNonExpand;
export type { SkillCardNonExpandProps };