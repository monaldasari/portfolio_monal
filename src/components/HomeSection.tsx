import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram, FaFileDownload } from 'react-icons/fa'
import Button from './Button'

interface HomeSectionProps {
  onResumeClick?: () => void
}

const HomeSection = ({ onResumeClick }: HomeSectionProps) => {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/monaldasari',
      icon: FaLinkedin,
      label: 'LinkedIn',
      style: 'text-indigo-400 hover:text-indigo-300',
    },
    {
      href: 'https://github.com/monaldasari',
      icon: FaGithub,
      label: 'GitHub',
      style: 'text-slate-300 hover:text-white',
    },
    {
      href: 'https://www.instagram.com/moona._.333/',
      icon: FaInstagram,
      label: 'Instagram',
      style: 'text-pink-400 hover:text-pink-300',
    },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-purple-900/50" />
      <div className="absolute -left-24 -top-12 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl animate-float" />
      <div className="absolute right-0 top-24 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl animate-float-delayed" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-slate-900/60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center md:text-left"
          >
            <p className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-blue-500/20 text-blue-300 mb-4 border border-blue-400/30">
              Web Developer Intern
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
              Monal Dasari
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Crafting polished web experiences with clean interfaces, subtle microinteractions, and modern performance.
            </p>

            <div className="flex justify-center md:justify-start gap-4 mb-8 flex-wrap">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-slate-800/70 backdrop-blur-sm rounded-full shadow-lg ${link.style} transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-slate-700/90 active:scale-95`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  aria-label={link.label}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects
              </Button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onResumeClick}
                className="px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50"
              >
                <FaFileDownload /> View Resume
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative rounded-full p-3 bg-slate-800/50 backdrop-blur-sm shadow-2xl hover:shadow-[0_20px_60px_rgba(59,130,246,0.3)] transition-all duration-500">
              <div className="absolute inset-0 rounded-full opacity-70 animate-pulse bg-gradient-to-br from-blue-400/40 to-purple-400/40 blur-2xl" />
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-600/50">
                <Image
                  src="/profile.jpg"
                  alt="Monal Dasari"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection