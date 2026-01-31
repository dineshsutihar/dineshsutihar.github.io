import { motion } from 'framer-motion';

interface SkillOrbsProps {
    activeCategory: {
        title: string;
        color: string;
        skills: string[]
    };
    hoveredSkill: string | null;
    setHoveredSkill: (skill: string | null) => void;
    dimensions: { width: number; height: number };
}

const SkillOrbs = ({ activeCategory, hoveredSkill, setHoveredSkill, dimensions }: SkillOrbsProps) => {
    const skillCount = activeCategory.skills.length;

    const minDim = Math.min(dimensions.width, dimensions.height);

    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const baseRadius = Math.max(100, minDim * 0.15);
    const maxRadius = Math.min(280, minDim * 0.38);

    return (
        <>
            {activeCategory.skills.map((skill, i) => {
                const isHovered = hoveredSkill === skill;

                const angle = i * goldenAngle;

                const progress = skillCount > 1 ? i / (skillCount - 1) : 0;
                const radius = baseRadius + (maxRadius - baseRadius) * Math.sqrt(progress);

                const offsetX = (Math.cos(angle) * radius / dimensions.width) * 100;
                const offsetY = (Math.sin(angle) * radius / dimensions.height) * 100;

                return (
                    <motion.div
                        key={`skill-${skill}`}
                        className="absolute z-40 group cursor-pointer"
                        style={{
                            top: `calc(50% + ${offsetY}%)`,
                            left: `calc(50% + ${offsetX}%)`,
                            transform: 'translate(-50%, -50%)'
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.04 * i }}
                        onHoverStart={() => setHoveredSkill(skill)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        whileHover={{ scale: 1.2, zIndex: 60 }}
                    >
                        <div
                            className={`px-5 py-3 rounded-xl border-2 backdrop-blur-lg font-semibold text-base transition-all duration-200
                                ${isHovered
                                    ? 'bg-white/25 border-white/50 shadow-2xl'
                                    : 'bg-slate-900/70 border-white/20 shadow-lg'
                                }`}
                            style={{
                                boxShadow: isHovered
                                    ? `0 8px 32px ${activeCategory.color}80, 0 0 20px ${activeCategory.color}40`
                                    : '0 4px 20px rgba(0,0,0,0.4)',
                                color: isHovered ? '#fff' : 'rgba(255,255,255,0.9)'
                            }}
                        >
                            {skill}
                        </div>
                    </motion.div>
                );
            })}
        </>
    );
};

export default SkillOrbs;
export type { SkillOrbsProps };