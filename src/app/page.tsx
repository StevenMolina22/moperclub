// Sections of the app page
import { Hero } from "@/components/layout/Hero";
import Footer from "../components/layout/Footer";
import Articles from "../features/articles/Articles";
import Events from "../features/events/Events";
import Featured from "../features/featured/FeaturedSection";
import Places from "../features/places/Places";
import InspirationPage from "./(routes)/home/Inspiration";
import PersonalMenu from "./(routes)/home/PersonalMenu";

// main app
function Home() {

  return (
    <div className="flex flex-col gap-8">
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
      <Places />
      <Articles />
      <PersonalMenu />
      <h2 className="my-6 text-center text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl">
        Ten mas informacion acerca de nosotros
      </h2>
      <Footer />
    </div>
  );
}

export default Home;
