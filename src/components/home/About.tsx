import { VideoText } from "../magicui/video-text";

export const About = () => {
  return (
    <section className=" text-primary">
      <div className="relative h-[200px] w-1/2 mx-auto">
        <VideoText
          className="w-full"
          src="https://cdn.magicui.design/ocean-small.webm"
        >
          ABOUT US
        </VideoText>
      </div>
      <div className="max-w-7xl mx-auto px-6 flex justify-between md:flex-row-reverse flex-col gap-10 items-center">
        {/* Left - Text Content */}
        <div className="basis-1/2 text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-text-main">
            Empower Your Future with
          </h2>
          <h2 className="text-3xl mb-4 md:text-4xl font-bold text-primary">
            TechEcho Courses
          </h2>
          <p className="text-lg text-text-muted mb-4 leading-relaxed">
            At TechEcho, we believe in practical, hands-on learning designed to
            get you job-ready. Our expert-led courses cover everything from
            full-stack development to emerging tech like AI and blockchain —
            tailored for students, professionals, and entrepreneurs.
          </p>
          <p className="text-md text-text-muted mb-6">
            Whether you're just starting out or upskilling to advance your
            career, our structured paths and live mentorship ensure you're never
            alone in your journey.
          </p>
          <a
            href="/career"
            className="inline-block bg-btn-bg text-bg px-6 py-3 rounded-lg font-semibold hover:bg-btn-hover-bg transition-colors duration-300"
          >
            Explore Courses
          </a>
        </div>

        {/* Right - Image or Illustration */}
        <div className="flex justify-center basis-1/3">
          <img
            src="/assets/home/aboutUs.png"
            alt="Learning Illustration"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
