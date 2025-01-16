import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Policy') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function ShopPolicyPage() {
  return (
    <div>
      <h1>ShopPolicy</h1>
    </div>
  );
}
