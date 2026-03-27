import { motion } from 'framer-motion'

const AboutSection = () => {
  const skills = {
    'Technical Skills': ['C', 'Python', 'HTML', 'CSS'],
    'Web Development': ['Responsive Design', 'Frontend Development'],
    'Design & Tools': ['UI/UX Fundamentals', 'VS Code', 'Git & GitHub'],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-40 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/10"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              I am a motivated student with a strong passion for learning and growing in the field of technology. I have a foundational understanding of programming languages like C and Python, and I am currently exploring web development with a keen interest in UI/UX design.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              I enjoy the process of turning ideas into simple, user-friendly digital experiences. As I continue to learn, I focus on building practical skills, improving my problem-solving abilities, and understanding how design and development work together.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am always open to new opportunities that help me learn, create, and grow as a developer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h3 className="text-3xl font-semibold text-gray-900 mb-8">Skills</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {Object.entries(skills).map(([category, skillList]) => (
                <motion.div key={category} variants={itemVariants}>
                  <h4 className="text-xl font-medium text-blue-600 mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 hover:border-purple-200 relative overflow-hidden group"
                      >
                        <span className="relative z-10">{skill}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection