"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workExperience } from "@/data";
import { Briefcase, Calendar, ChevronRight, Sparkles } from "lucide-react";

const Experience = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 w-full" id="experience">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="heading mb-4">
          My <span className="text-purple">Work Experience</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Building impactful products and growing with amazing teams
        </p>
      </motion.div>

      {/* Experience Cards Container */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            <div className="h-full w-full bg-gradient-to-b from-purple/80 via-purple/40 to-transparent" />
            <motion.div
              className="absolute top-0 w-2 h-40 -left-[3px] bg-gradient-to-b from-cyan-400 via-purple to-transparent rounded-full blur-sm"
              animate={{ y: [0, 400, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-6 md:space-y-8">
            {workExperience.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const isHovered = hoveredId === exp.id;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  onMouseEnter={() => setHoveredId(exp.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20">
                    <motion.div
                      className="relative"
                      animate={{ scale: isHovered ? 1.2 : 1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {/* Outer glow ring */}
                      <div className={`absolute -inset-2 rounded-full transition-all duration-300 ${isHovered ? "bg-purple/30 blur-md" : "bg-transparent"
                        }`} />

                      {/* Year badge */}
                      <div className="relative w-16 h-16 rounded-full bg-black-200 border-2 border-purple flex flex-col items-center justify-center shadow-lg shadow-purple/20">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                          {exp.startDate.split(" ")[0]?.slice(0, 3)}
                        </span>
                        <span className="text-sm font-bold text-white">
                          {exp.startDate.split(" ")[1] || exp.startDate}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-0 pl-24 md:pl-0 md:mr-auto" : "md:pl-0 pl-24 md:pl-0 md:ml-auto"
                    }`}>
                    <motion.div
                      className="group relative"
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Card glow */}
                      {/* Subtle card glow */}
                      <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r transition-all duration-500 blur-md ${isHovered
                        ? "from-purple/40 to-violet-500/40 opacity-40"
                        : "opacity-0"
                        }`} />

                      {/* Main Card */}
                      {/* Main Card */}
                      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-white/[0.08] group-hover:border-purple/20 transition-all duration-300">

                        {/* Shimmer effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                        </div>

                        {/* Card Content */}
                        <div className="relative p-6">
                          {/* Top Row */}
                          <div className="flex items-start gap-4">
                            {/* Company Logo */}
                            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-slate-800 to-slate-700/60 border border-white/[0.08] flex items-center justify-center overflow-hidden group-hover:border-purple/30 transition-colors">
                              {exp.thumbnail ? (
                                <img
                                  src={exp.thumbnail}
                                  alt={exp.company}
                                  className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                              ) : (
                                <Briefcase className="w-6 h-6 text-purple/60" />
                              )}
                            </div>

                            {/* Title & Company */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap mb-1">
                                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                                  {exp.title}
                                </h3>
                                {exp.endDate === "Present" && (
                                  <motion.span
                                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                    animate={{ opacity: [0.7, 1, 0.7] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    Current
                                  </motion.span>
                                )}
                              </div>

                              <p className="text-purple font-medium text-sm md:text-base">
                                {exp.company}
                              </p>
                            </div>
                          </div>

                          {/* Date Range */}
                          <div className="flex items-center gap-2 mt-4 text-sm text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.startDate}</span>
                            <ChevronRight className="w-4 h-4" />
                            <span className={exp.endDate === "Present" ? "text-emerald-400" : ""}>
                              {exp.endDate || "Present"}
                            </span>
                          </div>

                          {/* Description */}
                          <AnimatePresence>
                            {exp.description && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                className="mt-4 pt-4 border-t border-white/5"
                              >
                                <p className="text-gray-300 text-sm leading-relaxed">
                                  {exp.description}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Highlights */}
                          {exp.highlights && exp.highlights.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-white/5">
                              <ul className="space-y-2">
                                {exp.highlights.map((highlight, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                    <Sparkles className="w-4 h-4 text-purple mt-0.5 flex-shrink-0" />
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* Subtle bottom accent line */}
                        <div className="h-0.5 w-full bg-gradient-to-r from-purple/60 to-violet-500/40 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>

          {/* End marker */}
          <motion.div
            className="absolute left-8 md:left-1/2 -translate-x-1/2 -bottom-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple to-violet-600 border-4 border-black-100" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
