import { motion } from 'framer-motion';

interface SkillOrbsProps {
    activeCategory: {
        title: string;
        color: string;
        skills: string[]
    };
    hoveredSkill: string | null;
    setHoveredSkill: (skill: string | null) => void;
}

const SkillOrbs = ({ activeCategory, hoveredSkill, setHoveredSkill }: SkillOrbsProps) => {
    return (
        <>
            {activeCategory.skills.map((skill, i) => {
                const angle = (i / activeCategory.skills.length) * Math.PI * 2;
                const radius = 180;
                const isHovered = hoveredSkill === skill;

                return (
                    <motion.div
                        key={`skill-${skill}`}
                        className="absolute z-40 group cursor-pointer"
                        initial={{
                            opacity: 0,
                            scale: 0,
                            x: '-50%',
                            y: '-50%',
                            top: '50%',
                            left: '50%'
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                            left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0,
                            top: '50%',
                            left: '50%'
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 120,
                            damping: 15,
                            delay: 0.3 + i * 0.1
                        }}
                        onHoverStart={() => setHoveredSkill(skill)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        whileHover={{ scale: 1.15, y: -5 }}
                    >
                        <div
                            className={`relative px-6 py-3 rounded-full border-2 backdrop-blur-md transition-all duration-300 font-mono ${isHovered
                                ? 'bg-white/20 border-white/40 shadow-2xl'
                                : 'bg-slate-800/60 border-white/20'
                                }`}
                            style={{
                                boxShadow: isHovered
                                    ? `0 10px 30px ${activeCategory.color}40, 0 0 20px ${activeCategory.color}60`
                                    : '0 4px 15px rgba(0,0,0,0.3)'
                            }}
                        >
                            <span className={`text-lg font-medium transition-colors ${isHovered ? 'text-white' : 'text-white/90'
                                }`}>
                                {skill}
                            </span>

                            {isHovered && (
                                <div
                                    className="absolute inset-0 rounded-full bg-gradient-to-r opacity-20"
                                    style={{ background: `linear-gradient(45deg, ${activeCategory.color}, transparent)` }}
                                />
                            )}
                        </div>
                    </motion.div>
                );
            })}
        </>
    );
};


export default SkillOrbs;
export type { SkillOrbsProps };