import { IntroOverlay } from "@/components/IntroOverlay";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import FavoritesSection from "@/components/FavoritesSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { FooterSection } from "@/components/FooterSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <IntroOverlay />

      <main className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <HeroSection />
          <StatsSection />
          <FeaturedSection />
          <AboutSection />
          <SkillsSection />
        </div>

        <FavoritesSection />

        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <FooterSection />
        </div>
      </main>
    </div>
  );
}
