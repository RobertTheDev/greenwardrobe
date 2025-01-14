import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Basket' },
    { name: 'description', content: 'Welcome to Home!' },
  ];
};

export default function BasketPage() {
  return (
    <div>
      <h1>Basket</h1>
    </div>
  );
}
