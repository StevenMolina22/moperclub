import { VerticalCardsGallery } from "@/components/compound/vertical-cards-gallery";
import ContentDarkWrapper from "@/components/layout/content-dark-wrapper";
import { supabase } from "@/db";

import { InteractiveCardType } from "@/types/cards";

export default async function Events() {
  const { data: events, error } = (await supabase.from("event").select("*")) as {
    data: InteractiveCardType[];
    error: any;
  };
  if (error) return null;

  return (
    <ContentDarkWrapper
      title="Events you cannot lose"
      subtitle="Just incredible"
    >
      <VerticalCardsGallery cardsContent={events} />
    </ContentDarkWrapper>
  );
}
