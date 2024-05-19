"use client";
import ContentDarkWrapper from "../../components/layout/ContentDarkWrapper";
import { VerticalCardsGallery } from "../../components/compound/VerticalCardsGallery";

import useEvents from "./useEvents";

export default function Events() {
  const endpoint = "/events/api/events/";
  const { events } = useEvents(endpoint);

  return (
    <ContentDarkWrapper
      title="Eventos para ti"
      subtitle="No te fallan"
      displayedComponent={<VerticalCardsGallery cardsContent={events} />}
    />
  );
}
