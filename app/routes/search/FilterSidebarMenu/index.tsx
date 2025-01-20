// type color
/// options - sort, search, popular, most new, price, featured, best selling, date, alphabetically

export default function FilterSidebarMenu() {
  return (
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
          <p className="px-1 text-sm font-normal leading-6 text-gray-600">to</p>
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
  );
}
