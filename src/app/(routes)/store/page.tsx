import { Metadata } from "next";
import { ProductCard } from "./_components/product-card";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Store | Moperclub",
  description: "The store page",
};

async function takesTime() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

async function StorePage() {
  // await takesTime();
  return (
    <>
      {/* Products gallery */}
      <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4 ">
        {products?.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
      {/* <div className="w-full text-center">
          <Button variant="outline">See more</Button>
        </div> */}
    </>
  );
}

export default StorePage;
