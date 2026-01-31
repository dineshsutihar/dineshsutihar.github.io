"use client"
import { ArrowLeft, Download, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useCallback, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { motion, AnimatePresence } from 'framer-motion'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

export default function ResumePage() {
    const [numPages, setNumPages] = useState<number>(0)
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [scale, setScale] = useState<number>(1.2)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false)
    const [containerWidth, setContainerWidth] = useState<number>(800)

    // Handle responsive width
    useEffect(() => {
        const updateWidth = () => {
            const width = window.innerWidth
            if (width < 640) {
                setContainerWidth(width - 40)
                setScale(0.8)
            } else if (width < 1024) {
                setContainerWidth(Math.min(700, width - 80))
                setScale(1)
            } else {
                setContainerWidth(800)
                setScale(1.2)
            }
        }
        updateWidth()
        window.addEventListener('resize', updateWidth)
        return () => window.removeEventListener('resize', updateWidth)
    }, [])

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                goToPrevPage()
            } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                goToNextPage()
            } else if (e.key === '+' || e.key === '=') {
                handleZoomIn()
            } else if (e.key === '-') {
                handleZoomOut()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [numPages, pageNumber])

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages)
        setIsLoading(false)
    }

    const goToPrevPage = () => setPageNumber(prev => Math.max(prev - 1, 1))
    const goToNextPage = () => setPageNumber(prev => Math.min(prev + 1, numPages))

    const handleZoomIn = useCallback(() => setScale(prev => Math.min(prev + 0.2, 2.5)), [])
    const handleZoomOut = useCallback(() => setScale(prev => Math.max(prev - 0.2, 0.5)), [])

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen()
            setIsFullscreen(true)
        } else {
            document.exitFullscreen()
            setIsFullscreen(false)
        }
    }

    // Redact sensitive information from PDF text layer
    const redactedTexts = ['7496005179']

    useEffect(() => {
        const redactSensitiveInfo = () => {
            const textLayerSpans = document.querySelectorAll('.react-pdf__Page__textContent span')
            textLayerSpans.forEach((span) => {
                const text = span.textContent || ''
                redactedTexts.forEach((redactedText) => {
                    if (text.toLowerCase().includes(redactedText.toLowerCase())) {
                        const element = span as HTMLElement
                        element.style.backgroundColor = '#000'
                        element.style.color = '#000'
                        element.style.borderRadius = '2px'
                        element.style.userSelect = 'none'
                    }
                })
            })
        }

        // Run after PDF renders
        const timer = setTimeout(redactSensitiveInfo, 500)
        return () => clearTimeout(timer)
    }, [pageNumber, scale, isLoading])

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
            <div className="flex-1 flex flex-col items-center px-4 py-8 pb-24">
                {/* Floating Controls Bar - Fixed at Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none"
                >
                    <div className="flex items-center gap-2 sm:gap-4 bg-black/80 backdrop-blur-xl rounded-2xl p-2 sm:p-3 border border-white/10 shadow-2xl pointer-events-auto">
                        {/* Page Navigation */}
                        <div className="flex items-center gap-1 sm:gap-2">
                            <button
                                onClick={goToPrevPage}
                                disabled={pageNumber <= 1}
                                className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                aria-label="Previous page"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <span className="text-white/80 text-sm font-medium min-w-[80px] text-center">
                                {pageNumber} / {numPages || '...'}
                            </span>
                            <button
                                onClick={goToNextPage}
                                disabled={pageNumber >= numPages}
                                className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                aria-label="Next page"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="w-px h-6 bg-white/20 hidden sm:block" />

                        {/* Zoom Controls */}
                        <div className="flex items-center gap-1 sm:gap-2">
                            <button
                                onClick={handleZoomOut}
                                disabled={scale <= 0.5}
                                className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                aria-label="Zoom out"
                            >
                                <ZoomOut size={20} />
                            </button>
                            <span className="text-white/80 text-sm font-medium min-w-[50px] text-center">
                                {Math.round(scale * 100)}%
                            </span>
                            <button
                                onClick={handleZoomIn}
                                disabled={scale >= 2.5}
                                className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                aria-label="Zoom in"
                            >
                                <ZoomIn size={20} />
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="w-px h-6 bg-white/20 hidden sm:block" />

                        {/* Fullscreen Toggle */}
                        <button
                            onClick={toggleFullscreen}
                            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all hidden sm:block"
                            aria-label="Toggle fullscreen"
                        >
                            {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
                        </button>
                    </div>
                </motion.div>

                {/* PDF Document */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="relative"
                >
                    {/* Loading State */}
                    <AnimatePresence>
                        {isLoading && (
                            <motion.div
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-2xl z-10"
                            >
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
                                    <p className="text-white/60 text-sm">Loading resume...</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <Document
                        file="/resume.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={null}
                        className="flex justify-center"
                    >
                        <Page
                            pageNumber={pageNumber}
                            scale={scale}
                            width={containerWidth}
                            className="shadow-2xl rounded-lg overflow-hidden"
                            renderTextLayer={true}
                            renderAnnotationLayer={true}
                        />
                    </Document>
                </motion.div>
            </div>
        </main>
    )
}