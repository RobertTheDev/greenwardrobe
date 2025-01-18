import { MetaFunction } from '@remix-run/react';
import ProductCard from '~/components/ProductCard';
import products from '~/data/products';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Collection') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function CollectionPage() {
  return (
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
  );
}
