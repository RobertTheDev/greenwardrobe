import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Order') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function AccountOrderPage() {
  return (
    <main>
      <h1>Account Order</h1>
    </main>
  );
}
