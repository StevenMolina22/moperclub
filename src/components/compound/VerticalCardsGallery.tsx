"use client";
// VerticalCardsGallery.tsx
import InteractiveCard from "./InteractiveCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import useWindowWidth from "../../hooks/useWindowWidth";
import { InteractiveCardType } from "@/types/cards";


export const VerticalCardsGallery = ({
  cardsContent,
}: {
  cardsContent: InteractiveCardType[];
}) => {
  const windowWidth = useWindowWidth();

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
