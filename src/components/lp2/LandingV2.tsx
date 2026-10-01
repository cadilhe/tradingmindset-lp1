import { TopNav } from "./TopNav";
import { Hero } from "./Hero";
import { Problem } from "./Problem";
import { Pillars } from "./Pillars";
import { Comparison } from "./Comparison";
import { Pricing } from "./Pricing";
import { FaqFooter } from "./FaqFooter";

export function LandingV2() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background-deep text-foreground">
      <TopNav />
      <Hero />
      <Problem />
      <Pillars />
      <Comparison />
      <Pricing />
      <FaqFooter />
    </main>
  );
}
