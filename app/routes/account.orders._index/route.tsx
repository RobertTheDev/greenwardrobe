import { Link, MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('My Orders') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function AccountOrdersPage() {
  return (
    <main>
      <h1>Account Orders</h1>
      <Link to="/account/orders/1">Order 1</Link>
    </main>
  );
}
