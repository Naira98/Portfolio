import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import RecentProjects from "@/components/RecentProjects/RecentProjects";
import Navbar from "@/components/Navbar/Navbar";
import Skills from "@/components/Skills/Skills";
import Approach from "@/components/Approach/Approach";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full flex-col overflow-clip bg-black-100">
      <div className="absloute top-6 z-20 w-full">
        <Navbar />
      </div>
      <Hero />
      <About />
      <RecentProjects />
      <Skills />
      <Approach />
      <Footer />
    </main>
  );
}
