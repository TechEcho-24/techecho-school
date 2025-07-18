import { motion } from "framer-motion";


export default function Mentors() {
  return (
    <section className='py-28 bg-white'>
      <div className='max-w-6xl mx-auto px-4'>
        <motion.h2
          className='text-4xl font-bold text-center mb-12'
       
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          Meet Our Mentors
        </motion.h2>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
           
              custom={i}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 p-4 shadow hover:shadow-xl transition'
            >
              <div className='w-full h-48 bg-white rounded-lg mb-4' />
              <h4 className='text-lg font-medium text-purple-700'>
                Mentor Name {i + 1}
              </h4>
              <p className='text-sm text-gray-600'>Full Stack Expert</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
