import { motion } from 'framer-motion';
import { useTime } from 'framer-motion';

interface CategoryNodeProps {
    node: {
        title: string;
        color: string;
        gradient: string;
        icon: React.ComponentType<{ className?: string }>;
    };
    index: number;
    isActive: boolean;
    isOtherNodeActive: boolean;
    dimensions: { width: number; height: number };
    onClick: (node: any) => void;
    skillCategories: { title: string; color: string; gradient: string; icon: React.ComponentType<{ className?: string }> }[];
}


const CategoryNode = ({
    node,
    index,
    isActive,
    isOtherNodeActive,
    dimensions,
    onClick,
    skillCategories
}: CategoryNodeProps) => {
    const time = useTime();

    const t = time.get() / 1000;
    const radius = Math.min(dimensions.width, dimensions.height) * 0.32;
    const angle = (index / skillCategories.length) * Math.PI * 2;

    const breathingX = Math.cos(t * 0.3 + index) * 15;
    const breathingY = Math.sin(t * 0.4 + index) * 15;

    const baseX = Math.cos(angle) * radius;
    const baseY = Math.sin(angle) * radius;

    return (
        <motion.div
            className="absolute z-20 flex flex-col items-center cursor-pointer group"
            initial={{
                top: '50%',
                left: '50%',
                scale: 0,
                opacity: 0
            }}
            animate={{
                top: isActive ? '50%' : `calc(50% + ${baseY + breathingY}px)`,
                left: isActive ? '50%' : `calc(50% + ${baseX + breathingX}px)`,
                scale: isOtherNodeActive ? 0.6 : (isActive ? 1.2 : 1),
                opacity: isOtherNodeActive ? 0.4 : 1,
            }}
            transition={{
                type: 'spring',
                stiffness: 80,
                damping: 25,
                delay: 0.7 + index * 0.1,
                scale: { type: 'spring', stiffness: 120, damping: 15, delay: 0 }
            }}
            onClick={() => onClick(node)}
            style={{ x: '-50%', y: '-50%' }}
            whileHover={{ scale: isActive ? 1.2 : 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.div
                className={`w-20 h-20 rounded-full flex items-center justify-center relative overflow-hidden backdrop-blur-sm border-2 transition-all duration-500`}
                style={{
                    backgroundColor: `${node.color}15`,
                    borderColor: `${node.color}60`,
                    boxShadow: isActive
                        ? `0 0 50px ${node.color}, 0 0 100px ${node.color}40`
                        : `0 0 20px ${node.color}60`
                }}
            >
                <div
                    className={`absolute inset-0 bg-gradient-to-r ${node.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                />

                <node.icon
                    className={`w-10 h-10 relative z-10 drop-shadow-lg`}
                />

                {isActive && (
                    <motion.div
                        className="absolute inset-0 rounded-full border-2"
                        style={{ borderColor: node.color }}
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.8, 0, 0.8]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                )}
            </motion.div>

            <motion.span
                className="mt-4 text-sm font-medium text-white/90 text-center px-3 py-1 rounded-full backdrop-blur-sm font-mono"
                style={{
                    backgroundColor: isActive ? `${node.color}20` : 'rgba(255,255,255,0.1)',
                    color: isActive ? node.color : 'rgba(255,255,255,0.8)'
                }}
                animate={{ opacity: isActive ? 0 : 1 }}
            >
                {node.title}
            </motion.span>
        </motion.div>
    );
};

export default CategoryNode;
export type { CategoryNodeProps };