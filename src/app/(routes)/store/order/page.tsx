import Navbar from "@/components/layout/navbar";

function OrderDetails () {
  return (
    <>
    <Navbar />
    <section className="py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Track the delivery of order #957684673
        </h2>

        <div className="mt-6 sm:mt-8 lg:flex lg:gap-8 ">
          <div className="w-full divide-y bg-white divide-gray-200 overflow-hidden rounded-lg border border-gray-200 dark:divide-gray-700 dark:border-gray-700 lg:max-w-xl xl:max-w-2xl">
            {/* Product Items */}
            <div className="space-y-4 p-6">
              {/* Product 1 */}
              <div className="flex items-center gap-6">
                <a href="#" className="h-14 w-14 shrink-0">
                  <img
                    className="h-full w-full dark:hidden rounded-md"
                    src="https://marcadegol.com/fotos//2024/03/review-camiseta-titular-adidas-de-argentina-2024-2025-1-1.jpg"
                    alt="imac image"
                  />
                  <img
                    className="hidden h-full w-full dark:block"
                    src="https://marcadegol.com/fotos//2024/03/review-camiseta-titular-adidas-de-argentina-2024-2025-1-1.jpg"
                    alt="imac image"
                  />
                </a>

                <a
                  href="#"
                  className="min-w-0 flex-1 font-medium text-gray-900 hover:underline dark:text-white"
                >
                  {/* Product info: Argentina football t-shirt */}
                  Argentina football t-shirt - Home 2023 - Blue & White - Size M - 1x
                </a>
              </div>

              {/* Product details and pricing */}
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-900 dark:text-white">Product ID:</span> BJ8364850
                </p>

                <div className="flex items-center justify-end gap-4">
                  <p className="text-base font-normal text-gray-900 dark:text-white">x1</p>
                  <p className="text-xl font-bold leading-tight text-gray-900 dark:text-white">$49.99</p>
                </div>
              </div>
            </div>
            {/* Repeat for other products */}
            {/* ... */}

            {/* Summary */}
            <div className="space-y-4 bg-gray-50 p-6 dark:bg-gray-800">
              <div className="space-y-2">
                <dl className="flex items-center justify-between gap-4">
                  <dt className="font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">$79.00</dd>
                </dl>
                <dl className="flex items-center justify-between gap-4">
                  <dt className="font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                  <dd className="text-base font-medium text-green-500">-$30.00</dd>
                </dl>
                <dl className="flex items-center justify-between gap-4">
                  <dt className="font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">$10.00</dd>
                </dl>
                <dl className="flex items-center justify-between gap-4">
                  <dt className="font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">$5.99</dd>
                </dl>
              </div>

              <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                <dt className="text-lg font-bold text-gray-900 dark:text-white">Total</dt>
                <dd className="text-lg font-bold text-gray-900 dark:text-white">$49.99</dd>
              </dl>
            </div>
          </div>

          {/* Order history */}
          <div className="mt-6 grow sm:mt-8 lg:mt-0">
            <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Order history</h3>

              {/* Timeline */}
              <ol className="relative ms-3 border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-6">
                  <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
                    <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
                    </svg>
                  </span>
                  <h4 className="mb-0.5 text-base font-semibold text-gray-900 dark:text-white">Estimated delivery in 24 Nov 2024</h4>
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Products delivered</p>
                </li>
                {/* Repeat for other timeline entries */}
                {/* ... */}
              </ol>

              {/* Action buttons */}
              <div className="gap-4 sm:flex sm:items-center">
                <button type="button" className="w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                  Cancel the order
                </button>

                <a href="#" className="mt-4 flex w-full items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0">
                  Order details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default OrderDetails;
