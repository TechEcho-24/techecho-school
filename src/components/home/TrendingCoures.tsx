import { Marquee } from "@/components/magicui/marquee";
import { CourseCard } from "../career/CourseCard";

const allCourses = [
  {
    title: "Full Stack Development",
    category: ["Frontend", "Backend"],
    description:
      "Build dynamic websites and apps using HTML, CSS, JavaScript, and modern frameworks.",
    image: "/assets/career/fullstack.png",
    path: "/login",
  },
  {
    title: "React.js ",
    category: ["Frontend"],
    description:
      "Build dynamic websites and apps using HTML, CSS, JavaScript, and modern frameworks.",
    image: "/assets/career/fullstack.png",
    path: "/login",
  },
  {
    title: "Node.js",
    category: ["Backend"],
    description:
      "Build dynamic websites and apps using HTML, CSS, JavaScript, and modern frameworks.",
    image: "/assets/career/fullstack.png",
    path: "/login",
  },
  {
    title: "Next.js",
    category: ["Frontend", "Backend"],
    description:
      "Build dynamic websites and apps using HTML, CSS, JavaScript, and modern frameworks.",
    image: "/assets/career/fullstack.png",
    path: "/login",
  },
  {
    title: "MongoDB ",
    category: ["Backend"],
    description:
      "Build dynamic websites and apps using HTML, CSS, JavaScript, and modern frameworks.",
    image: "/assets/career/fullstack.png",
    path: "/login",
  },
  {
    title: "UI/UX Designing",
    category: ["UI/UX"],
    description:
      "Craft beautiful, user-friendly designs and intuitive user interfaces that convert.",
    image: "/assets/career/UI-UX.webp",
    path: "/login",
  },
  {
    title: "Digital Marketing",
    category: ["Marketing"],
    description:
      "Learn to grow businesses online through SEO, social media, and paid advertising.",
    image: "/assets/career/marketing.webp",
    path: "/login",
  },
  {
    title: "AI & Machine Learning",
    category: ["AI", "Backend"],
    description:
      "Dive into the world of AI with Python, ML algorithms, and real-world projects.",
    image: "/assets/career/ai.webp",
    path: "/login",
  },
];

const firstRow = allCourses.slice(0, allCourses.length / 2);
const secondRow = allCourses.slice(allCourses.length / 2);

export function MarqueeDemo() {
  return (
    <div className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
      <Marquee pauseOnHover className='[--duration:20s]'>
        {firstRow.map((review, i) => (
          <CourseCard key={i} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className='[--duration:20s]'>
        {secondRow.map((review, i) => (
          <CourseCard key={i} {...review} />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background'></div>
    </div>
  );
}
