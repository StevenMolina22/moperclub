import { Product as TProduct } from "@/types/products";
import { Heart } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { ProductCarousel } from "./products-carousel";

function ProductInfo({ product }: { product: TProduct }) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex font-sans justify-center items-center flex-col md:flex-row">
        <div className="w-64 ms-4 me-8 flex-none">
         <ProductCarousel className="" images={[product.image, product.image, product.image]} />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap flex-col">
            <h1 className="flex-auto text-xl font-semibold text-foreground">
              {product.name}
            </h1>
            <div className="text-black-500 text-lg font-semibold">
              ${product.price}
            </div>
            <div className="text-black-700 mt-2 w-full flex-none text-sm font-medium">
              In stock
            </div>
          </div>
          <div className="mb-6 mt-4 flex items-baseline border-b border-slate-200 pb-6">
            <ToggleGroup type="single">
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                S
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                M
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                L
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="mb-6 flex space-x-4 text-sm font-medium">
            <div className="flex flex-auto space-x-4">
              <Link className={buttonVariants()} href="https://wa.me/c/5491134717777">Buy now</Link>
            </div>
            <Button variant="outline" type="button" aria-label="Favorites">
              <Heart className="size-4 text-muted-foreground" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ProductInfo;
