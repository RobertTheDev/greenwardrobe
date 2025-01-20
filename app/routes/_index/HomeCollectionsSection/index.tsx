import { Link } from '@remix-run/react';
import collections from '~/data/collections';

export default function HomeCollectionsSection() {
  return (
    <section className="relative py-14 lg:pb-14 lg:pt-36">
      <div className="mx-auto mb-14 w-full max-w-7xl px-4 lg:px-8">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="mx-auto grid max-w-md grid-cols-1 gap-8 md:max-w-3xl md:grid-cols-2 lg:max-w-full lg:grid-cols-3">
          <Link
            to={`/collections/${collections[0].slug}`}
            className="group relative overflow-hidden rounded-2xl"
          >
            <img
              src={collections[0].image}
              alt="men with t-shirt"
              className="relative z-0 h-full w-full rounded-2xl object-cover transition-all duration-1000 group-hover:rotate-3 group-hover:scale-110"
            />
            <div className="absolute left-0 top-0 z-10 flex h-full w-full items-end p-8">
              <div className="block">
                <h4 className="font-manrope text-4xl font-medium leading-snug text-white">
                  {collections[0].name} <br />
                  Collection
                </h4>
              </div>
            </div>
          </Link>
          <div className="grid grid-cols-1 gap-8 md:order-last md:col-span-2 md:grid-cols-2 lg:order-none lg:col-span-1 lg:grid-cols-1">
            <Link
              to={`/collections/${collections[2].slug}`}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={collections[2].image}
                alt="men with t-shirt"
                className="relative z-0 h-full w-full rounded-2xl object-cover transition-all duration-1000 group-hover:rotate-3 group-hover:scale-110"
              />
              <div className="absolute left-0 top-0 z-10 flex h-full w-full items-end p-8">
                <div className="block">
                  <h4 className="font-manrope text-4xl font-medium leading-snug text-white">
                    {collections[2].name} <br />
                    Collection
                  </h4>
                </div>
              </div>
            </Link>
            <Link
              to={`/collections/${collections[3].slug}`}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={collections[3].image}
                alt="men with t-shirt"
                className="relative z-0 h-full w-full rounded-2xl object-cover transition-all duration-1000 group-hover:rotate-3 group-hover:scale-110"
              />
              <div className="absolute left-0 top-0 z-10 flex h-full w-full items-end p-8">
                <div className="block">
                  <h4 className="font-manrope text-4xl font-medium leading-snug text-white">
                    {collections[3].name} <br />
                    Collection
                  </h4>
                </div>
              </div>
            </Link>
          </div>
          <Link
            to={`/collections/${collections[1].slug}`}
            className="group relative overflow-hidden rounded-2xl"
          >
            <img
              src={collections[1].image}
              alt="men with t-shirt"
              className="relative z-0 h-full w-full rounded-2xl object-cover transition-all duration-1000 group-hover:rotate-3 group-hover:scale-110"
            />
            <div className="absolute left-0 top-0 z-10 flex h-full w-full items-end p-8">
              <div className="block">
                <h4 className="font-manrope text-4xl font-medium leading-snug text-white">
                  {collections[1].name} <br />
                  Collection
                </h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
