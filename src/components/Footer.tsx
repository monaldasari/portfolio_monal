'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { href: 'https://www.linkedin.com/in/monaldasari', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'https://github.com/monaldasari', icon: FaGithub, label: 'GitHub' },
    { href: 'https://www.instagram.com/moona._.333/', icon: FaInstagram, label: 'Instagram' },
  ]

  return (
    <footer className="border-t border-forest/10 py-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-forest/40"
        >
          © {new Date().getFullYear()} Monal Dasari
        </motion.p>
        <div className="flex items-center gap-3">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.15, y: -2 }}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="p-2 text-forest/40 hover:text-sage transition-colors duration-200"
            >
              <link.icon size={16} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
