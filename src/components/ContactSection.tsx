'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setStatus('sending')
    setStatusMessage('Sending...')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Request failed')

      setStatus('success')
      setStatusMessage("Message sent. I'll get back to you soon.")
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => { setStatus('idle'); setStatusMessage('') }, 5000)
    } catch {
      setStatus('error')
      setStatusMessage('Unable to send right now. Please try again.')
      setTimeout(() => { setStatus('idle') }, 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-2.5 text-sm bg-parchment border rounded-md text-forest placeholder-forest/30 focus:outline-none focus:ring-1 transition-colors duration-200 ${
      errors[field]
        ? 'border-red-400/60 focus:ring-red-400/30'
        : 'border-forest/15 hover:border-forest/30 focus:border-sage/60 focus:ring-sage/20'
    }`

  return (
    <section id="contact" className="py-28 border-t border-forest/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-sage uppercase">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-forest mt-3 tracking-tight">Get In Touch</h2>
          <p className="text-forest/55 mt-4 max-w-md leading-relaxed text-sm">
            Have something in mind? Reach out at{' '}
            <a href="mailto:monaldasari2007@gmail.com" className="text-sage hover:text-forest transition-colors">
              monaldasari2007@gmail.com
            </a>{' '}
            or use the form below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-md"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-forest/50 mb-1.5">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass('name')}
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500/70 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-forest/50 mb-1.5">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass('email')}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-500/70 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium text-forest/50 mb-1.5">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`${inputClass('message')} resize-none`}
                placeholder="Your message..."
              />
              {errors.message && <p className="text-red-500/70 text-xs mt-1">{errors.message}</p>}
            </div>

            {status !== 'idle' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-sm ${
                  status === 'success' ? 'text-sage' : status === 'error' ? 'text-red-500' : 'text-forest/50'
                }`}
              >
                {statusMessage}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-2.5 text-sm font-semibold bg-forest hover:bg-olive text-cream rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
