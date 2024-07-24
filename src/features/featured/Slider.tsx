"use client";
import MoreButton from "./InfoDropdown"; // dropdown button more info
import { Swiper, SwiperSlide } from "swiper/react"; // slider components
import "swiper/css"; // style for sliders
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import useWindowWidth from "./useWindowWidth";

// --Type definition for the api data (to be used in the item state definition)
type ItemType = {
  id: number;
  name: string;
  description: string;
  address: string;
  image: string;
};

interface Props {
  items: ItemType[];
}

// --- main component
const SliderComponent = ({ items }: Props) => {
  const { windowWidth, setWindowWidth } = useWindowWidth(); // window width hook

  if (windowWidth === null) {
    return null; // Render nothing or a loader until windowWidth is available
  }

  return (
    // wrapper for the content
    <div className="mt-9">
      {/* title text and message */}
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

      {/* slider itself */}
      <Swiper
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={windowWidth > 768 ? 1.5 : 1.2} // view device settings
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/* slides: items of the slider */}
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              style={{ backgroundImage: `url(${item.image})` }}
              className="h-[380px] rounded-2xl bg-cover bg-center object-fill p-2 lg:h-[670px]"
            >
              {" "}
              {/* dropdown info menu */}
              <MoreButton
                id={index}
                title={item.name}
                description={item.description}
                address={item.address}
              />
            </div>
          </SwiperSlide>
        ))}

        {/* extra slides if backend not active */}
        <SwiperSlide>
          <Image
            height={1080}
            width={1920}
            className="h-[380px] w-auto rounded-2xl lg:h-[670px]"
            src="https://images.unsplash.com/photo-1543746746-46047c4f4bb0"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={1080}
            width={1920}
            className="h-[380px] w-auto rounded-2xl lg:h-[670px]"
            src="https://images.unsplash.com/photo-1430232324554-8f4aebd06683"
            alt="z"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={1080}
            width={1920}
            className="h-[380px] w-auto rounded-2xl lg:h-[670px]"
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
            alt="z"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderComponent;
