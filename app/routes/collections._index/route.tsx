import { Link, MetaFunction } from '@remix-run/react';
import collections from '~/data/collections';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Collections') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function CollectionsPage() {
  return (
    <section className="relative">
      <div className="mx-auto mb-14 w-full max-w-7xl px-4 lg:px-8">
        <div className="mb-14 flex w-full flex-col items-center justify-between max-lg:gap-6 lg:flex-row">
          <h1 className="font-manrope text-4xl font-medium text-black max-lg:text-center sm:text-5xl sm:leading-snug">
            Browse Our Collections
          </h1>
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
