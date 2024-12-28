import { VerticalCardsGallery } from "@/components/compound/cards-gallery";
import { ContentDarkWrapper } from "@/components/layout/dark-wrapper";
import { supabase } from "@/db";
import { Card } from "@/types/cards";
import { API_URL } from "@/utils/envs";

export async function Places() {
  const data = await fetch(API_URL + "/places");
  const places: Card[] = (await data.json()) ?? [];

  return (
    <ContentDarkWrapper title="Places to go" subtitle="Just incredible">
      <VerticalCardsGallery cards={places} />
    </ContentDarkWrapper>
  );
}
