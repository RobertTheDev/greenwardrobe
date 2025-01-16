import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Policies') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function ShopPoliciesPage() {
  return (
    <div>
      <h1>ShopPolicies</h1>
    </div>
  );
}
