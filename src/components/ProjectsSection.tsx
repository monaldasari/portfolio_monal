import { motion } from 'framer-motion'
import { FaLaptopCode, FaChartLine, FaCalculator } from 'react-icons/fa'

const ProjectsSection = () => {
  const projects = [
    {
      icon: FaLaptopCode,
      title: 'Career Path — SGA.AI',
      description: 'A project focused on guiding users with structured career insights and recommendations using AI-powered recommendations.',
    },
    {
      icon: FaChartLine,
      title: 'Personalized Dashboard',
      description: 'A dashboard that tracks user data and provides insights for personal growth and productivity with real-time analytics.',
    },
    {
      icon: FaCalculator,
      title: 'Advanced Calculator',
      description: 'A responsive calculator application built with modern frontend technologies with smooth animations and interactions.',
    },
  ]

  return (
    <section id="projects" className="py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase">Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 tracking-tight">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 border border-white/[0.07] rounded-xl bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-200"
            >
              <div className="mb-4 p-2.5 w-fit rounded-md border border-white/10 text-indigo-400 bg-indigo-500/10">
                <project.icon size={18} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
