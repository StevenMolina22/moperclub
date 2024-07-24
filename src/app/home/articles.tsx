import ImagesIcons from "../../components/layout/images-icons";
// import { getAllItems } from "../api/getReqNew.api";

type ArticlesType = {
  title: string;
  image: string;
};

async function Articles() {
  // const articles: ArticlesType[] = await getAllItems("/blog/api/posts/");

  // return <ImagesIcons articles={articles} />;
  return <ImagesIcons articles={[]} />;
  // return <div>Articles</div>
}

export default Articles;
