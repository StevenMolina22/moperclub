import { IconCardType } from "@/types/cards";
// icon card type definition

export const IconCard = ({ title, body, icon }: IconCardType) => {
  // const myComponent = <ImagesIcons articles={[]}/>
  return (
    <div className="personal-menu__card relative m-3 flex w-full min-w-[300px] max-w-[300px] cursor-pointer flex-col items-center justify-center rounded-xl bg-gray-900 px-12 py-9 text-center text-white shadow-black/25">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <div
        className="info-icon flex h-16 w-16 items-center justify-center rounded-full text-white "
        style={{
          background:
            "linear-gradient(90deg, #f39200 0%, #ef1073 40%, rgba(0, 0, 0, 0.28) 60%)",
          backgroundSize: "200px",
        }}
      >
        <i className="material-icons md-36 text-4xl">{icon}</i>
      </div>
      <p className="personal-menu__title ">{title}</p>
      <p className="personal-menu__text ">{body}</p>
      {/* This was just for components props testing (ignore:) */}
      {/* <div>{myComponent}</div> */}
    </div>
  );
};
