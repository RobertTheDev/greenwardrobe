import IProduct from '~/interfaces/Product';

export default function ProductTitleAndPrice({
  product,
}: {
  product: IProduct;
}) {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-800 sm:text-xl">
        {product.title}
      </h3>
      <p className="mt-4 text-sm text-gray-500">{product.description}</p>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <h4 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          ${product.price.current}
        </h4>
        <p className="text-lg text-gray-500">
          <s>${product.price.previous}</s>{' '}
          {product.price.taxIncluded && (
            <span className="ml-1.5 text-sm">Tax included</span>
          )}
        </p>
      </div>
    </div>
  );
}
