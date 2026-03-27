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
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-slate-700/50">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700/30 bg-slate-800/50">
            <div>
              <h2 className="text-2xl font-bold text-white">My Resume</h2>
              <p className="text-slate-400 text-sm mt-1">Monal Dasari - Web Developer</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-300 hover:text-white"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            {/* View Mode Selector */}
            <div className="flex gap-4 mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('embed')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                  viewMode === 'embed'
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                <FaEye /> View
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download="Monal_Dasari_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/30"
              >
                <FaDownload /> Download PDF
              </motion.a>
            </div>

            {/* Resume Preview/Embed */}
            {viewMode === 'embed' ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg overflow-hidden"
              >
                <iframe
                  src="/resume.pdf#zoom=100"
                  className="w-full h-[600px] rounded-lg"
                  title="Resume PDF"
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center py-12"
              >
                <div className="inline-block p-8 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl border border-green-500/30">
                  <FaDownload className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <p className="text-slate-300 mb-4">Click the Download button above to get my resume</p>
                  <p className="text-slate-400 text-sm">The PDF will be saved to your device</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  )
}
