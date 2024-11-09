import Grid from "@/components/Grid/Grid";
import Hero from "@/components/Hero/Hero";
import { FloatingNav } from "@/components/FloatingNav/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen flex-col items-center justify-start bg-black-100">
      <div className="w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
