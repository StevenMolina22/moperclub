import { Star } from "@/components/common/icons";
import TProduct from "@/components/compound/product-info";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Car, Eye, Heart, ShoppingCart } from "lucide-react";

type TProduct = {
  title: string;
  discount: number;
  stars: number;
  price: number;
  comments: number;
  image: string;
};
export function ProductCard({ product }: { product: TProduct }) {
  return (
    <div className="dark:bg-gray-80 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700">
      <div className="h-56 w-full">
        <a href="#">
          <img
            className="mx-auto h-full rounded-lg dark:hidden"
            src={product.image}
            alt={product.title}
          />
          <img
            className="mx-auto hidden h-full dark:block"
            src={product.image}
            alt={product.title}
          />
        </a>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
            {" "}
            Up to {product.discount}% off{" "}
          </span>

          <div className="flex items-center justify-end gap-1">
            <button
              type="button"
              data-tooltip-target="tooltip-quick-look"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-foreground dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only"> Quick look </span>
              <Eye className="size-5" />
            </button>
            <div
              id="tooltip-quick-look"
              role="tooltip"
              className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
              data-popper-placement="top"
            >
              Quick look
              <div className="tooltip-arrow" data-popper-arrow=""></div>
            </div>

            <button
              type="button"
              data-tooltip-target="tooltip-add-to-favorites"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-foreground dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
          {product.title}
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

          <p className="text-sm font-medium text-foreground ">{product.stars}</p>
          <p className="text-sm font-medium text-muted-foreground">
            ({product.comments})
          </p>
        </div>

        <ul className="mt-2 flex items-center gap-4">
          <li className="flex items-center gap-2 text-muted-foreground">
            <Car className="size-4" />
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Fast Delivery
            </p>
          </li>

          <li className="flex items-center gap-2">
            <svg
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Best Price
            </p>
          </li>
        </ul>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-foreground ">
            ${product.price}
          </p>
          <Dialog>
            <DialogTrigger>
              <Button className="flex gap-2">
                <ShoppingCart className="size-5" />
                <span>More info</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="flex items-center justify-center p-12">
              <TProduct product={product} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
