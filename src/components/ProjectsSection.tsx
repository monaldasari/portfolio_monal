'use client'

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
  }

  return (
    <section id="projects" className="py-28 border-t border-forest/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-sage uppercase">Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-forest mt-3 tracking-tight">Projects</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group p-6 border border-forest/10 rounded-xl bg-parchment hover:border-sage/40 hover:shadow-md hover:shadow-forest/5 transition-all duration-200"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                className="mb-4 p-2.5 w-fit rounded-md border border-forest/10 text-sage bg-sage/10 group-hover:bg-sage/20 transition-colors duration-200"
              >
                <project.icon size={18} />
              </motion.div>
              <h3 className="text-base font-semibold text-forest mb-2">{project.title}</h3>
              <p className="text-sm text-forest/60 leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
