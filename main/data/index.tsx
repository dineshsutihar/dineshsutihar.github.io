import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Cpu, Database, Brush, Server, Wrench, BookOpen, BadgeCheck, } from "lucide-react";

export const navItems = [
    { name: "About", link: "#about" },
    // { name: "Projects", link: "/projects" },
    { name: "Projects", link: "#recent-projects" },
    { name: "Blog", link: "/blog" },
    { name: "Resume", link: "/resume" },
    { name: "Contact", link: "#contact" },
];

export interface Project {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    image: string;
    video?: string;
    demoUrl?: string;
    githubUrl?: string;
    liveUrl?: string;
    chromeUrl?: string;
    edgeUrl?: string;
    type: 'featured' | 'fullstack' | 'frontend' | 'backend' | 'ai-ml' | 'educational' | 'mobile' | 'other';
    techStack: string[];
    category: string;
    year: number;
    features: string[];
    challenges?: string;
    outcome?: string;
    isFeatured?: boolean;
}

export const projects: Project[] = [
    // Featured Projects
    {
        id: "chrome-extension",
        title: "Chrome Extension - Productivity Booster",
        description: "CodeTranslateAI is a developer tool that lets you instantly translate or explain code snippets using AI. Supports multiple languages with clean output, and runs efficiently via Cloudflare Workers.",
        shortDescription: "CodeTranslateAI — Instantly translate or explain code using AI.",
        image: "https://github.com/dineshsutihar/CodeTranslateAI/blob/9a76586adea49aa053b132dcd19301f2113bfec5/promotional/Extension%2002.png?raw=true",
        demoUrl: "https://github.com/dineshsutihar/CodeTranslateAI",
        githubUrl: "https://github.com/dineshsutihar/CodeTranslateAI",
        chromeUrl: "https://chromewebstore.google.com/detail/cbopkkjljoiabjobmjhmoaglkiffgpel?utm_source=item-share-cb",
        edgeUrl: "https://microsoftedge.microsoft.com/addons/detail/codetranslateai/lkdmdgdalcmbhfjakgmgljkknmbafbjp",
        techStack: ["JavaScript", "HTML5", "CSS3", "Chrome APIs", "Manifest V3", "Cloudflare Workers", "TypeScript", "Gemini", "Open Source"],
        category: "Browser Extension",
        type: "featured",
        year: 2024,
        features: ["Instant code translation", "Supports multiple languages", "Clean output format", "Runs on Cloudflare Workers", "Open source"],
        challenges: "Working with Chrome extension APIs and ensuring cross-browser compatibility.",
        outcome: "A powerful tool for developers that streamlines the coding process and enhances productivity.",
        isFeatured: true,
    },
    {
        id: "log-analyzer",
        title: "LogAnalyzer - AI-Powered Log Analysis",
        description: "An intelligent log analysis tool that uses Large language models to detect anomalies, patterns, and potential issues in system logs and gives resolution steps to fix the issues.",
        shortDescription: "AI-powered tool for smart log analysis and anomaly detection.",
        image: "https://res.cloudinary.com/dineshsutihar/image/upload/v1754424352/Screenshot_From_2025-08-06_01-34-07_psrut3.png",
        demoUrl: "http://loganalyzer.dineshsutihar.me/",
        githubUrl: "https://github.com/dineshsutihar/Log-Analyzer/",
        liveUrl: "https://loganalyzer.dineshsutihar.me",
        techStack: ["Python", "RAG", "LangChain", "React", "ExpressJs", "MongoDB", "Docker", "Redis"],
        category: "AI/ML",
        type: "featured",
        year: 2024,
        features: ["Anomaly detection", "Log analysis", "Real-time analysis", "Dashboard visualization", "Alert system", "Resolution steps"],
        challenges: "Processing large log files efficiently and ensuring accurate anomaly detection.",
        outcome: "An advanced log analysis system that uses AI to streamline debugging and improve system reliability.",
        isFeatured: true,
    },

    // Regular Projects
    {
        id: "collab-board",
        title: "CollabBoard - Realtime Whiteboard",
        description: "CollabBoard is a realtime whiteboard app that allows users to collaborate in real-time, with features like drawing, text, and sticky notes.",
        shortDescription: "A collaborative whiteboard app for real-time teamwork.",
        image: "/collab.png",
        video: "",
        demoUrl: "https://collabboard.dineshsutihar.me",
        githubUrl: "https://github.com/dineshsutihar/collab_board/",
        liveUrl: "https://collabboard.dineshsutihar.me",
        techStack: ["Next.js", "Clerk", "Vercel", "Tailwind CSS", "WebRTC", "Database"],
        category: "FullStack Web App",
        type: "fullstack",
        year: 2024,
        features: ["Real-time collaboration", "Drawing tools", "Text annotations", "Sticky notes", "User authentication"],
        challenges: "Implementing real-time updates and ensuring smooth collaboration between users.",
        outcome: "A fully functional whiteboard app that allows multiple users to collaborate in real-time, enhancing teamwork and productivity.",
    },
    {
        id: "organize-it",
        title: "OrganizeIt - Fullstack Todo App",
        description: "OrganizeIt is a fullstack todo app with user authentication, CRUD operations, a clean, minimalist design, and is dockerized for easy deployment. Currently under development.",
        shortDescription: "A todo app with fullstack features and Docker integration.",
        image: "https://github.com/dineshsutihar/todo-fullstack/blob/main/design/design.png?raw=true",
        demoUrl: "https://organizeit.dineshsutihar.me",
        githubUrl: "https://github.com/dineshsutihar/todo-fullstack",
        liveUrl: "https://organizeit.dineshsutihar.me",
        techStack: ["Next.js", "MongoDB", "Vercel", "Render", "Tailwind CSS", "Docker"],
        category: "Full Stack",
        type: "fullstack",
        year: 2024,
        features: ["User authentication", "CRUD operations", "Minimalist design", "Docker deployment"],
        challenges: "Integrating Docker and managing deployment pipelines during ongoing development.",
        outcome: "A work-in-progress productivity app aimed at efficient task management with a modern stack.",
    },
    {
        id: "space-tourism",
        title: "Space Tourism Multipage",
        description: "A multipage responsive website for a fictional space tourism company, emphasizing clean modern design and smooth page transitions.",
        shortDescription: "A stylish multi-page frontend website for space travel.",
        image: "https://github.com/dineshsutihar/space-tourism-multipage/blob/main/Design/index.jpg?raw=true",
        demoUrl: "https://dineshsutihar.github.io/space-tourism-multipage/",
        githubUrl: "https://github.com/dineshsutihar/space-tourism-multipage",
        liveUrl: "https://dineshsutihar.github.io/space-tourism-multipage/",
        techStack: ["JavaScript", "HTML5", "CSS3"],
        category: "Frontend",
        type: "frontend",
        year: 2023,
        features: ["Responsive design", "Smooth animations", "Multi-page navigation", "Modern UI"],
        challenges: "Creating fluid navigation transitions and maintaining design consistency across pages.",
        outcome: "A sleek, engaging multipage site for showcasing frontend skills."
    },
    {
        id: "clarity-crunch",
        title: "Clarity Crunch - Text Summarization",
        description: "Clarity Crunch is an AI-powered tool that summarizes long-form content like essays and articles using advanced NLP models.",
        shortDescription: "An AI-based tool to quickly summarize lengthy text content.",
        image: "https://github.com/dineshsutihar/ClarityCrunch/raw/main/public/images/DocsImage.png",
        demoUrl: "https://clarity.dineshsutihar.me/",
        githubUrl: "https://github.com/dineshsutihar/ClarityCrunch/",
        liveUrl: "https://clarity.dineshsutihar.me/",
        techStack: ["HTML5", "CSS3", "Express", "Node.js", "Hugging Face"],
        category: "AI/ML",
        type: "ai-ml",
        year: 2023,
        features: ["AI text summarization", "Article processing", "Clean interface", "Fast processing"],
        challenges: "Integrating NLP models and managing performance for large text inputs.",
        outcome: "A smart summarization platform that helps users digest information faster and more effectively."
    },
    {
        id: "next-dashboard",
        title: "Next-Dashboard",
        description: "Next-Dashboard is a responsive admin dashboard template built using Next.js. It features a modern UI, user authentication, analytics widgets, and reusable components.",
        shortDescription: "A modern, responsive dashboard built with Next.js and Auth0.",
        image: "/dashboard.png",
        demoUrl: "https://next-dashboard.dineshsutihar.me/",
        githubUrl: "https://github.com/dineshsutihar/Next-Dashboard",
        liveUrl: "https://next-dashboard.dineshsutihar.me/",
        techStack: ["Next.js", "PostgreSQL", "Vercel", "Auth0", "React", "Tailwind CSS"],
        category: "Full Stack",
        type: "fullstack",
        year: 2023,
        features: ["Authentication", "Dashboard analytics", "Responsive design", "Reusable components"],
        challenges: "Implementing secure authentication and designing modular components.",
        outcome: "A sleek and scalable admin dashboard for various applications.",
    },
    {
        id: "algorithm-visualizer",
        title: "Algorithm Visualizer",
        description: "A web-based visualization tool for sorting algorithms including Bubble Sort, Merge Sort, and Quick Sort, aimed at improving algorithm understanding through visuals.",
        shortDescription: "An interactive tool to visualize how sorting algorithms work.",
        image: "/algo.png",
        demoUrl: "https://dineshsutihar.github.io/algorithm_visualizer/",
        githubUrl: "https://github.com/dineshsutihar/algorithm_visualizer/",
        liveUrl: "https://dineshsutihar.github.io/algorithm_visualizer/",
        techStack: ["JavaScript", "HTML5", "CSS3"],
        category: "Educational",
        type: "educational",
        year: 2023,
        features: ["Algorithm visualization", "Interactive learning", "Multiple sorting algorithms", "Step-by-step process"],
        challenges: "Ensuring clear step-by-step visual transitions and handling algorithm speed.",
        outcome: "A helpful educational tool for students to grasp sorting concepts with clarity."
    }
];

export interface Education {
    id: number,
    institution: string,
    course: string,
    startDate: string,
    endDate?: string,
    percentage?: string,
    cgpa?: string,
    status?: string,
}

export const education: Education[] = [
    {
        id: 1,
        institution: "JAIN (Deemed-to-be University), Bangalore, India",
        course: "Bachelor of Technology in Computer Science Engineering",
        startDate: "2022",
        endDate: "2026",
        cgpa: "9.3/10",
        status: "Ongoing"
    },
    {
        id: 2,
        institution: "Geeta Engineering College (Currently Geeta University), India",
        course: "Diploma in Graphics and Multimedia (D.Voc), NSQF Level 3-5",
        startDate: "2019",
        endDate: "2022",
        percentage: "83.13%",
    },
    {
        id: 3,
        institution: "Shiva International English Boarding Secondary School, Nepal",
        course: "Secondary Education Examination (10th)",
        startDate: "2018",
        endDate: "2019",
        percentage: "77.5%"
    }
];

export const workExperience = [
    {
        id: 1,
        title: "Full Stack Developer Intern",
        desc: "Developed multiple pages like About, Gallery, and Home for a client's website and added CMS functionality at Softtech Engineering Pvt. Ltd.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Graphic Design Intern",
        desc: "Designed posters, banners, and other design assets for Geeta Technical Hub.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    // {
    //     id: 3,
    //     title: "Freelance App Dev Project",
    //     desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    //     className: "md:col-span-2", // change to md:col-span-2
    //     thumbnail: "/exp3.svg",
    // },
    // {
    //     id: 4,
    //     title: "Lead Frontend Developer",
    //     desc: "Developed and maintained user-facing features using modern frontend technologies.",
    //     className: "md:col-span-2",
    //     thumbnail: "/exp4.svg",
    // },
];




export const contactMethods = [
    {
        icon: <FaLinkedin />,
        title: "Connect on LinkedIn",
        desc: "Stay up-to-date with my professional journey.",
        link: {
            name: "Connect with me",
            href: "https://www.linkedin.com/in/dineshsutihar/"
        },
    },
    {
        icon: <FaTwitter />,
        title: "Follow on Twitter",
        desc: "Got a question or just want to say hi? Send me a tweet.",
        link: {
            name: "Send me a DM",
            href: "https://x.com/Dineshsutihar"
        },
    }
]


export interface SkillCategory {
    title: string;
    description: string;
    skills: string[];
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    color: string;
    gradient: string;
}


export const skillCategories: SkillCategory[] = [
    {
        title: 'Frontend',
        description: "Crafting beautiful and performant user interfaces with modern frameworks and tools.",
        skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'HTML5', 'CSS3'],
        icon: Cpu,
        color: '#00ffff',
        gradient: 'from-cyan-400 to-blue-500'
    },
    {
        title: 'Backend',
        description: "Building robust server-side logic, APIs, and scalable architectures.",
        skills: ['Node.js', 'Express', 'Python', 'Flask', 'Java', 'Spring Boot', 'GraphQL', 'RESTful APIs', 'Microservices Architecture',],
        icon: Server,
        color: '#ff9900',
        gradient: 'from-orange-400 to-red-500'
    },
    {
        title: 'Data & DevOps',
        description: "Managing data pipelines, cloud infrastructure, and deployment automation.",
        skills: ['AWS', 'Docker', 'PostgreSQL', 'Git', 'CI/CD', 'MongoDB', 'Redis', 'GitHub Actions', 'Azure'],
        icon: Database,
        color: '#38bdf8',
        gradient: 'from-sky-400 to-indigo-500'
    },
    {
        title: 'Design & UX',
        description: "Translating ideas into intuitive, accessible, and engaging user experiences.",
        skills: ['Figma', 'UI/UX Principles', 'System Design', 'Wireframing', 'Prototyping', 'Responsive Design', 'Accessibility', 'Photoshop', 'Illustrator'],
        icon: Brush,
        color: '#ee8877',
        gradient: 'from-pink-400 to-rose-500'
    },
    {
        title: 'Core Skills',
        description: "Fundamental competencies that strengthen development across all domains.",
        skills: ['Data Structures', 'Algorithms', 'Testing', 'Agile Methodologies', 'Problem Solving', 'Version Control', 'Object-Oriented Programming', 'Debugging', 'Software Development Life Cycle (SDLC)', 'Operating Systems', 'Networking', 'Shell Scripting', 'Cloud Computing'],
        icon: Wrench,
        color: '#a3e635',
        gradient: 'from-lime-400 to-green-500'
    },
    {
        title: 'AI & Machine Learning',
        description: "Exploring the intersection of AI and software development to create intelligent applications.",
        skills: ['Machine Learning', 'Deep Learning', 'Reinforcement Learning', 'Natural Language Processing', 'Scikit-learn', 'Hugging Face', 'NumPy', 'Pandas'],
        icon: BookOpen,
        color: '#a78bfa',
        gradient: 'from-purple-400 to-pink-500'
    }
];


export type AchievementItem = {
    label: string;
    url?: string;
    details?: string;
};

export type AchievementSection = {
    name: string;
    icon: React.ElementType;
    color: string;
    items: AchievementItem[];
};

export const sections: AchievementSection[] = [
    {
        name: "Research Papers",
        icon: BookOpen,
        color: "from-blue-500 to-cyan-500",
        items: [
            {
                label:
                    "IoT-Driven Smart Classroom System for Efficient Resource Monitoring and Automation",
                details: "16th International Conference on Recent Engineering & Technology, May 2025",
                url: "https://media.licdn.com/dms/image/v2/D5622AQGfFvJ959x_dg/feedshare-shrink_2048_1536/B56ZbfI54AH4Ao-/0/1747500380191?e=1757548800&v=beta&t=KYiLzIWfr0Q1duG10co772jhnNG7gEHRrQzxDvV4yLU"
            },
            {
                label:
                    "Advancing Log Analysis and Anomaly Detection with Large Language Models",
                details: "16th ICCCNT, July 2025",
                url: "https://media.licdn.com/dms/image/v2/D5622AQHelze85N5jAg/feedshare-shrink_2048_1536/B56ZhvNAoHHMAo-/0/1754212389557?e=1757548800&v=beta&t=S34Ml6ujiXmuxSUlt401uE3aQale9GidliiDN4HBuZc"
            }
        ]
    },
    {
        name: "Certifications",
        icon: BadgeCheck,
        color: "from-yellow-500 to-orange-500",
        items: [
            {
                label: "Meta Front-End Development Professional Certificate",
                url: "https://coursera.org/share/8cd6c873f5904003b9407a261c611169"
            },
            {
                label: "Oracle SQL Database",
                url: "https://coursera.org/share/ae905a78e35eec69979f0452aba7acaa"
            },
            {
                label: "Cybersecurity for Everyone",
                url: "https://coursera.org/share/e73b25048927a37a97a60f697a3218de"
            },
            {
                label: "Hands-on to Linux Commands and Shell Scripting",
                url: "https://coursera.org/share/81040416f4497215d08df0915e11ec7b"
            },
            {
                label: "Supervised Machine Learning: Regression",
                url: "https://coursera.org/share/a553414fe0f58773816ab1237f34681e"
            },
            {
                label: "Supervised Machine Learning: Classification",
                url: "https://coursera.org/share/6b724235554352fd23888a4bd395c6e2"
            },
            {
                label: "Explore Machine Learning using Python by Infosys",
            },
            {
                label: "Postman API Fundamentals Student Expert",

            }
        ]
    }
];

