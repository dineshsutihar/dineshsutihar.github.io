"use client";
import { useEffect, useRef } from "react";

const Stars = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const generateStars = () => {
            if (!ref.current) return;

            ref.current.innerHTML = '';

            const count = 100;
            for (let i = 0; i < count; i++) {
                const star = document.createElement('div');
                star.className = 'absolute rounded-full bg-white opacity-50';
                const size = Math.random() * 2 + 0.5;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;

                const duration = Math.random() * 4 + 2;
                const delay = Math.random() * 3;
                star.style.animation = `twinkle ${duration}s linear infinite ${delay}s`;

                ref.current.appendChild(star);
            }
        };

        generateStars();

        const handleResize = () => generateStars();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div ref={ref} className="absolute inset-0" />
            <style jsx>{`
                @keyframes twinkle {
                    0%, 100% { opacity: 0.2; transform: scale(0.8); }
                    50% { opacity: 0.8; transform: scale(1.2); }
                }
            `}</style>
        </>
    );
};

export default Stars;