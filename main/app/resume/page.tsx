"use client"
import { ArrowLeft, Download, ZoomIn, ZoomOut } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Component() {
    const [zoom, setZoom] = useState(100)

    const handleZoomIn = () => setZoom(prev => Math.min(prev + 10, 200))
    const handleZoomOut = () => setZoom(prev => Math.max(prev - 10, 50))

    return (
        <main className="relative bg-black min-h-screen flex flex-col mx-auto sm:px-10 px-5 overflow-hidden">
            <nav className="bg-black text-white py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="text-xl font-bold">Dinesh</div>
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="flex items-center text-white hover:text-gray-300">
                            <ArrowLeft className="mr-1" size={20} />
                            Home
                        </Link>
                        <a
                            href="/resume.pdf"
                            download
                            className="flex items-center text-white hover:text-gray-300"
                        >
                            <Download className="mr-1" size={20} />
                            Download
                        </a>
                    </div>
                </div>
            </nav>

            <div className="flex w-full justify-center mt-8 relative">
                <div className="absolute top-2 right-2 flex space-x-2 bg-black bg-opacity-50 rounded-md p-1 z-10">
                    <button
                        onClick={handleZoomIn}
                        className="p-1 text-white hover:bg-gray-800 rounded"
                        aria-label="Zoom in"
                    >
                        <ZoomIn size={20} />
                    </button>
                    <button
                        onClick={handleZoomOut}
                        className="p-1 text-white hover:bg-gray-800 rounded"
                        aria-label="Zoom out"
                    >
                        <ZoomOut size={20} />
                    </button>
                </div>
                <div className="w-full sm:w-[55%] overflow-hidden">
                    <iframe
                        src="/resume.pdf#toolbar=0"
                        // type="application/pdf"
                        className="w-full h-screen border-0 m-0 p-0 rounded-2xl overflow-hidden bg-transparent"
                        style={{
                            transform: `scale(${zoom / 100})`,
                            transformOrigin: 'top left',
                        }}
                    />
                </div>
            </div>
        </main>
    )
}