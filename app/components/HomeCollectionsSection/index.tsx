import collections from '~/data/collections';
import CollectionCard from '../CollectionCard';

export default function HomeCollectionsSection() {
  return (
    <div className="mx-auto max-w-xl py-4 font-sans md:max-w-4xl lg:max-w-6xl">
      <h2 className="mb-10 text-center text-2xl font-bold text-gray-800 sm:text-3xl">
        Top Collections
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {collections.map((collection) => {
          return <CollectionCard key={collection.id} collection={collection} />;
        })}
      </div>
    </div>
  );
}
