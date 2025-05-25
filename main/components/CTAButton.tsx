"use client"
import { BackgroundGradientAnimation } from "./ui/GradientBg";
import Lottie from "react-lottie";
import { useCallback, useEffect, useState } from "react";
import animationData from '@/data/confetti.json'
import MagicButton from "./ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";
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
        <div className="relative flex items-center justify-center w-full h-full border border-slate-700/50 rounded-3xl overflow-hidden">
            <div >
                <BackgroundGradientAnimation>
                </BackgroundGradientAnimation>
            </div>
            <div className="absolute -bottom-5 right-0">
                <Lottie options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                        preserveAspectRatio: 'XMidYMid slice',
                    }
                }} />
            </div>
            <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
            />
        </div>
    );
}