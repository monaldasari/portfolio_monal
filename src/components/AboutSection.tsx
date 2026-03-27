import { motion } from 'framer-motion'

const AboutSection = () => {
  const skills = {
    'Technical Skills': ['C', 'Python', 'HTML', 'CSS'],
    'Web Development': ['Responsive Design', 'Frontend Development'],
    'Design & Tools': ['UI/UX Fundamentals', 'VS Code', 'Git & GitHub'],
  }

  return (
    <section id="about" className="py-40 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute -left-40 top-12 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl" />
      <div className="absolute -right-40 bottom-20 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Motivated developer focused on building elegant web experiences using modern tools and clean design. I blend strong fundamentals with a growth mindset and a love for polished, accessible interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-800/30 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:border-slate-600/50 transition-all duration-300">
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                I am a dedicated and professional web developer creating refined digital experiences with accessible and responsive interfaces. My work blends clean architecture, polished UX, and performance-first optimization.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I am currently working as a Web Developer Intern and staying committed to modern toolsets (Next.js, React, Tailwind, TypeScript) while practicing strong collaboration, testing, and deployment workflows.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold text-white">Skills</h3>
            <div className="grid gap-4">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:bg-slate-800/60 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-indigo-400 mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-600/30 to-purple-600/30 text-indigo-300 border border-indigo-500/30 hover:border-indigo-500/50 hover:shadow-lg transition-all duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection