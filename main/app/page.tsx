import Grid from "@/components/Grid";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Contact from "@/components/Contact";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import { Grid2 } from "@/components/Grid2";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid2 />
        <Grid />
        <RecentProjects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
