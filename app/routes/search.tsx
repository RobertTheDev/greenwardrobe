import type { MetaFunction } from '@remix-run/node';
import { useSearchParams } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Search' },
    { name: 'description', content: 'Welcome to Home!' },
  ];
};

export default function SearchPage() {
  const [searchParams] = useSearchParams();

  return (
    <div>
      <h1>Search {searchParams.get('q')}</h1>
    </div>
  );
}
