import Breadcrumb from "@/components/common/breadcrumb";
import CustomNavbar from "@/components/layout/navbar";
import { Metadata } from "next";
import SingleBlog from "./single-blog";
import data from "./data.json";
export const metadata: Metadata = {
  title: "Blog Info | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "Blog grids page description",
};
const posts = data.posts;

const Blog = () => {
  return (
    <>
      <CustomNavbar />
      <Breadcrumb pageName="Blog Info" />

      <section className="pb-10 pt-10">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {posts.map((blog, i) => (
              <div key={i} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
