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
      <div className="mx-auto max-w-xl lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="grid grid-cols-1 items-start gap-8 max-lg:gap-12 max-sm:gap-8 lg:grid-cols-5">
          <div className="top-0 w-full lg:sticky lg:col-span-3">
            <div className="flex flex-row gap-2">
              <div className="flex w-16 shrink-0 flex-col gap-2 max-sm:w-10">
                <img
                  src="https://readymadeui.com/images/product6.webp"
                  alt="Product1"
                  className="aspect-[64/85] w-full cursor-pointer border-b-2 border-black object-cover object-top"
                />
                <img
                  src="https://readymadeui.com/images/product5.webp"
                  alt="Product2"
                  className="aspect-[64/85] w-full cursor-pointer border-b-2 border-transparent object-cover object-top"
                />
                <img
                  src="https://readymadeui.com/images/product2.webp"
                  alt="Product2"
                  className="aspect-[64/85] w-full cursor-pointer border-b-2 border-transparent object-cover object-top"
                />
                <img
                  src="https://readymadeui.com/images/product3.webp"
                  alt="Product3"
                  className="aspect-[64/85] w-full cursor-pointer border-b-2 border-transparent object-cover object-top"
                />
                <img
                  src="https://readymadeui.com/images/product1.webp"
                  alt="Product4"
                  className="aspect-[64/85] w-full cursor-pointer border-b-2 border-transparent object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <img
                  src="https://readymadeui.com/images/product6.webp"
                  alt="Product"
                  className="aspect-[750/800] w-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:col-span-2">
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Adjective Attire | T-shirt
              </h3>
              <div className="mt-2 flex items-center space-x-1">
                <svg
                  className="h-4 w-4 fill-purple-800"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="h-4 w-4 fill-purple-800"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="h-4 w-4 fill-purple-800"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="h-4 w-4 fill-purple-800"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="h-4 w-4 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>

                <p className="!ml-3 text-sm text-gray-800">4.0 (150)</p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <h4 className="text-2xl font-bold text-gray-800">$17</h4>
                <p className="text-lg text-gray-500">
                  <s>$22</s>{' '}
                  <span className="ml-1.5 text-sm">Tax included</span>
                </p>
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            <div>
              <h3 className="text-lg font-bold text-gray-800">Sizes</h3>
              <div className="mt-4 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="flex h-9 w-10 shrink-0 items-center justify-center border border-gray-300 text-sm text-gray-800 hover:border-purple-600"
                >
                  SM
                </button>
                <button
                  type="button"
                  className="flex h-9 w-10 shrink-0 items-center justify-center border border-purple-600 text-sm text-purple-800 hover:border-purple-600"
                >
                  MD
                </button>
                <button
                  type="button"
                  className="flex h-9 w-10 shrink-0 items-center justify-center border border-gray-300 text-sm text-gray-800 hover:border-purple-600"
                >
                  LG
                </button>
                <button
                  type="button"
                  className="flex h-9 w-10 shrink-0 items-center justify-center border border-gray-300 text-sm text-gray-800 hover:border-purple-600"
                >
                  XL
                </button>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-800">Colors</h3>
                <div className="mt-4 flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="flex h-9 w-10 shrink-0 items-center justify-center border border-transparent bg-gray-600 text-sm text-gray-800 hover:border-purple-600"
                  ></button>
                  <button
                    type="button"
                    className="flex h-9 w-10 shrink-0 items-center justify-center border border-purple-600 bg-black text-sm text-purple-800 hover:border-purple-600"
                  ></button>
                  <button
                    type="button"
                    className="flex h-9 w-10 shrink-0 items-center justify-center border border-transparent bg-blue-600 text-sm text-gray-800 hover:border-purple-600"
                  ></button>
                  <button
                    type="button"
                    className="flex h-9 w-10 shrink-0 items-center justify-center border border-transparent bg-purple-600 text-sm text-gray-800 hover:border-purple-600"
                  ></button>
                </div>
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            <div className="mt-6 flex flex-wrap gap-4">
              <button
                type="button"
                className="w-[45%] border border-gray-300 bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-200"
              >
                Add to wishlist
              </button>
              <button
                type="button"
                className="w-[45%] border border-purple-600 bg-purple-600 px-4 py-3 text-sm font-semibold text-white hover:bg-purple-700"
              >
                Add to cart
              </button>
            </div>

            <hr className="my-6 border-gray-300" />

            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Select Delivery Location
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Enter the pincode of your area to check product availability.
              </p>
              <div className="mt-4 flex max-w-sm items-center gap-2">
                <input
                  type="number"
                  placeholder="Enter pincode"
                  className="w-full border border-gray-300 bg-gray-100 px-4 py-2.5 text-sm outline-0"
                />
                <button
                  type="button"
                  className="border border-purple-600 bg-purple-600 px-4 py-2.5 text-sm text-white outline-0 hover:bg-purple-700"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-screen-lg xl:max-w-screen-xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-800">
                PRODUCT INFORMATION
              </h3>

              <div>
                <h3 className="text-sm font-bold text-gray-800">Material:</h3>
                <p className="mt-2 text-sm text-gray-500">
                  100% Organic Cotton
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-800">
                  Care Guidelines:
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Wash cold, tumble dry low, do not bleach.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-800">Features:</h3>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-500">
                  <li>Eco-friendly, breathable fabric.</li>
                  <li>ClassNameic fit for everyday comfort.</li>
                  <li>Durable stitching for long-lasting wear.</li>
                  <li>Available in multiple colors and sizes.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-800">
                SHIPPING & RETURNS
              </h3>

              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="mb-2 text-sm font-bold text-gray-800">
                      Standard Shipping
                    </p>
                    <p className="text-sm text-gray-500">
                      Delivery in 3-5 business days
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">$5.00</span>
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <p className="mb-2 text-sm font-bold text-gray-800">
                      Expedited Shipping
                    </p>
                    <p className="text-sm text-gray-500">
                      Delivery in 1-2 business days
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">$15.00</span>
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <p className="mb-2 text-sm font-bold text-gray-800">
                      Pickup Option
                    </p>
                    <p className="text-sm text-gray-500">
                      Available within 24 hours
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">FREE</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-gray-500">
                  For more details on our return policy,{' '}
                  <span className="underline">click here</span>.
                </p>
                <p className="text-sm text-gray-500">
                  A $3.00 processing fee applies to returns.{' '}
                  <span className="underline">Learn more</span>.
                </p>
                <p className="text-sm text-gray-500">
                  Returns for online orders must be initiated online. In-store
                  returns are not accepted.
                </p>
                <p className="text-sm text-gray-500">
                  To promote sustainability, we now use electronic return
                  labels. <span className="underline">Read more</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
