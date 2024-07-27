import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";
import { colA, colB, colC, colD, colE, colF } from "./col-data";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

type Item = {
  name: string;
  count: number;
};

function ItemsColumn({ items, colName }: { items: Item[]; colName: string }) {
  return (
    <div className="space-y-2">
      <h5 className="text-lg font-medium uppercase text-black ">{colName}</h5>
      {items.map((items, idx) => (
        <div key={idx} className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {items.name} ({items.count})
          </label>
        </div>
      ))}
    </div>
  );
}

function SliderItem({label}: {label: string}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="min-price"
        className="block text-sm font-medium text-foreground "
      >
        {" "}
        {label + " "}
      </label>
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className="h-2 w-full cursor-pointer rounded-lg bg-gray-200"
      />
    </div>
  );
}
const cols = [
  { items: colA, colName: "A" },
  { items: colB, colName: "B" },
  { items: colC, colName: "C" },
  { items: colD, colName: "D" },
  { items: colE, colName: "E" },
  { items: colF, colName: "F" },
];

export function FilterModal() {
  return (
    <form
      action="#"
      method="get"
      id="filterModal"
      tabIndex={-1}
      aria-hidden="true"
      className="h-modal fixed left-0 hidden right-0 top-0 z-50  w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full"
    >
      <div className="relative h-full w-full max-w-xl md:h-auto">
        {/* <!-- Modal content -->*/}
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
          {/* <!-- Modal header -->*/}
          <div className="flex items-start justify-between rounded-t p-4 md:p-5">
            <h3 className="text-lg font-normal text-gray-500 dark:text-gray-400">
              Filters
            </h3>
            <button
              type="button"
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-foreground dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="filterModal"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body -->*/}
          <div className="px-4 md:px-5">
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
              <ul
                className="-mb-px flex flex-wrap text-center text-sm font-medium"
                id="myTab"
                data-tabs-toggle="#myTabContent"
                role="tablist"
              >
                <li className="mr-1" role="presentation">
                  <button
                    className="inline-block pb-2 pr-1"
                    id="brand-tab"
                    data-tabs-target="#brand"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Brand
                  </button>
                </li>
                <li className="mr-1" role="presentation">
                  <button
                    className="inline-block px-2 pb-2 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                    id="advanced-filers-tab"
                    data-tabs-target="#advanced-filters"
                    type="button"
                    role="tab"
                    aria-controls="advanced-filters"
                    aria-selected="false"
                  >
                    Advanced Filters
                  </button>
                </li>
              </ul>
            </div>

            <div id="myTabContent">
              <div
                className="grid grid-cols-2 gap-4 md:grid-cols-3"
                id="brand"
                role="tabpanel"
                aria-labelledby="brand-tab"
              >
                {cols.map((col, idx) => (
                  <ItemsColumn
                    key={idx}
                    items={col.items}
                    colName={col.colName}
                  />
                ))}
              </div>
            </div>

            <div className="h-4 space-y-4"></div>

            <div
              className="space-y-4"
              id="advanced-filters"
              role="tabpanel"
              aria-labelledby="advanced-filters-tab"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="grid grid-cols-2 gap-3">

                  <SliderItem label="Min Price"/>
                  <SliderItem label="Max Price"/>

                  <div className="col-span-2 flex items-center justify-between space-x-2">
                    <Input type="number"/>

                    <div className="shrink-0 text-sm font-medium dark:text-gray-300">
                      to
                    </div>

                    <Input type="number" />
                  </div>
                </div>

                <div className="space-y-3">
                  <SliderItem label="Min Delivery Time (Days)"/>

                  <Input type="number" />
                </div>
              </div>

              <div>
                <h6 className="mb-2 text-sm font-medium text-black ">
                  Condition
                </h6>

                <ul className="flex w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-foreground dark:border-gray-600 dark:bg-gray-700 ">
                  <li className="w-full border-r border-gray-200 dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="condition-all"
                        type="radio"
                        value=""
                        name="list-radio"
                        checked
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="condition-all"
                        className="ml-2 w-full py-3 text-sm font-medium text-foreground dark:text-gray-300"
                      >
                        {" "}
                        All{" "}
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-r border-gray-200 dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="condition-new"
                        type="radio"
                        value=""
                        name="list-radio"
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="condition-new"
                        className="ml-2 w-full py-3 text-sm font-medium text-foreground dark:text-gray-300"
                      >
                        {" "}
                        New{" "}
                      </label>
                    </div>
                  </li>
                  <li className="w-full">
                    <div className="flex items-center pl-3">
                      <input
                        id="condition-used"
                        type="radio"
                        value=""
                        name="list-radio"
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="condition-used"
                        className="ml-2 w-full py-3 text-sm font-medium text-foreground dark:text-gray-300"
                      >
                        {" "}
                        Used{" "}
                      </label>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                <div>
                  <h6 className="mb-2 text-sm font-medium text-black ">
                    Colour
                  </h6>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        id="blue"
                        type="checkbox"
                        value=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />

                      <label
                        htmlFor="blue"
                        className="ml-2 flex items-center text-sm font-medium text-foreground dark:text-gray-300"
                      >
                        <div className="mr-2 h-3.5 w-3.5 rounded-full bg-primary-600"></div>
                        Blue
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="gray"
                        type="checkbox"
                        value=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />

                      <label
                        htmlFor="gray"
                        className="ml-2 flex items-center text-sm font-medium text-foreground dark:text-gray-300"
                      >
                        <div className="mr-2 h-3.5 w-3.5 rounded-full bg-gray-400"></div>
                        Gray
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="green"
                        type="checkbox"
                        value=""
                        checked
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />

                      <label
                        htmlFor="green"
                        className="ml-2 flex items-center text-sm font-medium text-foreground dark:text-gray-300"
                      >
                        <div className="mr-2 h-3.5 w-3.5 rounded-full bg-green-400"></div>
                        Green
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="pink"
                        type="checkbox"
                        value=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />

                      <label
                        htmlFor="pink"
                        className="ml-2 flex items-center text-sm font-medium text-foreground dark:text-gray-300"
                      >
                        <div className="mr-2 h-3.5 w-3.5 rounded-full bg-pink-400"></div>
                        Pink
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="red"
                        type="checkbox"
                        value=""
                        checked
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />

                      <label
                        htmlFor="red"
                        className="ml-2 flex items-center text-sm font-medium text-foreground dark:text-gray-300"
                      >
                        <div className="mr-2 h-3.5 w-3.5 rounded-full bg-red-500"></div>
                        Red
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h6 className="mb-2 text-sm font-medium text-black ">
                    Rating
                  </h6>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        id="five-stars"
                        type="radio"
                        value=""
                        name="rating"
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="five-stars"
                        className="ml-2 flex items-center"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Second star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Third star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fourth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fifth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="four-stars"
                        type="radio"
                        value=""
                        name="rating"
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="four-stars"
                        className="ml-2 flex items-center"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Second star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Third star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fourth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-300 dark:text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fifth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="three-stars"
                        type="radio"
                        value=""
                        name="rating"
                        checked
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="three-stars"
                        className="ml-2 flex items-center"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Second star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Third star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-300 dark:text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fourth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-300 dark:text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fifth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="two-stars"
                        type="radio"
                        value=""
                        name="rating"
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="two-stars"
                        className="ml-2 flex items-center"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Second star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-300 dark:text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Third star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-300 dark:text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fourth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-300 dark:text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fifth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="one-star"
                        type="radio"
                        value=""
                        name="rating"
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="one-star"
                        className="ml-2 flex items-center"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-300 dark:text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Second star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-300 dark:text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Third star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-300 dark:text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fourth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-300 dark:text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fifth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h6 className="mb-2 text-sm font-medium text-black ">
                    Weight
                  </h6>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        id="under-1-kg"
                        type="checkbox"
                        value=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />

                      <label
                        htmlFor="under-1-kg"
                        className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                      >
                        {" "}
                        Under 1 kg{" "}
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="1-1-5-kg"
                        type="checkbox"
                        value=""
                        checked
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />

                      <label
                        htmlFor="1-1-5-kg"
                        className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                      >
                        {" "}
                        1-1,5 kg{" "}
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="1-5-2-kg"
                        type="checkbox"
                        value=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />

                      <label
                        htmlFor="1-5-2-kg"
                        className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                      >
                        {" "}
                        1,5-2 kg{" "}
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="2-5-3-kg"
                        type="checkbox"
                        value=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />

                      <label
                        htmlFor="2-5-3-kg"
                        className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                      >
                        {" "}
                        2,5-3 kg{" "}
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="over-3-kg"
                        type="checkbox"
                        value=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />

                      <label
                        htmlFor="over-3-kg"
                        className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                      >
                        {" "}
                        Over 3 kg{" "}
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h6 className="mb-2 text-sm font-medium text-black ">
                  Delivery type
                </h6>

                <ul className="grid grid-cols-2 gap-4">
                  <li>
                    <input
                      type="radio"
                      id="delivery-usa"
                      name="delivery"
                      value="delivery-usa"
                      className="peer hidden"
                      checked
                    />
                    <label
                      htmlFor="delivery-usa"
                      className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">USA</div>
                        <div className="w-full">Delivery only htmlFor USA</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="delivery-europe"
                      name="delivery"
                      value="delivery-europe"
                      className="peer hidden"
                    />
                    <label
                      htmlFor="delivery-europe"
                      className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          Europe
                        </div>
                        <div className="w-full">Delivery only htmlFor USA</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="delivery-asia"
                      name="delivery"
                      value="delivery-asia"
                      className="peer hidden"
                      checked
                    />
                    <label
                      htmlFor="delivery-asia"
                      className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Asia</div>
                        <div className="w-full">Delivery only htmlFor Asia</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="delivery-australia"
                      name="delivery"
                      value="delivery-australia"
                      className="peer hidden"
                    />
                    <label
                      htmlFor="delivery-australia"
                      className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          Australia
                        </div>
                        <div className="w-full">
                          Delivery only htmlFor Australia
                        </div>
                      </div>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- Modal footer --> */}
          <div className="flex items-center space-x-4 rounded-b p-4 dark:border-gray-600 md:p-5">
            <button
              type="submit"
              className="hover:bg-primary/90 dark:hover:bg-primary/90 rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary dark:focus:ring-primary-800"
            >
              Show 50 results
            </button>
            <button
              type="reset"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-foreground hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
