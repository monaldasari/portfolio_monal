import { motion } from 'framer-motion'

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Career Path - SGA.AI',
      description: 'A project focused on guiding users with structured career insights and recommendations.',
    },
    {
      title: 'Personalized Dashboard',
      description: 'A dashboard that tracks user data and provides insights for personal growth and productivity.',
    },
    {
      title: 'Calculator',
      description: 'A simple and responsive calculator application built using frontend technologies.',
    },
  ]

  return (
    <section id="projects" className="py-40 bg-gray-50 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I&apos;ve worked on. Each one represents a step in my journey as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full border border-gray-100 hover:border-blue-200 hover:bg-white/90 group">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection