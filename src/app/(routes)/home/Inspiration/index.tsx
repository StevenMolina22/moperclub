import ShowcasePanel from "@/components/sections/showcase-panel";
import { data as inspirationData } from "./data";

export function InspirationPage() {
  const { image, body, messages } = inspirationData;
  return (
    <ShowcasePanel
      caption="Sigue tus metas"
      title="Encuentra tu verdadero yo"
      body={body}
      image={image}
      messages={messages}
    />
  );
}
