import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import DataFetcher from "@/components/DataFetcher";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dinesh Sutihar - Software Developer Engineer",
  description: "Welcome to my portfolio website! Here you'll find information about my projects, skills, and achievements in web development and programming. This site showcases my work, including frontend and backend projects, coding challenges, and contributions to open source. Feel free to explore and connect with me!",
  openGraph: {
    title: "Dinesh Sutihar - Software Developer Engineer",
    description: "Welcome to my portfolio website! Here you'll find information about my projects, skills, and achievements in web development and programming. This site showcases my work, including frontend and backend projects, coding challenges, and contributions to open source. Feel free to explore and connect with me!",
    url: "https://dineshsutihar.me",
    siteName: "Dinesh Sutihar - Software Developer Engineer",
    images: [
      {
        url: "https://dineshsutihar.me/logo.png",
        width: 800,
        height: 600,
        alt: "Dinesh Sutihar - Software Developer Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinesh Sutihar - Software Developer Engineer",
    description: "Welcome to my portfolio website! Here you'll find information about my projects, skillsand achievements in web development and programming.This site showcases my work, including frontend and backend projects, coding challenges, and contributions to open source.Feel free to explore and connect with me!",
    images: ["https://dineshsutihar.me/logo.png"],
    creator: "@dineshsutihar",
  },
  appleWebApp: {
    title: "Dinesh Sutihar - Software Developer Engineer",
    statusBarStyle: "black-translucent",
    capable: true,
    startupImage: "https://dineshsutihar.me/logo.png",
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  keywords: [
    "Dinesh Sutihar",
    "Dinesh Kumar Sutihar",
    "Software Developer",
    "Full Stack Developer",
    "Web Developer",
    "Portfolio",
    "Programming",
    "Open Source",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Software Engineer",
    "Web Applications",
    "Web Development",
    "Software Projects",
    "Coding Challenges",
    "Competitive Programming",
    "Data Structures",
    "Algorithms",
    "UI/UX Design",
    "Cloud Computing",
    "GitHub",
    "Version Control",
    "Software Projects",
    "Software Development",
    "Software Engineer",
    "Software Engineer Portfolio",
  ],
  authors: [
    {
      name: "Dinesh Sutihar",
      url: "https://dineshsutihar.me"
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        {/* just a testing */}
        <DataFetcher />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
