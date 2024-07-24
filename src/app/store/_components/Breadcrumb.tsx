import { ChevronRight } from "lucide-react";
import { FaHouse } from "react-icons/fa6";

export function Breadcrumb() {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
          >
            <FaHouse
              className="h-5 w-5 text-gray-400 rtl:rotate-180"
              aria-hidden="true" />
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight className="h-5 w-5 text-gray-400 rtl:rotate-180" />
            <a
              href="#"
              className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ms-2"
            >
              Store
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <ChevronRight className="h-5 w-5 text-gray-400 rtl:rotate-180" />
            <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">
              Products
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
