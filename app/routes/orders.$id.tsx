import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Order' },
    { name: 'description', content: 'Welcome to Home!' },
  ];
};

export default function OrderPage() {
  return (
    <div>
      <h1>Order</h1>
    </div>
  );
}
