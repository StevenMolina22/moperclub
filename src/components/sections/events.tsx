import { VerticalCardsGallery } from "@/components/compound/cards-gallery";
import { ContentDarkWrapper } from "@/components/layout/dark-wrapper";
import { supabase } from "@/db";
import { Card } from "@/types/cards";
import { API_URL } from "@/utils/envs";

export async function Events() {
  const data = await fetch(API_URL + "/events");
  const events: Card[] = (await data.json()) ?? [];

  return (
    <ContentDarkWrapper
      title="Events you cannot lose"
      subtitle="Just incredible"
    >
      <VerticalCardsGallery cards={events} />
    </ContentDarkWrapper>
  );
}
