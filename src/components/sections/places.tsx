import { VerticalCardsGallery } from "@/components/compound/cards-gallery";
import { ContentDarkWrapper } from "@/components/layout/dark-wrapper";
import { places } from "@/data/places";
// import { Card } from "@/types/cards";
// import { API_URL } from "@/utils/envs";

export async function Places() {
  // const places: Card[] = await fetch(API_URL + "/places")
  //   .then((response) => response.json())
  //   .catch(() => []);

  return (
    <ContentDarkWrapper title="Places to go" subtitle="Just incredible">
      <VerticalCardsGallery cards={places.slice(0, 4)} />
    </ContentDarkWrapper>
  );
}
