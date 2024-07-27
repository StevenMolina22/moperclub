import { Button } from "@/components/ui/button";
import { Breadcrumb } from "./_components/breadcrumb";
import { FilterModal } from "./_components/filter-modal";
import { HeaderButtons } from "./_components/header-buttons";
import { ProductCard } from "./_components/product-card";
import { fetcher } from "@/app/api/my-fetch";
import { Product } from "@/types/products";

async function StorePage() {

  const products: Product[] = await fetcher("/api/products")
  return (
      <section className="py-8 antialiased md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          {/* !-- Heading & Filters -->*/}
          <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
            <div>
              <Breadcrumb />
              <h2 className="mt-3 text-xl font-semibold text-foreground  sm:text-2xl">
                Products
              </h2>
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
        {/* !-- Filter modal -->*/}
      <FilterModal /> {/* TODO: Add interactivity (hidden now) */}
      </section>
  );
}

export default StorePage;