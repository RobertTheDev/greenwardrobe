export default function OrderInfo() {
  return (
    <div className="flex flex-col justify-between border-b border-gray-200 px-6 pb-6 lg:flex-row lg:items-center">
      <div className="data">
        <p className="text-base font-semibold leading-7 text-black">
          Order Id:{' '}
          <span className="font-medium text-indigo-600">#10234987</span>
        </p>
        <p className="mt-4 text-base font-semibold leading-7 text-black">
          Order Payment :{' '}
          <span className="font-medium text-gray-400">18th March 2021</span>
        </p>
      </div>
      <button className="rounded-full bg-indigo-600 px-7 py-3 text-sm font-semibold leading-7 text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 max-lg:mt-5">
        Track Your Order
      </button>
    </div>
  );
}
