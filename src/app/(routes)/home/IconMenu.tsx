import { IconCard } from "../../../components/compound/IconCard";
import { IconCardType } from "@/types/cards";

interface Props {
  title: string;
  subtitle: string;
  cards: IconCardType[];
}

function IconMenu({ title, subtitle, cards }: Props) {
  return (
    <section className="personal-menu p-3" style={{ backgroundColor: "#112" }}>
      {/* Text */}
      <div className="pt-5 text-center text-gray-100">
        <h2 className="text-5xl font-semibold">{title}</h2>
        <h4 className="text-3xl font-normal text-gray-300">{subtitle}</h4>
      </div>

      <div className="flex flex-col items-center justify-center py-6 md:flex-row">
        {cards.map((card, index) => (
          <IconCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

export default IconMenu;