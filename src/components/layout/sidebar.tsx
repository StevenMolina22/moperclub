// Sidebar.tsx
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <div
      className={`fixed inset-0 overflow-hidden ${
        isOpen ? "block" : "hidden"
      } z-50`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          onClick={onClose}
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        ></div>
        <section className="absolute inset-y-0 right-0 flex max-w-full pl-10 ">
          <div className="bg relative w-screen max-w-md">
            <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
              <div className="px-9 sm:px-9">
                <button
                  onClick={onClose}
                  className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="sr-only">Close panel</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-4 text-lg">
                  <a
                    href="#"
                    className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
                  >
                    <span className="ml-3">Home</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
                  >
                    <span className="ml-3">About</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
                  >
                    <span className="ml-3">Blog</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
                  >
                    <span className="ml-3">Contact</span>
                  </a>
                </nav>
              </div>
              <div className="mt-8 px-2 text-lg">
                <h3 className="px-3 text-xl font-semibold uppercase tracking-wide text-gray-500">
                  Categories
                </h3>
                <ul className="mt-1">
                  <li className="px-3 py-1 text-gray-600 hover:text-gray-800">
                    Technology
                  </li>
                  <li className="px-3 py-1 text-gray-600 hover:text-gray-800">
                    Lifestyle
                  </li>
                  <li className="px-3 py-1 text-gray-600 hover:text-gray-800">
                    Travel
                  </li>
                  <li className="px-3 py-1 text-gray-600 hover:text-gray-800">
                    Fashion
                  </li>
                  {/* Add more categories */}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
