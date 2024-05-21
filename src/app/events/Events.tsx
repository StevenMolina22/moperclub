import ContentDarkWrapper from "@/components/layout/ContentDarkWrapper";
import { VerticalCardsGallery } from "@/components/compound/VerticalCardsGallery";
import { getAllItems } from "@/app/api/getReqNew.api";

import { InteractiveCardType } from "@/types/cards";


export default async function Events() {
  const data: InteractiveCardType[] = await getAllItems("/events/api/events/")
  const events = data.splice(0, 4);

  return (
    <ContentDarkWrapper
      title="Eventos para ti"
      subtitle="No te fallan"
      displayedComponent={<VerticalCardsGallery cardsContent={events} />}
    />

  );
}
