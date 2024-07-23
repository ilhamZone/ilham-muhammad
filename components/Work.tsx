"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "./SectionTitle";
import { projectData } from "@/utils/data";
import CardProject from "./CardProject";

const Work = () => {
  return (
    <section className="relative mt-36">
      <div className="container">
        <div className="max-w-[400px] mx-auto lg:mx-0 text-center lg:text-left mb-12 lg:h-[380px] flex flex-col justify-center items-center lg:items-start">
          <SectionTitle text="Latest Projects" className="lg:text-left" />
          <p className="subtitle mb-6 mt-2">
            The are my latest projects for different platforms
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        <div className="lg:max-w-[840px] h-[450px] lg:absolute right-8 top-0 flex items-start lg:items-center">
          <Swiper
            className="h-[350px]"
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={24}
          >
            {projectData.slice(0, 4).map((project, index) => (
              <SwiperSlide key={index}>
                <CardProject {...project} className="h-[85%]" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Work;
