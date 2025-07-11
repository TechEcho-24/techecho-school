import { type FC } from "react";
import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Working with TechEcho felt effortless. They guided us through the process and delivered a product that exceeded expectations.",
    name: "Saurabh Dutta",
    role: "CEO, Green Revolution Co.",
    image: "/assets/home/logo.png",
  },
  {
    quote:
      "TechEcho's integrated approach boosted our sales through a user-friendly website and platform. We’re thrilled!",
    name: "Arvind Chauhan",
    role: "VP of Product, Zapay",
    image: "/assets/home/logo.png",
  },
  {
    quote:
      "From website revamp to SEO magic, TechEcho transformed our online presence. A+!",
    name: "Lisa Williams",
    role: "VP, Sustainable Goods Co.",
    image: "/assets/home/logo.png",
  },
];

export const Testimonials: FC = () => {
  return (
    <section className='py-20 px-6 md:px-20 bg-white'>
      <div className='max-w-6xl mx-auto'>
        {/* Top Section */}
        <div className='flex items-center gap-4 mb-12'>
          {/* Arrow (manually insert) */}
          <img
            src='/assets/home/Vector.png'
            alt='arrow'
            className='w-6 h-6 md:w-16 md:h-16 mr-10 mt-1'
          />
          <div>
            <h2 className='text-xl md:text-3xl font-medium text-gray-700'>
              Students Success Stories:
            </h2>
            <h3 className='text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>
              How We Helped Students Thrive
            </h3>
          </div>
        </div>

        {/* Testimonials */}
        <div className='grid gap-6 md:grid-cols-3'>
          {testimonials.map((t, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              key={i}
              className='cursor-pointer bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-lg border border-purple-100'
            >
              <div className='text-6xl text-purple-400 font-bold mb-4'>“</div>
              <p className='text-gray-700 text-sm leading-relaxed mb-6 mt-20'>
                {t.quote}
              </p>
              <div className='flex items-center gap-3'>
                <img
                  src={t.image}
                  alt={t.name}
                  className='w-10 h-10 rounded-full object-cover'
                />
                <div>
                  <p className='font-semibold text-sm text-gray-800'>
                    {t.name}
                  </p>
                  <p className='text-xs text-gray-500'>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
