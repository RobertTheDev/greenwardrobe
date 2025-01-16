import type { MetaFunction } from '@remix-run/node';
import { useParams } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Collection' },
    { name: 'description', content: 'Welcome to Home!' },
  ];
};

export default function CollectionPage() {
  const { slug } = useParams();

  return (
    <div>
      <h1>Collection {slug}</h1>
    </div>
  );
}
