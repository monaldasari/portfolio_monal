import { motion } from 'framer-motion'

const AboutSection = () => {
  const skills = {
    'Technical Skills': ['C', 'Python', 'HTML', 'CSS'],
    'Web Development': ['Responsive Design', 'Frontend Development'],
    'Design & Tools': ['UI/UX Fundamentals', 'VS Code', 'Git & GitHub'],
  }

  return (
    <section id="about" className="py-28 border-t border-moss/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-sage uppercase">About</span>
          <h2 className="text-3xl md:text-4xl font-bold text-cream mt-3 tracking-tight">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-cream/60 leading-relaxed">
              I am a web developer intern focused on building well-structured, responsive interfaces. I work primarily with Next.js, React, Tailwind CSS, and TypeScript.
            </p>
            <p className="text-cream/60 leading-relaxed">
              I care about clean code, accessible design, and shipping work that holds up. Currently sharpening my skills through real projects and consistent practice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="text-xs font-semibold tracking-widest text-sage uppercase mb-3">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm text-cream/70 border border-moss/20 rounded-md bg-olive/50 hover:border-moss/50 hover:text-cream transition-colors duration-150"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
