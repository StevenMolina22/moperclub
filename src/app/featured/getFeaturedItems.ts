import { getAllItems } from "../api/getReqNew.api";

export interface ItemType {
  id: number;
  name: string;
  description: string;
  address: string;
  image: string;
  is_featured: boolean;
}

const getFeaturedItems = async () => {
  const endpoints = [
    "/establishments/api/establishments/",
    "/events/api/events/",
    "/places/api/places/",
  ];
  try {
    const responses = await Promise.all(
      endpoints.map((server) => getAllItems<ItemType[]>(server)),
    );

    const mergedData: ItemType[] = responses.flatMap((response) => response);

    const featuredItems = mergedData.filter((item) => item.is_featured);

    return featuredItems;
  } catch (error) {
    console.error("Error loading items:", error);
    throw error; // Rethrow the error for further handling
  }
};

export default getFeaturedItems;
