import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  images: string[];
  className?: string;
};

export function ProductCarousel({images, className}: Props) {
  const image = "https://images.unsplash.com/photo-1721925376073-4d2c53dd12f2"
  return (
    <Carousel className={cn("w-full", className)}>
      <CarouselContent>
        {images.map((image, i) => (
          <CarouselItem key={i}>
          <Image
            width={360}
            height={540}
            src={image}
            className="rounded-lg"
            alt="Product Image"
            loading="lazy"
          />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
