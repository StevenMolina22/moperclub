import { IconCardType } from "@/types/cards";

export const IconCard = ({ title, body, icon }: IconCardType) => {
  return (
    <div className="group relative m-3 flex min-h-[200px] w-[300px] cursor-pointer flex-col items-center justify-center rounded-xl bg-gray-900 px-12 py-9 text-center text-white shadow-black/25">
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
      <div className="my-2"></div>
      <p className="hidden group-hover:flex text-gray-200">{title}</p>
      <p className="hidden group-hover:flex text-gray-300">{body}</p>
    </div>
  );
};
