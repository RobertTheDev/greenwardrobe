import { Link } from '@remix-run/react';
import ICollecction from '~/interfaces/Collection';

export default function CollectionCard({
  collection,
}: {
  collection: ICollecction;
}) {
  return (
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
  );
}
