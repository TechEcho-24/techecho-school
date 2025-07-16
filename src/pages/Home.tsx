import { Hero } from "../components/home/Hero";
import { Blog } from "./Blog";
// import { ContactForm } from "../components/home/ContactForm";

import Carousel from "../components/home/Carousel";
import GoogleReviewWidget from "../components/home/GoogleReviewWidget";

import { CourseFeatures } from "@/components/home/Features";
import { HowTechEchoWorks } from "@/components/home/HowTechEchoWorks";
import { OurCourses } from "@/components/home/OurCourses";
import { Testimonials } from "@/components/home/Testimonials";
import { AboutOurMission } from "../components/home/OurMission";
import { Features } from "./Features";
import { MarqueeDemo } from "@/components/home/TrendingCoures";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className='md:max-w-2/3 max-w-[90%] mx-auto'>
        <CourseFeatures />
      </div>

      {/* <About /> */}
      <AboutOurMission />
      <OurCourses />
      <HowTechEchoWorks />
      <Features />
      <Carousel />
      <Testimonials />
      <MarqueeDemo />
      {/* <FeaturedCourses /> */}
      <Blog page={"home"} />
      {/* <ContactForm /> */}
      <div className='bg-blacks mb-16 w-full '>
        
      </div>
    </div>
  );
}
