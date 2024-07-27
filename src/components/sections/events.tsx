import { VerticalCardsGallery } from "@/components/compound/cards-gallery";
import { ContentDarkWrapper } from "@/components/layout/dark-wrapper";
import { supabase } from "@/db";
import { Card } from "@/types/cards";

export async function Events() {
  const { data: events, error } = (await supabase.from("event").select("*")) as {
    data: Card[];
    error: any;
  };
  if (error) return null;

  return (
    <ContentDarkWrapper
      title="Events you cannot lose"
      subtitle="Just incredible"
    >
      <VerticalCardsGallery cards={events} />
    </ContentDarkWrapper>
  );
}
