import { IntroOverlay } from '@/components/IntroOverlay';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import FavoritesSection from '@/components/FavoritesSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { FavoritesSection } from '@/components/FavoritesSection';
import { FooterSection } from '@/components/FooterSection';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export default function Index() {
  return (
    <div className="min-h-screen selection:bg-accent-color selection:text-bg-color font-sans">
      <IntroOverlay />
      
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
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
