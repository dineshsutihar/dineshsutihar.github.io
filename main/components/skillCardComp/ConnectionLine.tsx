import { motion } from 'framer-motion';
import { useTime } from 'framer-motion';


interface ConnectionLinesProps {
    activeCategory: { title: string; color: string } | null;
    skillCategories: { title: string; color: string }[];
    dimensions: { width: number; height: number };
}

const ConnectionLines = ({ activeCategory, skillCategories, dimensions }: ConnectionLinesProps) => {
    const time = useTime();

    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <defs>
                {skillCategories.map((node) => (
                    <linearGradient key={`gradient-${node.title}`} id={`line-gradient-${node.title}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={node.color} stopOpacity="0.1" />
                        <stop offset="50%" stopColor={node.color} stopOpacity="0.8" />
                        <stop offset="100%" stopColor={node.color} stopOpacity="0.1" />
                    </linearGradient>
                ))}
            </defs>

            {skillCategories.map((node, i) => {
                const isActive = activeCategory?.title === node.title;
                const radius = Math.min(dimensions.width, dimensions.height) * 0.32;
                const angle = (i / skillCategories.length) * Math.PI * 2;

                const t = time.get() / 1000;
                const breathingX = Math.cos(t * 0.3 + i) * 15;
                const breathingY = Math.sin(t * 0.4 + i) * 15;

                const centerX = dimensions.width / 2;
                const centerY = dimensions.height / 2;
                const nodeX = centerX + Math.cos(angle) * radius + breathingX;
                const nodeY = centerY + Math.sin(angle) * radius + breathingY;

                return (
                    <motion.line
                        key={`line-${node.title}`}
                        x1={centerX}
                        y1={centerY}
                        x2={nodeX}
                        y2={nodeY}
                        stroke={`url(#line-gradient-${node.title})`}
                        strokeWidth={isActive ? 3 : (activeCategory && !isActive ? 1 : 2)}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: activeCategory && !isActive ? 0.2 : 0.6
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 80,
                            damping: 25,
                            duration: 1.8,
                            delay: i * 0.1
                        }}
                    />
                );
            })}
        </svg>
    );
};

export default ConnectionLines;
export type { ConnectionLinesProps };