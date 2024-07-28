import Breadcrumb from "@/components/common/breadcrumb";
import BlogCard from "@/components/compound/blog-card";
import Navbar from "@/components/layout/navbar";
import { Metadata } from "next";
import data from "./data.json";
export const metadata: Metadata = {
  title: "Blog Info | Moperclub",
  description: "Blog grids page description",
};
const posts = data.posts;

const Blog = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb pageName="Blog Info" />

      <section className="pb-10 pt-10">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {posts.map((blog, i) => (
              <div key={i} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
