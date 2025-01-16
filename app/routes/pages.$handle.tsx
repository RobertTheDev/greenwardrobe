import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Page') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function ShopPage() {
  return (
    <div>
      <h1>Shop</h1>
    </div>
  );
}
