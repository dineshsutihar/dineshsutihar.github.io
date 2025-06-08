"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { SparklesIcon } from "lucide-react"
import { Project } from "@/data"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

import { Badge } from "@/components/ui/badge"
import { ProjectCard } from "../ProjectCard"

interface CarouselProps {
  items: Project[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
  setSelectedProject: (project: Project) => void
}

export const CardCarousel: React.FC<CarouselProps> = ({
  items,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
  setSelectedProject,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    /* height: 300px; */
    /* margin: 20px; */
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  `
  return (
    <section className="w-ace-y-4 ">
      <style>{css}</style>
      <div className="mx-auto w-full rounded-[24px] border border-slate-700/5 p-2 shadow-sm md:rounded-t-[44px]">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-slate-800/5 bg-neutral-800/5 p-2 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">
          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                spaceBetween={50}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {items.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="size-full rounded-3xl">
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        onClick={() => setSelectedProject(project)}
                      />
                    </div>
                  </SwiperSlide>
                ))}
                {items.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="size-full rounded-3xl">
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        onClick={() => setSelectedProject(project)}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
