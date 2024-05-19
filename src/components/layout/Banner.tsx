// styles
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
    backgroundImage: `url(${bgImage})`
  };
  // returned component
  return (
    <>
      {/* Home/Banner section wrapper*/}
      <section className="home-page h-screen" style={bgImageStyle}>
        <div className="banner__img-overlay w-full h-screen absolute bg-black/60"></div>
        {/* Navbar component*/}
        <Navbar />
        {/* Baner centered elements/ Call to action */}
        <div className="fluid-container banner flex justify-center items-center w-full h-screen ">
          <div className="banner__border"></div>
          <div className="text__container banner__text z-10 -translate-y-12">
            <h2 className="banner__h2 tracking-tight text-8xl text-white">{titleText}</h2>
            <h4 className="banner__h4 text-center text-4xl text-white">{subtitleText}</h4>
          </div>
        </div>
      </section>
    </>
  );
}
