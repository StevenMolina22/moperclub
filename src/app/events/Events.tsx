// "use client";
import ContentDarkWrapper from "@/components/layout/ContentDarkWrapper";
import { VerticalCardsGallery } from "@/components/compound/VerticalCardsGallery";
import { getAllItems } from "@/app/api/getReqNew.api";

// import useEvents from "./useEvents";
// import { getAllItems } from "../api/getReq.api";
// import { ItemType } from "../featured/useItemsFetch";

import { InteractiveCardType } from "@/types/cards";


export default async function Events() {
  const data = await getAllItems<InteractiveCardType[]>("/events/api/events/")
  const events = data.splice(0, 4);

  return (
    <ContentDarkWrapper
      title="Eventos para ti"
      subtitle="No te fallan"
      displayedComponent={<VerticalCardsGallery cardsContent={events} />}
    />
  );
}
