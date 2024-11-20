import Grid from "@/components/Grid/Grid";
import Hero from "@/components/Hero/Hero";
import RecentProjects from "@/components/RecentProjects/RecentProjects";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full flex-col bg-black-100">
      <div className="absloute top-6 z-20 w-full">
        <Navbar />
      </div>
      <Hero />
      <Grid />
      <RecentProjects />
    </main>
  );
}
