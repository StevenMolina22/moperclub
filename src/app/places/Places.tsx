import ContentDarkWrapper from "../../components/layout/ContentDarkWrapper";
import { VerticalCardsGallery } from "../../components/compound/VerticalCardsGallery";

import usePlaces from "./usePlaces";

export default function Places() {
  const endpoint: string = "/places/api/places/";
  const { places } = usePlaces(endpoint);

  return (
    <ContentDarkWrapper
      title="Lugares para visitar"
      displayedComponent={<VerticalCardsGallery cardsContent={places} />}
    />
  );
}
