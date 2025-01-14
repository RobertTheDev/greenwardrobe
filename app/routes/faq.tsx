import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'FAQ' },
    { name: 'description', content: 'Welcome to Home!' },
  ];
};

export default function FaqPage() {
  return (
    <div>
      <h1>Faq</h1>
    </div>
  );
}
