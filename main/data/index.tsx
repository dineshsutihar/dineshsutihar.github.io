import { FaCss3, FaDatabase, FaHtml5, FaLinkedin, FaNodeJs, FaReact, FaTwitter } from "react-icons/fa";
import { FaArrowsSplitUpAndLeft } from "react-icons/fa6";
import { RiJavascriptLine, RiNextjsLine } from "react-icons/ri";
import { SiAuth0, SiClerk, SiDocker, SiExpress, SiHuggingface, SiMongodb, SiMongoose, SiPostcss, SiPostgresql, SiRender, SiTailwindcss, SiVercel } from "react-icons/si";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "/projects" },
    { name: "Blog", link: "/blog" },
    { name: "Resume", link: "/resume" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: " Currently exploring the world of computer science and software development.",
        description: " ",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: " Techstacks ",
        description: "Not limited to these,",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Problem Solver, Team Player, and a Quick Learner.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Learning and building projects is my passion and I love to share my knowledge with others.",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

// export const projects = [
//     {
//         id: 1,
//         title: "CollabBoard - Realtime Whiteboard",
//         des: "CollabBoard is a realtime whiteboard app that allows users to collaborate in real-time, with features like drawing, text, and sticky notes.",
//         img: "/collab.png",
//         iconLists: [<RiNextjsLine />, <SiClerk />, <SiVercel />, <SiTailwindcss />, <FaArrowsSplitUpAndLeft />, <FaDatabase />],
//         link: "https://collabboard.dineshsutihar.me",
//         code: "https://github.com/dineshsutihar/collab_board/"
//     },
//     {
//         id: 2,
//         title: "OrganizeIt - Fullstack Todo App",
//         des: "OrganizeIt is a fullstack todo app with user authentication, CRUD operations, a clean, minimalist design, and also dockerized for easy deployment. It under construction now..",
//         img: "https://github.com/dineshsutihar/todo-fullstack/blob/main/design/design.png?raw=true",
//         iconLists: [<RiNextjsLine />, <SiMongodb />, <SiVercel />, <SiRender />, <SiTailwindcss />, <SiDocker />],
//         link: "https://organizeit.dineshsutihar.me",
//         code: "https://github.com/dineshsutihar/todo-fullstack"
//     },
//     {
//         id: 3,
//         title: "Space Tourism Multipage",
//         des: "A multipage website for a space tourism company, with a focus on modern design and smooth animations.",
//         img: "https://github.com/dineshsutihar/space-tourism-multipage/blob/main/Design/index.jpg?raw=true",
//         iconLists: [<RiJavascriptLine />, <FaHtml5 />, <FaCss3 />],
//         link: "https://dineshsutihar.github.io/space-tourism-multipage/",
//         code: "https://github.com/dineshsutihar/space-tourism-multipage"
//     },
//     {
//         id: 4,
//         title: "Clarity Crunch - Text Summarization",
//         des: "A text summarization tool that uses AI to summarize articles, essays, and other long-form content.",
//         img: "https://github.com/dineshsutihar/ClarityCrunch/raw/main/public/images/DocsImage.png",
//         iconLists: [<FaHtml5 />, <FaCss3 />, <SiExpress />, <FaNodeJs />, <SiHuggingface />],
//         link: "https://clarity.dineshsutihar.me/",
//         code: "https://github.com/dineshsutihar/ClarityCrunch/"
//     },
//     {
//         id: 5,
//         title: "Next-Dashboard",
//         des: "A responsive dashboard template for Next.js, featuring a modern design and reusable components.Use Email: 'user@nextmail.com' | Password: '123456'",
//         img: "/dashboard.png",
//         iconLists: [<RiNextjsLine />, <SiPostgresql />, <SiVercel />, <SiAuth0 />, <FaReact />, , <SiTailwindcss />],
//         link: "https://next-dashboard.dineshsutihar.me/",
//         code: "https://github.com/dineshsutihar/Next-Dashboard"
//     },
//     {
//         id: 6,
//         title: "Algorithm Visualizer",
//         des: "A web app that visualizes sorting algorithms like Bubble Sort, Merge Sort, and Quick Sort, to help students understand how they work.",
//         img: "/algo.png",
//         iconLists: [<RiJavascriptLine />, <FaHtml5 />, <FaCss3 />],
//         link: "https://dineshsutihar.github.io/algorithm_visualizer/",
//         code: "https://github.com/dineshsutihar/algorithm_visualizer/"
//     },

// ];

export interface Project {
    id: number;
    title: string;
    description: string;
    shortDescription: string;
    image: string;
    video?: string;
    demoUrl?: string;
    githubUrl?: string;
    liveUrl?: string;
    techStack: string[];
    category: string;
    features: string[];
    challenges?: string;
    outcome?: string;
    credentials?: {
        email: string;
        password: string;
    };
}

export const projects: Project[] = [
    {
        id: 1,
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
        features: ["Real-time collaboration", "Drawing tools", "Text annotations", "Sticky notes", "User authentication"],
        challenges: "Implementing real-time updates and ensuring smooth collaboration between users.",
        outcome: "A fully functional whiteboard app that allows multiple users to collaborate in real-time, enhancing teamwork and productivity."
    },
    {
        id: 2,
        title: "OrganizeIt - Fullstack Todo App",
        description: "OrganizeIt is a fullstack todo app with user authentication, CRUD operations, a clean, minimalist design, and is dockerized for easy deployment. Currently under development.",
        shortDescription: "A todo app with fullstack features and Docker integration.",
        image: "https://github.com/dineshsutihar/todo-fullstack/blob/main/design/design.png?raw=true",
        demoUrl: "https://organizeit.dineshsutihar.me",
        githubUrl: "https://github.com/dineshsutihar/todo-fullstack",
        liveUrl: "https://organizeit.dineshsutihar.me",
        techStack: ["Next.js", "MongoDB", "Vercel", "Render", "Tailwind CSS", "Docker"],
        category: "Full Stack",
        features: ["User authentication", "CRUD operations", "Minimalist design", "Docker deployment"],
        challenges: "Integrating Docker and managing deployment pipelines during ongoing development.",
        outcome: "A work-in-progress productivity app aimed at efficient task management with a modern stack."
    },
    {
        id: 3,
        title: "Space Tourism Multipage",
        description: "A multipage responsive website for a fictional space tourism company, emphasizing clean modern design and smooth page transitions.",
        shortDescription: "A stylish multi-page frontend website for space travel.",
        image: "https://github.com/dineshsutihar/space-tourism-multipage/blob/main/Design/index.jpg?raw=true",
        demoUrl: "https://dineshsutihar.github.io/space-tourism-multipage/",
        githubUrl: "https://github.com/dineshsutihar/space-tourism-multipage",
        liveUrl: "https://dineshsutihar.github.io/space-tourism-multipage/",
        techStack: ["JavaScript", "HTML5", "CSS3"],
        category: "Frontend",
        features: ["Responsive design", "Smooth animations", "Multi-page navigation", "Modern UI"],
        challenges: "Creating fluid navigation transitions and maintaining design consistency across pages.",
        outcome: "A sleek, engaging multipage site for showcasing frontend skills."
    },
    {
        id: 4,
        title: "Clarity Crunch - Text Summarization",
        description: "Clarity Crunch is an AI-powered tool that summarizes long-form content like essays and articles using advanced NLP models.",
        shortDescription: "An AI-based tool to quickly summarize lengthy text content.",
        image: "https://github.com/dineshsutihar/ClarityCrunch/raw/main/public/images/DocsImage.png",
        demoUrl: "https://clarity.dineshsutihar.me/",
        githubUrl: "https://github.com/dineshsutihar/ClarityCrunch/",
        liveUrl: "https://clarity.dineshsutihar.me/",
        techStack: ["HTML5", "CSS3", "Express", "Node.js", "Hugging Face"],
        category: "AI/ML",
        features: ["AI text summarization", "Article processing", "Clean interface", "Fast processing"],
        challenges: "Integrating NLP models and managing performance for large text inputs.",
        outcome: "A smart summarization platform that helps users digest information faster and more effectively."
    },
    {
        id: 5,
        title: "Next-Dashboard",
        description: "Next-Dashboard is a responsive admin dashboard template built using Next.js. It features a modern UI, user authentication, analytics widgets, and reusable components.",
        shortDescription: "A modern, responsive dashboard built with Next.js and Auth0.",
        image: "/dashboard.png",
        demoUrl: "https://next-dashboard.dineshsutihar.me/",
        githubUrl: "https://github.com/dineshsutihar/Next-Dashboard",
        liveUrl: "https://next-dashboard.dineshsutihar.me/",
        techStack: ["Next.js", "PostgreSQL", "Vercel", "Auth0", "React", "Tailwind CSS"],
        category: "Full Stack",
        features: ["Authentication", "Dashboard analytics", "Responsive design", "Reusable components"],
        challenges: "Implementing secure authentication and designing modular components.",
        outcome: "A sleek and scalable admin dashboard for various applications.",
        credentials: {
            email: "user@nextmail.com",
            password: "123456"
        }
    },
    {
        id: 6,
        title: "Algorithm Visualizer",
        description: "A web-based visualization tool for sorting algorithms including Bubble Sort, Merge Sort, and Quick Sort, aimed at improving algorithm understanding through visuals.",
        shortDescription: "An interactive tool to visualize how sorting algorithms work.",
        image: "/algo.png",
        demoUrl: "https://dineshsutihar.github.io/algorithm_visualizer/",
        githubUrl: "https://github.com/dineshsutihar/algorithm_visualizer/",
        liveUrl: "https://dineshsutihar.github.io/algorithm_visualizer/",
        techStack: ["JavaScript", "HTML5", "CSS3"],
        category: "Educational",
        features: ["Algorithm visualization", "Interactive learning", "Multiple sorting algorithms", "Step-by-step process"],
        challenges: "Ensuring clear step-by-step visual transitions and handling algorithm speed.",
        outcome: "A helpful educational tool for students to grasp sorting concepts with clarity."
    }
];


export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Developed multiple pages like About, Gallery, and Home for a client's website at Softtech Engineering Pvt. Ltd.",
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