import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { LiveDemo } from "@/components/LiveDemo";
import { Comparison } from "@/components/Comparison";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { TimeSavings } from "@/components/TimeSavings";
import { Stats } from "@/components/Stats";
import { ROICalculator } from "@/components/ROICalculator";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { CustomSidekick } from "@/components/CustomSidekick";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LiveDemo />
        <Comparison />
        <Services />
        <Process />
        <TimeSavings />
        <Stats />
        <ROICalculator />
        <Pricing />
        <Testimonials />
        <CustomSidekick />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
