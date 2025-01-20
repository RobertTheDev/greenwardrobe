import { MetaFunction } from '@remix-run/react';
import collections from '~/data/collections';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';
import CollectionCard from './CollectionCard';

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
    <main className="mx-auto mb-14 w-full max-w-7xl px-4 lg:px-8">
      <div className="mb-14 flex w-full flex-col items-center justify-between max-lg:gap-6 lg:flex-row">
        <h1 className="font-manrope text-4xl font-medium text-black max-lg:text-center sm:text-5xl sm:leading-snug">
          Browse Our Collections
        </h1>
      </div>
      <div className="mx-auto grid max-w-md grid-cols-1 gap-8 md:max-w-3xl md:grid-cols-2 lg:max-w-full lg:grid-cols-3">
        {collections.map((collection) => {
          return (
            <CollectionCard key={collection.slug} collection={collection} />
          );
        })}
      </div>
    </main>
  );
}
