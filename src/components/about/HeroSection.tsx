import { motion } from "framer-motion";
import { fadeUp } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className='relative py-24 mt-20 px-6 bg-white flex flex-col items-center text-center'>
      <motion.h1
        className='text-5xl font-extrabold leading-tight max-w-3xl'
        variants={fadeUp}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        Where It All Begins
      </motion.h1>
      <motion.p
        className='text-lg text-gray-600 mt-6 max-w-2xl'
        variants={fadeUp}
        custom={1}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        TechEcho School was founded to ignite creativity, foster curiosity, and
        shape the next generation of creators. From a simple spark to a growing
        community.
      </motion.p>
      <motion.button
        className='mt-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition'
        variants={fadeUp}
        custom={2}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        Explore Our Journey
      </motion.button>
      <div className='absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-purple-50 to-pink-50 opacity-30' />
    </section>
  );
}
