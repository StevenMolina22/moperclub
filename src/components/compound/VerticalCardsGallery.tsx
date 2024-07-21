"use client";
// VerticalCardsGallery.tsx
import { InteractiveCardType } from "@/types/cards";
import { useEffect, useState } from "react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import InteractiveCard from "./InteractiveCard";

export const VerticalCardsGallery = ({
  cardsContent,
}: {
  cardsContent: InteractiveCardType[];
}) => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      handleResize(); // Set initial width
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  if (windowWidth === null) {
    return null; // Render nothing until window width is set
  }

  return windowWidth >= 768 ? (
    <div className="flex flex-wrap justify-center gap-2 p-8">
      {cardsContent.map((cardContent, index) => (
        <InteractiveCard key={index} cardInfo={cardContent} />
      ))}
    </div>
  ) : (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={0}
      pagination={{ clickable: true }}
      // centeredSlides={true}
      modules={[Pagination]}
      className="mt-5 bg-slate-900 p-3 "
    >
      {cardsContent.map((cardContent, index) => (
        <SwiperSlide key={index} className="flex rounded-xl justify-center">
          <InteractiveCard key={index} cardInfo={cardContent} className="mx-auto"/>
          {/* <div className="w-[300px] h-[600px] bg-gray-400"></div> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
