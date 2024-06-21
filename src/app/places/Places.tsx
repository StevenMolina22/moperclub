import ContentDarkWrapper from "@/components/layout/ContentDarkWrapper";
import { VerticalCardsGallery } from "@/components/compound/VerticalCardsGallery";
// import { getAllItems } from "@/app/api/getReqNew.api";
// import { InteractiveCardType } from "@/types/cards";

// import usePlaces from "./usePlaces";

export default async function Places() {
  // const data = await getAllItems<InteractiveCardType[]>("/places/api/places/");
  // const places = data.splice(0, 4);

  return (
    <ContentDarkWrapper
      title="Lugares para visitar"
      displayedComponent={<div></div>}
    />
  );
}
