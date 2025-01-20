import products from '~/data/products';
import ProductCard from '../ProductCard';

export default function ProductsList() {
  return (
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
  );
}
