import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { href: 'https://www.linkedin.com/in/monaldasari', icon: FaLinkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
    { href: 'https://github.com/monaldasari', icon: FaGithub, label: 'GitHub', color: 'hover:text-gray-800' },
    { href: 'https://www.instagram.com/moona._.333/', icon: FaInstagram, label: 'Instagram', color: 'hover:text-pink-500' },
  ]

  return (
    <footer className="py-20 bg-gray-50 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2026 Monal Dasari. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-white/60 backdrop-blur-sm rounded-full shadow-lg text-gray-600 ${link.color} transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-white/80`}
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            Built with ❤️ using Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

export default Footer