import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';
import FilterHeaderMenu from './FilterHeaderMenu';
import FilterSidebarMenu from './FilterSidebarMenu';
import ProductsList from './ProductsList';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Search') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function SearchPage() {
  return (
    <main className="bg-gray-100 pb-24">
      <div className="w-full">
        <FilterHeaderMenu />
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <div className="mt-8 grid grid-cols-12 md:gap-8">
            <FilterSidebarMenu />
            <ProductsList />
          </div>
        </div>
      </div>
    </main>
  );
}
