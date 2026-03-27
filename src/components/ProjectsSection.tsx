import { motion } from 'framer-motion'
import { FaLaptopCode, FaChartLine, FaCalculator } from 'react-icons/fa'

const ProjectsSection = () => {
  const projects = [
    {
      icon: FaLaptopCode,
      title: 'Career Path - SGA.AI',
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
    <section id="projects" className="py-40 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute -left-40 top-12 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="absolute right-0 bottom-12 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Projects</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I&apos;ve worked on. Each one represents a step in my journey as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="relative p-8 bg-gradient-to-br from-slate-800/60 to-slate-800/30 border border-slate-700/50 rounded-3xl shadow-xl hover:shadow-2xl hover:border-indigo-500/50 transition-all duration-400 backdrop-blur-sm">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-lg border border-indigo-500/30 group-hover:from-indigo-600/50 group-hover:to-purple-600/50 transition-all duration-300">
                      <project.icon className="text-indigo-400" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-indigo-300">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection