import { Hero } from "../components/home/Hero";
import { Blog } from "./Blog";
// import { ContactForm } from "../components/home/ContactForm";

import Carousel from "../components/home/Carousel";
import GoogleReviewWidget from "../components/home/GoogleReviewWidget";
import { Newsletter } from "../components/home/NewsLetter";

import { AboutOurMission } from "../components/home/OurMission";
import { OurCourses } from "@/components/home/OurCourses";
import { Features } from "./Features";
import { CourseFeatures } from "@/components/home/Features";
import { HowTechEchoWorks } from "@/components/home/HowTechEchoWorks";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className='max-w-2/3 mx-auto'>
        <CourseFeatures />
      </div>

      {/* <About /> */}
      <AboutOurMission />
      <OurCourses />
      <HowTechEchoWorks />
      <Features />
      <Carousel />
      <Testimonials />
      {/* <FeaturedCourses /> */}
      <Newsletter />
      <Blog page={"home"} />
      {/* <ContactForm /> */}
      <div className='bg-blacks mb-16 w-full '>
        <GoogleReviewWidget />
      </div>
    </div>
  );
}
