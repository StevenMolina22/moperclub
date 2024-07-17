import { VerticalCardsGallery } from "@/components/compound/VerticalCardsGallery";
import ContentDarkWrapper from "@/components/layout/ContentDarkWrapper";
import { supabase } from "@/db/db";

import { InteractiveCardType } from "@/types/cards";

export default async function Events() {
  // const events = data.splice(0, 4);
  const { data, error } = (await supabase.from("event").select("*")) as {
    data: InteractiveCardType[];
    error: any;
  };

  return (
    <ContentDarkWrapper
      title="Eventos para ti"
      subtitle="No te fallan"
      displayedComponent={<div></div>}
    >
      <VerticalCardsGallery cardsContent={data} />
    </ContentDarkWrapper>
  );
}
