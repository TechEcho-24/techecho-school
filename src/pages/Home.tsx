import { Link } from "react-router-dom";
import { Footer } from "../components/home/Footer";
import { Hero } from "../components/home/Hero";
import { Blog } from "./Blog";
import { ContactForm } from "../components/home/ContactForm";
import { About } from "../components/home/About";
import Carousel from "../components/home/Carousel";
import GoogleReviewWidget from "../components/home/GoogleReviewWidget";
import { Newsletter } from "../components/home/NewsLetter";
import { FeaturedCourses } from "../components/home/FeaturedCourses";
import { AboutOurMission } from "../components/home/OurMission";
import { OurCourses } from "@/components/home/OurCourses";
import { Features } from "./Features";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* <About /> */}
      <AboutOurMission />
      <OurCourses />
      <Features />
      <Carousel />
      {/* <FeaturedCourses /> */}
      <Newsletter />
      <Blog page={"home"} />
      <ContactForm />
      <div className='bg-blacks mb-16 w-full '>
        <GoogleReviewWidget />
      </div>
    </div>
  );
}
