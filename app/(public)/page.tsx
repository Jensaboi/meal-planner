import HeroSection from "@/features/home/components/HeroSection";
import HowToSection from "@/features/home/components/HowToSection";
import RecipePreviewGrid from "@/features/home/components/RecipePreviewGrid";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <RecipePreviewGrid />

      <HowToSection />

      {/* Frågor och svar */}
      <section></section>
    </div>
  );
}
