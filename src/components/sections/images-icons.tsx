import Image from "next/image";

// article item type definition
type ArticleItem = {
  title: string;
  image: string;
};
// articles items props type definition
interface Props {
  articles: ArticleItem[];
}

export default function ImagesIcons({ articles }: Props) {
  return (
    <div>
      <h2 className="mb-4 text-center text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
        Descubre!
      </h2>
      {/* ----Article Section ---- */}
      <section
        className="extra-videos flex flex-col items-center justify-items-center"
        id="extra-videos"
      >
        {/* Article Cards Wrapper */}
        <div className="extra-videos__items mt-4 flex flex-wrap justify-center gap-5">
          {/* Article Card */}
          {articles.map((article, index) => (
            <article
              key={index}
              className="extra-videos__article flex flex-col items-center gap-2"
            >
              <Image
                height={224}
                width={224}
                alt="article image"
                className="extra-videos__video h-[14rem] w-[14rem] rounded-xl object-cover"
                src={article.image}
              />
              <h4 className="text-lg font-medium">{article.title}</h4>
            </article>
          ))}
        </div>
      </section>

      {/* ----------------------------- */}
      {/* ----icons Container ---- */}
      <section className="extra-icons responsive-icons">
        <div className="extra-icons__container">
          <i className="extra-icons__i bi bi-archive-fill"></i>
          <i className="extra-icons__i bi bi-backpack4-fill"></i>
          <i className="extra-icons__i bi bi-fire"></i>
          <i className="extra-icons__i bi bi-award"></i>
          <i className="extra-icons__i bi bi-bookmarks-fill"></i>
        </div>
      </section>
    </div>
  );
}
