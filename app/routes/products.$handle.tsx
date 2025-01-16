import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Product') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function ProductPage() {
  return (
    <div>
      <h1>Product</h1>
    </div>
  );
}
