import { Link } from '@remix-run/react';
import ICollection from '~/interfaces/Collection';

export default function CollectionCard({
  collection,
}: {
  collection: ICollection;
}) {
  return (
    <Link to={`/collections/${collection.slug}`}>
      <div className="relative max-w-xs rounded-2xl border border-solid border-gray-200 transition-all duration-500">
        <div className="block overflow-hidden">
          <img src={collection.image} alt="" />
        </div>
        <div className="p-4">
          <h4 className="mb-2 text-base font-semibold capitalize text-gray-900 transition-all duration-500">
            {collection.name}
          </h4>
          <Link
            to={`/collections/${collection.slug}`}
            className="rounded-full bg-indigo-600 px-5 py-2 text-xs font-semibold text-white shadow-sm"
          >
            Browse
          </Link>
        </div>
      </div>
    </Link>
  );
}
