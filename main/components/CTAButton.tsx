"use client"
import Lottie from "react-lottie";
import { useCallback, useEffect, useState } from "react";
import animationData from '@/data/confetti.json'
import { IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";
import { Mail } from "lucide-react";

export const CTAButton = () => {
    const [copied, setCopied] = useState(false)
    const handleCopy = useCallback(() => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('dineshsutihar9@gmail.com').then(() => {
                setCopied(true);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        } else {
            const textArea = document.createElement("textarea");
            textArea.value = 'dineshsutihar9@gmail.com';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                setCopied(true);
            } catch (err) {
                console.error('Failed to copy using execCommand: ', err);
            }
            document.body.removeChild(textArea);
        }
    }, [])

    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false)
            }, 2000)
        }
    }, [copied])

    return (
        <div className="relative flex items-center justify-center w-full h-full bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(139,92,246,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.1),transparent_50%)]" />
            </div>

            {/* Confetti animation */}
            <div className="absolute -bottom-5 right-0 pointer-events-none">
                <Lottie options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                        preserveAspectRatio: 'XMidYMid slice',
                    }
                }} />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-4 p-6">
                {/* Icon */}
                <div className="p-3 rounded-full bg-purple/10 border border-purple/20">
                    <Mail className="w-6 h-6 text-purple" />
                </div>

                {/* Text */}
                <div className="text-center">
                    <h4 className="text-white font-semibold text-lg mb-1">Let&apos;s Connect</h4>
                    <p className="text-gray-400 text-sm">Click to copy my email</p>
                </div>

                {/* Button */}
                <button
                    onClick={handleCopy}
                    className={`group flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${copied
                            ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-400"
                            : "bg-purple/10 border border-purple/30 text-purple hover:bg-purple/20 hover:border-purple/50"
                        }`}
                >
                    {copied ? (
                        <>
                            <IoCheckmarkOutline className="w-4 h-4" />
                            <span className="font-medium text-sm">Email Copied!</span>
                        </>
                    ) : (
                        <>
                            <IoCopyOutline className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span className="font-medium text-sm">Copy Email</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}