// import { IconCardType } from "@/types/cards";
import "./styles.css";

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
      <p className="personal-menu__title mt-8 w-4/5 text-center font-semibold text-white">
        {title}
      </p>
      <p className="personal-menu__text mt-5 w-4/5 text-center text-xs font-extralight text-white">
        {body}
      </p>
    </div>
  );
};
