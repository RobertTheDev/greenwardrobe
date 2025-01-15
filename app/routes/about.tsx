import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'About' },
    { name: 'description', content: 'Welcome to Home!' },
  ];
};

export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Home</Link>
    </div>
  );
}
