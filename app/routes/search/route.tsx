import { MetaFunction } from '@remix-run/react';
import products from '~/data/products';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';
import ProductCard from './ProductCard';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Search') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function SearchPage() {
  return (
    <section className="bg-gray-100 pb-24">
      <div className="w-full">
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mt-8 block lg:hidden">
              <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                <span className="text-sm font-medium"> Filters & Sorting </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
              <div className="hidden space-y-4 lg:block">
                <div>
                  <label
                    htmlFor="SortBy"
                    className="block text-xs font-medium text-gray-700"
                  >
                    {' '}
                    Sort By{' '}
                  </label>

                  <select
                    id="SortBy"
                    className="mt-1 rounded border-gray-300 text-sm"
                  >
                    <option>Sort By</option>
                    <option value="Title, DESC">Title, DESC</option>
                    <option value="Title, ASC">Title, ASC</option>
                    <option value="Price, DESC">Price, DESC</option>
                    <option value="Price, ASC">Price, ASC</option>
                  </select>
                </div>

                <div>
                  <p className="block text-xs font-medium text-gray-700">
                    Filters
                  </p>

                  <div className="mt-1 space-y-2">
                    <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                        <span className="text-sm font-medium">
                          {' '}
                          Availability{' '}
                        </span>

                        <span className="transition group-open:-rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </summary>

                      <div className="border-t border-gray-200 bg-white">
                        <header className="flex items-center justify-between p-4">
                          <span className="text-sm text-gray-700">
                            {' '}
                            0 Selected{' '}
                          </span>

                          <button
                            type="button"
                            className="text-sm text-gray-900 underline underline-offset-4"
                          >
                            Reset
                          </button>
                        </header>

                        <ul className="space-y-1 border-t border-gray-200 p-4">
                          <li>
                            <label
                              htmlFor="FilterInStock"
                              className="inline-flex items-center gap-2"
                            >
                              <input
                                type="checkbox"
                                id="FilterInStock"
                                className="size-5 rounded border-gray-300"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {' '}
                                In Stock (5+){' '}
                              </span>
                            </label>
                          </li>

                          <li>
                            <label
                              htmlFor="FilterPreOrder"
                              className="inline-flex items-center gap-2"
                            >
                              <input
                                type="checkbox"
                                id="FilterPreOrder"
                                className="size-5 rounded border-gray-300"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {' '}
                                Pre Order (3+){' '}
                              </span>
                            </label>
                          </li>

                          <li>
                            <label
                              htmlFor="FilterOutOfStock"
                              className="inline-flex items-center gap-2"
                            >
                              <input
                                type="checkbox"
                                id="FilterOutOfStock"
                                className="size-5 rounded border-gray-300"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {' '}
                                Out of Stock (10+){' '}
                              </span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </details>

                    <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                        <span className="text-sm font-medium"> Price </span>

                        <span className="transition group-open:-rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </summary>

                      <div className="border-t border-gray-200 bg-white">
                        <header className="flex items-center justify-between p-4">
                          <span className="text-sm text-gray-700">
                            {' '}
                            The highest price is $600{' '}
                          </span>

                          <button
                            type="button"
                            className="text-sm text-gray-900 underline underline-offset-4"
                          >
                            Reset
                          </button>
                        </header>

                        <div className="border-t border-gray-200 p-4">
                          <div className="flex justify-between gap-4">
                            <label
                              htmlFor="FilterPriceFrom"
                              className="flex items-center gap-2"
                            >
                              <span className="text-sm text-gray-600">$</span>

                              <input
                                type="number"
                                id="FilterPriceFrom"
                                placeholder="From"
                                className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                              />
                            </label>

                            <label
                              htmlFor="FilterPriceTo"
                              className="flex items-center gap-2"
                            >
                              <span className="text-sm text-gray-600">$</span>

                              <input
                                type="number"
                                id="FilterPriceTo"
                                placeholder="To"
                                className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </details>

                    <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                        <span className="text-sm font-medium"> Colors </span>

                        <span className="transition group-open:-rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </summary>

                      <div className="border-t border-gray-200 bg-white">
                        <header className="flex items-center justify-between p-4">
                          <span className="text-sm text-gray-700">
                            {' '}
                            0 Selected{' '}
                          </span>

                          <button
                            type="button"
                            className="text-sm text-gray-900 underline underline-offset-4"
                          >
                            Reset
                          </button>
                        </header>

                        <ul className="space-y-1 border-t border-gray-200 p-4">
                          <li>
                            <label
                              htmlFor="FilterRed"
                              className="inline-flex items-center gap-2"
                            >
                              <input
                                type="checkbox"
                                id="FilterRed"
                                className="size-5 rounded border-gray-300"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {' '}
                                Red{' '}
                              </span>
                            </label>
                          </li>

                          <li>
                            <label
                              htmlFor="FilterBlue"
                              className="inline-flex items-center gap-2"
                            >
                              <input
                                type="checkbox"
                                id="FilterBlue"
                                className="size-5 rounded border-gray-300"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {' '}
                                Blue{' '}
                              </span>
                            </label>
                          </li>

                          <li>
                            <label
                              htmlFor="FilterGreen"
                              className="inline-flex items-center gap-2"
                            >
                              <input
                                type="checkbox"
                                id="FilterGreen"
                                className="size-5 rounded border-gray-300"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {' '}
                                Green{' '}
                              </span>
                            </label>
                          </li>

                          <li>
                            <label
                              htmlFor="FilterOrange"
                              className="inline-flex items-center gap-2"
                            >
                              <input
                                type="checkbox"
                                id="FilterOrange"
                                className="size-5 rounded border-gray-300"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {' '}
                                Orange{' '}
                              </span>
                            </label>
                          </li>

                          <li>
                            <label
                              htmlFor="FilterPurple"
                              className="inline-flex items-center gap-2"
                            >
                              <input
                                type="checkbox"
                                id="FilterPurple"
                                className="size-5 rounded border-gray-300"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {' '}
                                Purple{' '}
                              </span>
                            </label>
                          </li>

                          <li>
                            <label
                              htmlFor="FilterTeal"
                              className="inline-flex items-center gap-2"
                            >
                              <input
                                type="checkbox"
                                id="FilterTeal"
                                className="size-5 rounded border-gray-300"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {' '}
                                Teal{' '}
                              </span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mx-auto w-full bg-white pt-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-manrope text-center text-3xl font-bold leading-10 text-black">
              Pagedone Products
            </h2>
            <div className="flex flex-col justify-center gap-8 py-9 max-md:px-4 md:flex-row md:items-center">
              <button className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold leading-6 text-black">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.25 5.25H15.75M4.5 9H13.5M7.5 12.75H10.5"
                    stroke="black"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>{' '}
                Quick Sort{' '}
              </button>
              <div className="grid grid-cols-2 gap-5 max-sm:mx-auto max-sm:max-w-sm sm:grid-cols-4">
                <button className="flex h-11 w-full items-center justify-center whitespace-nowrap rounded-lg border border-indigo-600 bg-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-600 hover:text-white hover:shadow-indigo-200 sm:max-w-[126px]">
                  Search
                </button>
                <button className="flex h-11 w-full items-center justify-center whitespace-nowrap rounded-lg border border-gray-300 px-7 py-3 text-sm font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-600 hover:text-white hover:shadow-indigo-200 sm:max-w-[126px]">
                  Popular
                </button>
                <button className="flex h-11 w-full items-center justify-center whitespace-nowrap rounded-lg border border-gray-300 px-7 py-3 text-sm font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-600 hover:text-white hover:shadow-indigo-200 sm:max-w-[126px]">
                  Most New
                </button>
                <select
                  id="Offer"
                  className="relative block h-11 w-full appearance-none rounded-lg border border-gray-300 bg-white bg-[url('https://pagedone.io/asset/uploads/1695813759.png')] bg-right bg-no-repeat bg-origin-content px-4 py-2.5 text-sm font-semibold text-gray-900 focus:outline-none"
                >
                  <option selected>Price</option>
                  <option value="option 1">option 1</option>
                  <option value="option 2">option 2</option>
                  <option value="option 3">option 3</option>
                  <option value="option 4">option 4</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <div className="mt-8 grid grid-cols-12 md:gap-8">
            <div className="col-span-12 rounded-xl bg-white py-6 max-md:mx-auto max-md:w-full max-md:max-w-sm md:col-span-4 xl:col-span-3">
              <h6 className="px-6 text-lg font-semibold leading-8 text-black">
                Filter
              </h6>
              <svg
                className="my-6 w-full"
                width=""
                height="2"
                viewBox="0 0 280 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H280" stroke="#E5E7EB" />
              </svg>
              <h6 className="mb-5 px-6 text-base font-semibold leading-7 text-black">
                Category
              </h6>
              <div className="mb-7 w-full px-7">
                <div
                  className="accordion-group grid grid-cols-1"
                  data-accordion="default-accordion"
                >
                  <div className="accordion mb-5" id="category-heading-one">
                    <button
                      className="accordion-toggle accordion-active:text-indigo-600 group inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                      aria-controls="category-collapse-one"
                    >
                      <h5 className="text-sm font-medium"> Availability </h5>
                      <svg
                        className="accordion-active:text-indigo-600 accordion-active:rotate-180 text-gray-900 transition duration-500 group-hover:text-indigo-600"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="accordion mb-5" id="category-heading-two">
                    <button
                      className="accordion-toggle accordion-active:text-indigo-600 group inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                      aria-controls="category-collapse-tow"
                    >
                      <h5 className="text-sm font-medium"> Occasion </h5>
                      <svg
                        className="accordion-active:text-indigo-600 accordion-active:rotate-180 text-gray-900 transition duration-500 group-hover:text-indigo-600"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="accordion mb-5" id="category-heading-three">
                    <button
                      className="accordion-toggle accordion-active:text-indigo-600 group inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                      aria-controls="category-collapse-three"
                    >
                      <h5 className="text-sm font-medium"> Discount </h5>
                      <svg
                        className="accordion-active:text-indigo-600 accordion-active:rotate-180 text-gray-900 transition duration-500 group-hover:text-indigo-600"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="category-collapse-three"
                      className="accordion-content w-full overflow-hidden px-0 pr-4"
                      aria-labelledby="category-heading-three"
                    >
                      <div className="box mt-3 flex flex-col gap-2">
                        <div className="flex items-center">
                          <input
                            id="checkbox-default-1"
                            type="checkbox"
                            value=""
                            className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                          />
                          <label
                            htmlFor="checkbox-default-1"
                            className="cursor-pointer text-xs font-normal leading-4 text-gray-600"
                          >
                            20% or more
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="checkbox-default-2"
                            type="checkbox"
                            value=""
                            className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                          />
                          <label
                            htmlFor="checkbox-default-2"
                            className="cursor-pointer text-xs font-normal leading-4 text-gray-600"
                          >
                            30% or more
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="checkbox-default-3"
                            type="checkbox"
                            value=""
                            className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                          />
                          <label
                            htmlFor="checkbox-default-3"
                            className="cursor-pointer text-xs font-normal leading-4 text-gray-600"
                          >
                            50% or more
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <svg
                className="my-6 w-full"
                width=""
                height="2"
                viewBox="0 0 280 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H280" stroke="#E5E7EB" />
              </svg>
              <div className="box px-6">
                <h6 className="mb-6 whitespace-nowrap text-base font-semibold leading-7 text-black">
                  Size
                </h6>
                <div className="flex items-center justify-center gap-2 px-2.5">
                  <label
                    htmlFor="size"
                    className="w-full whitespace-nowrap text-sm font-medium leading-6 text-gray-800"
                  >
                    Select Size
                  </label>
                  <div className="relative w-full">
                    <select
                      id="FROM"
                      className="relative block h-9 w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 text-xs font-medium text-gray-900 focus:outline-none"
                    >
                      <option selected>Max</option>
                      <option value="option 1">option 1</option>
                      <option value="option 2">option 2</option>
                      <option value="option 3">option 3</option>
                      <option value="option 4">option 4</option>
                    </select>
                    <svg
                      className="absolute right-4 top-1/2 z-50 -translate-y-1/2"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                        stroke="#111827"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <svg
                className="my-6 w-full"
                width=""
                height="2"
                viewBox="0 0 280 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H280" stroke="#E5E7EB" />
              </svg>
              <div className="box px-6">
                <h6 className="mb-6 text-base font-semibold leading-7 text-black">
                  Prize
                </h6>
                <div className="mb-5 flex items-center gap-1">
                  <div className="relative w-full">
                    <select
                      id="FROM"
                      className="relative block h-9 w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-xs font-medium text-gray-900 focus:outline-none"
                    >
                      <option selected>Min</option>
                      <option value="option 1">option 1</option>
                      <option value="option 2">option 2</option>
                      <option value="option 3">option 3</option>
                      <option value="option 4">option 4</option>
                    </select>
                    <svg
                      className="absolute right-4 top-1/2 z-50 -translate-y-1/2"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                        stroke="#111827"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="px-1 text-sm font-normal leading-6 text-gray-600">
                    to
                  </p>
                  <div className="relative w-full">
                    <select
                      id="FROM"
                      className="relative block h-9 w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-xs font-medium text-gray-900 focus:outline-none"
                    >
                      <option selected>Max</option>
                      <option value="option 1">option 1</option>
                      <option value="option 2">option 2</option>
                      <option value="option 3">option 3</option>
                      <option value="option 4">option 4</option>
                    </select>
                    <svg
                      className="absolute right-4 top-1/2 z-50 -translate-y-1/2"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                        stroke="#111827"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <svg
                className="my-6 w-full"
                width=""
                height="2"
                viewBox="0 0 280 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H280" stroke="#E5E7EB" />
              </svg>
              <h6 className="mb-6 px-6 text-base font-semibold leading-7 text-black">
                Offer
              </h6>
              <div className="mb-7 w-full px-7">
                <div
                  className="accordion-group grid grid-cols-1"
                  data-accordion="always-open-accordion"
                >
                  <div className="accordion mb-5" id="category-heading-four">
                    <button
                      className="accordion-toggle accordion-active:text-indigo-600 group inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                      aria-controls="category-collapse-four"
                    >
                      <h5 className="text-sm font-medium"> Regular Offer </h5>
                      <svg
                        className="accordion-active:text-indigo-600 accordion-active:rotate-180 text-gray-900 transition duration-500 group-hover:text-indigo-600"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="accordion mb-5" id="category-heading-three">
                    <button
                      className="accordion-toggle accordion-active:text-indigo-600 group inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                      aria-controls="category-collapse-three"
                    >
                      <h5 className="text-sm font-medium"> Special Offer </h5>
                      <svg
                        className="accordion-active:text-indigo-600 accordion-active:rotate-180 text-gray-900 transition duration-500 group-hover:text-indigo-600"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="category-collapse-three"
                      className="accordion-content h-auto max-h-max w-full overflow-hidden px-0 pr-4"
                      aria-labelledby="category-heading-three"
                    >
                      <div className="box mt-3 flex flex-col gap-2">
                        <div className="flex items-center">
                          <input
                            id="checkbox-default-4"
                            type="checkbox"
                            value=""
                            className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                          />
                          <label
                            htmlFor="checkbox-default-4"
                            className="cursor-pointer text-xs font-normal leading-4 text-gray-600"
                          >
                            20% or more
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="checkbox-default-4"
                            type="checkbox"
                            value=""
                            className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                          />
                          <label
                            htmlFor="checkbox-default-4"
                            className="cursor-pointer text-xs font-normal leading-4 text-gray-600"
                          >
                            30% or more
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="checkbox-default-5"
                            type="checkbox"
                            value=""
                            className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                          />
                          <label
                            htmlFor="checkbox-default-5"
                            className="cursor-pointer text-xs font-normal leading-4 text-gray-600"
                          >
                            50% or more
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 rounded-xl bg-white md:col-span-8 lg:max-h-screen xl:col-span-9">
              <div className="mx-auto max-w-[1400px] bg-white p-4 font-[sans-serif]">
                <h2 className="mb-6 text-xl font-extrabold text-gray-800 sm:mb-8 sm:text-3xl">
                  Premium Threads
                </h2>

                <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
                  {products.map((product) => {
                    return <ProductCard key={product.id} product={product} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
