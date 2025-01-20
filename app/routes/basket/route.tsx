import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';
import BasketList from './BasketList';
import OrderSummary from './OrderSummary';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Basket') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function BasketPage() {
  return (
    <main className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <BasketList />
          <OrderSummary />
        </div>
      </div>
    </main>
  );
}
