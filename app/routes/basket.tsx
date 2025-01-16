import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

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
    <div>
      <h1>Basket</h1>
    </div>
  );
}
