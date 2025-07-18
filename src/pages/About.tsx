import HeroSection from "@/components/about/HeroSection";
import WhoWeAre from "@/components/about/WhoWeAre";
import Mentors from "@/components/about/Mentors";
import JoinUs from "@/components/about/JoinUs";

export default function AboutUsPage() {
  return (
    <main className='bg-white text-gray-900 mb-0 mx-5 md:mb-52'>
      <HeroSection />
      <WhoWeAre />
      <Mentors />
      <JoinUs />
    </main>
  );
}
