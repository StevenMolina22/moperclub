import { create } from "zustand";

type CardType = {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
};

type CardStoreType = {
  card: CardType;
  setCard: (card: CardType) => void;
};

export const useCardStore = create<CardStoreType>((set) => ({
  card: {
    id: 1,
    title: "Card Title 1",
    description: "Card Description 1",
    link: "https://www.google.com",
    image: "https://via.placeholder.com/150",
  },
  setCard: (card: CardType) => {
    set({ card });
  }
}))