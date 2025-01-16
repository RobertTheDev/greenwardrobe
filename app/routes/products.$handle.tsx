import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Product' },
    { name: 'description', content: 'Welcome to Home!' },
  ];
};

export default function ProductPage() {
  return (
    <div>
      <h1>Product</h1>
    </div>
  );
}
