import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Orders' },
    { name: 'description', content: 'Welcome to Home!' },
  ];
};

export default function OrdersPage() {
  return (
    <div>
      <h1>Orders</h1>
    </div>
  );
}
