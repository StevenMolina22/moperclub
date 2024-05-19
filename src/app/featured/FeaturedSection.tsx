"use client";
import Slider from "./Slider";
import useItemsFetch, { ItemType } from "./useItemsFetch";
import { useState, useEffect } from "react";

const Featured: React.FC = () => {
  const [itemsAlt, setItemsAlt] = useState<ItemType[]>([]);
  const fetchItems = useItemsFetch();

  useEffect(() => {
    const loadItemsAlt = async () => {
      try {
        const featuredItems = await fetchItems();
        setItemsAlt(featuredItems);
      } catch (error) {
        // Handle error
        console.error("Error loading featured items:", error);
      }
    };

    loadItemsAlt();
  }, [fetchItems]);

  return <Slider items={itemsAlt} />;
};

export default Featured;
