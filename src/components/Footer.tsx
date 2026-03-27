import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { href: 'https://www.linkedin.com/in/monaldasari', icon: FaLinkedin, label: 'LinkedIn', color: 'text-indigo-400 hover:text-indigo-300' },
    { href: 'https://github.com/monaldasari', icon: FaGithub, label: 'GitHub', color: 'text-slate-300 hover:text-white' },
    { href: 'https://www.instagram.com/moona._.333/', icon: FaInstagram, label: 'Instagram', color: 'text-pink-400 hover:text-pink-300' },
  ]

  return (
    <footer className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/5 to-transparent" />
      <div className="absolute -left-40 -bottom-20 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="absolute -right-40 -top-20 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-slate-400 text-sm md:text-base"
          >
            © {new Date().getFullYear()} Monal Dasari. All rights reserved.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 bg-slate-800/50 backdrop-blur-sm rounded-full shadow-lg text-slate-300 ${link.color} transition-all duration-300 hover:shadow-xl hover:bg-slate-700/70 border border-slate-700/50 hover:border-slate-600`}
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-8 border-t border-slate-700/50"
        >
          <p className="text-center text-slate-400 text-sm flexitems-center justify-center gap-2">
            Built with <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block text-red-500"
            >
              <FaHeart size={14} />
            </motion.span> using Next.js, React, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer