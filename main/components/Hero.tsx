import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { BackgroundBeamsWithCollision } from './ui/BackgroundBeamsWithCollision'

const Hero = () => {
    return (
        <>
            <BackgroundBeamsWithCollision>
                <span></span>
            </BackgroundBeamsWithCollision>
            <div className='pb-20 pt-48 h-[90vh] mb-16'>
                <div>
                    <Spotlight className='top-10 left-full h-[80vh] w-[50vw] ' fill='purple' />
                    <Spotlight className='top-28 left-80  h-[80vh] w-[50vw]' fill='blue' />
                </div>
                <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                </div>
                <div className='flex justify-center relative my-2 lg:my-10 z-10'>
                    <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                        <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Elevating Ideas into Reality</h2>
                        <TextGenerateEffect className='text-center text-[35px] md:text-5xl lg:text-[55px]' words='Crafting Digital Solutions with a Human Touch' />
                        <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                            Hi, I&apos;m Dinesh Sutihar, a Software Developer & Designer Passionate About Building the Future.
                        </p>
                        <a href="#about">
                            <MagicButton
                                title="Explore My Creations"
                                icon={<FaLocationArrow />}
                                position='right'
                            />
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero;