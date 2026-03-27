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
        <p className="text-sm text-forest/35">
          © {new Date().getFullYear()} Monal Dasari
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="p-2 text-forest/35 hover:text-forest transition-colors duration-200"
            >
              <link.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
