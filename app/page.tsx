import Grid from "@/components/Grid/Grid";
import Hero from "@/components/Hero/Hero";
import RecentProjects from "@/components/RecentProjects/RecentProjects";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen flex-col items-center justify-start bg-black-100">
      <div className="w-full">
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
