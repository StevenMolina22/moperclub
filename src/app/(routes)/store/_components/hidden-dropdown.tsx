const links = [
  { label: "The most popular", href: "#" },
  { label: "Newest", href: "#" },
  { label: "Increasing Price", href: "#" },
  { label: "Decreasing Price", href: "#" },
  { label: "Nr. Reviews", href: "#" },
  { label: "Discount %", href: "#" },
];

export function HiddenDropdown() {
  return (
    <div
      id="dropdownSort1"
      className="z-50 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
      data-popper-placement="bottom"
    >
      <ul
        className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
        aria-labelledby="sortDropdownButton"
      >
        {links.map((link, i) => (
          <li key={i}>
            <a
              href={link.href}
              className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-foreground dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {" "}
              {link.label}{" "}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
