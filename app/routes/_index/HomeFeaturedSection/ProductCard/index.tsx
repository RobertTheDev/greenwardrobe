import { Link } from '@remix-run/react';
import { LuShoppingBasket } from 'react-icons/lu';
import IProduct from '~/interfaces/Product';

export default function ProductCard({ product }: { product: IProduct }) {
  return (
    <Link to={`/products/${product.slug}`}>
      <div className="box group mx-auto w-full max-w-[280px] sm:mr-0">
        <div className="img-box flex h-auto w-full flex-col items-center justify-end overflow-hidden rounded-lg">
          <img
            src={product.images[0].src}
            alt=""
            className="h-full w-full rounded-2xl object-cover transition-all duration-700 group-hover:scale-[1.05]"
          />
        </div>
        <div className="mt-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="pro-name">
              <h6 className="mb-2 text-base font-semibold leading-7 text-black">
                {product.title}
              </h6>
            </div>
            <button className="group flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-transparent p-3 shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-400 hover:bg-gray-100 hover:shadow-gray-200">
              <LuShoppingBasket size={24} />
            </button>
          </div>
          <div className="flex gap-1">
            <strong className="text-base font-semibold leading-7 text-indigo-600">
              ${product.price.current}{' '}
            </strong>
            <p className="flex items-center text-xs font-normal leading-5 text-indigo-200">
              <del className="text-indigo-200"> ${product.price.previous}</del>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
