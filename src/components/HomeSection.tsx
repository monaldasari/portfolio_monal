'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

interface HomeSectionProps {
  onResumeClick?: () => void
}

const HomeSection = ({ onResumeClick }: HomeSectionProps) => {
  const socialLinks = [
    { href: 'https://www.linkedin.com/in/monaldasari', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'https://github.com/monaldasari', icon: FaGithub, label: 'GitHub' },
    { href: 'https://www.instagram.com/moona._.333/', icon: FaInstagram, label: 'Instagram' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block text-xs font-semibold tracking-widest text-sage uppercase mb-6"
            >
              Web Developer Intern
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-forest mb-5 leading-[1.1] tracking-tight"
            >
              Monal Dasari
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base text-forest/60 mb-8 max-w-md leading-relaxed"
            >
              Building clean, fast web experiences with a focus on good design and solid fundamentals.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-3 mb-8"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-md border border-forest/15 text-forest/50 hover:text-forest hover:border-sage/50 hover:bg-sage/5 transition-colors duration-200"
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-2.5 bg-forest hover:bg-olive text-cream text-sm font-semibold rounded-md transition-colors duration-200"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onResumeClick}
                className="px-6 py-2.5 border border-forest/20 hover:border-sage/50 text-forest/60 hover:text-forest hover:bg-sage/5 text-sm font-medium rounded-md transition-all duration-200"
              >
                View Resume
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="flex justify-center md:justify-end"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-forest/10 shadow-lg shadow-forest/5"
            >
              <Image
                src="/profile.jpg"
                alt="Monal Dasari"
                fill
                sizes="(max-width: 768px) 288px, 320px"
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
