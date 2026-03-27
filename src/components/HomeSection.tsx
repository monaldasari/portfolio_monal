import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

interface HomeSectionProps {
  onResumeClick?: () => void
}

const HomeSection = ({ onResumeClick }: HomeSectionProps) => {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/monaldasari',
      icon: FaLinkedin,
      label: 'LinkedIn',
    },
    {
      href: 'https://github.com/monaldasari',
      icon: FaGithub,
      label: 'GitHub',
    },
    {
      href: 'https://www.instagram.com/moona._.333/',
      icon: FaInstagram,
      label: 'Instagram',
    },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-6">
              Web Developer Intern
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 leading-[1.1] tracking-tight">
              Monal Dasari
            </h1>
            <p className="text-base text-slate-400 mb-8 max-w-md leading-relaxed">
              Building clean, fast web experiences with a focus on good design and solid fundamentals.
            </p>

            <div className="flex gap-3 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2.5 rounded-md border border-white/10 text-slate-400 hover:text-white hover:border-white/25 transition-all duration-200"
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-md transition-colors duration-200"
              >
                View Projects
              </button>
              <button
                onClick={onResumeClick}
                className="px-6 py-2.5 border border-white/10 hover:border-white/25 text-slate-300 hover:text-white text-sm font-medium rounded-md transition-all duration-200"
              >
                View Resume
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/profile.jpg"
                alt="Monal Dasari"
                fill
                sizes="(max-width: 768px) 288px, 320px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
