import Link from 'next/link'
import { motion } from 'framer-motion'

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
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-moss/10 bg-forest/90 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-16">
          <span className="text-base font-semibold tracking-tight text-cream">
            Monal Dasari
          </span>

          <div className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-moss bg-sage/15'
                    : 'text-cream/50 hover:text-cream hover:bg-cream/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-1.5 text-sm font-medium bg-sage hover:bg-moss text-forest rounded-md transition-colors duration-200"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
