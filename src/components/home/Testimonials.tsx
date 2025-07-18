import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { type FC, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa6";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I was a college student with zero knowledge of marketing, but this course made it super easy to learn. The lessons were clear, practical, and full of real-world examples. I even got my first internship just a week after finishing the course!",
    name: "Kanika",
    role: "M.Com Student & Marketing Intern",
    image: "/assets/testimonials/kanika.jpg",
  },
  {
    quote:
      "I had tried learning from YouTube, but it always felt incomplete. This course gave me a structured roadmap and hands-on tools to run campaigns for clients. I now offer social media and SEO services as an intern and earn consistently.",
    name: "Minakshi Thakur",
    role: "Digital Marketing Intern",
    image: "/assets/testimonials/minakshi.jpg",
  },
  {
    quote:
      "This graphic design course was a game changer for me! I started with no design background, but the way concepts like typography, color theory, and tools like Photoshop and Canva were explained made everything super easy. Now I can confidently create logos, posters, and social media posts.",
    name: "Mahi Gupta",
    role: "Graphic Designer",
    image: "/assets/home/logo.png",
  },
  {
    quote:
      "Before joining TechEcho’s Full Stack course, I barely knew the difference between frontend and backend. Today, I’ve built 3 full-fledged web apps and The mentorship and real-world projects made all the difference.And the best part? I got my first job offer right here at TechEcho after completing the course! ",
    name: "Ansh Sachan",
    role: " Software Developer",
    image: "/assets/testimonials/ansh.jpeg",
  },
];

export const Testimonials: FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const getVisibleTestimonials = () => {
    const visible: Testimonial[] = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(startIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const next = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative py-20 px-6 md:px-20 bg-white my-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex justify-left items-center gap-4 mb-12">
          <img
            src="/assets/home/Vector.png"
            alt="arrow"
            className="w-10 h-10 md:w-16 md:h-16 mr-1 md:mr-10 mt-1"
          />
          <div>
            <h2 className="text-xl md:text-3xl font-medium text-gray-700">
              Students Success Stories:
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              How We Helped Students Thrive
            </h3>
          </div>
        </div>

        {/* Desktop Carousel (3 cards sliding) */}
        <div className="hidden md:block relative">
          <div className="grid gap-6 md:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {getVisibleTestimonials().map((t, i) => (
                <motion.div
                  key={`${t.name}-${i}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="h-[300px] cursor-pointer bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-lg border border-purple-100 relative"
                >
                  <FaQuoteLeft className="text-3xl text-purple-400 font-bold" />
                  <p className="text-gray-700 text-sm leading-relaxed mb-10 mt-2">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3 absolute bottom-5">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm text-gray-800">
                        {t.name}
                      </p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute -bottom-10 right-0 transform -translate-x-1/2 flex gap-4">
            <button onClick={next} className="text-purple-500  rounded-full">
              <ChevronRight size={32} />
            </button>
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="h-[350px] w-full bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl py-6 px-6 shadow-lg border border-purple-100"
            >
              <div className="text-6xl text-purple-400 font-bold mb-4">“</div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6 mt-2">
                {testimonials[startIndex].quote}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonials[startIndex].image}
                  alt={testimonials[startIndex].name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm text-gray-800">
                    {testimonials[startIndex].name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonials[startIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Buttons */}
          <div className="flex justify-end w-full">
            <button onClick={next} className="text-purple-500 rounded-full">
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
