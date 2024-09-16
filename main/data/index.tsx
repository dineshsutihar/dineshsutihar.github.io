import { FaCss3, FaHtml5, FaLinkedin, FaNodeJs, FaReact, FaTwitter } from "react-icons/fa";
import { RiJavascriptLine, RiNextjsLine } from "react-icons/ri";
import { SiAuth0, SiDocker, SiExpress, SiHuggingface, SiMongodb, SiMongoose, SiPostcss, SiPostgresql, SiRender, SiTailwindcss, SiVercel } from "react-icons/si";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Blog", link: "/blog" },
    { name: "Resume", link: "/resume" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
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
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building a JS Animation library",
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

export const projects = [
    {
        id: 1,
        title: "Clarity Crunch - Text Summarization",
        des: "A text summarization tool that uses AI to summarize articles, essays, and other long-form content.",
        img: "https://github.com/dineshsutihar/ClarityCrunch/raw/main/public/images/DocsImage.png",
        iconLists: [<FaHtml5 />, <FaCss3 />, <SiExpress />, <FaNodeJs />, <SiHuggingface />],
        link: "https://clarity.dineshsutihar.me/",
    },
    {
        id: 2,
        title: "Space Tourism Multipage",
        des: "A multipage website for a space tourism company, with a focus on modern design and smooth animations.",
        img: "https://github.com/dineshsutihar/space-tourism-multipage/blob/main/Design/index.jpg?raw=true",
        iconLists: [<RiJavascriptLine />, <FaHtml5 />, <FaCss3 />],
        link: "https://dineshsutihar.github.io/space-tourism-multipage/",
    },
    {
        id: 3,
        title: "Next-Dashboard",
        des: "A responsive dashboard template for Next.js, featuring a modern design and reusable components.",
        img: "/dashboard.png",
        iconLists: [<RiNextjsLine />, <SiPostgresql />, <SiVercel />, <SiAuth0 />, <FaReact />, , <SiTailwindcss />],
        link: "https://next-dashboard.dineshsutihar.me/",
    },
    {
        id: 4,
        title: "OrganizeIt - Fullstack Todo App",
        des: "OrganizeIt is a fullstack todo app with user authentication, CRUD operations, a clean, minimalist design, and also dockerized for easy deployment.",
        img: "https://github.com/dineshsutihar/todo-fullstack/blob/main/design/design.png?raw=true",
        iconLists: [<RiNextjsLine />, <SiMongodb />, <SiMongoose />, <SiVercel />, <SiRender />, <SiTailwindcss />, <SiDocker />],
        link: "https://organizeit.dineshsutihar.me",
    },
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