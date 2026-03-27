'use client'

import { motion } from 'framer-motion'
import { FaTimes, FaDownload, FaEye } from 'react-icons/fa'
import { useState } from 'react'

interface ResumePDFProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumePDF({ isOpen, onClose }: ResumePDFProps) {
  const [viewMode, setViewMode] = useState<'embed' | 'download'>('embed')

  if (!isOpen) return null

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-forest/80 backdrop-blur-sm z-40"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: -16 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div className="bg-olive border border-moss/20 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-moss/15">
            <div>
              <h2 className="text-lg font-semibold text-cream">Resume</h2>
              <p className="text-cream/40 text-sm mt-0.5">Monal Dasari — Web Developer</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-cream/5 rounded-md transition-colors text-cream/40 hover:text-cream"
            >
              <FaTimes size={18} />
            </button>
          </div>

          <div className="p-5 overflow-y-auto max-h-[calc(90vh-80px)]">
            <div className="flex gap-3 mb-5">
              <button
                onClick={() => setViewMode('embed')}
                className={`flex items-center gap-2 px-4 py-2 text-sm rounded-md font-medium transition-colors ${
                  viewMode === 'embed'
                    ? 'bg-sage text-forest'
                    : 'border border-moss/20 text-cream/60 hover:text-cream hover:border-moss/40'
                }`}
              >
                <FaEye size={13} /> View
              </button>
              <a
                href="/resume.pdf"
                download="Monal_Dasari_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-md font-medium border border-moss/20 text-cream/60 hover:text-cream hover:border-moss/40 transition-colors"
              >
                <FaDownload size={13} /> Download PDF
              </a>
            </div>

            {viewMode === 'embed' ? (
              <div className="rounded-lg overflow-hidden border border-moss/15">
                <iframe
                  src="/resume.pdf#zoom=100"
                  className="w-full h-[600px]"
                  title="Resume PDF"
                />
              </div>
            ) : (
              <div className="text-center py-12 text-cream/40 text-sm">
                Click &quot;Download PDF&quot; above to save the resume to your device.
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  )
}
