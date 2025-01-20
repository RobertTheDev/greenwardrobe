export default function OrderFooter() {
  return (
    <div className="flex w-full flex-col items-center justify-between border-t border-gray-200 px-6 lg:flex-row">
      <div className="flex flex-col items-center border-gray-200 max-lg:border-b sm:flex-row">
        <button className="group flex items-center justify-center gap-2 whitespace-nowrap border-gray-200 bg-white py-6 text-lg font-semibold text-black transition-all duration-500 hover:text-indigo-600 sm:border-r sm:pr-6">
          <svg
            className="stroke-black transition-all duration-500 group-hover:stroke-indigo-600"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5"
              stroke=""
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          Cancel Order
        </button>
        <p className="py-3 pl-6 text-lg font-medium text-gray-900 max-lg:text-center">
          Paid using Credit Card{' '}
          <span className="text-gray-500">ending with 8822</span>
        </p>
      </div>
      <p className="py-6 text-lg font-semibold text-black">
        Total Price: <span className="text-indigo-600"> $200.00</span>
      </p>
    </div>
  );
}
