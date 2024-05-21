import ImagesIcons from "../../components/layout/ImagesIcons";
import { getAllItems } from "../api/getReqNew.api";

type ArticlesType = {
  title: string;
  image: string;
};

async function Articles() {
  const articles: ArticlesType[] = await getAllItems("/blog/api/posts/");
  
  return <ImagesIcons articles={articles} />;
}

export default Articles;
