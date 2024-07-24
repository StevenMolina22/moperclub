import ShowcasePanel from "@/components/layout/ShowcasePanel";
import { data as inspirationData } from "./data";

function InspirationPage() {
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

export default InspirationPage;
