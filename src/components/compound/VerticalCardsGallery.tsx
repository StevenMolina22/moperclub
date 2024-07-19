"use client";
// VerticalCardsGallery.tsx
import InteractiveCard from "./InteractiveCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import useWindowWidth from "../../hooks/useWindowWidth";
import { InteractiveCardType } from "@/types/cards";
import { useEffect, useState } from "react";

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

  return (
    <>
      {windowWidth >= 768 ? (
        <div className="flex flex-wrap justify-center gap-2 p-8">
          {cardsContent.map((cardContent, index) => (
            <InteractiveCard key={index} cardInfo={cardContent} />
          ))}
        </div>
      ) : (
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{ clickable: true }}
          centeredSlides={true}
          modules={[Pagination]}
          className="mySwiper mt-5 bg-slate-900 p-3"
        >
          {cardsContent.map((cardContent, index) => (
            <SwiperSlide key={index} className="w-fit rounded-xl bg-slate-300">
              <InteractiveCard key={index} cardInfo={cardContent} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
