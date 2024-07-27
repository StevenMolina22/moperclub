import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Card } from "@/types/cards";
import { InteractiveCard } from "./interactive-card";

export function CardCarousel({ cards, className }: { cards: Card[], className?: string }) {
  return (
    <Carousel className={cn("w-full max-w-xs", className)}>
      <CarouselContent>
        {cards.map((card, i) => (
          <CarouselItem key={i}>
            <div className="p-1">
              <InteractiveCard card={card} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
