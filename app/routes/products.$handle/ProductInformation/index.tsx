import IProduct from '~/interfaces/Product';

export default function ProductInformation({ product }: { product: IProduct }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-800 sm:text-xl">
        Product Information
      </h3>
      <div className="mt-2">
        {product.productInformation.map((info) => (
          <div key={info.title} className="transition-all hover:bg-gray-100">
            <button
              type="button"
              className="flex w-full items-center px-4 py-2.5 text-left text-sm font-semibold text-gray-800"
            >
              <span className="mr-4">{info.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-auto h-3 w-3 shrink-0 -rotate-90 fill-current"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="hidden px-4 pb-4">
              <p className="text-sm leading-relaxed text-gray-500">
                {info.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
