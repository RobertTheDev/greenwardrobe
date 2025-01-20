import { Link } from '@remix-run/react';
import IProduct from '~/interfaces/Product';

export default function ProductCard({ product }: { product: IProduct }) {
  return (
    <Link to={`/products/${product.slug}`}>
      <div className="box group mx-auto w-full max-w-[280px] sm:mr-0">
        <div className="img-box flex h-auto w-full flex-col items-center justify-end overflow-hidden rounded-3xl">
          <img
            src={product.image}
            alt=""
            className="h-full w-full rounded-2xl object-cover transition-all duration-700 group-hover:scale-[1.05]"
          />
        </div>
        <div className="mt-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="pro-name">
              <h6 className="mb-2 text-base font-semibold leading-7 text-black">
                {product.name}
              </h6>
              <p className="text-xs font-normal leading-5 text-gray-500">
                {product.description}
              </p>
            </div>
            <button className="group flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-transparent p-3 shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-400 hover:bg-gray-100 hover:shadow-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.1211 5.12129L13.414 4.41418C12.7474 3.74752 12.414 3.41418 11.9998 3.41418C11.5856 3.41418 11.2523 3.74752 10.5856 4.41418L9.87849 5.12129M8.02802 21H15.9716C18.2908 21 19.4503 21 20.0509 20.2451C20.6514 19.4902 20.3907 18.3603 19.8692 16.1005L18.7153 11.1005C18.3721 9.61328 18.2005 8.86966 17.6539 8.43481C17.1073 7.99997 16.3441 7.99997 14.8178 7.99997H9.18186C7.65552 7.99997 6.89235 7.99997 6.34573 8.43481C5.79912 8.86966 5.62751 9.61328 5.2843 11.1005L4.13045 16.1005C3.60897 18.3603 3.34823 19.4902 3.94876 20.2451C4.54929 21 5.70886 21 8.02802 21Z"
                  stroke="#111827"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex gap-1">
            <strong className="text-base font-semibold leading-7 text-indigo-600">
              ${product.price}{' '}
            </strong>
            <p className="flex items-center text-xs font-normal leading-5 text-indigo-200">
              <del className="text-indigo-200"> ${product.discount}</del>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
