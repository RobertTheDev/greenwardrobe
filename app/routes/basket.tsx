import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Basket') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function BasketPage() {
  return (
    <div className="mx-auto max-w-5xl bg-white py-4 font-sans max-md:max-w-xl">
      <h1 className="text-center text-3xl font-bold text-gray-800">
        Shopping Cart
      </h1>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          <div className="grid grid-cols-3 items-start gap-4">
            <div className="col-span-2 flex items-start gap-4">
              <div className="h-28 w-28 shrink-0 rounded-md bg-gray-100 p-2 max-sm:h-24 max-sm:w-24">
                <img
                  alt=""
                  src="https://readymadeui.com/images/product14.webp"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-base font-bold text-gray-800">
                  Velvet Sneaker
                </h3>
                <p className="mt-0.5 text-xs font-semibold text-gray-500">
                  Size: MD
                </p>

                <button
                  type="button"
                  className="mt-6 flex shrink-0 items-center gap-1 text-xs font-semibold text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline w-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                  REMOVE
                </button>
              </div>
            </div>

            <div className="ml-auto">
              <h4 className="text-lg font-bold text-gray-800 max-sm:text-base">
                $20.00
              </h4>

              <button
                type="button"
                className="mt-6 flex items-center rounded-md border border-gray-300 bg-transparent px-3 py-1.5 text-xs text-gray-800 outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 fill-current"
                  viewBox="0 0 124 124"
                >
                  <path
                    d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                    data-original="#000000"
                  ></path>
                </svg>

                <span className="mx-3 font-bold">2</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 fill-current"
                  viewBox="0 0 42 42"
                >
                  <path
                    d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <hr className="border-gray-300" />

          <div className="grid grid-cols-3 items-start gap-4">
            <div className="col-span-2 flex items-start gap-4">
              <div className="h-28 w-28 shrink-0 rounded-md bg-gray-100 p-2 max-sm:h-24 max-sm:w-24">
                <img
                  alt=""
                  src="https://readymadeui.com/images/watch5.webp"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-base font-bold text-gray-800">
                  Smart Watch Timex
                </h3>
                <p className="mt-0.5 text-xs font-semibold text-gray-500">
                  Size: SM
                </p>

                <button
                  type="button"
                  className="mt-6 flex shrink-0 items-center gap-1 text-xs font-semibold text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline w-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                  REMOVE
                </button>
              </div>
            </div>

            <div className="ml-auto">
              <h4 className="text-lg font-bold text-gray-800 max-sm:text-base">
                $60.00
              </h4>

              <button
                type="button"
                className="mt-6 flex items-center rounded-md border border-gray-300 bg-transparent px-3 py-1.5 text-xs text-gray-800 outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 fill-current"
                  viewBox="0 0 124 124"
                >
                  <path
                    d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                    data-original="#000000"
                  ></path>
                </svg>

                <span className="mx-3 font-bold">1</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 fill-current"
                  viewBox="0 0 42 42"
                >
                  <path
                    d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <hr className="border-gray-300" />

          <div className="grid grid-cols-3 items-start gap-4">
            <div className="col-span-2 flex items-start gap-4">
              <div className="h-28 w-28 shrink-0 rounded-md bg-gray-100 p-2 max-sm:h-24 max-sm:w-24">
                <img
                  alt=""
                  src="https://readymadeui.com/images/watch4.webp"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-base font-bold text-gray-800">
                  French Connection
                </h3>
                <p className="mt-0.5 text-xs font-semibold text-gray-500">
                  Size: LG
                </p>

                <button
                  type="button"
                  className="mt-6 flex shrink-0 items-center gap-1 text-xs font-semibold text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline w-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                  REMOVE
                </button>
              </div>
            </div>

            <div className="ml-auto">
              <h4 className="text-lg font-bold text-gray-800 max-sm:text-base">
                $40.00
              </h4>

              <button
                type="button"
                className="mt-6 flex items-center rounded-md border border-gray-300 bg-transparent px-3 py-1.5 text-xs text-gray-800 outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 fill-current"
                  viewBox="0 0 124 124"
                >
                  <path
                    d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                    data-original="#000000"
                  ></path>
                </svg>

                <span className="mx-3 font-bold">1</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 fill-current"
                  viewBox="0 0 42 42"
                >
                  <path
                    d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <hr className="border-gray-300" />

          <div className="grid grid-cols-3 items-start gap-4">
            <div className="col-span-2 flex items-start gap-4">
              <div className="h-28 w-28 shrink-0 rounded-md bg-gray-100 p-2 max-sm:h-24 max-sm:w-24">
                <img
                  alt=""
                  src="https://readymadeui.com/images/watch7.webp"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-base font-bold text-gray-800">
                  Smart Watch
                </h3>
                <p className="mt-0.5 text-xs font-semibold text-gray-500">
                  Size: LG
                </p>

                <button
                  type="button"
                  className="mt-6 flex shrink-0 items-center gap-1 text-xs font-semibold text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline w-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                  REMOVE
                </button>
              </div>
            </div>

            <div className="ml-auto">
              <h4 className="text-lg font-bold text-gray-800 max-sm:text-base">
                $60.00
              </h4>

              <button
                type="button"
                className="mt-6 flex items-center rounded-md border border-gray-300 bg-transparent px-3 py-1.5 text-xs text-gray-800 outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 fill-current"
                  viewBox="0 0 124 124"
                >
                  <path
                    d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                    data-original="#000000"
                  ></path>
                </svg>

                <span className="mx-3 font-bold">1</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 fill-current"
                  viewBox="0 0 42 42"
                >
                  <path
                    d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="h-max rounded-md bg-gray-100 p-4">
          <h3 className="border-b border-gray-300 pb-2 text-lg font-bold text-gray-800 max-sm:text-base">
            Order Summary
          </h3>

          <ul className="mt-6 space-y-3 text-gray-800">
            <li className="flex flex-wrap gap-4 text-sm">
              Subtotal <span className="ml-auto font-bold">$200.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Shipping <span className="ml-auto font-bold">$2.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Tax <span className="ml-auto font-bold">$4.00</span>
            </li>
            <hr className="border-gray-300" />
            <li className="flex flex-wrap gap-4 text-sm font-bold">
              Total <span className="ml-auto">$206.00</span>
            </li>
          </ul>

          <div className="mt-6 space-y-3">
            <button
              type="button"
              className="w-full rounded-md bg-gray-800 px-4 py-2.5 text-sm font-semibold tracking-wide text-white hover:bg-gray-900"
            >
              Checkout
            </button>
            <button
              type="button"
              className="w-full rounded-md border border-gray-300 bg-transparent px-4 py-2.5 text-sm font-semibold tracking-wide text-gray-800"
            >
              Continue Shopping{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
