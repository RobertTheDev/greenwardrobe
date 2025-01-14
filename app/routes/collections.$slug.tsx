import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Collection' },
    { name: 'description', content: 'Welcome to Home!' },
  ];
};

export default function CollectionPage() {
  return (
    <div>
      <h1>Collection</h1>
    </div>
  );
}
