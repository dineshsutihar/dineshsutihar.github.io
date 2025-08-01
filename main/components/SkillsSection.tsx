import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Stars from './skillCardComp/Stars';
import SkillCardNonExpand from './skillCardComp/SkillCardNonExpand';
import CategoryDetailsPanel from './skillCardComp/CategoryDetails';
import ConnectionLines from './skillCardComp/ConnectionLine';
import SkillOrbs from './skillCardComp/SkillOrbs';
import CategoryNode from './skillCardComp/CategoryNode';
import { skillCategories } from '@/data/index';
import type { SkillCategory } from '@/data/index';
import { X } from 'lucide-react';


interface Dimensions {
    width: number;
    height: number;
}


const SkillsSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeCategory, setActiveCategory] = useState<SkillCategory | null>(null);
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const [dimensions, setDimensions] = useState<Dimensions>({ width: 1200, height: 800 });
    const [isClient, setIsClient] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);



    useEffect(() => {
        setIsClient(true);
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.clientWidth,
                    height: containerRef.current.clientHeight
                });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    useEffect(() => {
        if (isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isExpanded]);

    const handleExpand = () => {
        setIsExpanded(true);
    };

    const handleClose = () => {
        setActiveCategory(null);
        setIsExpanded(false);
    };

    const handleCategoryClick = (category: SkillCategory) => {
        setActiveCategory(activeCategory?.title === category.title ? null : category);
    };

    return (
        <>
            {!isExpanded && (
                <SkillCardNonExpand onExpand={handleExpand} skillCategories={skillCategories} />
            )}

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        ref={containerRef}
                        className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-lg overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        layoutId="skills-container"
                    >
                        <Stars />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

                        <ConnectionLines
                            activeCategory={activeCategory}
                            skillCategories={skillCategories}
                            dimensions={dimensions}
                        />

                        {/* Close button */}
                        <motion.button
                            className="absolute top-8 right-8 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all"
                            onClick={handleClose}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <X className="w-6 h-6" />
                        </motion.button>

                        {/* Central MySkills circle */}
                        <motion.div
                            className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: activeCategory ? 0.3 : 1,
                                scale: activeCategory ? 0.8 : 1,
                                filter: activeCategory ? 'blur(2px)' : 'blur(0px)'
                            }}
                            transition={{
                                delay: 0.5,
                                type: 'spring',
                                stiffness: 80,
                                damping: 25
                            }}
                        >
                            <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-2xl">
                                <span className="text-white/90 font-mono text-lg font-medium tracking-wide">MySkills</span>
                            </div>
                        </motion.div>

                        {/* Category Nodes */}
                        {isClient && skillCategories.map((node, i) => {
                            const isActive = activeCategory?.title === node.title;
                            const isOtherNodeActive = !!activeCategory && !isActive;

                            return (
                                <CategoryNode
                                    key={`node-${node.title}`}
                                    node={node}
                                    index={i}
                                    isActive={isActive}
                                    isOtherNodeActive={isOtherNodeActive}
                                    dimensions={dimensions}
                                    onClick={handleCategoryClick}
                                    skillCategories={skillCategories}
                                />
                            );
                        })}

                        <AnimatePresence>
                            {activeCategory && (
                                <>
                                    <motion.div
                                        className="absolute inset-0 z-30 bg-black/50 backdrop-blur-sm"
                                        onClick={() => setActiveCategory(null)}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    />

                                    <SkillOrbs
                                        activeCategory={activeCategory}
                                        hoveredSkill={hoveredSkill}
                                        setHoveredSkill={setHoveredSkill}
                                    />

                                    <CategoryDetailsPanel activeCategory={activeCategory} />
                                </>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SkillsSection;