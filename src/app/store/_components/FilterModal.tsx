export function FilterModal() {
  return <form
    action="#"
    method="get"
    id="filterModal"
    tabIndex={-1}
    aria-hidden="true"
    className="h-modal fixed left-0 right-0 top-0 z-50 hidden w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full"
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
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18 17.94 6M18 18 6.06 6" />
            </svg>
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
              <div className="space-y-2">
                <h5 className="text-lg font-medium uppercase text-black ">
                  A
                </h5>

                <div className="flex items-center">
                  <input
                    id="apple"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="apple"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Apple (56){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="asus"
                    type="checkbox"
                    value=""
                    checked
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="asus"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Asus (97){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="acer"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="acer"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Acer (234){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="allview"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="allview"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Allview (45){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="atari"
                    type="checkbox"
                    value=""
                    checked
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="asus"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Atari (176){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="amd"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="amd"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    AMD (49){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="aruba"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="aruba"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Aruba (16){" "}
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="text-lg font-medium uppercase text-black ">
                  B
                </h5>

                <div className="flex items-center">
                  <input
                    id="beats"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="beats"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Beats (56){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="bose"
                    type="checkbox"
                    value=""
                    checked
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="bose"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Bose (97){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="benq"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="benq"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    BenQ (45){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="bosch"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="bosch"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Bosch (176){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="brother"
                    type="checkbox"
                    value=""
                    checked
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="brother"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Brother (176){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="biostar"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="biostar"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Biostar (49){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="braun"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="braun"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Braun (16){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="blaupunkt"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="blaupunkt"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Blaupunkt (45){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="benq2"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="benq2"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    BenQ (23){" "}
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="text-lg font-medium uppercase text-black ">
                  C
                </h5>

                <div className="flex items-center">
                  <input
                    id="canon"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="canon"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Canon (49){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="cisco"
                    type="checkbox"
                    value=""
                    checked
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="cisco"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Cisco (97){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="cowon"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="cowon"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Cowon (234){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="clevo"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="clevo"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Clevo (45){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="corsair"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="corsair"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Corsair (15){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="csl"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="csl"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Canon (49){" "}
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="text-lg font-medium uppercase text-black ">
                  D
                </h5>

                <div className="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="dell"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Dell (56){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="dogfish"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="dogfish"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Dogfish (24){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="dyson"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="dyson"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Dyson (234){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="dobe"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="dobe"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Dobe (5){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="digitus"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="digitus"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Digitus (1){" "}
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="text-lg font-medium uppercase text-black ">
                  E
                </h5>

                <div className="flex items-center">
                  <input
                    id="emetec"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="emetec"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Emetec (56){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="extreme"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="extreme"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Extreme (10){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="elgato"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="elgato"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Elgato (234){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="emerson"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="emerson"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Emerson (45){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="emi"
                    type="checkbox"
                    value=""
                    checked
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="emi"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    EMI (176){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="fugoo"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="fugoo"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Fugoo (49){" "}
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="text-lg font-medium uppercase text-black ">
                  F
                </h5>

                <div className="flex items-center">
                  <input
                    id="fujitsu"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="fujitsu"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Fujitsu (97){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="fitbit"
                    type="checkbox"
                    value=""
                    checked
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="fitbit"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Fitbit (56){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="foxconn"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="foxconn"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Foxconn (234){" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="floston"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label
                    htmlFor="floston"
                    className="ml-2 text-sm font-medium text-foreground dark:text-gray-300"
                  >
                    {" "}
                    Floston (45){" "}
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div
            className="space-y-4"
            id="advanced-filters"
            role="tabpanel"
            aria-labelledby="advanced-filters-tab"
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="min-price"
                    className="block text-sm font-medium text-foreground "
                  >
                    {" "}
                    Min Price{" "}
                  </label>
                  <input
                    id="min-price"
                    type="range"
                    min="0"
                    max="7000"
                    value="300"
                    step="1"
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700" />
                </div>

                <div>
                  <label
                    htmlFor="max-price"
                    className="block text-sm font-medium text-foreground "
                  >
                    {" "}
                    Max Price{" "}
                  </label>
                  <input
                    id="max-price"
                    type="range"
                    min="0"
                    max="7000"
                    value="3500"
                    step="1"
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700" />
                </div>

                <div className="col-span-2 flex items-center justify-between space-x-2">
                  <input
                    type="number"
                    id="min-price-input"
                    value="300"
                    min="0"
                    max="7000"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 "
                    placeholder=""
                    required />

                  <div className="shrink-0 text-sm font-medium dark:text-gray-300">
                    to
                  </div>

                  <input
                    type="number"
                    id="max-price-input"
                    value="3500"
                    min="0"
                    max="7000"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder=""
                    required />
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label
                    htmlFor="min-delivery-time"
                    className="block text-sm font-medium text-foreground "
                  >
                    {" "}
                    Min Delivery Time (Days){" "}
                  </label>

                  <input
                    id="min-delivery-time"
                    type="range"
                    min="3"
                    max="50"
                    value="30"
                    step="1"
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700" />
                </div>

                <input
                  type="number"
                  id="min-delivery-time-input"
                  value="30"
                  min="3"
                  max="50"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 "
                  placeholder=""
                  required />
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
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600" />
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
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600" />
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
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600" />
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
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

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
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

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
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

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
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

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
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

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
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
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
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
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
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
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
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
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
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
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
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

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
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

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
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

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
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

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
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

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
                    checked />
                  <label
                    htmlFor="delivery-usa"
                    className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        USA
                      </div>
                      <div className="w-full">
                        Delivery only htmlFor USA
                      </div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="delivery-europe"
                    name="delivery"
                    value="delivery-europe"
                    className="peer hidden" />
                  <label
                    htmlFor="delivery-europe"
                    className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        Europe
                      </div>
                      <div className="w-full">
                        Delivery only htmlFor USA
                      </div>
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
                    checked />
                  <label
                    htmlFor="delivery-asia"
                    className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        Asia
                      </div>
                      <div className="w-full">
                        Delivery only htmlFor Asia
                      </div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="delivery-australia"
                    name="delivery"
                    value="delivery-australia"
                    className="peer hidden" />
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
  </form>;
}
