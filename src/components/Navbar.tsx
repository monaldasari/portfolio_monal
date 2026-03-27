import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaFileAlt } from 'react-icons/fa'

interface NavbarProps {
  activeSection: string
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-slate-700/50 shadow-lg bg-slate-900/80"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center h-16 gap-3">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <span className="text-lg sm:text-xl font-bold tracking-wide bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Monal Dasari</span>
          </motion.div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`#${item.id}`}
                  className={`px-3 py-1.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-indigo-300 bg-indigo-600/30 shadow-lg shadow-indigo-500/30 border border-indigo-500/50'
                      : 'text-slate-300 hover:text-indigo-300 hover:bg-indigo-600/20 hover:shadow-lg'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 text-sm sm:text-base font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg hover:from-indigo-700 hover:to-purple-700 hover:shadow-2xl shadow-indigo-500/30 transition-all duration-300"
              aria-label="Open Resume"
            >
              <FaFileAlt size={14} />
              <span>📄 Resume</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar