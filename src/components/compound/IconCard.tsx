// import { IconCardType } from "@/types/cards";
import "@/components/compound/icon-card.css";

type Props = {
  title: string;
  body: string;
  icon: string;
};

export const IconCard = ({ title, body, icon }: Props) => {
  return (
    <div className="personal-menu__card m-3 flex h-64 w-full min-w-52 max-w-80 flex-col items-center justify-center rounded-lg">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <div className="info-icon flex items-center justify-center rounded-full">
        <i className="material-icons md-36 text-4xl">{icon}</i>
      </div>
      <p className="personal-menu__title w-4/5 text-center text-white font-semibold mt-8">
        {title}
      </p>
      <p className="personal-menu__text w-4/5 text-center text-xs text-white font-extralight mt-5">
        {body}
      </p>
    </div>
  );
};
