import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Manage Addresses') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function AccountAddressesPage() {
  return (
    <div>
      <p>Account Addresses</p>
    </div>
  );
}
