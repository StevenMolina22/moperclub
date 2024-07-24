import { Hero } from "@/app/home/hero";
import Events from "./home/events";
import Featured from "./home/featured/featured-section";
import Places from "./home/places";
import InspirationPage from "./home/Inspiration";
import PersonalMenu from "./home/personal-menu";
import { SectionCTA } from "./home/section-name";

function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <Featured />
      <InspirationPage />
      <div className=" text-center">
        <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Disfruta de verdad con{" "}
          <span className="text-orange-600">el #1 de Argentina</span> BS.
        </h2>
        <p className="mx-auto w-[70%] text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quam
          voluptatem itaque aliquam qui ducimus molestiae reiciendis perferendis
          optio autem.
        </p>
      </div>
      <Events />
      <SectionCTA />
      <Places />
      {/* <Articles /> */}
      <PersonalMenu />
    </div>
  );
}

export default Home;
