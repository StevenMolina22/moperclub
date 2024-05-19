// "use client";
import Slider from "./Slider";
import getFeaturedItems from "./getFeaturedItems";

const Featured = async () => {
  const data = await getFeaturedItems();

  return <Slider items={data} />;
};

export default Featured;
