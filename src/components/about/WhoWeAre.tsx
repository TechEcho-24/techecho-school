import { motion } from "framer-motion";

const data = [
  {
    title: "Student-First Approach",
    desc: "Students are the heart of everything we do, receiving personalized attention.",
  },
  {
    title: "Real-World Learning",
    desc: "We blend theory and practice to equip students with practical skills.",
  },
  {
    title: "Interactive Curriculum",
    desc: "Our hands-on, project-based approach makes learning effective and fun.",
  },
];

export default function WhoWeAre() {
  return (
    <section className='py-28 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <motion.h2
          className='text-4xl font-bold text-center mb-16'
 
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          Who We Are
        </motion.h2>
        <div className='grid md:grid-cols-3 gap-10'>
          {data.map((item, i) => (
            <motion.div
              key={i}
   
              custom={i}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition'
            >
              <h3 className='text-xl font-semibold text-purple-600 mb-3'>
                {item.title}
              </h3>
              <p className='text-gray-700 text-sm'>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
