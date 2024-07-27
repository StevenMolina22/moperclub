import { InfiniteSlider } from "@/components/compound/infite-slider";
import { ArrowRightIcon } from "lucide-react";

const images = [
  {
    image: "https://images.unsplash.com/photo-1430232324554-8f4aebd06683",
    title: "Stadium",
  },
  {
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    title: "Celebration",
  },
  {
    image: "https://images.unsplash.com/photo-1543746746-46047c4f4bb0",
    title: "Beach Football",
  },
];

export const Featured = async () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          It&apos;ll exploit your mind
        </h2>
        <p className="mb-6 text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem quae quaerat dolorem animi, tenetur molestiae pariatur
          alias quibusdam modi accusantium?
          <a
            href="#"
            className="underli mx-2 inline-flex items-center justify-center rounded-lg text-center text-base font-medium text-orange-600 hover:text-orange-700 hover:underline focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900"
          >
            Mirar mas
            <ArrowRightIcon className="h-6 w-6" />
          </a>
        </p>
      </div>
      <InfiniteSlider slides={images} />
    </div>
  );
};
