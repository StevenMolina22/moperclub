import ContentDarkWrapper from "@/components/layout/ContentDarkWrapper";
import { VerticalCardsGallery } from "@/components/compound/VerticalCardsGallery";
import { supabase } from "@/db/db";
import { InteractiveCardType } from "@/types/cards";

export default async function Places() {
  const { data, error } = await supabase.from("place").select("*");
  const places = data as InteractiveCardType[];

  return (
    <ContentDarkWrapper
      title="Lugares para visitar"
      displayedComponent={<div></div>}
    >
      <VerticalCardsGallery cardsContent={places} />
    </ContentDarkWrapper>
  );
}
