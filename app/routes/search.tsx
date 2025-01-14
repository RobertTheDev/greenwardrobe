import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Search' },
    { name: 'description', content: 'Welcome to Home!' },
  ];
};

export default function SearchPage() {
  return (
    <div>
      <h1>Search</h1>
    </div>
  );
}
