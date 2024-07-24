import ContentDarkWrapper from "@/components/layout/content-dark-wrapper";
import { VerticalCardsGallery } from "@/components/compound/vertical-cards-gallery";
import { supabase } from "@/db";
import { InteractiveCardType } from "@/types/cards";

export default async function Places() {
  const { data, error } = await supabase.from("place").select("*");
  const places = data as InteractiveCardType[];

  if (error) return null;

  return (
    <ContentDarkWrapper
      title="Places to go"
      subtitle="Just incredible"
    >
      <VerticalCardsGallery cardsContent={places} />
    </ContentDarkWrapper>
  );
}
