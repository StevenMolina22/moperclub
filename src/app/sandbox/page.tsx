import { CardCarousel } from "@/components/compound/card-carousel";
import { InfiniteSlider } from "@/components/compound/infite-slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card } from "@/types/cards";
import { Bold, Italic, Underline } from "lucide-react";

export async function generateMetadata() {
  return { title: "Sandbox" };
}

const slides: Card[] = [
  {
    image: "https://images.unsplash.com/photo-1430232324554-8f4aebd06683",
    title: "Stadium",
    description: "",
  },
  {
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    title: "Celebration",
    description: "",
  },
  {
    image: "https://images.unsplash.com/photo-1543746746-46047c4f4bb0",
    title: "Beach Football",
    description: " ",
  },
];

function SandboxPage() {
  return (
    <>
      <CardCarousel cards={slides} />
      <InfiniteSlider slides={slides} />
      <div>Product below</div>
      <ToggleGroup className="" type="single">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          S
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          M
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          L
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup className="dark" type="single">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <span className="rounded-lg border border-foreground p-4 accent-red-700">
            S--
          </span>
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </>
  );
}

export default SandboxPage;
