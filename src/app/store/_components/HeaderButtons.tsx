import { ArrowDownAZ, ChevronDown, Filter } from "lucide-react";
import { HiddenDropdown } from "./HiddenDropdown";

export function HeaderButtons() {
  return <div className="flex items-center space-x-4">
    <button
      data-modal-toggle="filterModal"
      data-modal-target="filterModal"
      type="button"
      className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-foreground hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
    >
      <div className="flex items-center gap-1">
        <Filter className="-me-0.5 ms-2 h-4 w-4" />
        <span>Filters</span>
      </div>

      <ChevronDown className="-me-0.5 ms-2 h-4 w-4" />
    </button>
    <button
      id="sortDropdownButton1"
      data-dropdown-toggle="dropdownSort1"
      type="button"
      className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-foreground hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
    >
      <div className="flex items-center gap-1">
        <ArrowDownAZ className="-me-0.5 ms-2 h-4 w-4" />
        <span>Sort</span>
      </div>
      <ChevronDown className="-me-0.5 ms-2 h-4 w-4" />
    </button>
    <HiddenDropdown />
  </div>;
}
