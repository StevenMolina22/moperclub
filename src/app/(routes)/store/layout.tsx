"use client";
import Navbar from "@/components/layout/navbar";
import Link from "next/link";
import { ReactNode } from "react";
import { HeaderButtons } from "./_components/header-buttons";
import { StoreBreadcrumb } from "./_components/breadcrumb";
import { PaginationDemo } from "./_components/pagination";

function StoreLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
    <Navbar />
      <section className="px-20 py-8 antialiased md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
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
          {children}
        </div>
        <PaginationDemo />
      </section>
    </>
  );
}

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

export default StoreLayout;
