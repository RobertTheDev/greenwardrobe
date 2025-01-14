import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Not Found' },
    { name: 'description', content: 'Welcome to Home!' },
  ];
};

export default function NotFoundPage() {
  return (
    <div>
      <h1>NotFound</h1>
    </div>
  );
}
