"use client";
import ImagesIcons from "../../components/layout/ImagesIcons";
import useArticles from "./useArticles";

function Articles() {
  const { articles } = useArticles();
  return <ImagesIcons articles={articles} />;
}

export default Articles;
