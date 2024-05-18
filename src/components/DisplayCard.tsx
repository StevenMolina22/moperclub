"use client";
import { useCardStore } from "../cardContextZustand";

const DisplayCard = () => {
  const { card } = useCardStore();
  return (
    <div>
      <h1 className="">{card.title}</h1>
      <h1 className="text-4xl font-bold text-gray-800">{card.title}</h1>
      <p className="text-lg font-light text-gray-600">{card.description}</p>
      <a
        className="text-blue-500 transition duration-200 hover:text-blue-800"
        href={card.link}
      >
        Link
      </a>{" "}
      {/* <Image height={300} width={300} src={card.image} alt={card.title} /> */}
    </div>
  );
};

export default DisplayCard;
