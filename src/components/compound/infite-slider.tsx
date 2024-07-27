"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type Slide = {
  image: string;
  title?: string;
  description?: string;
};

export function InfiniteSlider({ slides }: { slides: Slide[] }) {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full slider-main"
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="md:basis-3/4 lg:basis-2/3">
            <div className="p-1">
              <SlideItem key={index} slide={slide} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

function SlideItem({ slide }: { slide: Slide }) {
  return (
    <Image
      className="rounded-xl aspect-video h-[400px] md:h-[500px] lg:h-[650px] bg-cover bg-no-repeat bg-center"
      src={slide.image}
      alt={slide.title || ""}
      width={1920}
      height={1080}
    />
  );
}
