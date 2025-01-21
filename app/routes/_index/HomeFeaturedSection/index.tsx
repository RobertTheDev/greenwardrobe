import { Link } from '@remix-run/react';
import collections from '~/data/collections';
import ProductCard from './ProductCard';

export default function HomeFeaturedSection({
  collectionSlug,
}: {
  collectionSlug: string;
}) {
  const collection = collections.find(
    (collection) => collection.slug === collectionSlug,
  );

  if (!collection) {
    return null;
  }

  return (
    <section className="mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex w-full flex-col items-center justify-between max-lg:gap-6 lg:flex-row">
          <h1 className="font-manrope text-4xl font-medium text-black max-lg:text-center sm:text-5xl sm:leading-snug">
            {collection.name} Collection
          </h1>
          <div className="flex items-center justify-end gap-5 lg:justify-end">
            <Link
              to={`/collections/${collection.slug}`}
              className="shadow-xs flex max-h-max cursor-pointer items-center gap-2 rounded-full bg-gray-900 py-3.5 pl-8 pr-6 text-center text-lg font-semibold text-white transition-all duration-500 hover:bg-gray-700"
            >
              Find More
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {collection.products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      </div>
    </section>
  );
}
