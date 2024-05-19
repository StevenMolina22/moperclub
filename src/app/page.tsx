// Sections of the app page
import Hero from "../src/pages/Home/Hero";
import Banner from "@/components/layout/Banner";
import Featured from "./featured/FeaturedSection";
import Events from "./events/Events";
import PersonalMenu from "../src/pages/Home/PersonalMenu";
import Articles from "./articles/Articles";
import Footer from "../components/layout/Footer";
import Inspiration from "./(routes)/home/Inspiration";
import Places from "./places/Places";
import { FloatingSocialLinks } from "../src/components/Features/FloatingSocialLinks";

// main app
function Home() {
  const bgHeroImage: string =
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="flex flex-col gap-8">
      {/* <PopUpForm /> */}
      <Banner
        bgImage={bgHeroImage}
        titleText="MOPERCLUB"
        subtitleText="Experiencias Inolvidables"
      />
      <Featured />
      {/* <Events /> */}
      <Inspiration />
      {/* title text  */}
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
      {/* <Places /> */}
      {/* <Articles /> */}
      <PersonalMenu />
      <h2 className="my-6 text-center text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl">
        Ten mas informacion acerca de nosotros
      </h2>
      <Footer />
      {/* <FloatingSocialLinks /> */}
    </div>
  );
}

export default Home;
