"use client"
import { ArrowLeft, Download } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const ResumeViewer = dynamic(() => import('@/components/ResumeViewer'), {
    ssr: false,
    loading: () => (
        <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] text-white/60">
            <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mb-4" />
            <p>Loading resume...</p>
        </div>
    ),
})

export default function ResumePage() {
    return (
        <main className="relative bg-gradient-to-b from-black via-slate-950 to-black min-h-screen flex flex-col">
            {/* Header Navigation */}
            <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <Link href="/">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <Image
                                    src="/Logo-White.svg"
                                    alt="Dinesh Logo"
                                    width={120}
                                    height={40}
                                    className="h-8 w-auto hover:opacity-80 transition-opacity"
                                />
                            </motion.div>
                        </Link>
                        <div className="flex items-center gap-4">
                            <Link
                                href="/"
                                className="flex items-center gap-2 px-4 py-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                            >
                                <ArrowLeft size={18} />
                                <span className="hidden sm:inline">Home</span>
                            </Link>
                            <a
                                href="/resume.pdf"
                                download
                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-500 hover:to-cyan-500 transition-all shadow-lg shadow-purple-500/20"
                            >
                                <Download size={18} />
                                <span className="hidden sm:inline">Download</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* PDF Viewer Container */}
            <ResumeViewer />
        </main>
    )
}