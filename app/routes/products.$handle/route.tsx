import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Product') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function ProductPage() {
  return (
    <div className="p-4 font-[sans-serif]">
      <div className="w-full">
        <div className="grid grid-cols-1 items-start gap-8 max-lg:gap-12 max-sm:gap-8 lg:grid-cols-5">
          <div className="top-0 w-full lg:sticky lg:col-span-3">
            <div className="grid grid-cols-2 gap-0.5">
              <div>
                <img
                  src="https://readymadeui.com/images/fashion-img-1.webp"
                  alt="Product"
                  className="aspect-[182/243] w-full object-cover object-top"
                />
              </div>
              <div>
                <img
                  src="https://readymadeui.com/images/fashion-img-2.webp"
                  alt="Product2"
                  className="aspect-[182/243] w-full object-cover object-top"
                />
              </div>
              <div>
                <img
                  src="https://readymadeui.com/images/fashion-img-3.webp"
                  alt="Product3"
                  className="aspect-[182/243] w-full object-cover object-top"
                />
              </div>
              <div>
                <img
                  src="https://readymadeui.com/images/fashion-img-4.webp"
                  alt="Product4"
                  className="aspect-[182/243] w-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:col-span-2">
            <div>
              <h3 className="text-lg font-bold text-gray-800 sm:text-xl">
                Women Embroidered A-line Kurta
              </h3>

              <p className="mt-4 text-sm text-gray-500">
                Women Embroidered Georgette A-line Kurta with Attached Dupatta
                in a rich maroon shade, featuring intricate embroidery, and a
                lightweight georgette fabric.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <h4 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                  $12
                </h4>
                <p className="text-lg text-gray-500">
                  <s>$16</s>{' '}
                  <span className="ml-1.5 text-sm">Tax included</span>
                </p>
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            <div>
              <h3 className="text-lg font-bold text-gray-800 sm:text-xl">
                Colours
              </h3>
              <div className="mt-4 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="flex h-9 w-10 shrink-0 items-center justify-center border border-gray-300 text-sm hover:border-purple-600"
                >
                  Blue
                </button>
                <button
                  type="button"
                  className="flex h-9 w-10 shrink-0 items-center justify-center border border-purple-600 text-sm hover:border-purple-600"
                >
                  Green
                </button>
                <button
                  type="button"
                  className="flex h-9 w-10 shrink-0 items-center justify-center border border-gray-300 text-sm hover:border-purple-600"
                >
                  Yellow
                </button>
                <button
                  type="button"
                  className="flex h-9 w-10 shrink-0 items-center justify-center border border-gray-300 text-sm hover:border-purple-600"
                >
                  Orange
                </button>
                <button
                  type="button"
                  className="flex h-9 w-10 shrink-0 items-center justify-center border border-gray-300 text-sm hover:border-purple-600"
                >
                  Purple
                </button>
              </div>

              <h3 className="mt-4 text-lg font-bold text-gray-800 sm:text-xl">
                Sizes
              </h3>
              <div className="mt-4 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="flex h-9 w-10 shrink-0 items-center justify-center border border-gray-300 text-sm hover:border-purple-600"
                >
                  SM
                </button>
                <button
                  type="button"
                  className="flex h-9 w-10 shrink-0 items-center justify-center border border-purple-600 text-sm hover:border-purple-600"
                >
                  MD
                </button>
                <button
                  type="button"
                  className="flex h-9 w-10 shrink-0 items-center justify-center border border-gray-300 text-sm hover:border-purple-600"
                >
                  LG
                </button>
                <button
                  type="button"
                  className="flex h-9 w-10 shrink-0 items-center justify-center border border-gray-300 text-sm hover:border-purple-600"
                >
                  XL
                </button>
                <button
                  type="button"
                  className="flex h-9 w-10 shrink-0 items-center justify-center border border-gray-300 text-sm hover:border-purple-600"
                >
                  XXL
                </button>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="w-[45%] border border-purple-600 bg-purple-600 px-4 py-3 text-sm font-semibold text-white hover:bg-purple-700"
                >
                  Add to cart
                </button>
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            <div>
              <h3 className="text-lg font-bold text-gray-800 sm:text-xl">
                Product Information
              </h3>
              <div className="mt-2">
                <div className="transition-all hover:bg-gray-100">
                  <button
                    type="button"
                    className="flex w-full items-center px-4 py-2.5 text-left text-sm font-semibold text-gray-800"
                  >
                    <span className="mr-4">Product details</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-auto h-3 w-3 shrink-0 -rotate-180 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                        clipRule="evenodd"
                        data-original="#000000"
                      />
                    </svg>
                  </button>
                  <div className="px-4 pb-4">
                    <p className="text-sm leading-relaxed text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>

                <div className="transition-all hover:bg-gray-100">
                  <button
                    type="button"
                    className="flex w-full items-center px-4 py-2.5 text-left text-sm font-semibold text-gray-800"
                  >
                    <span className="mr-4">Vendor details</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-auto h-3 w-3 shrink-0 -rotate-90 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                        clipRule="evenodd"
                        data-original="#000000"
                      />
                    </svg>
                  </button>
                  <div className="hidden px-4 pb-4">
                    <p className="text-sm leading-relaxed text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>

                <div className="transition-all hover:bg-gray-100">
                  <button
                    type="button"
                    className="flex w-full items-center px-4 py-2.5 text-left text-sm font-semibold text-gray-800"
                  >
                    <span className="mr-4">Return and exchange policy</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-auto h-3 w-3 shrink-0 -rotate-90 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                        clipRule="evenodd"
                        data-original="#000000"
                      />
                    </svg>
                  </button>
                  <div className="hidden px-4 pb-4">
                    <p className="text-sm leading-relaxed text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
