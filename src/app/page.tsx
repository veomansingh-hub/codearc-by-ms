import { Hero } from "@/components/home/Hero";
import { Work } from "@/components/home/Work";
import { Belief } from "@/components/home/Belief";
import { Range } from "@/components/home/Range";
import { ServicesIndustries } from "@/components/home/ServicesIndustries";
import { SoftwareDepth } from "@/components/home/SoftwareDepth";
import { Process } from "@/components/home/Process";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Belief />
      <Range />
      <ServicesIndustries />
      <SoftwareDepth />
      <Process />
    </>
  );
}
