import { VerticalCardsGallery } from "@/components/compound/cards-gallery";
import { ContentDarkWrapper } from "@/components/layout/dark-wrapper";
import { Card } from "@/types/cards";
import { API_URL } from "@/utils/envs";

export async function Events() {
  const events: Card[] = await fetch(API_URL + "/events")
    .then((response) => response.json())
    .catch(() => []);

  return (
    <ContentDarkWrapper
      title="Events you cannot lose"
      subtitle="Just incredible"
    >
      <VerticalCardsGallery cards={events} />
    </ContentDarkWrapper>
  );
}
