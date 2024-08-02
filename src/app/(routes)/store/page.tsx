import { Button } from "@/components/ui/button";
import { supabase } from "@/db";
import { Product } from "@/types/products";
import { Metadata } from "next";
import Link from "next/link";
import { StoreBreadcrumb } from "./_components/breadcrumb";
import { HeaderButtons } from "./_components/header-buttons";
import { ProductCard } from "./_components/product-card";

export const metadata: Metadata = {
  title: "Store | Moperclub",
  description: "The store page",
};

async function StorePage() {
  const { data: products, error } = (await supabase
    .from("products")
    .select("*")) as {
    data: Product[];
    error: any;
  };
  return (
    <section className="px-20 py-8 antialiased md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        {/* !-- Heading & Filters -->*/}
        <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
          <div>
            <StoreBreadcrumb />
            <h2 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
              Categories
            </h2>

            <CategoryLinks />
          </div>
          <HeaderButtons />
        </div>
        {/* Products gallery */}
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4 ">
          {products.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
        <div className="w-full text-center">
          <Button variant="outline">See more</Button>
        </div>
      </div>

    </section>
  );
}

export default StorePage;

function CategoryLinks() {
  const categories = ["All", "Men", "Kids"];
  return (
    <div className="flex w-full overflow-x-auto overflow-y-hidden whitespace-nowrap border-b border-gray-200 dark:border-gray-700">
      {categories.map((item, i) => (
        <Link
          key={i}
          href=""
          className="mr-2 p-3 underline-offset-4 hover:underline"
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
