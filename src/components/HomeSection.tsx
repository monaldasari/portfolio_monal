import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import Button from './Button'

const HomeSection = () => {
  const socialLinks = [
    { href: 'https://www.linkedin.com/in/monaldasari', icon: FaLinkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
    { href: 'https://github.com/monaldasari', icon: FaGithub, label: 'GitHub', color: 'hover:text-gray-800' },
    { href: 'https://www.instagram.com/moona._.333/', icon: FaInstagram, label: 'Instagram', color: 'hover:text-pink-500' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Monal Dasari
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 font-medium mb-8">
              Web Developer Intern
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-lg leading-relaxed">
              Passionate about building simple and user-friendly digital experiences.
            </p>
            <div className="flex justify-center md:justify-start space-x-6 mb-8">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/60 backdrop-blur-sm rounded-full shadow-lg text-gray-600 ${link.color} transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-white/80`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </div>
            <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl opacity-60 animate-pulse"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <Image
                  src="/profile.jpg" // Replace with your actual profile image
                  alt="Monal Dasari"
                  fill
                  className="rounded-full object-cover shadow-2xl border-4 border-white/80 backdrop-blur-sm"
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