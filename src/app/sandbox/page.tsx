import { CardCarousel } from "@/components/compound/card-carousel";
import { InfiniteSlider } from "@/components/compound/infite-slider";
import { Card } from "@/types/cards";

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
      <CardCarousel cards={slides}/>
      <InfiniteSlider slides={slides} />
    </>
  );
}

export default SandboxPage;
