import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';
import AccountLinksMenu from './AccountLinksMenu';

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
    <main>
      <h1>Account</h1>
      <AccountLinksMenu />
    </main>
  );
}
