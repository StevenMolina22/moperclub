// styles
import CustomNavbar from "./CustomNavbar";
import Navbar from "./Navbar";

// banner components types definition
interface Props {
  bgImage: string;
  titleText: string;
  subtitleText: string;
}

export default function Banner({ bgImage, titleText, subtitleText }: Props) {
  // Banner Hero background image
  const bgImageStyle = {
    backgroundImage: `url(${bgImage})`,
  };
  // returned component
  return (
    <section className="home-page h-screen" style={bgImageStyle}>
      <div className="banner__img-overlay absolute h-screen w-full bg-black/60"></div>
      {/* Navbar component*/}
      <CustomNavbar />
      {/* Baner centered elements/ Call to action */}
      <div className="fluid-container banner flex h-screen w-full items-center justify-center ">
        <div className="banner__border"></div>
        <div className="text__container banner__text z-10 -translate-y-12">
          <h2 className="banner__h2 text-8xl tracking-tight text-white">
            {titleText}
          </h2>
          <h4 className="banner__h4 text-center text-4xl text-white">
            {subtitleText}
          </h4>
        </div>
      </div>
    </section>
  );
}
