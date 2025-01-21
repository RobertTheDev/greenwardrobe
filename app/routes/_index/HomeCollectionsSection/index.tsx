import { Link } from '@remix-run/react';
import collections from '~/data/collections';

export default function HomeCollectionsSection() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
        <div className="mb-14 flex w-full flex-col items-center justify-between max-lg:gap-6 lg:flex-row">
          <h1 className="font-manrope text-4xl font-medium text-black max-lg:text-center sm:text-5xl sm:leading-snug">
            Browse Our Collections
          </h1>
          <div className="flex items-center justify-end gap-5 lg:justify-end">
            <Link
              to="/shop"
              className="shadow-xs flex max-h-max cursor-pointer items-center gap-2 rounded-full bg-gray-900 py-3.5 pl-8 pr-6 text-center text-lg font-semibold text-white transition-all duration-500 hover:bg-gray-700"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="mx-auto grid max-w-md grid-cols-1 gap-8 md:max-w-3xl md:grid-cols-2 lg:max-w-full lg:grid-cols-4">
          {collections.map((collection) => {
            return (
              <div
                key={collection.id}
                className="grid grid-cols-1 gap-8 md:order-last md:col-span-2 md:grid-cols-2 lg:order-none lg:col-span-1 lg:grid-cols-1"
              >
                <Link
                  to={`/collections/${collection.slug}`}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <img
                    src={collection.image}
                    alt="men with t-shirt"
                    className="relative z-0 h-full w-full rounded-2xl object-cover transition-all duration-1000 group-hover:rotate-3 group-hover:scale-110"
                  />
                  <div className="absolute left-0 top-0 z-10 flex h-full w-full items-end p-8">
                    <div className="block">
                      <h4 className="font-manrope text-4xl font-medium leading-snug text-white">
                        {collection.name} <br />
                        Collection
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
