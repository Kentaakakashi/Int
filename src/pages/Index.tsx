import { useEffect, useState } from "react";
import { IntroOverlay } from "@/components/IntroOverlay";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import FavoritesSection from "@/components/FavoritesSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { FooterSection } from "@/components/FooterSection";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import BackgroundLayer from "@/components/BackgroundLayer";
import { siteData } from "@/data/siteData";

export default function Index() {
  const defaultPresetId = siteData.backgroundPresets?.[0]?.id ?? "default";

  const [activePresetId, setActivePresetId] = useState<string>("jjk-opening");

  useEffect(() => {
    const savedPreset = localStorage.getItem("kenta_background_preset");
    if (savedPreset) {
      setActivePresetId(savedPreset);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("kenta_background_preset", activePresetId);
  }, [activePresetId]);

  return (
    <div className="min-h-screen font-sans selection:bg-accent-color selection:text-bg-color">
      <BackgroundLayer activePresetId={activePresetId} />

      <IntroOverlay />

      <main className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <HeroSection />
        <StatsSection />
        <FeaturedSection />
        <AboutSection />
        <SkillsSection />
        <FavoritesSection />
        <FooterSection />
      </main>

      <ThemeSwitcher />
    </div>
  );
}
