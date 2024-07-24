import IconMenu from "./IconMenu";

export default function PersonalMenu() {
  const iconCardsContent = [
    {
      title: "Profile",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit itaque",
      icon: "face",
    },
    {
      title: "Favorites",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit itaque",
      icon: "favorite_border",
    },
    {
      title: "Contacts",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit itaque",
      icon: "alternate_email",
    },
  ];

  return (
    <>
      {/* Section Title Text */}
      <div className="mb-6 text-center">
        <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Disfruta de verdad con{" "}
          <span className="text-orange-600">el #1 de Argentina</span> BS.
        </h2>
        <p className="mx-auto w-[70%] text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quam
          voluptatem itaque aliquam qui ducimus molestiae reiciendis perferendis
          optio autem.
        </p>
      </div>

      <IconMenu
        title="Personal Menu"
        subtitle="Made for you"
        cards={iconCardsContent}
      />
    </>
  );
}
