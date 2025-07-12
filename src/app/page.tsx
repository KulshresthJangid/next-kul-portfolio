import Intro from "@/components/Intro";
import Hero from "../components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Experience />
      <Projects />
      <Achievements />
    </>
  );
}
