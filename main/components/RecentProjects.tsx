import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaGithub, FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
    return (
        <div className='py-20' id='projects'>
            <h1 className="heading">
                A Small selection of {' '}
                <span className='text-purple'>recent projects</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
                {projects.map(({ id, title, des, img, iconLists, link, code }) => (
                    <div key={id} className='sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                        <PinContainer title={link} href={link}>
                            <div className='relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] mb-10'>
                                <div className='relative w-full h-full overflow-hidden  lg:rounded-3xl bg-[#13162d]'>
                                    <img src="/bg.png" alt="bg-img" />
                                </div>
                                <img src={img} alt={title} className='z-10 absolute w-[90%] h-[90%] rounded-xl  rotate-1 bottom-0' />
                            </div>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 flex gap-2'>
                                {title}
                                <a href={link} target='_blank' className='flex underline underline-offset-4 justify-center items-center hover:cursor-pointer border p-1 rounded-md'>
                                    <p className='flex lg:text-xl md:text-xs text-sm text-blue-300 hover:text-blue-400'>View</p>
                                    <FaLocationArrow className='ms-2 hover:text-blue-400' color=' #93c5fd' />

                                </a>
                            </h1>
                            <p className='lg:text-lg lg:font-normal font-light text-sm line-clamp-3'>{des}</p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {iconLists.map((icon, index) => (
                                        <div key={index} className='border border-white/[0.2] rounded-full bg-black hover:bg-black-200 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                                            {icon}
                                        </div>
                                    ))}
                                </div>
                                <a href={code} target='_blank' className='flex justify-center items-center hover:cursor-pointer '>
                                    <FaGithub className='me-2' color='#cbacf9' />
                                    <p className='flex lg:text-xl md:text-xs text-sm text-purple hover:text-blue-400'>Code</p>

                                </a>
                            </div>
                        </PinContainer>
                    </div>
                ))
                }
            </div >
        </div >
    )
}

export default RecentProjects