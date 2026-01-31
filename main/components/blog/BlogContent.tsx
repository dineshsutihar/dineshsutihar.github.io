"use client";

import React from "react";
import { motion } from "framer-motion";
import { ContentSection } from "@/data/blogs";

interface BlogContentProps {
    sections: ContentSection[];
}

// Syntax highlighting color mappings
const syntaxColors = {
    keyword: "text-purple-400",
    string: "text-emerald-400",
    number: "text-orange-400",
    comment: "text-gray-500",
    function: "text-blue-400",
    type: "text-cyan-400",
    operator: "text-pink-400",
    property: "text-yellow-300",
    punctuation: "text-gray-400",
    variable: "text-white",
};

// Simple syntax highlighter
function highlightCode(code: string, language?: string): React.ReactNode {
    const keywords = [
        'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while',
        'class', 'interface', 'type', 'import', 'export', 'from', 'async', 'await',
        'try', 'catch', 'throw', 'new', 'this', 'extends', 'implements', 'static',
        'public', 'private', 'protected', 'readonly', 'abstract', 'default', 'case',
        'switch', 'break', 'continue', 'typeof', 'instanceof', 'in', 'of', 'true',
        'false', 'null', 'undefined', 'void', 'never', 'any', 'string', 'number',
        'boolean', 'object', 'symbol', 'enum', 'namespace', 'module', 'declare',
        'as', 'is', 'keyof', 'infer', 'extends', 'super', 'yield', 'delete',
        'with', 'debugger', 'finally', 'do', 'using', 'name', 'on', 'jobs',
        'runs-on', 'steps', 'uses', 'run', 'needs', 'environment', 'FROM', 'WORKDIR',
        'COPY', 'RUN', 'ENV', 'EXPOSE', 'CMD', 'AS'
    ];

    const lines = code.split('\n');

    return lines.map((line, lineIndex) => {
        const tokens: React.ReactNode[] = [];
        let remaining = line;
        let keyIndex = 0;

        while (remaining.length > 0) {
            // Check for comments
            if (remaining.startsWith('//') || remaining.startsWith('#')) {
                tokens.push(
                    <span key={`${lineIndex}-${keyIndex++}`} className={syntaxColors.comment}>
                        {remaining}
                    </span>
                );
                break;
            }

            // Check for multi-line comment start
            if (remaining.startsWith('/*')) {
                const endIndex = remaining.indexOf('*/');
                if (endIndex !== -1) {
                    tokens.push(
                        <span key={`${lineIndex}-${keyIndex++}`} className={syntaxColors.comment}>
                            {remaining.substring(0, endIndex + 2)}
                        </span>
                    );
                    remaining = remaining.substring(endIndex + 2);
                    continue;
                }
            }

            // Check for strings (double quotes)
            const doubleQuoteMatch = remaining.match(/^"([^"\\]|\\.)*"/);
            if (doubleQuoteMatch) {
                tokens.push(
                    <span key={`${lineIndex}-${keyIndex++}`} className={syntaxColors.string}>
                        {doubleQuoteMatch[0]}
                    </span>
                );
                remaining = remaining.substring(doubleQuoteMatch[0].length);
                continue;
            }

            // Check for strings (single quotes)
            const singleQuoteMatch = remaining.match(/^'([^'\\]|\\.)*'/);
            if (singleQuoteMatch) {
                tokens.push(
                    <span key={`${lineIndex}-${keyIndex++}`} className={syntaxColors.string}>
                        {singleQuoteMatch[0]}
                    </span>
                );
                remaining = remaining.substring(singleQuoteMatch[0].length);
                continue;
            }

            // Check for template literals
            const templateMatch = remaining.match(/^`([^`\\]|\\.)*`/);
            if (templateMatch) {
                tokens.push(
                    <span key={`${lineIndex}-${keyIndex++}`} className={syntaxColors.string}>
                        {templateMatch[0]}
                    </span>
                );
                remaining = remaining.substring(templateMatch[0].length);
                continue;
            }

            // Check for numbers
            const numberMatch = remaining.match(/^\b\d+(\.\d+)?\b/);
            if (numberMatch) {
                tokens.push(
                    <span key={`${lineIndex}-${keyIndex++}`} className={syntaxColors.number}>
                        {numberMatch[0]}
                    </span>
                );
                remaining = remaining.substring(numberMatch[0].length);
                continue;
            }

            // Check for keywords
            let foundKeyword = false;
            for (const keyword of keywords) {
                const regex = new RegExp(`^\\b${keyword}\\b`);
                if (regex.test(remaining)) {
                    tokens.push(
                        <span key={`${lineIndex}-${keyIndex++}`} className={syntaxColors.keyword}>
                            {keyword}
                        </span>
                    );
                    remaining = remaining.substring(keyword.length);
                    foundKeyword = true;
                    break;
                }
            }
            if (foundKeyword) continue;

            // Check for function calls
            const funcMatch = remaining.match(/^([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/);
            if (funcMatch) {
                tokens.push(
                    <span key={`${lineIndex}-${keyIndex++}`} className={syntaxColors.function}>
                        {funcMatch[1]}
                    </span>
                );
                remaining = remaining.substring(funcMatch[1].length);
                continue;
            }

            // Check for type annotations (after :)
            const typeMatch = remaining.match(/^:\s*([A-Z][a-zA-Z0-9_$<>,\s|&\[\]]*)/);
            if (typeMatch) {
                tokens.push(
                    <span key={`${lineIndex}-${keyIndex++}`} className={syntaxColors.punctuation}>:</span>
                );
                tokens.push(
                    <span key={`${lineIndex}-${keyIndex++}`} className={syntaxColors.type}>
                        {typeMatch[1]}
                    </span>
                );
                remaining = remaining.substring(typeMatch[0].length);
                continue;
            }

            // Check for operators
            const operatorMatch = remaining.match(/^(=>|===|!==|==|!=|<=|>=|&&|\|\||[+\-*/%=<>!&|^~?:])/);
            if (operatorMatch) {
                tokens.push(
                    <span key={`${lineIndex}-${keyIndex++}`} className={syntaxColors.operator}>
                        {operatorMatch[0]}
                    </span>
                );
                remaining = remaining.substring(operatorMatch[0].length);
                continue;
            }

            // Check for punctuation
            const punctMatch = remaining.match(/^[{}\[\](),;.]/);
            if (punctMatch) {
                tokens.push(
                    <span key={`${lineIndex}-${keyIndex++}`} className={syntaxColors.punctuation}>
                        {punctMatch[0]}
                    </span>
                );
                remaining = remaining.substring(1);
                continue;
            }

            // Check for identifiers/variables
            const identMatch = remaining.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*/);
            if (identMatch) {
                tokens.push(
                    <span key={`${lineIndex}-${keyIndex++}`} className={syntaxColors.variable}>
                        {identMatch[0]}
                    </span>
                );
                remaining = remaining.substring(identMatch[0].length);
                continue;
            }

            // Default: single character
            tokens.push(
                <span key={`${lineIndex}-${keyIndex++}`}>
                    {remaining[0]}
                </span>
            );
            remaining = remaining.substring(1);
        }

        return (
            <div key={lineIndex} className="leading-relaxed">
                {tokens.length > 0 ? tokens : '\u00A0'}
            </div>
        );
    });
}

export function BlogContent({ sections }: BlogContentProps) {
    const renderSection = (section: ContentSection, index: number) => {
        switch (section.type) {
            case "heading":
                const HeadingTag = `h${section.level || 2}` as keyof JSX.IntrinsicElements;
                const headingClasses = {
                    2: "text-2xl md:text-3xl font-bold text-white mt-10 mb-4",
                    3: "text-xl md:text-2xl font-semibold text-white mt-8 mb-3",
                    4: "text-lg md:text-xl font-medium text-white mt-6 mb-2",
                };
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        id={section.content?.toLowerCase().replace(/\s+/g, "-") || `section-${index}`}
                    >
                        <HeadingTag className={headingClasses[section.level as 2 | 3 | 4] || headingClasses[2]}>
                            {section.content}
                        </HeadingTag>
                    </motion.div>
                );

            case "paragraph":
                return (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg"
                    >
                        {section.content}
                    </motion.p>
                );

            case "code":
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="my-6"
                    >
                        <div className="relative group">
                            {/* Language Badge */}
                            <div className="absolute top-0 right-0 px-3 py-1.5 text-xs font-mono text-gray-400 bg-slate-800 rounded-bl-lg rounded-tr-xl border-l border-b border-slate-600">
                                {section.language || "code"}
                            </div>

                            {/* Code Block with Syntax Highlighting */}
                            <pre className="overflow-x-auto p-4 pt-10 pb-4 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-xl text-sm font-mono shadow-xl">
                                <code className="block">
                                    {highlightCode(section.content || "", section.language)}
                                </code>
                            </pre>

                            {/* Copy Button */}
                            <button
                                onClick={() => navigator.clipboard.writeText(section.content || "")}
                                className="absolute top-2 left-3 px-3 py-1 text-xs text-gray-500 hover:text-white bg-slate-700/50 hover:bg-slate-600 rounded-md transition-all opacity-0 group-hover:opacity-100 border border-slate-600/50"
                            >
                                Copy
                            </button>

                            {/* Line numbers glow effect */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-cyan-500/50 rounded-l-xl" />
                        </div>
                    </motion.div>
                );

            case "list":
                return (
                    <motion.ul
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="my-4 space-y-2 pl-6"
                    >
                        {section.items?.map((item, i) => (
                            <li key={i} className="text-gray-300 list-disc marker:text-purple-500 text-base md:text-lg">
                                {item}
                            </li>
                        ))}
                    </motion.ul>
                );

            case "quote":
                return (
                    <motion.blockquote
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="my-6 pl-4 border-l-4 border-purple-500 bg-slate-800/30 py-4 pr-4 rounded-r-lg italic text-gray-400 text-base md:text-lg"
                    >
                        &ldquo;{section.content}&rdquo;
                    </motion.blockquote>
                );

            case "image":
                return (
                    <motion.figure
                        key={index}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="my-6"
                    >
                        <img
                            src={section.content || ""}
                            alt=""
                            className="w-full rounded-xl border border-slate-700/50"
                        />
                    </motion.figure>
                );

            default:
                return null;
        }
    };

    return (
        <article className="prose prose-invert max-w-none">
            {sections.map((section, index) => renderSection(section, index))}
        </article>
    );
}
