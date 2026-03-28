'use client'

import { motion } from 'framer-motion'

const AboutSection = () => {
  const skills = {
    'Languages': ['C', 'Python', 'HTML', 'CSS'],
    'Interests': ['Web Development', 'UI/UX Design'],
    'Tools': ['VS Code', 'Git & GitHub'],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-28 border-t border-forest/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-sage uppercase">About</span>
          <h2 className="text-3xl md:text-4xl font-bold text-forest mt-3 tracking-tight">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-forest/70 leading-relaxed">
              I am a motivated student with a strong passion for learning and growing in the field of technology. I have a foundational understanding of programming languages like C and Python, and I am currently exploring web development with a keen interest in UI/UX design.
            </p>
            <p className="text-forest/70 leading-relaxed">
              I enjoy the process of turning ideas into simple, user-friendly digital experiences. As I continue to learn, I focus on building practical skills, improving my problem-solving abilities, and understanding how design and development work together.
            </p>
            <p className="text-forest/70 leading-relaxed">
              I am always open to new opportunities that help me learn, create, and grow as a developer.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {Object.entries(skills).map(([category, items]) => (
              <motion.div key={category} variants={itemVariants}>
                <p className="text-xs font-semibold tracking-widest text-sage uppercase mb-3">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 text-sm text-forest/70 border border-forest/15 rounded-md bg-parchment hover:border-sage/50 hover:text-forest hover:bg-sage/5 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
