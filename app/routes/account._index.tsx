import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Account') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function AccountPage() {
  return (
    <div>
      <h1>Account</h1>
    </div>
  );
}
