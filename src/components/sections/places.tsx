import { VerticalCardsGallery } from "@/components/compound/cards-gallery";
import { ContentDarkWrapper } from "@/components/layout/dark-wrapper";
import { supabase } from "@/db";
import { Card } from "@/types/cards";

export async function Places() {
  const { data, error } = await supabase.from("place").select("*");
  const places = data as Card[];

  if (error) return null;

  return (
    <ContentDarkWrapper
      title="Places to go"
      subtitle="Just incredible"
    >
      <VerticalCardsGallery cards={places} />
    </ContentDarkWrapper>
  );
}
