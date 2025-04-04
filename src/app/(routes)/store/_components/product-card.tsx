import { Star } from "@/components/common/icons";
import ProductInfo from "@/components/compound/product-info";
import { buttonVariants } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Product } from "@/types/products";
import { Eye, Heart, ShoppingCart } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="dark:bg-gray-80 flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700">
      <div className="h-56 w-full">
        <a href="#">
          <img
            className="mx-auto h-full w-full rounded-lg object-cover object-center"
            src={product.image}
            alt={product.name}
          />
        </a>
      </div>
      {/* body */}
      <div className="flex h-full flex-col justify-between pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
            {" "}
            Up to {product.discount}% off{" "}
          </span>

          <div className="flex items-center justify-end gap-1">
            <button
              type="button"
              data-tooltip-target="tooltip-add-to-favorites"
              className="rounded-lg p-2 text-muted-foreground hover:bg-gray-100 hover:text-foreground dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only"> Add to Favorites </span>
              <Heart className="size-5" />
            </button>
            <div
              id="tooltip-add-to-favorites"
              role="tooltip"
              className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
              data-popper-placement="top"
            >
              Add to favorites
              <div className="tooltip-arrow" data-popper-arrow=""></div>
            </div>
          </div>
        </div>

        <a
          href="#"
          className="text-lg font-semibold leading-tight text-foreground hover:underline "
        >
          {product.name}
        </a>

        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < product.stars ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <p className="text-sm font-medium text-foreground ">
            {product.stars}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-foreground ">
            ${product.price}
          </p>
          <Dialog>
            <DialogTrigger>
              <div
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "flex gap-2",
                )}
              >
                <ShoppingCart className="size-5" />
                <span>More info</span>
              </div>
            </DialogTrigger>
            <DialogContent className="flex w-fit max-w-fit items-center justify-center p-12">
              <ProductInfo product={product} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
