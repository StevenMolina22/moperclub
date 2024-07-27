import { cn } from "@/lib/utils";
import { Card as Card } from "@/types/cards";
import "./styles.css"

type Props = {
  card: Card;
  className?: string;
};

export function InteractiveCard({ card: cardInfo, className }: Props) {
  return (
    <div
      className={cn(
        "interactive-card group h-[560px] w-[300px] rounded-xl bg-cover bg-center transition duration-1000 group-hover:shadow-red-500 lg:h-[600px] lg:w-[320px]",
        className,
      )}
      style={{ backgroundImage: `url(${cardInfo.image})` }}
    >
      <div className="flex h-[100%] w-[100%] flex-col justify-end rounded-xl px-6 py-10 group-hover:bg-red-950 group-hover:bg-opacity-70 group-hover:shadow-red-950 md:px-3 md:py-5">
        <h2 className="hidden text-xl text-slate-50 group-hover:block lg:text-2xl">
          {cardInfo.title} Title
        </h2>
        <p className="duration-2000 hidden text-base text-slate-100 opacity-0 transition-opacity group-hover:block group-hover:opacity-100 lg:text-lg">
          {cardInfo.description}
        </p>
      </div>
    </div>
  );
};