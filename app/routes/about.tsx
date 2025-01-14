import type { MetaFunction } from '@remix-run/node';

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
    </div>
  );
}
