import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Collections' },
    { name: 'description', content: 'Welcome to Home!' },
  ];
};

export default function CollectionsPage() {
  return (
    <div>
      <h1>Collections</h1>
    </div>
  );
}
