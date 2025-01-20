import IProduct from '~/interfaces/Product';

function ProductColours({ product }: { product: IProduct }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-800 sm:text-xl">Colours</h3>
      <div className="mt-4 flex flex-wrap gap-4">
        {product.colours.map((colour) => (
          <button
            key={colour}
            type="button"
            className="flex h-9 w-10 shrink-0 items-center justify-center border border-gray-300 text-sm hover:border-purple-600"
          >
            {colour}
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductSizes({ product }: { product: IProduct }) {
  return (
    <div>
      <h3 className="mt-4 text-lg font-bold text-gray-800 sm:text-xl">Sizes</h3>
      <div className="mt-4 flex flex-wrap gap-4">
        {product.sizes.map((size) => (
          <button
            key={size}
            type="button"
            className="flex h-9 w-10 shrink-0 items-center justify-center border border-gray-300 text-sm hover:border-purple-600"
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ProductOptions({ product }: { product: IProduct }) {
  return (
    <div>
      <ProductColours product={product} />
      <ProductSizes product={product} />
      <div className="mt-6 flex flex-wrap gap-4">
        <button
          type="button"
          className="w-[45%] border border-purple-600 bg-purple-600 px-4 py-3 text-sm font-semibold text-white hover:bg-purple-700"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
