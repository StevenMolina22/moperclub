"use client";
import useWindowWidth from "@/hooks/useWindowWidth";
import { Card } from "@/types/cards";
// import "swiper/css/pagination";
import { CardCarousel } from "./card-carousel";
import { InteractiveCard } from "./interactive-card";


export function VerticalCardsGallery({ cards }: { cards: Card[] }) {
  const windowWidth = useWindowWidth();

  return windowWidth && windowWidth >= 768 ? (
    <div className="mx-auto grid w-fit grid-cols-2 items-center justify-center justify-items-center gap-5 p-8 xl:grid-cols-4 ">
      {cards.map((cardContent, index) => (
        <InteractiveCard key={index} card={cardContent} />
      ))}
    </div>
  ) : (
    <CardCarousel cards={cards} className="mx-auto py-8" />
  );
}
