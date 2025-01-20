import IProductOrder from '~/interfaces/ProductOrder';

export default function ProductOrderCard({
  product,
}: {
  product: IProductOrder;
}) {
  return (
    <div className="flex w-full flex-col items-center gap-6 py-6 lg:flex-row">
      <div className="img-box max-lg:w-full">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-square w-full rounded-xl object-cover lg:max-w-[140px]"
        />
      </div>
      <div className="flex w-full flex-row items-center">
        <div className="grid w-full grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center">
            <div>
              <h2 className="mb-3 text-xl font-semibold leading-8 text-black">
                {product.name}
              </h2>
              <p className="mb-3 text-lg font-normal leading-8 text-gray-500">
                {product.description}
              </p>
              <div className="flex items-center">
                <p className="mr-4 border-r border-gray-200 pr-4 text-base font-medium leading-7 text-black">
                  Size: <span className="text-gray-500">{product.size}</span>
                </p>
                <p className="text-base font-medium leading-7 text-black">
                  Qty: <span className="text-gray-500">{product.quantity}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5">
            <div className="col-span-5 flex items-center max-lg:mt-3 lg:col-span-1">
              <div className="flex gap-3 lg:block">
                <p className="text-sm font-medium leading-7 text-black">
                  price
                </p>
                <p className="text-sm font-medium leading-7 text-indigo-600 lg:mt-4">
                  ${product.price}
                </p>
              </div>
            </div>
            <div className="col-span-5 flex items-center max-lg:mt-3 lg:col-span-2">
              <div className="flex gap-3 lg:block">
                <p className="text-sm font-medium leading-7 text-black">
                  Status
                </p>
                <p
                  className={`whitespace-nowrap rounded-full px-3 py-0.5 text-sm font-medium leading-6 lg:mt-3 ${product.statusClass}`}
                >
                  {product.status}
                </p>
              </div>
            </div>
            <div className="col-span-5 flex items-center max-lg:mt-3 lg:col-span-2">
              <div className="flex gap-3 lg:block">
                <p className="whitespace-nowrap text-sm font-medium leading-6 text-black">
                  Expected Delivery Time
                </p>
                <p className="whitespace-nowrap text-base font-medium leading-7 text-emerald-500 lg:mt-3">
                  {product.deliveryTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
